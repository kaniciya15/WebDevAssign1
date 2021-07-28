const txtDAdult=document.getElementById("Dnoadult");
const txtDChild=document.getElementById("Dnochild");

const txtSAdult=document.getElementById("Snoadult");
const txtSChild=document.getElementById("Snochild");

const txtFAdult=document.getElementById("Fnoadult");
const txtFChild=document.getElementById("Fnochild");

const txtnoExtras1=document.getElementById("noAP");
const txtnoExtras2=document.getElementById("noFT");

const listDuration1=document.getElementById("Ddurations");
const listDuration2=document.getElementById("Sdurations");
const listDuration3=document.getElementById("Fdurations");
///
const txtOutput = document.getElementById("output");
const txtOutputt1 = document.getElementById("outputt1");

const txtOut1puttt = document.getElementById("out1puttt");

const txtOutput4 = document.getElementById("output4");
///
const txtOutput2 = document.getElementById("output2");
const txtOutput2t = document.getElementById("output2t");
///
const txtOutput1 = document.getElementById("output1");
const txtOutputtt1 = document.getElementById("outputtt1");

const txt1Outputttt = document.getElementById("out1putttt");

const txtOutput5 = document.getElementById("output5");
///
const txtOutput3 = document.getElementById("output3");

///
const txtOutput6 = document.getElementById("output6");

const btnAddOrder = document.getElementById("AddOrders");
const btnPlaceOrder = document.getElementById("PlaceOrders");

const btnDonate = document.getElementById("donate");

const btnAddFav = document.getElementById("AddFav");
const btnOrderFav = document.getElementById("OrderFav");
const btnCheckLoyal = document.getElementById("CheckLoyalty");

/*currentorder*/
txtDAdult.addEventListener("click" , CurrentOrdersNumber);
txtSAdult.addEventListener("click" , CurrentOrdersNumber);
txtFAdult.addEventListener("click" , CurrentOrdersNumber);
txtDChild.addEventListener("click" , CurrentOrdersNumber);
txtSChild.addEventListener("click" , CurrentOrdersNumber);
txtFChild.addEventListener("click" , CurrentOrdersNumber);

txtnoExtras1.addEventListener("click" ,CurrentOrdersExtra);
txtnoExtras2.addEventListener("click" ,CurrentOrdersExtra);


listDuration1.addEventListener("click" , CurrentOrdersDuration);
listDuration2.addEventListener("click" , CurrentOrdersDuration);
listDuration3.addEventListener("click" , CurrentOrdersDuration);


btnAddOrder.addEventListener("click" , AddOrders);
btnDonate.addEventListener("click", donate);
btnPlaceOrder.addEventListener("click", PlaceOrders);

btnAddFav.addEventListener("click" , AddFavourites);
btnOrderFav.addEventListener("click" , OrderFavourites);
btnCheckLoyal.addEventListener("click" , CheckLoyalty);

let pass = document.querySelectorAll("input[name='passType']");
for(let i=0; i<pass.length; i++){
    pass[i].addEventListener("click", CurrentOrdersTickets); 
    
}

let extra = document.querySelectorAll("input[name='extrapass']");
for(let i=0; i<extra.length; i++){
    extra[i].addEventListener("click", ExtraOrders);  
}
const dayadult=1000;
const daychild=500;
const stuadult=500;
const stuchild=250;
const foreadult=5000;
const forechild=2500;

const foodtoken=500;
const annualpass=5000;




