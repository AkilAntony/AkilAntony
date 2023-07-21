import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRoleComponent } from './service-role.component';

describe('ServiceRoleComponent', () => {
  let component: ServiceRoleComponent;
  let fixture: ComponentFixture<ServiceRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
