

$(document).ready(function(){
    $('.feedback-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        navText: ["<i class = 'fas fa-arrow-left'></i>", "<i class = 'fas fa-arrow-right'></i>"]
    });

    // stop animation on resize
    let resizeTimer;
    $(window).resize(function(){
        $(document.body).addClass('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $(document.body).removeClass('resize-animation-stopper');
        }, 400);
    });

    $('.navbar-show-btn').click(function(){
        $('.navbar-box').addClass('navbar-box-show');
    });

    $('.navbar-hide-btn').click(function(){
        $('.navbar-box').removeClass("navbar-box-show");
    })
});
function calculateIndikatorBor() {
    const HP = document.getElementById('HP').value;
    const TT = document.getElementById('TT').value;
    const Per = document.getElementById('Per').value;
    if (HP && TT && Per && HP > 0 && TT > 0 && Per > 0) {
        let gcdb = (HP / (TT * Per) )* 100 ;
        const BOR = gcdb.toFixed(2) ;
        document.getElementById('BOR').innerHTML = `Bed Occupancy Rate(BOR) adalah : ${BOR} %`;
    } else {
        document.getElementById('BOR').innerHTML = 'Masukkan Data Yang Valid.';
    }
}


function calculateIndikatorAvlos() {
    const HP1 = document.getElementById('HP_AVLOS').value;
    const Pasien_Keluar1 = document.getElementById('Pasien_Keluar_AVLOS').value;
    if (HP1 && Pasien_Keluar1 && HP1 > 0 && Pasien_Keluar1 > 0 ) {
        let gcda = HP1 / Pasien_Keluar1 ;
        const AVLOS = gcda.toFixed(0) ;
        document.getElementById('AVLOS').innerHTML = `Average Length Of Stay adalah : ${AVLOS} Hari`;
    } else {
        document.getElementById('AVLOS').innerHTML = 'Masukkan Data Yang Valid.';
    }
    
}


function calculateIndikatorToi() {
    const HP2 = document.getElementById('HP_TOI').value;
    const TT2 = document.getElementById('TT_TOI').value;
    const Per2 = document.getElementById('Per_TOI').value;
    const Pasien_Keluar2 = document.getElementById('Pasien_Keluar_TOI').value;
    if (HP2 && TT2 && Per2 && Pasien_Keluar2 && HP2 > 0 && TT2 > 0 && Per2 > 0 && Pasien_Keluar2 > 0) {
        let gcdt = ((TT2 * Per2)-HP2)/Pasien_Keluar2;
        const TOI = gcdt.toFixed(0) ;
        document.getElementById('TOI').innerHTML = `Turn Over Interval adalah : ${TOI} Hari`;
    } else {
        document.getElementById('TOI').innerHTML = 'Masukkan Data Yang Valid.';
    }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var navbar = document.getElementById("myNav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    
  } else {
    navbar.classList.remove("sticky");
  }
}
function openPage(calcName, element) {
    // Hide all elements with class="tabcontent" by default */
    let calc = document.getElementsByClassName("calc-container");
    for (let i = 0; i < calc.length; i++) {
        calc[i].style.display = "none";
    }
    // Show the specific tab content
    document.getElementById(calcName).style.display = "block";

}
document.getElementById("defaultOpen").click();


const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    autoplay: true,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });