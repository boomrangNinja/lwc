import { LightningElement,track } from 'lwc';

export default class BmiCalculator extends LightningElement {

    @track healthData = {
        weight:0,
        height:0,
        bmi:0
    }
    changeHandler(event){
        if (event.target.label==="Weight"){
            this.healthData.weight = event.target.value;
        }else if(event.target.label==="Height"){
            this.healthData.height = event.target.value;
        }
    }

    calculate(){
        this.healthData.bmi = this.healthData.weight / this.healthData.height;
    }


}