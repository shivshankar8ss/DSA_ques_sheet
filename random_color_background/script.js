const start = document.querySelector('.start');
const end = document.querySelector('.end');

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let change;
const startChange = function(){
    if(!change){
  change = setInterval(changeColor,1000);
    }
    // alert('Background changer initialized.')
    function changeColor(){
      document.body.style.backgroundColor = randomColor();
    }
};

const endChange = function(){
    // alert('Background changer stopped.')
    clearInterval(change);
    change=null;
};

start.addEventListener('click',startChange);
end.addEventListener('click',endChange);
