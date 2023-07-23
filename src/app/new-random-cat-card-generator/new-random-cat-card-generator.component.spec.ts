import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRandomCatCardGeneratorComponent } from './new-random-cat-card-generator.component';

describe('NewRandomCatCardGeneratorComponent', () => {
  let component: NewRandomCatCardGeneratorComponent;
  let fixture: ComponentFixture<NewRandomCatCardGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRandomCatCardGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRandomCatCardGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
