var count=0;

var incbutt=document.getElementById("count-el");

var saveent=document.getElementById("save-el");

let str;


function increment(){
    count=count+1;
    incbutt.innerText=count;

}

function save(){

    str= " " + count+"-";
    saveent.innerText=saveent.innerText+str;
    count=0;
    incbutt.innerText=count;



}