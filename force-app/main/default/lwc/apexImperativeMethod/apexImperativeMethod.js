import { LightningElement } from 'lwc';
import getcontacts from "@salesforce/apex/ApexImperativeMethod.getcontacts";

export default class ApexImperativeMethod extends LightningElement {
   contacts;
   error;
   
   async handleLoad(){
    try{
        this.contacts = await getcontacts();
        this.error = undefined;
    }catch(error){
        this.contacts = undefined;
        this.error = error;
    }
   }
}