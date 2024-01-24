document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var element = document.querySelector(".rechts");
        var element1 = this.document.querySelector(".links1")
        var position = element.getBoundingClientRect().top;
        var position1 = element1.getBoundingClientRect().top;
        // Check if the element is in the viewport
        if (position < window.innerHeight && position > 0) {
            element.classList.add("animate");
        }
        if (position1 < window.innerHeight && position1 > 0) {
            element1.classList.add("animate");
        }
    });
});
//Door Joep van der Put