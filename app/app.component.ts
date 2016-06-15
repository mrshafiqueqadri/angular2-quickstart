import { Component } from '@angular/core';
import {MyComponentComponent} from './my-component.component';
@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 Apps</h1>
    <my-component></my-component>
    `,
    directives : [MyComponentComponent]
})
export class AppComponent { }
