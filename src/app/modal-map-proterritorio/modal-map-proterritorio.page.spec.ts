import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMapProterritorioPage } from './modal-map-proterritorio.page';

describe('ModalMapProterritorioPage', () => {
  let component: ModalMapProterritorioPage;
  let fixture: ComponentFixture<ModalMapProterritorioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMapProterritorioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMapProterritorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
