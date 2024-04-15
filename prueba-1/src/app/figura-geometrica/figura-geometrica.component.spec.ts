import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FigurageometricaComponent } from './figura-geometrica.component';

describe('FiguraGeometricaComponent', () => {
  let component: FigurageometricaComponent;
  let fixture: ComponentFixture<FigurageometricaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FigurageometricaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FigurageometricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

