

window.addEventListener("load",function(){
    // registerform part

    let registerForm = document.getElementById('registerForm');

    registerForm.addEventListener("submit", (event)=> {
        event.preventDefault();

        let formData = new FormData(registerForm) ;

        let name = formData.get("r_name");
        let email = formData.get("r_email");
        let username = formData.get("r_username");
        let password = formData.get("r_password");
        let mobile = formData.get("r_mobilenumber");
        let description = formData.get("r_description");

        let obj ={
            name,
            email,
            username,
            password,
            mobile,
            description
        };
        let payload = JSON.stringify("obj") ;

        register(payload) ;
    })

    // login
    const loginForm =document.getElementById("loginForm") ;
    loginForm.addEventListener("submit", (event) =>{
        event.preventDefault();

        let formData = new FormData(loginForm)

        let username = formData.get("l_username");  
        let password = formData.get("l_password") ;

        let obj ={
            username,
            password
        }

        localStorage.setItem("username",username);
        
        let payload = JSON.stringify("obj") ;
        login(payload)

    })
}) ;

const register  =(data) => {
    //we need to send/POST data to server 

    fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
        method : "POST" ,
        headers: {
            "Content-Type": "application/JSON"
        },
        body:data 
    })
    .then((res) =>res.json() )
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    
}

const login = (data) => {
    //  We have Send/Post to server 

    fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
        method : "POST" ,
        headers: {
            "Content-Type": "application/JSON"
        },
        body:data 
    })
    .then((res) =>res.json() )
    .then((data) => {
        if(data.error)
        {
         console.log(data.message);
        }
        else
        {
            localStorage.setItem("token",data.token)
            window.location.href = "profile.html"
        }
    })
    .catch((err) => console.log(err))

    
}