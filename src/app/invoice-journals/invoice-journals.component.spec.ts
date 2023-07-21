import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceJournalsComponent } from './invoice-journals.component';

describe('InvoiceJournalsComponent', () => {
  let component: InvoiceJournalsComponent;
  let fixture: ComponentFixture<InvoiceJournalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceJournalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceJournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
