document.querySelectorAll("ul#langBtn li").forEach(link =>{
    link.addEventListener("click",(e)=>{
        // console.log(e.target.parentElement.parentElement.parentElement.querySelector("button").innerText);
        // console.log(e.target.innerText);
        e.target.parentElement.parentElement.parentElement.querySelector("button").innerText = e.target.innerText;
    })
})

document.querySelectorAll("ul.sehirliste li").forEach(link =>{
    link.addEventListener("click",(e)=>{
        var eskiSecili = e.target.parentElement.querySelector(".btn-primary");
        eskiSecili.classList.remove("btn-primary");
        eskiSecili.classList.add("btn-outline-primary");
        e.target.classList.remove("btn-outline-primary");
        e.target.classList.add("btn-primary");

        document.getElementById("hdnsecshr").value = e.target.innerText;

        document.getElementById("locationbtn").innerHTML = "<i class='fa-solid fa-location-dot'></i> " + e.target.innerText;

        // const mymodal2 = document.getElementById("locationModal");
        // const myModal = new bootstrap.Modal(mymodal2);
        var myModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('locationModal'));
        
        myModal.hide();
    })
})

// international phone codes
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  separateDialCode: true
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}