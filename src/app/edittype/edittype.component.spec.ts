import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittypeComponent } from './edittype.component';

describe('EdittypeComponent', () => {
  let component: EdittypeComponent;
  let fixture: ComponentFixture<EdittypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdittypeComponent]
    });
    fixture = TestBed.createComponent(EdittypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
