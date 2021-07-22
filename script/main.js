const txtDAdult=document.getElementById("Dnoadult");
const txtDChild=document.getElementById("Dnochild");

const txtSAdult=document.getElementById("Snoadult");
const txtSChild=document.getElementById("Snochild");

const txtFAdult=document.getElementById("Fnoadult");
const txtFChild=document.getElementById("Fnochild");

const listDuration1=document.getElementById("Ddurations");
const listDuration2=document.getElementById("Sdurations");
const listDuration3=document.getElementById("Fdurations");

const txtOutput = document.getElementById("output");
const txtOutputt1 = document.getElementById("outputt1");
const txtOutputt2 = document.getElementById("outputt2");

const txt1Outputtt = document.getElementById("out1puttt");
const txt2Outputtt = document.getElementById("out2puttt");
const txt3Outputtt = document.getElementById("out3puttt");

const txtOutput1 = document.getElementById("output1");
const txtOutputtt1 = document.getElementById("outputtt1");
const txtOutputtt2 = document.getElementById("outputtt2");

const txtOutputttt = document.getElementById("outputttt");

const txtOutput2 = document.getElementById("output2");
const txtOutput3 = document.getElementById("output3");



const btnAddOrder = document.getElementById("AddOrders");
const btnPlaceOrder = document.getElementById("PlaceOrders");

const btnDonate = document.getElementById("donate");

const btnAddFav = document.getElementById("AddFav");
const btnOrderFav = document.getElementById("OrderFav");
const btnCheckLoyal = document.getElementById("CheckLoyalty");

/*currentorder*/
txtDAdult.addEventListener("click" , CurrentOrdersNumber1);
txtSAdult.addEventListener("click" , CurrentOrdersNumber1);
txtFAdult.addEventListener("click" , CurrentOrdersNumber1);
txtDChild.addEventListener("click" , CurrentOrdersNumber2);
txtSChild.addEventListener("click" , CurrentOrdersNumber2);
txtFChild.addEventListener("click" , CurrentOrdersNumber2);
if(listDuration1){
listDuration1.addEventListener("click" , CurrentOrdersDuration1);
}
if(listDuration2){
listDuration2.addEventListener("click" , CurrentOrdersDuration2);
}
if(listDuration3){
listDuration3.addEventListener("click" , CurrentOrdersDuration3);
}

btnAddOrder.addEventListener("click" , AddOrders);
btnDonate.addEventListener("click", donate);
btnPlaceOrder.addEventListener("click", PlaceOrders);



let pass = document.querySelectorAll("input[name='passType']");

for(let i=0; i<pass.length; i++){
    pass[i].addEventListener("click", CurrentOrdersTickets);
}

function CurrentOrdersTickets(){
   let Tickets = document.querySelectorAll("input[name='passType']");
       txtOutput.innerText=` Ticket Type/s: `;
     for (let i = 0; i < Tickets.length; i++) {
      if(Tickets[i].checked === true){
         txtOutput.innerText += ` ${Tickets[i].value} | `;
       }
     }
}     

      
function CurrentOrdersNumber1(){
  txtOutputt1.innerText=`Number of Adults| Day: ${document.getElementById("Dnoadult").value}| Student: ${document.getElementById("Snoadult").value} | Foreigner: ${document.getElementById("Fnoadult").value}`;

}

function CurrentOrdersNumber2(){
  txtOutputt2.innerText=`Number of Children| Day: ${document.getElementById("Dnochild").value} | Student: ${document.getElementById("Snochild").value} | Foreigner: ${document.getElementById("Fnochild").value}`;
}
       
function CurrentOrdersDuration1(){
  let Ddurations = listDuration1.options[listDuration1.selectedIndex].value;
    txt1Outputtt.innerText=` ${Ddurations} `;
}

function CurrentOrdersDuration2(){
   let Sdurations = listDuration2.options[listDuration2.selectedIndex].value;
      txt2Outputtt.innerText=` ${Sdurations}`;
}

