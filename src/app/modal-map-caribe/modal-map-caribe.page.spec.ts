import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMapCaribePage } from './modal-map-caribe.page';

describe('ModalMapCaribePage', () => {
  let component: ModalMapCaribePage;
  let fixture: ComponentFixture<ModalMapCaribePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMapCaribePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMapCaribePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
