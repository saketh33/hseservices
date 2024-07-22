const showMenuBtn = document.getElementById("show-menu");
const navLinks = document.getElementById("nav-links");
const cancelBtn = document.getElementById("nav-cancel")
const hoverLink = document.getElementsByClassName("hover-link")

        showMenuBtn.addEventListener("click", () => {
            navLinks.style.top = "0%";
            cancelBtn.style.display = "block";
        });


        cancelBtn.addEventListener("click", () =>{
            navLinks.style.top = "-100%";
            cancelBtn.style.display = "none";
        })

        hoverLink.addEventListener("click", () =>{
            navLinks.style.top = "-100%";
            cancelBtn.style.display = "none";
        })