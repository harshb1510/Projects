function changeColor(){
    document.body.style.backgroundColor=
    'rgb('+Math.round(Math.random()*255)+
    ','+ Math.round(Math.random()*255)+
    ','+ Math.round(Math.random()*255)+')';
    document.body.firstElementChild.style.color='rgb('+Math.round(Math.random()*255)+
    ','+ Math.round(Math.random()*255)+
    ','+ Math.round(Math.random()*255)+')';
    document.body.firstElementChild.style.borderColor='rgb('+Math.round(Math.random()*255)+
    ','+ Math.round(Math.random()*255)+
    ','+ Math.round(Math.random()*255)+')';
}
