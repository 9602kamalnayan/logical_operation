//and........
console.log("help");
function and(){
   var num1=document.getElementById("uservalue1").value;
   var num2=document.getElementById("uservalue2").value;
   var ans=parseInt(num1) &parseInt(num2);
   document.getElementById("answer").value=ans;

}
//or

function or(){
    var num1=document.getElementById("uservalue1").value;
    var num2=document.getElementById("uservalue2").value;
    var ans=parseInt(num1) | parseInt(num2);
    document.getElementById("answer").value=ans;
 
 }

 //xor
 function xor(){
    var num1=document.getElementById("uservalue1").value;
    var num2=document.getElementById("uservalue2").value;
    var ans=parseInt(num1) ^parseInt(num2);
    document.getElementById("answer").value=ans;
 
 }