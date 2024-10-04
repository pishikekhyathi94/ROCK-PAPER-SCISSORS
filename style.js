let boxes=document.querySelectorAll(".box");
let upara=document.querySelector(".upara");
let cpara=document.querySelector(".cpara");
let but=document.querySelector(".but");
let uvalue=0;
let cvalue=0;
let value;
for(let box of boxes){
    box.addEventListener("click",()=>{ 
       value=box.getAttribute("id");
       winner(value);
       console.log("user",value);
    });
}

let winner=(userchoice)=>{
   
    let comchoice=computer();
    let winner=true;
    console.log("computer",comchoice);
    if(userchoice===comchoice){
         draw();
    }
    else{
        if(userchoice==="rock"){
            //sciscors,paper
             winner= comchoice==="paper"?false:true;

        }
        else if(userchoice==="paper"){
            winner=comchoice==="scissors"?false:true;
        }
        else{
            winner=comchoice==="rock"?false:true;
        }
        showwinner(winner);
    }

}


let computer=()=>{
    const option=["rock","paper","scissors"];
    let value=Math.floor(Math.random()*3);
    result=option[value];
    return result;
}

let showwinner=(answer)=>{
    if(answer){
        but.innerText="hey you rocked it";
        but.style.background="green";
        uvalue++;
        upara.innerText=uvalue;
        console.log(uvalue);
    }
    else{
        but.innerText="Sorry! you lost the game";
        but.style.background="red";
        cvalue++;
        cpara.innerText=cvalue;
        console.log(cvalue);
        }
}


const draw=()=>{
    but.innerText="it's a draw guys";
        but.style.background="yellow"
}



