let computerguess;
let userguess=[];
let useranswer=document.getElementById('textupdate');
let usernumberagain=document.getElementById('input');
let colorchange=document.getElementById('mainforcolor');
let back=new Audio("highvalue.mp3")
let audiowin=new Audio("success.mp3");
let audiolose=new Audio("evillaugh.mp3" )
let Audioopen=new Audio("clickbutton.mp3" )
let surprise = new Audio("surprisesound.mp3" )

let maths= ()=>{
computerguess=Math.floor(Math.random()*100);
document.getElementById('regame').style.display='none';
document.getElementById('game-area').style.display='none';
}

let pagestart =()=>{
    document.getElementById('game-area').style.display='block';
    document.getElementById('opening-page').style.display='none'
}

let easymode = () =>{
    numberofattempts=10;
    pagestart ();
    Audioopen.play()
}

let hardmode = () =>{
    numberofattempts=5;
    pagestart();
    Audioopen.play()
 }

 const backtonewgame = ()=>{
    window.location.reload();

 }

const gobacktoplay=()=>{
    document.getElementById('regame').style.display='block'
    usernumberagain.setAttribute("disabled",true)
}

const comparenum=()=>{
     const uservalue=Number(document.getElementById('input').value);
   userguess=[...userguess,uservalue];
   document.getElementById('guesses').innerHTML = userguess;

  if(userguess.length<numberofattempts){
     if(computerguess<uservalue){
    useranswer.innerHTML="Your Guess is High 😯🥱"
    usernumberagain.value=""
    back.play()
     }
else if(uservalue<computerguess){
    useranswer.innerHTML="Your Guess is Low 😁😆"   
    usernumberagain.value="" 
    surprise.play();
    }
else{
    useranswer.innerHTML="Yeah 🎉🎊!! You Got It🏆"
    usernumberagain.value=""
    gobacktoplay();
    audiowin.play();
    }
  }else{
    if(computerguess<uservalue){
        useranswer.innerHTML=`Game Over😥! Correct Number Was${computerguess}😂😂🤣`
        usernumberagain.value=""
        gobacktoplay()
        audiolose.play();
         }
    else if(uservalue<computerguess){
        useranswer.innerHTML=`Game Over😥! Correct Number Was ${computerguess}😂😂😂`   
        usernumberagain.value="" 
        gobacktoplay()   
        audiolose.play();
    }
    else{
        useranswer.innerHTML="Yeah 🎉🎊!! You Got It🏆"
        usernumberagain.value=""
        gobacktoplay()   
        audiowin.play();
    }
  }

document.getElementById('Attemptsno').innerHTML=userguess.length;
};
