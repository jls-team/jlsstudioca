// back button
function goBack() {
    // window.history.back();
    // window.open("index.html");
}


//Get the button
// var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () { scrollFunction() };
window.onscroll = scrollFunction;

function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
    // console.log(mybutton);
    if (mybutton) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// ATLA page lock
