const txtAdult=document.getElementById("noadult");
const txtChild=document.getElementById("nochild");

const listDuration=document.getElementById("durations");

const txtOutput = document.getElementById("output");
const txtOutputt1 = document.getElementById("outputt1");
const txtOutputt2 = document.getElementById("outputt2");
const txtOutputtt = document.getElementById("outputtt");
const txtOutput2 = document.getElementById("output2");



const btnAddOrder = document.getElementById("AddOrders");
const btnPlaceOrder = document.getElementById("PlaceOrders");

const btnDonate = document.getElementById("donate");

const btnAddFav = document.getElementById("AddFav");
const btnOrderFav = document.getElementById("OrderFav");
const btnCheckLoyal = document.getElementById("CheckLoyalty");

btnAddOrder.addEventListener("click" , AddOrders);
btnDonate.addEventListener("click", donate);
btnPlaceOrder.addEventListener("click", PlaceOrders);



txtAdult.addEventListener("click" , CurrentOrdersNumber1);
txtChild.addEventListener("click" , CurrentOrdersNumber2);
listDuration.addEventListener("click" , CurrentOrdersDuration);

   


let pass = document.querySelectorAll("input[name='passType']");

for(let i=0; i<pass.length; i++){
    pass[i].addEventListener("click", CurrentOrdersTickets);
    pass[i].addEventListener("click",  CostCurrentOrdersTickets)
}

function CurrentOrdersTickets(){

      
         if(this.value == "Day"){
         txtOutput.innerText=` Day Tickets Adults | Children `;
         }
         if(this.value == "Student"){
         txtOutput.innerText=`Student Tickets Adults | Children `;
         }
         if(this.value == "Foreigner"){
          txtOutput.innerText=`Foreigner Tickets Adults  | Children`;
         }
         
}
      
function CurrentOrdersNumber1(){
  txtOutputt1.innerText=`Number of Adults: ${document.getElementById("noadult").value}`;

}
function CurrentOrdersNumber2(){
  txtOutputt2.innerText=`Number of Children: ${document.getElementById("nochild").value}`;
}
       
function CurrentOrdersDuration(){
  let durations = listDuration.options[listDuration.selectedIndex].value;
       txtOutputtt.innerText=`Duration: ${durations}`;
}
      
   

function CostCurrentOrdersTickets(){

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

function PlaceOrders(){
  alert("THANK YOU! for your purchases.  @monorro.PTD.Ltd ");
  document.getElementById("Day").value='';
  document.getElementById("Student").value='';
  document.getElementById("Foreigner").value='';
  document.getElementById("noadult").value='';
  document.getElementById("nochild").value='';
  document.getElementById("durations").value='';
  document.getElementById("output").innerHTML="";
  document.getElementById("outputt1").innerHTML="";
  document.getElementById("outputt2").innerHTML="";
  document.getElementById("outputtt").innerHTML="";

}


function donate(){
  
      alert("SUCCESSFULLY DONATED!");
      document.getElementById("name").value='';
      document.getElementById("address").value='';
      document.getElementById("securityCode").value='';
      document.getElementById("expiryDate").value='';
      document.getElementById("amount").value='';
     
}


  

