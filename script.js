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
    var book = document.getElementById("flipbook");
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

    $("#flipbook").turn({
        width:950,
        autoCenter:true
    });



    var popup = document.getElementsByClassName("popup")[0];
    popup.classList.toggle("show");
}

function bookClose(){
    $("#flipbook").turn("destroy");
    var popup = document.getElementsByClassName("popup")[0];
    popup.classList.toggle("show");
    isBook=false;
}

