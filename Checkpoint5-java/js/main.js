var plus=Array.from(document.getElementsByClassName("boutonPlus"))
var moins=Array.from(document.getElementsByClassName("boutonMoins"))
var nombreClics = Array.from(document.getElementsByClassName("nombreClics"))
var summ= document.getElementById("sum")
var prix = document.getElementsByClassName("prix")


for (let i=0; i< plus.length;i++){
  plus[i].addEventListener("click",function(){
    nombreClics[i].innerHTML=Number(nombreClics[i].innerHTML)+1
    somme()

  })
 
}
 
for (let i=0; i<moins.length;i++){
   moins[i].addEventListener("click",function(){
     if (nombreClics[i].innerHTML >0)
    nombreClics[i].innerHTML=Number(nombreClics[i].innerHTML)-1
    somme()
     })
  
}

function somme(){
let sum=0
for(let i=0; i< nombreClics.length;i++){
sum+=nombreClics[i].innerHTML*prix[i].innerHTML
console.log(sum)
}
summ.innerHTML=sum
return summ.innerHTML
}