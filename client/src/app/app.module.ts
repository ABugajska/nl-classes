import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AbsenceFormComponent} from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { TimepickerModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {appRoutes} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    AbsenceFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    NgxErrorsModule,
    FormsModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