function CurrentOrdersTickets(){
 

   let Tickets = document.querySelectorAll("input[name='passType']");
       txtOutput.innerText=` Ticket Type/s: `;
     for (let i = 0; i < Tickets.length; i++) {
    if(Tickets[i].checked === true){
           txtOutput.innerText += ` ${Tickets[i].value} | `;
    
    } 
  }
   
    if(document.getElementById("Day").checked){
    
      txtOutput2.innerText=`Adult: ${dayadult}/= Child: ${daychild}/=`;
    } 
    if(document.getElementById("Student").checked ){
    
      txtOutput2.innerText=`Adult: ${stuadult}/= Child: ${stuchild}/=`;
    } 
    if(document.getElementById("Foreigner").checked){
    
      txtOutput2.innerText=`Adult: ${foreadult}/= Child: ${forechild}/=`;
    } 
    if(document.getElementById("Foreigner").checked && document.getElementById("Day").checked){
     
       txtOutput2.innerText=`Adult: ${foreadult+dayadult}/= Child: ${forechild+daychild}/=`;
     } 
     if(document.getElementById("Foreigner").checked && document.getElementById("Student").checked ){
     
       txtOutput2.innerText=`Adult: ${foreadult+stuadult}/= Child: ${forechild+stuchild}/=`;
     } 
     if(document.getElementById("Day").checked && document.getElementById("Student").checked ){
     
       txtOutput2.innerText=`Adult: ${dayadult+stuadult}/= Child: ${daychild+stuchild}/=`;
     } 
     if(document.getElementById("Foreigner").checked && document.getElementById("Student").checked && document.getElementById("Day").checked ){
     
       txtOutput2.innerText=`Adult: ${foreadult+stuadult+dayadult}/= Child: ${forechild+stuchild+daychild}/=`;
     } 
     return txtOutput.innerText;
}


    

      
function CurrentOrdersNumber(){



  
  txtOutputt1.innerText=`Number of Adults: 
  Day: ${document.getElementById("Dnoadult").value}
  Student: ${document.getElementById("Snoadult").value} 
  Foreigner: ${document.getElementById("Fnoadult").value}
  Number of Children: 
  Day: ${document.getElementById("Dnochild").value}  
  Student: ${document.getElementById("Snochild").value}  
  Foreigner: ${document.getElementById("Fnochild").value}`;



  txtOutput2.innerText=`Current total:
  ${(document.getElementById("Dnoadult").value*dayadult)+(document.getElementById("Dnochild").value*daychild)}LKR 
   ${(document.getElementById("Snoadult").value*stuadult)+(document.getElementById("Snochild").value*stuchild)}LKR 
   ${(document.getElementById("Fnoadult").value*foreadult)+(document.getElementById("Fnochild").value*forechild)}LKR`;

   return txtOutputt1.innerText;
}


       
function CurrentOrdersDuration(){
 
  let Ddurations = listDuration1.options[listDuration1.selectedIndex].value;
  let Sdurations = listDuration2.options[listDuration2.selectedIndex].value;
  let Fdurations = listDuration3.options[listDuration3.selectedIndex].value;
     
     txtOut1puttt.innerText=`Duration:
     ${Ddurations} 
     ${Sdurations}
     ${Fdurations}`;
     


     if(document.getElementById("Day").checked){  
      if(Ddurations == 'Day: 3 Hours'){
        txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
        +(document.getElementById("Dnochild").value*daychild) }`;
       
      }// how to do this jesus pls help me =>Thank you Jesus
      if(Ddurations == 'Day: 1/2 Day'){
       txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
       +(document.getElementById("Dnochild").value*daychild)+250 }`;
       
     }
     if(Ddurations == 'Day: Full Day'){
       txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
       +(document.getElementById("Dnochild").value*daychild)+500 }`;
      
     }
     if(Ddurations == 'Day: 2 Days'){
       txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
       +(document.getElementById("Dnochild").value*daychild)+1000 }`;
     
     }
   }

    else if(document.getElementById("Student").checked){  
     if(Sdurations == 'Student: 3 Hours'){
       txtOutput2.innerText=`  ${(document.getElementById("Snoadult").value*stuadult)
       +(document.getElementById("Snochild").value*stuchild) }`;
      
     }
     if(Sdurations == 'Student: 1/2 Day'){
      txtOutput2.innerText=`  ${(document.getElementById("Snoadult").value*stuadult)
      +(document.getElementById("Snochild").value*stuchild)+250 }`;
      
    }
    if(Sdurations == 'Student: Full Day'){
      txtOutput2.innerText=`  ${(document.getElementById("Snoadult").value*stuadult)
      +(document.getElementById("Snochild").value*stuchild)+500 }`;
      
    }
    if(Sdurations == 'Student: 2 Days'){
      txtOutput2.innerText=`  ${(document.getElementById("Snoadult").value*stuadult)
      +(document.getElementById("Snochild").value*stuchild)+1000 }`;
    }
    
    }

    else if(document.getElementById("Foreigner").checked){  
    if(Fdurations == 'Foreigner: 3 Hours'){
     txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
     +(document.getElementById("Fnochild").value*forechild) }`;
    
   }// how to do this jesus pls help me =>Thank you Jesus
   if(Fdurations == 'Foreigner: 1/2 Day'){
    txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+250 }`;
    
   }
   if(Fdurations == 'Foreigner: Full Day'){
    txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+500 }`;
    
   }
   if(Fdurations == 'Foreigner: 2 Days'){
    txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+1000 }`;
    
   }
   }



