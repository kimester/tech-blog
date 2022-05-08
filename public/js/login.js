console.log("linked")
document.querySelector("#login").addEventListener("submit",e=>{
    preventDefault();
    const userObj = {
username:document.querySelector("#loginUsername").value,
password:document.querySelector("#loginPassword").value,
    }
    console.log(userObj)
})