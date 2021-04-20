var trial=5;
function even(n){
  if(trial<1){

    alert("You have already completed your all trial");
    return;


  }
  var str=n.toString();
  document.getElementById(str).innerHTML="X";
  var char1=document.getElementById("1").innerHTML;
  var char2=document.getElementById("2").innerHTML;
  var char3=document.getElementById("3").innerHTML;
  var char4=document.getElementById("4").innerHTML;
  var char5=document.getElementById("5").innerHTML;
  var char6=document.getElementById("6").innerHTML;
  var char7=document.getElementById("7").innerHTML;
  var char8=document.getElementById("8").innerHTML;
  var char9=document.getElementById("9").innerHTML;

  if(char1==char2 && char2==char3){
    if(char3=="X"){
    document.getElementById("demo").innerHTML="Hurray You Win";
    document.getElementById("win").style.display="block";
    document.getElementById("win").style.display="block";
    document.getElementById("container").style.opacity=0.5;
    document.getElementById("1").style.background="#d4babd";
    document.getElementById("2").style.background="#d4babd";
    document.getElementById("3").style.background="#d4babd";
    return;


  }
  if(char3=="O"){
    document.getElementById("demo").innerHTML="Computer Win";
    document.getElementById("win").style.display="block";
    document.getElementById("win").style.display="block";
    document.getElementById("container").style.opacity=0.5;
    document.getElementById("1").style.background="#d4babd";
    document.getElementById("2").style.background="#d4babd";
    document.getElementById("3").style.background="#d4babd";
    return;
  }
  }
  if(char1==char4 && char4==char7){
    if(char7=="X"){
    document.getElementById("demo").innerHTML="Hurray You Win";
    document.getElementById("win").style.display="block";
    document.getElementById("win").style.display="block";
    document.getElementById("container").style.opacity=0.5;
    document.getElementById("1").style.background="#d4babd";
    document.getElementById("4").style.background="#d4babd";
    document.getElementById("7").style.background="#d4babd";
    return;

  }
  if(char7=="O"){
    document.getElementById("demo").innerHTML="Computer Win";
    document.getElementById("win").style.display="block";
    document.getElementById("win").style.display="block";
    document.getElementById("container").style.opacity=0.5;
    document.getElementById("1").style.background="#d4babd";
    document.getElementById("4").style.background="#d4babd";
    document.getElementById("7").style.background="#d4babd";
    return;


  }
  }
  if(char3==char5 && char5==char7){
    if(char7=="X"){
      document.getElementById("demo").innerHTML="Hurray You Win";
      document.getElementById("win").style.display="block";
      document.getElementById("win").style.display="block";
      document.getElementById("container").style.opacity=0.5;
      document.getElementById("3").style.background="#d4babd";
      document.getElementById("5").style.background="#d4babd";
      document.getElementById("7").style.background="#d4babd";
      return;

    }
  if(char7=="O"){
    document.getElementById("demo").innerHTML="Computer Win";
    document.getElementById("win").style.display="block";
    document.getElementById("win").style.display="block";
    document.getElementById("container").style.opacity=0.5;
    document.getElementById("3").style.background="#d4babd";
    document.getElementById("5").style.background="#d4babd";
    document.getElementById("7").style.background="#d4babd";
    return;

  }
  }
  if(char1==char5 && char5==char9){
    if(char9=="X"){
      document.getElementById("demo").innerHTML="Hurray You Win";
      document.getElementById("win").style.display="block";
      document.getElementById("win").style.display="block";
      document.getElementById("container").style.opacity=0.5;
      document.getElementById("1").style.background="#d4babd";
      document.getElementById("5").style.background="#d4babd";
      document.getElementById("9").style.background="#d4babd";
      return;

  }
  if(char9=="O"){
    document.getElementById("demo").innerHTML="Computer Win";
    document.getElementById("win").style.display="block";
    document.getElementById("win").style.display="block";
    document.getElementById("container").style.opacity=0.5;
    document.getElementById("1").style.background="#d4babd";
    document.getElementById("5").style.background="#d4babd";
    document.getElementById("9").style.background="#d4babd";
    return;

  }
  }
  if(char2==char5 && char5==char8){
    if(char8=="X"){
      document.getElementById("demo").innerHTML="Hurray You Win";
      document.getElementById("win").style.display="block";
      document.getElementById("win").style.display="block";
      document.getElementById("container").style.opacity=0.5;
      document.getElementById("2").style.background="#d4babd";
      document.getElementById("5").style.background="#d4babd";
      document.getElementById("8").style.background="#d4babd";
      return;

  }
  if(char8=="O"){
    document.getElementById("demo").innerHTML="Computer Win";
    document.getElementById("win").style.display="block";
    document.getElementById("win").style.display="block";
    document.getElementById("container").style.opacity=0.5;
    document.getElementById("2").style.background="#d4babd";
    document.getElementById("5").style.background="#d4babd";
    document.getElementById("8").style.background="#d4babd";
    return;

  }
  }
  if(char3==char6 && char6==char9){
    if(char9=="X"){
      document.getElementById("demo").innerHTML="Hurray You Win";
      document.getElementById("win").style.display="block";
      document.getElementById("win").style.display="block";
      document.getElementById("container").style.opacity=0.5;
      document.getElementById("3").style.background="#d4babd";
      document.getElementById("6").style.background="#d4babd";
      document.getElementById("9").style.background="#d4babd";
      return;

  }
  if(char9=="O"){
    document.getElementById("demo").innerHTML="Computer Win";
    document.getElementById("win").style.display="block";
    document.getElementById("win").style.display="block";
    document.getElementById("container").style.opacity=0.5;
    document.getElementById("3").style.background="#d4babd";
    document.getElementById("6").style.background="#d4babd";
    document.getElementById("9").style.background="#d4babd";
    return;

  }
  }
  if(char4==char5 && char5==char6){
    if(char6=="X"){
      document.getElementById("demo").innerHTML="Hurray You Win";
      document.getElementById("win").style.display="block";
      document.getElementById("win").style.display="block";
      document.getElementById("container").style.opacity=0.5;
      document.getElementById("4").style.background="#d4babd";
      document.getElementById("5").style.background="#d4babd";
      document.getElementById("6").style.background="#d4babd";
      return;

    }
  if(char6=="O"){
    document.getElementById("demo").innerHTML="Computer Win";
    document.getElementById("win").style.display="block";
    document.getElementById("win").style.display="block";
    document.getElementById("container").style.opacity=0.5;
    document.getElementById("4").style.background="#d4babd";
    document.getElementById("5").style.background="#d4babd";
    document.getElementById("6").style.background="#d4babd";
    return;

  }
  }
  if(char7==char8 && char8==char9){
    if(char9=="X"){
      document.getElementById("demo").innerHTML="Hurray You Win";
      document.getElementById("win").style.display="block";
      document.getElementById("win").style.display="block";
      document.getElementById("container").style.opacity=0.5;
      document.getElementById("7").style.background="#d4babd";
      document.getElementById("8").style.background="#d4babd";
      document.getElementById("9").style.background="#d4babd";
      return;

    }
  if(char9=="O"){
    document.getElementById("demo").innerHTML="Computer Win";
    document.getElementById("win").style.display="block";
    document.getElementById("win").style.display="block";
    document.getElementById("container").style.opacity=0.5;
    document.getElementById("7").style.background="#d4babd";
    document.getElementById("8").style.background="#d4babd";
    document.getElementById("9").style.background="#d4babd";
    return;

  }
  }
  var fin="";
if(trial>1){
  while(true){
    var rand=Math.floor(Math.random() * 9) + 1;
    var st=rand.toString();
    var chek=document.getElementById(st).childNodes.length;
    if(chek==1){
      continue;
    }
    else{
      fin=st
      break;
    }
  }
    document.getElementById(fin).innerHTML="O";
  }
  else if(trial==1){
    document.getElementById(str).innerHTML="X";
  }

    trial-=1;
  /*var first=document.getElementById("1").innerHTML;
  var second=document.getElementById("2").innerHTML;
  var third=document.getElementById("3").innerHTML;
  var fourth=document.getElementById("4").innerHTML;
  var fifth=document.getElementById("5").innerHTML;
  var sixth=document.getElementById("6").innerHTML;
  var seventh=document.getElementById("7").innerHTML;
  var eight=document.getElementById("8").innerHTML;
  var nine=document.getElementById("9").innerHTML;
  if(first==second==third){
    document.getElementById("demo").innerHTML="win";

  }
  */
/*var arr=document.getElementsByClassName("in");
for(var i=0;i<=6;i=i+3){
  if(arr[i]==arr[i+1]==arr[i+2]){
    document.getElementById("demo").innerHTML="win";
  }
}
for(var i=0;i<3;i++){
  if(arr[i]==arr[i+3]==arr[i+6]){
    document.getElementById("demo").innerHTML="win";
  }
}
if(arr[0]==arr[4]==arr[8] ||arr[2]==arr[4]==arr[6]){
  document.getElementById("demo").innerHTML="win";

}*/

}
function again(){
  location.reload();
}