if(document.getElementById("Day").checked && document.getElementById("Foreigner").checked){    
 if(Ddurations == 'Day: 3 Hours' && Fdurations == 'Foreigner: 3 Hours'){
   txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
   +(document.getElementById("Dnochild").value*daychild) 
   +(document.getElementById("Fnoadult").value*foreadult)
   +(document.getElementById("Fnochild").value*forechild)}`;
  
 }
 if(Ddurations == 'Day: 1/2 Day' && Fdurations == 'Foreigner: 1/2 Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+250}`;
  
}
if(Ddurations == 'Day: Full Day' && Fdurations == 'Foreigner: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+500}`;
 
}
if(Ddurations == 'Day: 2 Days' && Fdurations == 'Foreigner: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1000 }`;

} 
if(Ddurations == 'Day: 3 Hours' && Fdurations == 'Foreigner: 1/2 Day'){
 txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
 +(document.getElementById("Dnochild").value*daychild) 
 +(document.getElementById("Fnoadult").value*foreadult)
 +(document.getElementById("Fnochild").value*forechild)+250}`;

}// how to do this jesus pls help me =>Thank you Jesus
if(Ddurations == 'Day: 3 Hours' && Fdurations == 'Foreigner: Full Day'){
txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
+(document.getElementById("Dnochild").value*daychild) 
+(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild)+500}`;

}
if(Ddurations == 'Day: 3 Hours' && Fdurations == 'Foreigner: 2 Days'){
txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
+(document.getElementById("Dnochild").value*daychild)
+(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild)+1000}`;

}
if(Ddurations == 'Day: 1/2 Day' && Fdurations == 'Foreigner: 3 Hours'){
txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
+(document.getElementById("Dnochild").value*daychild) 
+(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild)+250 }`;

} 
if(Ddurations == 'Day: 1/2 Day' && Fdurations == 'Foreigner: Full Day'){
 txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
 +(document.getElementById("Dnochild").value*daychild) 
 +(document.getElementById("Fnoadult").value*foreadult)
 +(document.getElementById("Fnochild").value*forechild)+750}`;

}// how to do this jesus pls help me =>Thank you Jesus
if(Ddurations == 'Day: 1/2 Day' && Fdurations == 'Foreigner: 2 Days'){
txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
+(document.getElementById("Dnochild").value*daychild) 
+(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild)+1250}`;

}
if(Ddurations == 'Day: Full Day' && Fdurations == 'Foreigner: 3 Hours'){
txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
+(document.getElementById("Dnochild").value*daychild)
+(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild)+500}`;

}
if(Ddurations == 'Day: Full Day' && Fdurations == 'Foreigner: 1/2 Day'){
txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
+(document.getElementById("Dnochild").value*daychild) 
+(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild)+1500 }`;

} 
if(Ddurations == 'Day: Full Day' && Fdurations == 'Foreigner: 2 Days'){
 txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
 +(document.getElementById("Dnochild").value*daychild)
 +(document.getElementById("Fnoadult").value*foreadult)
 +(document.getElementById("Fnochild").value*forechild)+1500}`;

}// how to do this jesus pls help me =>Thank you Jesus
if(Ddurations == 'Day: 2 Days' && Fdurations == 'Foreigner: 3 Hours'){
txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
+(document.getElementById("Dnochild").value*daychild) 
+(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild)+1000}`;

}
if(Ddurations == 'Day: 2 Days' && Fdurations == 'Foreigner: 1/2 Day'){
txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
+(document.getElementById("Dnochild").value*daychild) 
+(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild)+1250}`;

}
if(Ddurations == 'Day: 2 Days' && Fdurations == 'Foreigner: Full Day'){
txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
+(document.getElementById("Dnochild").value*daychild) 
+(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild)+1500 }`;
} 
}
if(document.getElementById("Foreigner").checked && document.getElementById("Student").checked){    
 if(Fdurations == 'Foreigner: 3 Hours' && Sdurations == 'Student: 3 Hours'){
   txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
   +(document.getElementById("Fnochild").value*forechild) 
   +(document.getElementById("Snoadult").value*stuadult)
   +(document.getElementById("Snochild").value*stuchild)}`;
  
 }
 if(Fdurations == 'Foreigner: 1/2 Day' && Sdurations == 'Student: 1/2 Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)+250}`;
  
}
if(Fdurations == 'Foreigner: Full Day' && Sdurations == 'Student: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)+500}`;
 
}
if(Fdurations == 'Foreigner: 2 Days' && Sdurations == 'Student: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)+1000 }`;

} 
if(Fdurations == 'Foreigner: 3 Hours' && Sdurations == 'Student: 1/2 Day'){
 txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
 +(document.getElementById("Fnochild").value*forechild) 
 +(document.getElementById("Snoadult").value*stuadult)
 +(document.getElementById("Snochild").value*stuchild)+250}`;

}
if(Fdurations == 'Foreigner: 3 Hours' && Sdurations == 'Student: Full Day'){
txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild) 
+(document.getElementById("Snoadult").value*stuadult)
+(document.getElementById("Snochild").value*stuchild)+500}`;

}
if(Fdurations == 'Foreigner: 3 Hours' && Sdurations == 'Student: 2 Days'){
txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild) 
+(document.getElementById("Snoadult").value*stuadult)
+(document.getElementById("Snochild").value*stuchild)+1000}`;

}
if(Fdurations == 'Foreigner: 1/2 Day' && Sdurations == 'Student: 3 Hours'){
txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild) 
+(document.getElementById("Snoadult").value*stuadult)
+(document.getElementById("Snochild").value*stuchild)+250}`;

} 
if(Fdurations == 'Foreigner: 1/2 Day' && Sdurations == 'Student: Full Day'){
 txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
 +(document.getElementById("Fnochild").value*forechild) 
 +(document.getElementById("Snoadult").value*stuadult)
 +(document.getElementById("Snochild").value*stuchild)+750}`;

}
if(Fdurations == 'Foreigner: 1/2 Day' && Sdurations == 'Student: 2 Days'){
txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild) 
+(document.getElementById("Snoadult").value*stuadult)
+(document.getElementById("Snochild").value*stuchild)+1250}`;

}
if(Fdurations == 'Foreigner: Full Day' && Sdurations == 'Student: 3 Hours'){
txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild) 
+(document.getElementById("Snoadult").value*stuadult)
+(document.getElementById("Snochild").value*stuchild)+500}`;

}
if(Fdurations == 'Foreigner: Full Day' && Sdurations == 'Student: 1/2 Day'){
txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild) 
+(document.getElementById("Snoadult").value*stuadult)
+(document.getElementById("Snochild").value*stuchild)+750 }`;

} 
if(Fdurations == 'Foreigner: Full Day' && Sdurations == 'Student: 2 Days'){
 txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
 +(document.getElementById("Fnochild").value*forechild) 
 +(document.getElementById("Snoadult").value*stuadult)
 +(document.getElementById("Snochild").value*stuchild)}`;

}
if(Fdurations == 'Forigner: 2 Days' && Sdurations == 'Student: 3 Hours'){
txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild)
+(document.getElementById("Snoadult").value*stuadult)
+(document.getElementById("Snochild").value*stuchild)+250}`;

}
if(Fdurations == 'Foreigner: 2 Days' && Sdurations == 'Student: 1/2 Day'){
txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild)
+(document.getElementById("Snoadult").value*stuadult)
+(document.getElementById("Snochild").value*stuchild)+500}`;

}
if(Fdurations == 'Foreigner: 2 Days' && Sdurations == 'Student: Full Day'){
txtOutput2.innerText=`  ${(document.getElementById("Fnoadult").value*foreadult)
+(document.getElementById("Fnochild").value*forechild)
+(document.getElementById("Snoadult").value*stuadult)
+(document.getElementById("Snochild").value*stuchild)+1000 }`;

} 

}

if(document.getElementById("Day").checked && document.getElementById("Student").checked){ 

 if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: 3 Hours'){
   txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
   +(document.getElementById("Dnochild").value*daychild) 
   +(document.getElementById("Snoadult").value*stuadult)
   +(document.getElementById("Snochild").value*stuchild)}`;
  
 }
 if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 1/2 Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)+250}`;
  
}
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)+500}`;
 
}
if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild)
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)+1000}`;

} 
//
 if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: 1/2 Day'){
   txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
   +(document.getElementById("Dnochild").value*daychild) 
   +(document.getElementById("Snoadult").value*stuadult)
   +(document.getElementById("Snochild").value*stuchild)+250}`;
  
 }
 if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)+500}`;
  
}
if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)+1000}`;
 
}
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 3 Hours'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)+250}`;

} 
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: Full Day'){
 txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
 +(document.getElementById("Dnochild").value*daychild)
 +(document.getElementById("Snoadult").value*stuadult)
 +(document.getElementById("Snochild").value*stuchild)+750}`;

}
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 2 Days'){
 txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
 +(document.getElementById("Dnochild").value*daychild) 
 +(document.getElementById("Snoadult").value*stuadult)
 +(document.getElementById("Snochild").value*stuchild)+1250}`;
}
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: 3 Hours'){
 txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
 +(document.getElementById("Dnochild").value*daychild) 
 +(document.getElementById("Snoadult").value*stuadult)
 +(document.getElementById("Snochild").value*stuchild)+500}`;
}
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: 1/2 Day'){
 txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
 +(document.getElementById("Dnochild").value*daychild) 
 +(document.getElementById("Snoadult").value*stuadult)
 +(document.getElementById("Snochild").value*stuchild)+750}`;
}
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: 2 Days'){
 txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
 +(document.getElementById("Dnochild").value*daychild) 
 +(document.getElementById("Snoadult").value*stuadult)
 +(document.getElementById("Snochild").value*stuchild)+1500}`;
}
if(Ddurations == 'Day: 2 Day' && Sdurations == 'Student: 3 Hours'){
 txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
 +(document.getElementById("Dnochild").value*daychild) 
 +(document.getElementById("Snoadult").value*stuadult)
 +(document.getElementById("Snochild").value*stuchild)+1000}`;
}
if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: 1/2 Day'){
 txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
 +(document.getElementById("Dnochild").value*daychild) 
 +(document.getElementById("Snoadult").value*stuadult)
 +(document.getElementById("Snochild").value*stuchild)+1250}`;
}
if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: Full Day'){
 txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
 +(document.getElementById("Dnochild").value*daychild) 
 +(document.getElementById("Snoadult").value*stuadult)
 +(document.getElementById("Snochild").value*stuchild)+1500}`;
}

}

