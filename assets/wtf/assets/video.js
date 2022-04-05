var imghover = document.getElementById("my-img");

imghover.addEventListener("mouseover", function() {
    imghover.style.opacity = 0;
});

imghover.addEventListener("mouesout", function() {
    imghover.style.opacity = 1.0;
});