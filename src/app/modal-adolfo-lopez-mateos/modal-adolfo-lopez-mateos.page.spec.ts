import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdolfoLopezMateosPage } from './modal-adolfo-lopez-mateos.page';

describe('ModalAdolfoLopezMateosPage', () => {
  let component: ModalAdolfoLopezMateosPage;
  let fixture: ComponentFixture<ModalAdolfoLopezMateosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAdolfoLopezMateosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdolfoLopezMateosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