if(document.getElementById("Day").checked && document.getElementById("Student").checked && document.getElementById("Foreigner").checked){ 
  if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: 3 Hours' && Fdurations == 'Foreigner: 3 Hours'){
    txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
    +(document.getElementById("Dnochild").value*daychild) 
    +(document.getElementById("Snoadult").value*stuadult)
    +(document.getElementById("Snochild").value*stuchild)
    +(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)}`;
  }
  if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 1/2 Day' && Fdurations == 'Foreigner: 1/2 Day'){
    txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
    +(document.getElementById("Dnochild").value*daychild) 
    +(document.getElementById("Snoadult").value*stuadult)
    +(document.getElementById("Snochild").value*stuchild)
    +(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+250}`;
  }
  if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: Full Day'){
    txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
    +(document.getElementById("Dnochild").value*daychild) 
    +(document.getElementById("Snoadult").value*stuadult)
    +(document.getElementById("Snochild").value*stuchild)
    +(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+500}`;
  }
  if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: 2 Days'){
    txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
    +(document.getElementById("Dnochild").value*daychild) 
    +(document.getElementById("Snoadult").value*stuadult)
    +(document.getElementById("Snochild").value*stuchild)
    +(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+1000}`;
  }
  
  if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: 3 Hours' && Fdurations == 'Foreigner: 1/2 Day'){
    txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
    +(document.getElementById("Dnochild").value*daychild) 
    +(document.getElementById("Snoadult").value*stuadult)
    +(document.getElementById("Snochild").value*stuchild)
    +(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+250}`;
  }
  if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: 3 Hours' && Fdurations == 'Foreigner: Full Day'){
    txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
    +(document.getElementById("Dnochild").value*daychild) 
    +(document.getElementById("Snoadult").value*stuadult)
    +(document.getElementById("Snochild").value*stuchild)
    +(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+500}`;
  }
  if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: 3 Hours' && Fdurations == 'Foreigner: 2 Days'){
    txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
    +(document.getElementById("Dnochild").value*daychild) 
    +(document.getElementById("Snoadult").value*stuadult)
    +(document.getElementById("Snochild").value*stuchild)
    +(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+1000}`;
  }
  if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 1/2 Day' && Fdurations == 'Foreigner: 3 Hours'){
    txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
    +(document.getElementById("Dnochild").value*daychild) 
    +(document.getElementById("Snoadult").value*stuadult)
    +(document.getElementById("Snochild").value*stuchild)
    +(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+250}`;
  }
  if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 1/2 Day' && Fdurations == 'Foreigner: Full Day'){
    txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
    +(document.getElementById("Dnochild").value*daychild) 
    +(document.getElementById("Snoadult").value*stuadult)
    +(document.getElementById("Snochild").value*stuchild)
    +(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+750}`;
  }
  if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 1/2 Day' && Fdurations == 'Foreigner: 2 Days'){
    txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
    +(document.getElementById("Dnochild").value*daychild) 
    +(document.getElementById("Snoadult").value*stuadult)
    +(document.getElementById("Snochild").value*stuchild)
    +(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+1250}`;
  }
  if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: 3 Hours'){
    txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
    +(document.getElementById("Dnochild").value*daychild) 
    +(document.getElementById("Snoadult").value*stuadult)
    +(document.getElementById("Snochild").value*stuchild)
    +(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+500}`;
  }
  if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: 1/2 Day'){
    txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
    +(document.getElementById("Dnochild").value*daychild) 
    +(document.getElementById("Snoadult").value*stuadult)
    +(document.getElementById("Snochild").value*stuchild)
    +(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+750}`;
  }
  if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: 2 Days'){
    txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
    +(document.getElementById("Dnochild").value*daychild) 
    +(document.getElementById("Snoadult").value*stuadult)
    +(document.getElementById("Snochild").value*stuchild)
    +(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+1500}`;
  }
  if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: 3 Hours'){
    txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
    +(document.getElementById("Dnochild").value*daychild) 
    +(document.getElementById("Snoadult").value*stuadult)
    +(document.getElementById("Snochild").value*stuchild)
    +(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+1000}`;
  }
  if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: 1/2 Day'){
    txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
    +(document.getElementById("Dnochild").value*daychild) 
    +(document.getElementById("Snoadult").value*stuadult)
    +(document.getElementById("Snochild").value*stuchild)
    +(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+1250}`;
  }
  if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: Full Day'){
    txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
    +(document.getElementById("Dnochild").value*daychild) 
    +(document.getElementById("Snoadult").value*stuadult)
    +(document.getElementById("Snochild").value*stuchild)
    +(document.getElementById("Fnoadult").value*foreadult)
    +(document.getElementById("Fnochild").value*forechild)+1500}`;
  }
