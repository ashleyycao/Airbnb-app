import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditofferPage } from './editoffer.page';

describe('EditofferPage', () => {
  let component: EditofferPage;
  let fixture: ComponentFixture<EditofferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditofferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
