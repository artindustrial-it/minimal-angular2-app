import {Component} from "@angular/core";

@Component({
    selector: 'my-other-app',
    template: `<h1>Hello, I'm another Angular2 app!</h1> <div>my text is here: {{message}}</div> <input placeholder="Type hello world !" (keyup)="hello(input.value)" #input>`
})
export class App2Component {

    private message = "";

    hello(value) {
        this.message = value;
    }
}
