var v=document.getElementById('range1');
var v2=document.getElementById('range2');
var v3=document.getElementById('range3');
var borderR=document.getElementById('borderR');
//console.log(v.value)
var p=document.getElementById('display');
var main=document.getElementById('main');

function change(){
  
 
  main.style.borderRadius=borderR.value+"%";
  main.style.backgroundColor=`rgba(${v.value},${v2.value},${v3.value})`;
}