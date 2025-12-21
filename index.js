let s=document.querySelector("#plues")
let m= document.querySelector("#minios")
let d=document.querySelector(".display")


s.addEventListener("click",increment)
m.addEventListener("click",decrement)

function increment(){
    d.textContent=Number(d.textContent)
   
    if (d.textContent>=20){
        d.style.color='green';
    }
   else{
     
   }
    d.textContent++
}

function decrement(){

if (d.textContent<=20){
        d.style.color='red';
    }
else{

}
    d.textContent--
} 


