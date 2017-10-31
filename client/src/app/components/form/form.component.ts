import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'absence-form',
    templateUrl: './form.component.html',
    styleUrls: ['form.component.scss']
})

export class AbsenceFormComponent {

    @Output() submit = new EventEmitter;
    
    form: FormGroup;

    constructor(private fb: FormBuilder ){
        this.createForm();
    }

    createForm() {
        this.form = this.fb.group({
            name: '',
            surname: '',
            phone: '',
            email: '',
            date: null,
            mytime: null
        })
    }

    onSubmit(){
        if (this.form.valid) {
            this.submit.emit(this.form.value);
        } else  {
            this.validateAllFormFields(this.form);
        }
    }

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
            control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
            this.validateAllFormFields(control);
        }
    });
  }

    ngOnInit() {
        
    }
}   