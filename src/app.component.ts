import {Component} from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent
{
    public data:number[] = [65, 59, 80, 81, 56, 55, 40];

    constructor()
    {
    }

    ngAfterViewInit()
    {
    }
}
