import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentsExampleComponent } from './fragments-example.component';

describe('FragmentsExampleComponent', () => {
  let component: FragmentsExampleComponent;
  let fixture: ComponentFixture<FragmentsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FragmentsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FragmentsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
