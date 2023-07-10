var a = document.querySelectorAll('.accordion1 div:nth-child(2)');
a[0].style.display='none'
var b = document.querySelectorAll('.accordion1 div:nth-child(1)>div')[0];
var cr = document.createElement('span');
cr.setAttribute('class','close')
var cr1 = document.createElement('span');
cr1.setAttribute('class','open')
cr1.style.display="none"
b.append(cr)
b.append(cr1)
var c = document.getElementsByClassName('close')[0];
c.addEventListener("click",clse);
function clse(){
    document.querySelectorAll('.accordion1 div:nth-child(1)>div>span')[0].style.display="none"
    document.getElementsByClassName('open')[0].style.display="block"
    a[0].style.display='block';
}
var d = document.getElementsByClassName('open')[0];
d.addEventListener("click",open);
async function open(){
    a[0].style.display='none'
    document.querySelectorAll('.accordion1 div:nth-child(1)>div>span')[0].style.display="block"
    document.getElementsByClassName('open')[0].style.display="none"

}

