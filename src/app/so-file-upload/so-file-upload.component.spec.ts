import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoFileUploadComponent } from './so-file-upload.component';

describe('SoFileUploadComponent', () => {
  let component: SoFileUploadComponent;
  let fixture: ComponentFixture<SoFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoFileUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
