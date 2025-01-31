function passwordgen(lenght,includelowercasechr,includeuppercasechr,includenumbers,includespecialcase){
    const lowercase="abcdefghijklmnopqrstuvwxyz";
    const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="1234567890";
    const specialchrs="!@#$%^&*()_+";
    if(lenght<5)
    {
        return ('the length of the password should be alesat 5');
    }
    let accchrs="";
    let password="";
    accchrs+=includelowercasechr?lowercase:"";
    accchrs+=includespecialcase?specialchrs:"";
    accchrs+=includeuppercasechr?uppercase:"";
    accchrs+=includenumbers?numbers:"";
    if(accchrs=="")
    {
        return("atleast one set should be choosen");
    }
    for(let i=0;i<lenght;i++)
    {
       const index=Math.floor(Math.random()*accchrs.length)
       password+=accchrs[index];
    }    
    
    document.querySelector("#password").textContent=password;
    return password
    
}
function low(){
    includelowercasechr=!includelowercasechr;   
    document.querySelector("#lower").style.backgroundColor="darkorange"    
    if(includelowercasechr)
    {
        document.querySelector("#lower").textContent="ALLOWED LOWERCASE LETTERS"
        document.querySelector("#lower").style.backgroundColor="darkorange"
    }
    else{
        document.querySelector("#lower").textContent="NOT ALLOWED LOWERCASE LETTERS"
        document.querySelector("#lower").style.backgroundColor="burlywood" 
    }
}
function upper(){
    includeuppercasechr=!includeuppercasechr;  
    if(includeuppercasechr)
        {
            document.querySelector("#upper").textContent="ALLOWED UPPERCASE LETTERS"
            document.querySelector("#upper").style.backgroundColor="chartreuse" 
        }
        else{
            document.querySelector("#upper").textContent="NOT ALLOWED LOWERCASE LETTERS"
            document.querySelector("#upper").style.backgroundColor="limegreen" 
        }     
}
function number(){
    includenumbers=!includenumbers;   
    if(includenumbers)
        {
            document.querySelector("#number").textContent="ALLOWED NUMBERS"
            document.querySelector("#number").style.backgroundColor="darkcyan" 
        }
        else{
            document.querySelector("#number").textContent="NUMBERS NOT ALLOWED"
            document.querySelector("#number").style.backgroundColor="darkred" 
        }     
}
function special(){
    includespecialcase=!includespecialcase;      
    if(includespecialcase)
        {
            document.querySelector("#special").textContent="ALLOWED SPECIAL CHARACTER"
            document.querySelector("#special").style.backgroundColor="crimson" 
        }
        else{
            document.querySelector("#special").textContent="NOT ALLOWED SPECIAL CHARACTER"
            document.querySelector("#special").style.backgroundColor="navy" 
        }  
}
let l=window.prompt("enter the lenght of password you want to create");
const passlength=Number(l);
let includelowercasechr=true;
let includeuppercasechr=true;
let includenumbers=true;
let includespecialcase=true;
function call(){
    
    passwordgen(passlength,includelowercasechr,includeuppercasechr,includenumbers,includespecialcase);
}

