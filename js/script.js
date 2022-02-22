


const acc = document.querySelectorAll(".accordion");
const btnResult = document.querySelector(".show__result");
const inputs = document.querySelectorAll(".quess__inp");
const out = document.querySelector(".out__result");

const getAns = ()=>{
let arrAns = [];
localStorage.setItem("ans",JSON.stringify([]))
inputs.forEach(item => {
  item.addEventListener("change", function(event){
    if(this.dataset.ans === "true"){
      arrAns.push(1);
      localStorage.setItem("ans",JSON.stringify(arrAns))
    }else {
      arrAns.push(0);
      localStorage.setItem("ans",JSON.stringify(arrAns))
    }
  })
})
}
getAns();

btnResult.addEventListener("click",function(){
  sumArr()
})

function sumArr(){
  let arr = JSON.parse(localStorage.getItem("ans"))
  let sum = 0;
  let percent = "0%";
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  out.innerHTML = `Ваш результат ${sum} баллов, ${sum * 20}%`;
}

acc.forEach(function(item){
  item.addEventListener("click", function(){
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else{
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  })
})

