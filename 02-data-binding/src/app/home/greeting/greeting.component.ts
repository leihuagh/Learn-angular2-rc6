import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-greeting',
    templateUrl: './greeting.component.html'
})
export class GreetingComponent implements OnInit {
    title: string = 'Hello Apprentice';
    visible: boolean = false;
    progressive: boolean = false;
    constructor() {}
    ngOnInit(): void {}

    onGreeting(): void {
        this.visible = true;
    }

    sayGoodbye(): void {
        this.visible = false;
        this.progressive = true;
        this.title = 'Start the motion!!!';
    }
}
