const button=document.querySelector(".btn");

button.onclick=function(){
    document.querySelector("#password").value="";
    const chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<10;i++){
    const pass=Math.floor((Math.random()*chars.length));
    document.querySelector("#password").value+=chars[pass];
    }
}
