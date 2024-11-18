function funct1(){
    document.getElementById("b1").style.display="block";
    document.getElementById("b3").style.display="none";
    document.getElementById("b2").style.display="none";
    document.getElementById("dot1").style.backgroundColor="lightblue";
    document.getElementById("dot2").style.backgroundColor="aqua";
    document.getElementById("dot3").style.backgroundColor="aqua"
 }
function funct2(){
    document.getElementById("b2").style.display="block";
    document.getElementById("b1").style.display="none";
    document.getElementById("b3").style.display="none";
    document.getElementById("dot2").style.backgroundColor="lightblue";
    document.getElementById("dot3").style.backgroundColor="aqua";
    document.getElementById("dot1").style.backgroundColor="aqua"
}
function funct3(){
    document.getElementById("b3").style.display="block"
    document.getElementById("b1").style.display="none"
    document.getElementById("b2").style.display="none";
    document.getElementById("dot3").style.backgroundColor="lightblue";
    document.getElementById("dot2").style.backgroundColor="aqua";
    document.getElementById("dot1").style.backgroundColor="aqua"
}
function foward(){
    document.getElementById("sr1").style.display="none";
    document.getElementById("sr7").style.display="block";
    document.getElementById("story-button1").style.display="block"}
function back(){
    document.getElementById("sr1").style.display="block";
    document.getElementById("sr7").style.display="none"
}
function day1(){
    document.getElementById("day2").style.color="grey";
    document.getElementById("day2button").style.backgroundColor="grey";
    document.getElementById("day1button").style.backgroundColor="rgba(0,211,255,1)";
    document.getElementById("day1").style.color="rgba(0,211,255,1)";
    document.getElementById("today").style.color="rgba(0,211,255,1)"
}

function day2(){
    document.getElementById("day1").style.color="grey";
    document.getElementById("day1button").style.backgroundColor="grey";
    document.getElementById("day2").style.color="rgba(0,211,255,1)";
    document.getElementById("day2button").style.backgroundColor="rgba(0,211,255,1)"
}