////////////////////////////////////////////////
if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: 1/2 Day' && Fdurations == 'Foreigner: 3 Hours'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+250}`;
}
if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: 3 Hours'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+500}`;
}
if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: 3 Hours'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1000}`;
}
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 3 Hours' && Fdurations == 'Foreigner: 1/2 Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+250}`;
}
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: 1/2 Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1500}`;
}
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: 1/2 Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+750}`;
}
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: 3 Hours' && Fdurations == 'Foreigner: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1250}`;
}
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: 1/2 Day' && Fdurations == 'Foreigner: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+500}`;
}
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+750}`;
}
if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: 3 Hours' && Fdurations == 'Foreigner: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1500}`;
}
if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: 1/2 Day' && Fdurations == 'Foreigner: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1000}`;
}
if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1250}`;
}
//////////////////////////////////////////////////////////////
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 3 Hours' && Fdurations == 'Foreigner: 3 Hours'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+250}`;
}
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: 3 Hours' && Fdurations == 'Foreigner: 3 Hours'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+500}`;
}
if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: 3 Hours' && Fdurations == 'Foreigner: 3 Hours'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1000}`;
}
if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: 1/2 Day' && Fdurations == 'Foreigner: 1/2 Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+250}`;
}
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: 1/2 Day' && Fdurations == 'Foreigner: 1/2 Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+750}`;
}
if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: 1/2 Day' && Fdurations == 'Foreigner: 1/2 Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1250}`;
}
if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+500}`;
}
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+750}`;
}
if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1500}`;
}
if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1000}`;
}
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1250}`;
}
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1500}`;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: 1/2 Day' && Fdurations == 'Foreigner: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+750}`;
}
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1750}`;
}
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: 3 Hours'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1500}`;
}
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: 3 Hours' && Fdurations == 'Foreigner: 1/2 Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+750}`;
}
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 3 Hours' && Fdurations == 'Foreigner: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+750}`;
}
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: 1/2 Day' && Fdurations == 'Foreigner: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1250}`;
}
if(Ddurations == 'Day: 2 Day' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: 3 Hours'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1500}`;
}
if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: 1/2 Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1250}`;
}
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: 2 Hours'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1500}`;
}
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: 1/2 Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1000}`;
}
if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: 3 Hours' && Fdurations == 'Foreigner: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1250}`;
}
if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: 1/2 Day' && Fdurations == 'Foreigner: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1500}`;
}
//////////////////////////////////////////////////////////////////////////////////////////////////
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: 1/2 Day' && Fdurations == 'Foreigner: 3 Hours'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+250}`;
}
if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: 1/2 Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+500}`;
}
if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1000}`;
}
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 3 Hours' && Fdurations == 'Foreigner: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+250}`;
}
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: 3 Hours' && Fdurations == 'Foreigner: 1/2 Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+750}`;
}
if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: 1/2 Day' && Fdurations == 'Foreigner: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1250}`;
}
if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1500}`;
}
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: 3 Hours'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1250}`;
}
if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: 1/2 Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+750}`;
}
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1750}`;
}
if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1500}`;
}
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 2 Days' && Fdurations == 'Foreigner: 3 Hours'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1250}`;
}

