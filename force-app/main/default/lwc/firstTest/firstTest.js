import { LightningElement } from 'lwc';

export default class FirstTest extends LightningElement {

     

fullName = 'Suman Ganguly';

title = 'Salesforce Trainer';

 

 

changeHandler(event){

this.fullName = event.target.value;

}

}