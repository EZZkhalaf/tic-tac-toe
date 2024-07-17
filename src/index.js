let boxes=document.querySelectorAll(".elements");


let turn = "X";
let isGameOver = false;





boxes.forEach(e => {
    e.innerHTML="";
    e.addEventListener("click" , ()=>{
        if(!isGameOver && e.innerHTML ===""){
            e.innerHTML=turn;
            checkWin();
            checkDraw();
            changeUser();
            
        }

    })

})

const changeUser = ()=> {
    if (turn === "X"){
        turn="O";
        document.querySelector("#player").innerHTML='<p>this is O turn';
    }else{
        turn="X";
        document.querySelector("#player").innerHTML='<p>this is X turn';

    }
}


const checkWin = ()=> {
    let win=[
        [0,1,2] , [3,4,5] , [6,7,8],
        [0,3,6] , [1,4,7] , [2,5,8],
        [0,4,8] , [2,4,6] 
    ]
    for(let i=0;i<win.length;i++){
        let v0 = boxes[win[i][0]].innerHTML;
        let v1 = boxes[win[i][1]].innerHTML;
        let v2 = boxes[win[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v1 === v2){
            isGameOver = true;
            document.querySelector("#result1").innerHTML= turn + ' win !!';
            document.querySelector("#play-again").style.display="inline";
            for(let j=0;j<3;j++){
                boxes[win[i][j]].style.backgroundColor="darkgray";
                boxes[win[i][j]].style.color="#000  ";

            }

        }
    }
}

const checkDraw = () =>{
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach( e =>{
            if (e.innerHTML === "") isDraw=false;
        })
        if(isDraw){
            isGameOver = true;
            document.querySelector("#result1").innerHTML= 'Draw!!';
            document.querySelector("#play-again").style.display="inline";
        }

    }
}

document.querySelector("#play-again").addEventListener('click', ()=>{
    turn="X";
    isGameOver= false;
    document.querySelector("#player").innerHTML = "";
    document.querySelector("#result1").innerHTML = "";
    document.querySelector("#play-again").style.display='none';
    boxes.forEach( n => {
        n.innerHTML = "";
        n.style.removeProperty("background-color");
        n.style.removeProperty("color");
    })
    
})