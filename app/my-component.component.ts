import {Component} from '@angular/core';

export class Hero{
    id: number;
    name: string;
}
@Component({
	selector : 'my-component',
	template : 	`{{title}}<br>
    <span>ID: {{hero.id}}</span><br>

    <input type="text" [(ngModel)]="hero.name"/>
	`,
})

export class MyComponentComponent{
    title = 'My Application';
    hero: Hero = {
        id: 1,
        name: 'M Shafique'
    };
}