///////////////////////////////////////////////////
const lang = document.querySelector("#lang")
const lang1 = document.querySelector("#lang1")
const lang2 = document.querySelector("#lang2")
const typeres = document.querySelector(".type-res")
const resultBtn = document.getElementById("result-btn")
const ready = document.getElementById("res-red")

let count1 = 1

//////////////////
let typeAndCount = {}
//////////////////////
const rdBtnsLang = document.querySelectorAll("#rd")
const langBtn = document.getElementById("lang-btn")
//////////////////////////
const mathBtn = document.getElementById("lang1-btn")
/////////////////////////////
const visualBtn = document.getElementById("lang2-btn")
/////////////////////////////


/////////////////////////////
langBtn.addEventListener("click",function(event){
    event.preventDefault();
    DisplayHide()

});
mathBtn.addEventListener("click",function(event){
    event.preventDefault();
    DisplayHide()

});
visualBtn.addEventListener("click",function(event){
    event.preventDefault();
    DisplayHide()

});
////////Display-Hide///////
function DisplayHide(){
    if(count1 == 1){
        lang.style.display = "none"
        lang1.style.display = "block"
    }
    else if(count1 == 2){
        lang1.style.display = "none"
        lang2.style.display = "block"
    }
    else if(count1 == 3){
        lang2.style.display = "none"
        ready.style.display = "block"
        resultBtn.style.display = "block" 
    }

    if(count1 < 4){
        count1++

    }
    console.log(count1)
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;    
}
const result = document.getElementById("result")
const resultPara = document.getElementById("result-para")
const sub = document.getElementById("sub")
let list = []

resultBtn.addEventListener("click",function(event){
    event.preventDefault();
    BtnCount(rdBtnsLang)
})

////////////////////////////////////
function BtnCount(btn){
   let count=0; 
   for(let i = 0; i<btn.length; i++){
        if(btn[i].checked) {
            if(btn[i].value == "1"){
                count+=0
            }
            else if (btn[i].value=="2"){
                count+=1
            }
            else{
                count+=2
            }
        }
    }
    if(count < 20){
        console.log("مهمل")
        result.textContent = "ولي امر شديد الاهمال في التربية"
    }
    else if(count >= 20 && count < 25){
        console.log("مقصر");
        result.textContent = "ولي امر مقصر في التربية"

    }
    else if (count >= 25 && count < 35){
        console.log("متوسط");
        result.textContent = "ولي امر متوسط في التربية"

    }
    else if (count >= 35 && count < 45){
        console.log(count)

        console.log("جيد");
        result.textContent = "ولي امر جيد في التربية"

    } 
    else if (count >= 45 && count <= 50){
        console.log("رائع");
        console.log(count)
        result.textContent = "ولي امر مبدع في التربية"

    }  
    if(count1 == 4){
        ready.style.display = "none"
        typeres.style.display = "block"
        
    }
}


