function roll(Buttt){
  var But1=document.getElementById(Buttt);
  var num=Math.floor((Math.random()*10))%6+1;
  But1.innerHTML=new Number(num);
}
function Clicked(buttonId){
  if(buttonId=="button2") roll("button2");
  else if(buttonId="button1") roll("button1");
}
function declareWinner(button1 , button2){
   but1=document.getElementById("button1");
   but2=document.getElementById("button2");
    const buttonText1 = but1.textContent;
    const buttonNumber1 = buttonText1.match(/\d+/)[0];
    const buttonText2 = but2.textContent;
    const buttonNumber2 = buttonText2.match(/\d+/)[0];
    if(buttonNumber1>buttonNumber2) alert("Player1 is Right");
    if(buttonNumber1<buttonNumber2) alert("Player2 is Right");
    if(buttonNumber1==buttonNumber2) alert("Nobody wins , Start dice fight again");
  
}