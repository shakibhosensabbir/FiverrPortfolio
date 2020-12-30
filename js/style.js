// text type js strat

const typed = new Typed('.text', {

    strings: ['Shakib Hosen', 'A Web Designer','A Web Developer', '20 Year Old'], typeSpeed: 80,backSpeed: 80, backDelay: 1500, loop:
    true,
    
    
    });
    

// text type js end

// progress bar section strat

$('#html').LineProgressbar({
    percentage:90,
    radius: '50px',
    height: '13px',
    fillBackgroundColor: '#00ABE1'
    });
    $('#css').LineProgressbar({
    percentage:85,
    radius: '50px',
    height: '13px',
    fillBackgroundColor: '#00ABE1'
    });
    $('#bootstrap').LineProgressbar({
    percentage:75,
    radius: '50px',
    height: '13px',
    fillBackgroundColor: '#00ABE1'
    });
    $('#javascript').LineProgressbar({
    percentage:70,
    radius: '50px',
    height: '13px',
    fillBackgroundColor: '#00ABE1'
    });
    $('#jquery').LineProgressbar({
    percentage:80,
    radius: '50px',
    height: '13px',
    fillBackgroundColor: '#00ABE1'
    });
    $('#wordpress').LineProgressbar({
    percentage:90,
    radius: '50px',
    height: '13px',
    fillBackgroundColor: '#00ABE1'
    });


// progress bar section end

// image hover scroll strat

$( window ).on( 'load', function(){
    $( '.screen' ).scrollImage();
})

// image hover scroll end

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 3100 || document.documentElement.scrollTop > 3100) {
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


// header active js



// var header = document.getElementById("myDIV");
// var btns = header.getElementsByClassName("btn1");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   if (current.length > 0) { 
//     current[0].className = current[0].className.replace(" active", "");
//   }
//   this.className += " active";
//   });
// }

$(document).ready(function() {
    $(".tab").click(function () {
        $(".tab").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");   
    });
    });