// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;

}

var isBook=false;

function bookAppear(){
    var book = document.getElementById("flipbook1");
    isBook=true;
    var ind=7;

    book.innerHTML = ""; // clear images

    for (counter=1;counter<=ind;counter++) {
        var div=document.createElement("div");
        var imagem=document.createElement("img");
        imagem.src="images/livro1/0"+counter+".png";


            div.classList.add("page");

        div.appendChild(imagem);
        book.appendChild(div);
    }

    $("#flipbook1").turn({
        width:950,
        autoCenter:true
    });



    var popup = document.getElementsByClassName("popup")[0];
    popup.classList.toggle("show");
}

function bookClose(){
    $("#flipbook1").turn("destroy");
    var popup = document.getElementsByClassName("popup")[0];
    popup.classList.toggle("show");
    isBook=false;
}
function changeHeight() {

    // This script sets OSName variable as follows:
// "Windows"    for all versions of Windows
// "MacOS"      for all versions of Macintosh OS
// "Linux"      for all versions of Linux
// "UNIX"       for all other UNIX flavors
// "Unknown OS" indicates failure to detect the OS

    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!==-1) OSName="Windows";
    if (navigator.appVersion.indexOf("Mac")!==-1) OSName="MacOS";
    if (navigator.appVersion.indexOf("X11")!==-1) OSName="UNIX";
    if (navigator.appVersion.indexOf("Linux")!==-1) OSName="Linux";

    if (OSName==="Windows") {
        document.getElementById("books").style.top = "310vh";
        document.getElementsByTagName("footer")[0].style.top = "430vh";
    }


}

function makeBooks(){



    var book1 = document.getElementById("flipbook2");
    var ind1=20;

    book1.innerHTML = ""; // clear images

    for (counter=1;counter<=ind1;counter++) {
        var div=document.createElement("div");
        var imagem=document.createElement("img");
        imagem.src="images/A/"+counter+".png";


        div.classList.add("page");

        div.appendChild(imagem);
        book1.appendChild(div);
    }

    $("#flipbook2").turn({
        width:1000,
        autoCenter:true
    });

    var book2 = document.getElementById("flipbook3");
    var ind2=20;

    book2.innerHTML = ""; // clear images

    for (counter=1;counter<=ind2;counter++) {
        var div=document.createElement("div");
        var imagem=document.createElement("img");
        imagem.src="images/B/"+counter+".png";


        div.classList.add("page");

        div.appendChild(imagem);
        book2.appendChild(div);
    }

    $("#flipbook3").turn({
        width:1000,
        autoCenter:true
    });
    console.log(1);
}

window.addEventListener("load",makeBook2);
