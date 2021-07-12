const txtAdult=document.getElementById("noadult");
const txtChild=document.getElementById("nochild");

const listDuration=document.getElementById("durations");

const txtOutput = document.getElementById("output");
const txtOutput2 = document.getElementById("output1");


const btnAddOrder = document.getElementById("AddOrders");
const btnPlaceOrder = document.getElementById("PlaceOrders");
const btnDonate = document.getElementById("donate");

btnAddOrder.addEventListener("click", AddOrders);
btnDonate.addEventListener("click", displayMessage);

let pass = document.querySelectorAll("input[name='passType']");

for(let i=0; i<pass.length; i++){
    pass[i].addEventListener("change", AddOrders);
}

AddOrders();

function AddOrders(){

const dayadult=1000;
const daychild=500;
const stuadult=500;
const stuchild=250;
const foreadult=5000;
const forechild=2500;

const noadult=parseInt(txtAdult.value);
const nochild=parseInt(txtChild.value);


let totalprice1=dayadult*noadult;
let totalprice2=daychild*nochild;
let totalprice3=stuadult*noadult;
let totalprice4=stuchild*nochild;
let totalprice5=foreadult*noadult;
let totalprice6=forechild*nochild;

       if(this.value == "Day"){
         txtOutput.innerText=`Adults ${totalprice1.toFixed(2)} LKR | Children ${totalprice2.toFixed(2)} LKR`;
       }
       else if(this.value == "Student"){
         txtOutput.innerText=`Adults ${totalprice3.toFixed(2)} LKR | Children ${totalprice4.toFixed(2)} LKR`;
       }
       else{
         txtOutput.innerText=` Adults ${totalprice5.toFixed(2)} LKR | Children ${totalprice6.toFixed(2)} LKR`;
       }
   
}

function displayMessage(){

        txtOutput2.innerText=`Thank you for your Donations!`;

}