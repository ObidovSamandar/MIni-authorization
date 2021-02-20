
// SingIn SingOut slider
let checker=true;   
let signInButtonChanges=document.getElementById('signButton');;
let leftFixedContent=document.querySelector('.leftfixed-content');
let rightFixedContent=document.querySelector('.rightfixedcontent2');
let newLeftContent=document.querySelector('.newleft');
let signInToOut=document.querySelector('#signButton .signInBtn');
let signOutToIn=document.querySelector('#signButton .signInOut');
let leftTopText=document.querySelector('.leftTopText');
let formContent=document.querySelector('.form-content');
let newLeftInnerContent=document.querySelector('.newleftInner');
let rightTopText=document.querySelector('.rightTopText');

let arrayOfVariables=[
    leftFixedContent,rightFixedContent,newLeftContent,signInToOut,signOutToIn,leftTopText,
    formContent,newLeftInnerContent,rightTopText
]
signInButtonChanges.addEventListener('click',()=>{
    if(checker==true){
            arrayOfVariables.forEach((changingVariables)=>{
            changingVariables.classList.add('active');
            })
        checker=false;
        }else if(checker==false){
            arrayOfVariables.forEach((changingVariables)=>{
            changingVariables.classList.remove('active');
        });
        checker=true;
        }
});



let form=document.getElementById('registerForm');
let usersList=[];
let user={};
let storedUsers=window.localStorage.getItem('users');
userGender.value=null;

// FormChildrensValidation
let formChildren=form.children;
for(let i=0; i<formChildren.length-1; i++){
    if(formChildren[i].className!='formSignBtn'){
        formChildren[i].onkeyup=(e)=>{
            if(errorCatcher!=""){
                errorCatcher.innerHTML=null
                errorCatcher.style.opacity='0';
            }
            if(e.target.id!='userGender'){
                if(e.target.value!=""){
                    e.target.style.borderBottom='1px solid green';
                }else{
                    e.target.style.borderBottom='1px solid red';
                }
            }
        }
    }
}

// GenderValidation
userGender.onclick=(e)=>{
    if(e.target.value!=""){
        e.target.style.borderBottom='1px solid green';
    }else{
        e.target.style.borderBottom='1px solid red';
    }
}

let fileLocation=window.location;
let z=fileLocation.href.substring(fileLocation.href.lastIndexOf('/'),fileLocation.href.length);
//Form Submission
form.onsubmit=(e)=>{
    e.preventDefault();
    try{
        if(userName.value=="" || userSurName.value=="" || userAge.value=="" || userGender.value=="" || password.value==""){
            for(let i=0; i<formChildren.length-1; i++){
                if(formChildren[i].className!='formSignBtn'){
                    if(formChildren[i].lastElementChild.value==""){
                        formChildren[i].lastElementChild.style.borderBottom='1px solid red';
                    }
                }
            }
            throw new Error('Please Fill The Form')
        }else{
            user.Name=userName.value;
            user.Surname=userSurName.value;
            user.Age=userAge.value;
            user.Gender=userGender.value;
            user.Username=accountName.value;
            user.password=password.value;


            if(JSON.parse(storedUsers)!=null){
                usersList=JSON.parse(storedUsers);
            }
            usersList.push(user);
            user={}
            window.localStorage.setItem('users',JSON.stringify(usersList))

            errorCatcher.style.opacity='1';
            errorCatcher.innerHTML='Signed Up'
            errorCatcher.style.color='#42ba96';
           setTimeout(() => {
                errorCatcher.style.opacity='0';
           },800);
          
          setTimeout(() => {
            fileLocation.href=fileLocation.href.replace(z,'/home.html')
          },600);

            userName.value=null;
            userSurName.value=null;
            userAge.value=null;
            userGender.value=null;
            password.value=null;
            accountName.value=null;


            for(let i=0; i<formChildren.length-1; i++){
                if(formChildren[i].className!='formSignBtn'){
                    formChildren[i].lastElementChild.style.borderBottom='1px solid #BDBDBD';    
                }
            }
        }
    }
    catch(e){
        errorCatcher.style.opacity='1';
        errorCatcher.innerHTML=e.message;
        errorCatcher.style.color='#df4759';
    }
}


// Sign In Form
let loginForm=logInForm.children;
for(let i=0; i<loginForm.length-1; i++){
    if(loginForm[i].className!='formSignBtn'){
        loginForm[i].onkeyup=(e)=>{
            if(errorCatcher!=""){
                errorHandler.style.opacity='0';
            }
            if(e.target.id!='userGender'){
                if(e.target.value!=""){
                    e.target.style.borderBottom='1px solid green';
                }else{
                    e.target.style.borderBottom='1px solid red';
                }
            }
        }
    }
}
let getData = window.localStorage.getItem('users');
try {
    if (getData!= null) {
        getData = JSON.parse(getData);
        personName.removeAttribute('disabled')
        userpassword.removeAttribute('disabled')
        errorHandler.style.opacity='0';
    } else {
        personName.setAttribute('disabled','disabled');
        userpassword.setAttribute('disabled','disabled');
        throw new Error('There is no any Data') 
    }
}
catch (error) {
    errorHandler.style.opacity='1';
    errorHandler.innerText=error.message
}

function checking(){
    let i=0;
    let resultChecker=true;
    try{
        while(i<getData.length){
            if(getData[i].Username==personName.value && getData[i].password==userpassword.value){
                resultChecker=true;
                break;
            }else{
                i++;
                resultChecker=false;
            }
        }
        if(resultChecker){
            personName.value=null;
            userpassword.value=null;
            for(let i=0; i<loginForm.length-1; i++){
                if(loginForm[i].className!='formSignBtn'){
                    loginForm[i].lastElementChild.style.borderBottom='1px solid #BDBDBD';    
                }
            }
            setTimeout(() => {
                fileLocation.href=fileLocation.href.replace(z,'/home.html');
            },1000);
        }else {throw new Error('Please Check it')}
    }
    catch(e){
        errorHandler.style.opacity='1';
        errorHandler.innerText=e.message
    }
}


logInForm.onsubmit=(e)=>{
    e.preventDefault();
    try{
        if(personName.value!="" && userpassword.value!=""){
            checking();
        }else{
            throw new Error("Please Enter Your Information!")
        }
    }
    catch(e){
        errorHandler.style.opacity='1';
        errorHandler.innerText=e.message;
    }
    
}