let elForm = document.querySelector(".registr-form")

elForm.addEventListener("submit", (evt) =>{
    evt.preventDefault()

    let data = {
        id:passwords.length + 1,
        username:evt.target.username.value,
        password:evt.target.password.value,
    }
    let Users = passwords.some(item => item.username == data.username || item.password == data.password)

      elForm.lastElementChild.previousElementSibling.innerHTML = `
     <img class="mx-auto scale-[1.4] " src="./images/loading.png" alt="logo" width="30" height="30"> 
     `
    if(Users){
        setTimeout(() =>{
            elForm.lastElementChild.previousElementSibling.innerHTML = `
            Регистрация
            `
          alert("Login yoki parolingiz boshqa foydalanuvchinikiga o‘xshash. Iltimos, yagona va noyob ma’lumot kiriting.");
        },1000)
    }
    else{
        passwords.push(data)
        localStorage.setItem("passwords",JSON.stringify(passwords))
          setTimeout(() =>{
     elForm.lastElementChild.previousElementSibling.innerHTML = `
      Регистрация
     `
     location.pathname = "index.html"
    },1500)

    }
})
