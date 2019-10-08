import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMapPayoObispoPage } from './modal-map-payo-obispo.page';

describe('ModalMapPayoObispoPage', () => {
  let component: ModalMapPayoObispoPage;
  let fixture: ComponentFixture<ModalMapPayoObispoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMapPayoObispoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMapPayoObispoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
