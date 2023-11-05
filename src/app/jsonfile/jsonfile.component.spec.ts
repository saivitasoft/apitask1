import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonfileComponent } from './jsonfile.component';

describe('JsonfileComponent', () => {
  let component: JsonfileComponent;
  let fixture: ComponentFixture<JsonfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonfileComponent]
    });
    fixture = TestBed.createComponent(JsonfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