if(Ddurations == 'Day: 3 Hours' && Sdurations == 'Student: Full Day' && Fdurations == 'Foreigner: 1/2 Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+750}`;
}
if(Ddurations == 'Day: 1/2 Day' && Sdurations == 'Student: 2 Day' && Fdurations == 'Foreigner: Full Day'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1750}`;
}
if(Ddurations == 'Day: Full Day' && Sdurations == 'Student: 3 Hours' && Fdurations == 'Foreigner: 2 Days'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1500}`;
}
if(Ddurations == 'Day: 2 Days' && Sdurations == 'Student: 1/2 Day' && Fdurations == 'Foreigner: 3 Hours'){
  txtOutput2.innerText=`  ${(document.getElementById("Dnoadult").value*dayadult)
  +(document.getElementById("Dnochild").value*daychild) 
  +(document.getElementById("Snoadult").value*stuadult)
  +(document.getElementById("Snochild").value*stuchild)
  +(document.getElementById("Fnoadult").value*foreadult)
  +(document.getElementById("Fnochild").value*forechild)+1250}`;
}
}
return [
  txtOut1puttt.innerText,
  txtOutput2.innerText
];

}

function ExtraOrders(){


   let Extras = document.querySelectorAll("input[name='extrapass']");
       txtOutput4.innerText=` Extra Type/s: `;
     for (let i = 0; i < Extras.length; i++) {
      if(Extras[i].checked === true){
         txtOutput4.innerText += ` ${Extras[i].value} | `;
    
        }
     }
 return txtOutput4.innerText;
 
}     
 function CurrentOrdersExtra(){
 
  if(document.getElementById("AnnualPass").checked || document.getElementById("FoodToken").checked){
  
    txtOutput2t.innerText=` Extras: ${document.getElementById("noAP").value*annualpass}(${document.getElementById("noAP").value}) | ${document.getElementById("noFT").value*foodtoken}(${document.getElementById("noFT").value})
    Total of Extras:${document.getElementById("noAP").value*annualpass+document.getElementById("noFT").value*foodtoken}`;
   
  } 
  return document.getElementById("noAP").value*annualpass+document.getElementById("noFT").value*foodtoken;
 }


