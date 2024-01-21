var btn = document.getElementById('no');
var yesBtn = document.getElementById('yes');

yesBtn.addEventListener('click' , ()=>{
    window.location.href = 'yes.html';
})
let changePositon = ()=>{
    let leftPos = Math.floor(Math.random()*200)+1;
    let righPos =  Math.floor(Math.random()*200)+1;
    let topPos =  Math.floor(Math.random()*200)+1;
    // let bottomPos = Math.floor(Math.random()*400)+1;
    btn.style.left = leftPos+"px";
    btn.style.right = righPos+"px";
    btn.style.top = topPos+"px";
    // btn.style.bottom = bottomPos+"px";
}
btn.addEventListener('click' , changePositon)