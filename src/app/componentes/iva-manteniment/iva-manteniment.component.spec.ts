import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvaMantenimentComponent } from './iva-manteniment.component';

describe('IvaMantenimentComponent', () => {
  let component: IvaMantenimentComponent;
  let fixture: ComponentFixture<IvaMantenimentComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IvaMantenimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
