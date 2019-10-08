import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPayoObispoPage } from './modal-payo-obispo.page';

describe('ModalPayoObispoPage', () => {
  let component: ModalPayoObispoPage;
  let fixture: ComponentFixture<ModalPayoObispoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPayoObispoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPayoObispoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
