import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionComponent } from './seccion.component';

describe('SeccionComponent', () => {
  let component: SeccionComponent;
  let fixture: ComponentFixture<SeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});