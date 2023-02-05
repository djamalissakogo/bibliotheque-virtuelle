let signupBtn =document.getElementById('signupBtn')
let signinBtn =document.getElementById('signinBtn')
let nameFilied =document.getElementById('nameFilied')
let title =document.getElementById('title')
let Newcount =document.getElementById('Newcount')



signinBtn.onclick = function(){
    nameFilied.style.maxHeight = '0';
    title.innerHTML = "S'identifier";
    signupBtn.classList.add('disable');
    signinBtn.classList.remove('disable');
    

}

signupBtn.onclick = function(){
    nameFilied.style.maxHeight = '55px';
    title.innerHTML = "S'inscrire";
    signupBtn.classList.remove('disable');
    signinBtn.classList.add('disable');
    signinBtn.classList.remove('disable1');

}

