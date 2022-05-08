console.log("news linked")

document.querySelector("#newBlog").addEventListener("submit",e=>{
    e.preventDefault();
    const blogObj = {
        title:document.querySelector("#title").value,
        post:document.querySelector("#post").value,
    }
    console.log(blogObj)
    fetch("/api/blogs/",{
        method:"POST",
        body:JSON.stringify(blogObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})