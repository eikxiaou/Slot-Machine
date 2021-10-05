let emoji1=document.getElementById('emoji1');
let emoji2=document.getElementById('emoji2');
let emoji3=document.getElementById('emoji3');

let emojis=[
    '🤣','😗','😛','😉','🤑','🤭','😍'
];

function getrandomemoji()
 {
    return emojis[Math.floor(Math.random() * 6)];
 }

let animationid;
function updateanimation(newspeed){
    if(animationid) 
        clearInterval(animationid);
    
    animationid=setInterval(() => {
        emoji1.innerText=getrandomemoji()
        emoji2.innerText=getrandomemoji()
        emoji3.innerText=getrandomemoji()
    
    }, 1000/newspeed);



} 

let inputspeed=document.getElementById('inputspeed');
inputspeed.onchange = function(event){
    console.log("value changed",event.target.value);
    //document.documentelement => this is root of css
    document.documentElement.style.setProperty('--speed',event.target.value);
    updateanimation(event.target.value);
}