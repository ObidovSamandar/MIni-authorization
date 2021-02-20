let usersList=window.localStorage.getItem('users');
console.log(window.location)
if(usersList!=null){
    usersList=JSON.parse(usersList);
    for(let elem of usersList){
        let li=document.createElement('li');
        
        for(let key in elem){
            if(key!='password'){
                let p=document.createElement('p');
                p.innerHTML=`<span>${key}</span>:${elem[key]}`;
                li.appendChild(p);
            }
        }

        list.appendChild(li);
    }
}