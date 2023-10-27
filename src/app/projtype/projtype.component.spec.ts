import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjtypeComponent } from './projtype.component';

describe('ProjtypeComponent', () => {
  let component: ProjtypeComponent;
  let fixture: ComponentFixture<ProjtypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjtypeComponent]
    });
    fixture = TestBed.createComponent(ProjtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
