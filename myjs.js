function gm(event){
    event.preventDefault();
    let msg = document.getElementById("msg");
    let aut = document.getElementById("aut");

    let url = "https://api.quotable.io/random";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        
        msg.innerHTML = data.content;
        aut.innerHTML = "- by "+data.author;
    })
    .catch(err => msg.innerHTML = "issue : "+err)

    document.getElementById("show").style.display = "block";
}