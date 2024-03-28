import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewofferPage } from './newoffer.page';

describe('NewofferPage', () => {
  let component: NewofferPage;
  let fixture: ComponentFixture<NewofferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewofferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
