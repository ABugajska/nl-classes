import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'absence-form',
    templateUrl: './form.component.html',
    styleUrls: ['form.component.scss']
})

export class AbsenceFormComponent {

    @Output() submit = new EventEmitter;
    
    form: FormGroup;

    public ismeridian: boolean = false;
    public maxTime: Date = new Date();
    public minTime: Date = new Date();

    constructor(private fb: FormBuilder ){
        this.createForm();
        this.maxTime.setHours(21);
        this.minTime.setHours(6, 0, 0, 0);
    }

    createForm() {
        this.form = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required],
            date: [null, Validators.required],
            time: [this.getInitialTime(), Validators.required]
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

    private getInitialTime() {
        const date = new Date();
        date.setMinutes(0, 0, 0);
        return date;
    }

    ngOnInit() {
        
    }
}   