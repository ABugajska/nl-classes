import { TestBed, async } from '@angular/core/testing';
import { AbsenceFormComponent } from '../../components/form/form.component';
import {DashboardComponent} from './dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';

describe('FormAbsenceComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        AbsenceFormComponent
      ],
      imports: [
        ReactiveFormsModule,
        TimepickerModule.forRoot(),
        BsDatepickerModule.forRoot()
      ]
    }).compileComponents();
  }));
  it('should create the dashboard', async(() => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const dashboard = fixture.debugElement.componentInstance;
    expect(dashboard).toBeTruthy();
  }));
});
