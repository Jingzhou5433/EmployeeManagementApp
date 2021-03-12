import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDemosComponent } from './my-demos.component';
import {FormsModule} from '@angular/forms';

describe('MyDemosComponent', () => {
  let component: MyDemosComponent;
  let fixture: ComponentFixture<MyDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ MyDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
