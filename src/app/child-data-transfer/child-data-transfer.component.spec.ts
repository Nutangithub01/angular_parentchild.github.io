import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDataTransferComponent } from './child-data-transfer.component';

describe('ChildDataTransferComponent', () => {
  let component: ChildDataTransferComponent;
  let fixture: ComponentFixture<ChildDataTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildDataTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDataTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
