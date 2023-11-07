var s=""
function number(data){
    s=s+data;
    document.getElementById("h3").innerHTML=s;
}

function operator(op){
    s=s+op;
    document.getElementById("h3").innerHTML=s;

}

function dot(dt){
    s=s+dt;
    document.getElementById("h3").innerHTML=s;
}

function clr(){
    s=""
    document.getElementById("h3").innerHTML=s;
}

function backspace()
{
    s1=""
    for(i=0;i<s.length-1;i++){
        s1=s1+s[i];
    }
    s=s1;
    document.getElementById("h3").innerHTML=s1;
}

function equals(){
    try{
    document.getElementById('h3').innerHTML=eval(s);
    }
    catch{
        document.getElementById('h3').innerHTML="Error";
    }
}
