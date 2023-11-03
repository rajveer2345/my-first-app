import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertprojComponent } from './insertproj.component';

describe('InsertprojComponent', () => {
  let component: InsertprojComponent;
  let fixture: ComponentFixture<InsertprojComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertprojComponent]
    });
    fixture = TestBed.createComponent(InsertprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
