
const inputBox= document.querySelector('.inputBox');
const thanku= document.querySelector('.thankBox ');
const cName= document.querySelector('.name');
const cdate = document.querySelector('.date');
const validNum = document.querySelector('.cardValidNumber');
const continueBtn = document.querySelector('.thankBox').lastElementChild;


let message="";
let flag="true";
const ConfirmBtn= document.querySelector('#cBtn');
function seterror(id,name){
    const el= id.nextElementSibling;
     el.innerHTML=name;
     flag="false";
}

function validate(){
    const Name= document.querySelector('#fname');
    const ValueName = Name.value;
    if(ValueName.length<2){
        message="*incorrect name";
        seterror(Name,message);

    }
    const CardNumber= document.querySelector('#fnumber')
    const ValueNumber= CardNumber.value;
    if(ValueNumber.length!=22){
        message="*incorrect formate";
        seterror(CardNumber,message);
    }

    const CardMonth= document.querySelector('#month')
    const ValueMonth= CardMonth.value;
    if(13<ValueMonth || ValueMonth<0){
        message="*incorrect month";
        seterror(CardMonth,message);
    }

    const CardYear= document.querySelector('#year')
    const ValueYear= CardYear.value;
    if(2030<ValueYear || ValueYear<2000){
        message="*incorrect year";
        seterror(CardYear,message);
    }

    const CardDigit= document.querySelector('#threedigit')
    const ValueDigit= CardDigit.value;
    if(ValueDigit.length>3|| ValueDigit.length<0){
        message="*incorrect";
        seterror(CardDigit,message);
    }

    if(ValueName ==""){
        seterror(Name,"*required");
    }

    if(ValueNumber ==""){
        seterror(CardNumber,"*required");
    }

    if(ValueMonth ==""){
        seterror(CardMonth,"*required");
    }

    if(ValueYear ==""){
        seterror(CardYear,"*required");
    }

    if(ValueDigit ==""){
        seterror(CardDigit,"*required");
    }

    if(flag== "true"){
        inputBox.style.display='none';
        thanku.style.display='block';
        thanku.style.display='flex'
        cName.innerHTML=ValueName;
        cdate.innerHTML=ValueMonth+"/"+ValueYear;
        validNum.innerHTML=ValueNumber;
        Name.value="";
        CardNumber.value="";
        CardMonth.value="";
        CardYear.value="";
        CardDigit.value="";
       
    }

}

continueBtn.addEventListener('click',()=>{
    inputBox.style.display='block';
    inputBox.style.display='flex'
    thanku.style.display='none';
    cName.innerHTML="Alex";
    cdate.innerHTML="8/12";
    validNum.innerHTML="0000 0000 0000 0000";
})
ConfirmBtn.addEventListener('click',validate);

