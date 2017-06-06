import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `<h1>Hello, I'm an Angular2 app!</h1><input placeholder="Type hello world !" (keyup)="hello(input.value)" #input>{{message}}`
})
export class AppComponent {

    private message = "";

    hello(value) {
        this.message = value;
    }
}
