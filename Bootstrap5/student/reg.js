
document.getElementById("clickbtn").addEventListener("click", () => {

    let name = document.getElementById("fullname").value;

    localStorage.setItem("name", name);

    
});