function CurrentOrdersDuration3(){
  let Fdurations = listDuration3.options[listDuration3.selectedIndex].value;
       txt3Outputtt.innerText=`  ${Fdurations}`;
}
      
   
function CostCurrentOrdersTickets(){

  const dayadult=1000;
  const daychild=500;
  const stuadult=500;
  const stuchild=250;
  const foreadult=5000;
  const forechild=2500;

  const foodtoken=500;
  const annualpass=5000;
  
  const Dnoadult=parseInt(txtDAdult.value);
  const Dnochild=parseInt(txtDChild.value);
  const Snoadult=parseInt(txtSAdult.value);
  const Snochild=parseInt(txtSChild.value);
  const Fnoadult=parseInt(txtFAdult.value);
  const Fnochild=parseInt(txtFChild.value);
  
  let totalprice1=dayadult*Dnoadult;
  let totalprice2=daychild*Dnochild;
  let totalprice3=stuadult*Snoadult;
  let totalprice4=stuchild*Snochild;
  let totalprice5=foreadult*Fnoadult;
  let totalprice6=forechild*Fnochild;
 
  let totalday=totalprice1+totalprice2;
  let totalstudent=totalprice3+totalprice4;
  let totalforeigner=totalprice5+totalprice6;

  
  let TOTALPRICE1=totalday+250;
  let TOTALPRICE2=totalstudent+500;
  let TOTALPRICE3=totalforeigner+1000;


  if(this.value == "Day" && this.value == "3 Hours"){
    txtOutput2.innerText=` Day: ${totalday.toFixed(2)}LKR`;
  }
  if(this.value == "Day" && this.value == "1/2 Day"){
    txtOutput2.innerText=` Day: ${TOTALPRICE1.toFixed(2)}LKR`;
  }
  if(this.value == "Student" && this.value == "Full Day"){
    txtOutput2.innerText=`Student: ${TOTALPRICE2.toFixed(2)}LKR`;
  }
  if(this.value == "Foreigner" && this.value == "2 Days"){
    txtOutput2.innerText=`Foreigner: ${TOTALPRICE3.toFixed(2)}LKR`;
  }
  
}


function CostOverallOrders(){
  
 


  if(this.value == "Day" && this.value == "3 Hours"){
    txtOutput3.innerText=` Day: ${totalday.toFixed(2)}LKR`;
  }
  if(this.value == "Day" && this.value == "1/2 Day"){
    txtOutput3.innerText=` Day: ${TOTALPRICE1.toFixed(2)}LKR`;
  }
  if(this.value == "Student" && this.value == "Full Day"){
    txtOutput3.innerText=`Student: ${TOTALPRICE2.toFixed(2)}LKR`;
  }
  if(this.value == "Foreigner" && this.value == "2 Days"){
    txtOutput3.innerText=`Foreigner: ${TOTALPRICE3.toFixed(2)}LKR`;
  }
  
}

function AddOrders(){
 
  txtOutput1.innerText=`${txtOutput}`;
  txtOutputtt1.innerText=`${txtOutputt1.value}`;
  txtOutputtt2.innerText=` ${txtOutputt2.value}`;
  txtOutputttt.innerText=` ${txtOutputtt.value}`;

  document.getElementById("Day").value='';
  document.getElementById("Student").value='';
  document.getElementById("Foreigner").value='';
  document.getElementById("Dnoadult").value='';
  document.getElementById("Dnochild").value='';
  document.getElementById("Snoadult").value='';
  document.getElementById("Snochild").value='';
  document.getElementById("Fnoadult").value='';
  document.getElementById("Fnochild").value='';
  document.getElementById("Ddurations").value='';
  document.getElementById("Sdurations").value='';
  document.getElementById("Fdurations").value='';
  document.getElementById("output").innerHTML="";
  document.getElementById("outputt1").innerHTML="";
  document.getElementById("outputt2").innerHTML="";
  document.getElementById("outputtt").innerHTML="";
  
} 
         
 
function PlaceOrders(){
  alert("THANK YOU! for your purchases.  @monorro.PTD.Ltd ");
  document.getElementById("Day").value='';
  document.getElementById("Student").value='';
  document.getElementById("Foreigner").value='';
  document.getElementById("Dnoadult").value='';
  document.getElementById("Dnochild").value='';
  document.getElementById("Snoadult").value='';
  document.getElementById("Snochild").value='';
  document.getElementById("Fnoadult").value='';
  document.getElementById("Fnochild").value='';
  document.getElementById("Ddurations").value='';
  document.getElementById("Sdurations").value='';
  document.getElementById("Fdurations").value='';
  document.getElementById("output").innerHTML="";
  document.getElementById("outputt1").innerHTML="";
  document.getElementById("outputt2").innerHTML="";
  document.getElementById("out1puttt").innerHTML="";
  document.getElementById("out2puttt").innerHTML="";
  document.getElementById("out3puttt").innerHTML="";
  document.getElementById("output1").innerHTML="";
  document.getElementById("outputtt1").innerHTML="";
  document.getElementById("outputtt2").innerHTML="";
  document.getElementById("outputttt").innerHTML="";

}


function donate(){
  
      alert("SUCCESSFULLY DONATED!");
      document.getElementById("name").value='';
      document.getElementById("address").value='';
      document.getElementById("securityCode").value='';
      document.getElementById("expiryDate").value='';
      document.getElementById("amounts").value='';
     
}


  


   




