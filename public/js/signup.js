console.log("signup linked");

document.querySelector("#signup").addEventListener("submit",e=>{
  e.preventDefault();
  const userObj = {
    username:document.querySelector("#signupUsername").value,
    password:document.querySelector("#signupPassword").value,
  }
  console.log(userObj)
  fetch("/api/users/signup",{
      method:"POST",
      body:JSON.stringify(userObj),
      headers:{
          "Content-Type":"application/json"
      }
  }).then(res=>{
      if(res.ok){
          console.log("signup in!")
      } else {
          alert("trumpet sound")
      }
  })
})