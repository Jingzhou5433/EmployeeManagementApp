import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonComponent } from './add-person.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';

describe('AddPersonComponent', () => {
  let component: AddPersonComponent;
  let fixture: ComponentFixture<AddPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ AddPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
