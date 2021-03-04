import { LightningElement, track} from 'lwc';

export default class SimpleCalc extends LightningElement {
    @track currentResult;
    @track previousResult=[];
    @track showPrevResults = false;

    firstNumber;
    secondNumber;

    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        console.log('Number change event');
        console.log(inputBoxName);
        if (inputBoxName === 'First Number'){
            this.firstNumber = event.target.value;
        }else{
            this.secondNumber = event.target.value;
        }
        console.log(this.firstNumber);
        console.log(this.secondNumber);
    }

    operationHandler(event){
        console.log('event handler called');
        debugger;
        console.log(event.target.label);
        console.log(event);
        if (event.target.label ==='Add'){
            this.currentResult = `Result of ${parseInt(this.firstNumber)} + ${parseInt(this.secondNumber)} is ${parseInt(this.firstNumber)+parseInt(this.secondNumber)}`;
            //this.currentResult = parseInt(this.firstNumber)+parseInt(this.secondNumber);
        }else if (event.target.label==='Substract'){
            this.currentResult = `Result of ${parseInt(this.firstNumber)} - ${parseInt(this.secondNumber)} is ${parseInt(this.firstNumber)-parseInt(this.secondNumber)}`;
            //this.currentResult = parseInt(this.firstNumber)-parseInt(this.secondNumber);
        }else if (event.target.label==='Multiply'){
            this.currentResult = `Result of ${parseInt(this.firstNumber)} * ${parseInt(this.secondNumber)} is ${parseInt(this.firstNumber)*parseInt(this.secondNumber)}`;
            //this.currentResult = parseInt(this.firstNumber)*parseInt(this.secondNumber);
        }else if (event.target.label==='Divide'){
            this.currentResult = `Result of ${parseInt(this.firstNumber)} / ${parseInt(this.secondNumber)} is ${parseInt(this.firstNumber)/parseInt(this.secondNumber)}`;
            //this.currentResult = parseInt(this.firstNumber)/parseInt(this.secondNumber);
        }
        this.previousResult.push(this.currentResult);
        console.log(this.currentResult)
    }

    showPreviousResultToggle(event){
        console.log('In the handler');
        this.showPrevResults=event.target.checked;
        console.log(this.showPrevResults);
    }


}