let elForm = document.querySelector(".login-form")

let passwordSaved = JSON.parse(localStorage.getItem("passwords"))
elForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let data = {
        username:evt.target.username.value,
        password:evt.target.password.value
    }

    elForm.lastElementChild.previousElementSibling.innerHTML = `
     <img class="mx-auto scale-[1.4]" src="./images/loading.png" alt="logo" width="30" height="30">
    `
    let Users =  passwordSaved ?  passwordSaved.some(item => item.username == data.username && item.password == data.password) : passwords.some(item => item.username == data.username && item.password == data.password)
    let User =  passwordSaved ?  passwordSaved.find(item => item.username == data.username && item.password == data.password) : passwords.find(item => item.username == data.username && item.password == data.password)
  
    

    localStorage.setItem("user",JSON.stringify(User))

     setTimeout(() =>{
     elForm.lastElementChild.previousElementSibling.innerHTML = `
       Войти
     `
     if(Users){
        location.pathname = "/admin.html"
     }
     else{
        alert("Siz kiritgan username yoki parol xato")
     }
    },1500)

})
