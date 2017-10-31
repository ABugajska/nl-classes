import { TestBed, async } from '@angular/core/testing';
import { AbsenceFormComponent } from './form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
describe('FormAbsenceComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AbsenceFormComponent
      ],
      imports: [
        ReactiveFormsModule,
        TimepickerModule.forRoot(),
        BsDatepickerModule.forRoot()
      ]
    }).compileComponents();
  }));
  it('should create the form', async(() => {
    const fixture = TestBed.createComponent(AbsenceFormComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
