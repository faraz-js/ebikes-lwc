import { LightningElement, track, wire } from 'lwc';
import farazacc from '@salesforce/apex/FarazAccountController.farazAccount';

export default class Faraztesting extends LightningElement {

    @track searchKey = '';
    name = '';
    @wire(farazacc, {searchKey: '$searchKey'})accounts;

    handleSearch(event){

        this.searchKey = this.template.querySelector('lightning-input').value;
        this.name = event.target.value;
        //this.template.querySelector('lightning-input').value;
    }
}