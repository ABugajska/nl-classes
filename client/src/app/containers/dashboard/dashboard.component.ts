import {Component} from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
    onSave(v){
        console.log(v);
    }
}