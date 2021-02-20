let usersList = window.localStorage.getItem('users');
// console.log(window.location)
if (usersList != null) {
    usersList = JSON.parse(usersList);
    for (let elem of usersList) {
        let li = document.createElement('li');
        let divPersonImg = document.createElement('div');
        divPersonImg.setAttribute('class', 'personImg');
        let img = document.createElement('img');
        if (elem['Gender'] == 'Male') {
            img.setAttribute('src', './groom.png');
        } else {
            img.setAttribute('src', './woman.png')
        }
        divPersonImg.appendChild(img);
        li.appendChild(divPersonImg);
        let divPersonInfo = document.createElement('div');
        divPersonInfo.setAttribute('class', 'personInfo');
        for (let key in elem) {
            if (key != 'password' && key!='Gender') {
                let p = document.createElement('p');
                if(key=='FirstName'){
                    p.innerHTML = `<span>First Name: </span>
                    ${elem[key]}`;
                }else if(key=="LastName"){
                    p.innerHTML = `<span>Last Name: </span>
                    ${elem[key]}`;
                }else{
                    p.innerHTML = `<span>${key}: </span>
                    ${elem[key]}`;
                }
                divPersonInfo.appendChild(p);
            }
        }
        li.appendChild(divPersonInfo);
        list.appendChild(li)
    }
}


