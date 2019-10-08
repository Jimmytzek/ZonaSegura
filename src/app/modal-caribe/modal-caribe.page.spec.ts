import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCaribePage } from './modal-caribe.page';

describe('ModalCaribePage', () => {
  let component: ModalCaribePage;
  let fixture: ComponentFixture<ModalCaribePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCaribePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCaribePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
