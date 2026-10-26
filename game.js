let btn =document.querySelectorAll('.box');

let turnX=true;
let winPattern=[[0,1,2],
                [0,3,6],
                [0,4,8],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6],
                [6,7,8]];


btn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        if(turnX){
            btn.innerText="O"
            turnX=false;
        }
        else{
            btn.innerText="X"
            turnX=true;
        }
        btn.disabled=true;
      checkWinner();
    });
    
    let clean=document.querySelector('#clear');
    clean.addEventListener('click',()=>{
        btn.innerText="";
});
});

let checkWinner=()=>{
    let msg=document.querySelector('#msg');
        for(let pattern of winPattern){
             let pos1= btn[pattern[0]].innerText
             let pos2= btn[pattern[1]].innerText
             let pos3= btn[pattern[2]].innerText
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1==pos2 && pos2==pos3){
               msg.style.display="initial";
               msg.innerText="Winner!"
              
            }
        }
    }
}

