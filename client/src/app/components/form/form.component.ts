import {Component} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'main-form',
    templateUrl: './form.component.html',
    styleUrls: ['form.component.scss']
})

export class FormComponent {

    mainForm: FormGroup;
    constructor(private fb: FormBuilder ){
        this.createForm()
    }

    createForm() {
        this.mainForm = this.fb.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required]
        })
    }
}