function AddOrders(){
  CheckLoyalty();
 let one=CurrentOrdersTickets();
 let two=CurrentOrdersNumber();
 let three=CurrentOrdersDuration();
 let four=ExtraOrders();
 let five=CurrentOrdersExtra();

 let six= Number(three[1])+Number(five);
 

  txtOutput1.innerText=`${one}`;
  
  txtOutputtt1.innerText=`${two}`;
  
  txt1Outputttt.innerText=`${three[0]}`;

  txtOutput5.innerHTML=`${four}`;
 
  txtOutput3.innerText=`${six} LKR`;
  

  
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
  document.getElementById("noAP").value='';
  document.getElementById("noFT").value='';
  document.getElementById("output").innerHTML="";
  document.getElementById("output4").innerHTML="";
  document.getElementById("outputt1").innerHTML="";
  document.getElementById("out1puttt").innerHTML="";
  document.getElementById("output2").innerHTML="0.00";
  document.getElementById("output2t").innerHTML="0.00";



} 
         
 
function PlaceOrders(){

  alert("THANK YOU!.  @mono.PTD.Ltd ");

 
  document.getElementById("output1").innerHTML="";
  document.getElementById("outputtt1").innerHTML="";
  document.getElementById("out1putttt").innerHTML="";
  document.getElementById("output5").innerHTML="";
  document.getElementById("output3").innerHTML="0.00";
 

}


