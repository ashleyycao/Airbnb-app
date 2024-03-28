import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfferdetailPage } from './offerdetail.page';

describe('OfferdetailPage', () => {
  let component: OfferdetailPage;
  let fixture: ComponentFixture<OfferdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OfferdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
