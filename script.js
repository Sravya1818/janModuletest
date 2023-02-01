let image1 = document.querySelector('#image1');
let formm = document.querySelector('form');
image1.addEventListener('click', imagefunc1);
function imagefunc1(){
  if(formm.style.display === 'none'){
    formm.style.display = 'block' ;
  }
  else{
    formm.style.display = 'none';
  }
}

let image2 = document.querySelector('#image2');
image2.addEventListener('click', imagefunc2)
function imagefunc2(){
    let fname=document.getElementById('fname').value;
    let email=document.getElementById('email').value;
    let username=document.getElementById('username').value;
    document.writeln("your name:"+ fname); 
    
    document.writeln("your email:" + email);

    document.writeln("username:" + username);
}





let image3 = document.querySelector('#image3');
image3.addEventListener('click',imagefunc3)

function imagefunc3(){
  if(dice.style.display === 'none'){
    dice.style.display = 'block' ;
  }
  else{
    dice.style.display = 'none';
  }
}
dice.addEventListener('click',randomfunc)

function randomfunc(){
  let randomnumber = (Math.floor(Math.random()*6))+1 ;
  console.log(randomnumber);
}






//   let sum=0;
//   let clicks=0; 
//   dice.onclick=function(){
//   if(clicks<4){
//   sum=sum+randomnumber;
//    clicks++;
//   }
//   if(sum>10){
//     function myfunction(){
//       document.getElementById("image4").innerHTML = "YOU CAN CLICK ON ME!";
//     }
//   }
//   else{
//    randomfunc();
//   }
// }


image4.addEventListener('click',randomtextfunc)
function randomtextfunc(){
  let capital_digit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
  let small_digit = "abcdefghijklmnopqrstuvwxyz" 
  let characters = capital_digit + small_digit 

  let coupon = ""
  for(let i=0; i<12; i++){
      let random = Math.floor(Math.random()*characters.length) // 4
      coupon = coupon + characters[random]
  }
  console.log(coupon);
  if(congrats.style.display === 'none'){
    congrats.style.display = 'block' ;
  }
  else{
    congrats.style.display = 'none';
  }
}




