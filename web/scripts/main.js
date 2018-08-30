var mImage = document.querySelector('img');

mImage.onclick = function(){
    var mSrc = mImage.getAttribute('src');
    if(mSrc === 'images/logo.png'){
        mImage.setAttribute('src','images/logo2.png');
    } else{
        mImage.setAttribute('src','images/logo.png');
    }
}

var mButton = document.querySelector('button');
var mHeading = document.querySelector('h1');

function setUserName(){
    var mName = prompt('Please enter your name.');
    localStorage.setItem('name',mName);
    mHeading.textContent = 'Mozilla is cool, ' + mName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else{
    var storedName = localStorage.getItem('name');
    mHeading.textContent = 'Mozilla is cool, ' + storedName;
}

mButton.onclick = function() {
    setUserName();
}