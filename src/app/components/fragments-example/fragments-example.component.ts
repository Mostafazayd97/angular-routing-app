import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-fragments-example',
  standalone: true,
  imports: [
    RouterLink,CommonModule,ReactiveFormsModule ],
  templateUrl: './fragments-example.component.html',
  styleUrl: './fragments-example.component.scss'
})
export class FragmentsExampleComponent {
  myForm!: FormGroup

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }


  ngOnInit(): void {
    // Subscribe to the fragment observable
    this.route.fragment.subscribe((fragment: string | null) => {
      console.log('Current fragment:', fragment);
      if (fragment) {
        // Scroll to the section corresponding to the fragment
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(65)]]
    });
  }


  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      this.scrollToFirstError();
    } else {
      // Submit form logic here
      console.log('Form submitted:', this.myForm.value);
    }
  }
  scrollToFirstError(): void {
    const firstInvalidControl: HTMLElement = document.querySelector(
      '.ng-invalid'
    ) as HTMLElement;

    if (firstInvalidControl) {
      firstInvalidControl.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
