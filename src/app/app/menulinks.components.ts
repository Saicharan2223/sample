import { Component} from "@angular/core";
@Component({
    //selector is not mandatory
template:`
        <h1>Welcome to My Angular project</h1>
        
        `
})
export class HomeComponent{
    homeCount=900
    handleEvent(num:number){
        this.homeCount=num;
    }
}
@Component({
    template:`
    <h1 style="color:red">404. Oops!!!No resource Found.</h1>`
})
export class NotFoundComponent{}