function donate(){
  
      alert("SUCCESSFULLY DONATED!");
      document.getElementById("name").value='';
      document.getElementById("address").value='';
      document.getElementById("securityCode").value='';
      document.getElementById("expiryDate").value='';
      document.getElementById("amounts").value='';
     
}
let Ticketbooking = [];
let Loyalty = [];


function showEntries(){
  txtOutput.value = "";
  txtOutputt1.value = "";
  txtOut1puttt.value = "";
  txtOutput4.value = "";
  for (let i = 0; i < Ticketbooking.length; i++) {
   
    
    txtOutputt1.value +=  Ticketbooking[i].Dnoadult + "\t"  + Ticketbooking[i].Dnochild +"\t"+Ticketbooking[i].Snoadult 
    + "\t"  + Ticketbooking[i].Snochild+"\t" + Ticketbooking[i].Fnoadult + "\t"  + Ticketbooking[i].Fnochild+ "\n";
    txtOut1puttt.value += Ticketbooking[i].Ddurations + "\t"+ Ticketbooking[i].Sdurations + "\t"+Ticketbooking[i].Fdurations + "\n";
    txtOutput4.value += Ticketbooking[i].noAP +"\t" + Ticketbooking[i].noFT+ "\n";
  }
  for (let i = 0; i < Loyalty.length; i++) {
    txtOutput6= Loyalty[i];
    
  }

}

function AddFavourites(){
  document.getElementById("output").innerHTML="";
  document.getElementById("outputt1").innerHTML="";
  document.getElementById("out1puttt").innerHTML="";
  document.getElementById("output4").innerHTML="";
  document.getElementById("output2").innerHTML="0.00";
  document.getElementById("output2t").innerHTML="0.00";

     const favourites1 = {
       "Dnoadult": txtDAdult.value,
       "Dnochild": txtDChild.value,
       "Snoadult": txtSAdult.value,
       "Snochild": txtSChild.value,
       "Fnoadult": txtFAdult.value,
       "Fnochild": txtFChild.value,
     };
   const favourites2 = {
    "Dduration": listDuration1.value,
    "Sduration": listDuration2.value,
    "Fduration": listDuration3.value
   };

    const favourites3= {
      
     };
     const favourites4 = {
      "noAP":txtnoExtras1.value,
      "noFT":txtnoExtras2.value
     }
    
     Ticketbooking.push(favourites1,favourites2,favourites3,favourites4);
     localStorage.setItem('Ticketbooking' , JSON.stringify(Ticketbooking));
    
     showEntries();
}

function OrderFavourites(){

  if("Ticketbooking" in localStorage){
    Ticketbooking = JSON.parse(localStorage.getItem("Ticketbooking"));
   showEntries();
   CurrentOrdersTickets();
   CurrentOrdersNumber();
   CurrentOrdersExtra();
   ExtraOrders();
   CurrentOrdersDuration();

 
   
}
}

function CheckLoyalty(){





let totalnooforders = document.getElementById("Dnoadult").value*20 + document.getElementById("Dnochild").value*20
                      +document.getElementById("Snoadult").value*20 + document.getElementById("Snochild").value*20
                      +document.getElementById("Fnoadult").value*20 + document.getElementById("Fnochild").value*20
                      +document.getElementById("noAP").value*20+document.getElementById("noFT").value*20;
       if(totalnooforders > 60){
          txtOutput6.innerText=`${totalnooforders} points`;
      }
      else{
         txtOutput6.innerText=`${0} points`;
      }

      const loyaltypoints = {
        "Dnoadult": txtDAdult.value*20,
        "Dnochild": txtDChild.value*20,
        "Snoadult": txtSAdult.value*20,
        "Snochild": txtSChild.value*20,
        "Fnoadult": txtFAdult.value*20,
        "Fnochild": txtFChild.value*20,
        "noAP":txtnoExtras1.value*20,
        "noFT":txtnoExtras2.value*20
       }
    
       Loyalty.push(loyaltypoints);
       localStorage.setItem('Loyalty' , JSON.stringify(Loyalty));
       showEntries();
  }

