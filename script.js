let gumb=document.querySelector("button");
let input=document.querySelector("input");
let upozorenje=document.querySelector("h4");

const validateEmail=email=>{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
    return false;
}

gumb.addEventListener("click",()=>{
    if(validateEmail(input.value)){
        input.style="border-color:black;";
        upozorenje.style="display:none;"; 
    }
    else{
        input.style="border-color:red;";
        upozorenje.style="display:block;";
    }
});