console.log("news linked");

 const title = document.querySelector("#title");
  const body = document.querySelector("#body");

document.querySelector("#newBlog").addEventListener("submit", (e) => {
  e.preventDefault();

  const blogObj = {
    title: title.value,
    body: body.value,
  };
 

  console.log(blogObj);
  fetch("/api/blogs/", {
    method: "POST",
    body: JSON.stringify(blogObj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      location.reload();
    } else {
      alert("trumpet sound");
    }
  });
});
