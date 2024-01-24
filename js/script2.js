document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var element = document.querySelector(".project2");
        var element1 = document.querySelector(".project3");
        var element2 = document.querySelector(".andereprojecten");
        var position = element.getBoundingClientRect().top;
        var position1 = element1.getBoundingClientRect().top;
        var position2 = element2.getBoundingClientRect().top;

        // Check if the element is in the viewport
        if (position < window.innerHeight && position > 0) {
            element.classList.add("animate");
        }
        if (position1 < window.innerHeight && position1 > 0) {
            element1.classList.add("animate");
        }
        if (position2 < window.innerHeight && position2 > 0) {
            element2.classList.add("animate");
        }
    });
});
//Door Joep van der Put