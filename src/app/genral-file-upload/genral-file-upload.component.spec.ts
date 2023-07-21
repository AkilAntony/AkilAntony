import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenralFileUploadComponent } from './genral-file-upload.component';

describe('GenralFileUploadComponent', () => {
  let component: GenralFileUploadComponent;
  let fixture: ComponentFixture<GenralFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenralFileUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenralFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
