$("form").submit( function() {
    $('html, body').animate({
         scrollTop: $('body').offset().top
    }, 2000);
});

var currentTab = 0;

function showTab(b) {
   
    
    var a = document.getElementsByClassName("tab");
   
    (a[b].style.display = "block"), 0 == b ? ((document.getElementById("prevBtn").style.display = "none"), 
	(document.getElementById("signupBtn").style.display = "none"), 
	(document.getElementById("nextBtn").style.display = "inline"),
    (document.getElementById("nextBtn").type = "submit")) : 
	(document.getElementById("prevBtn").style.display = "inline"), 
	b == a.length - 1 ? ((document.getElementById("nextBtn").style.display = "none"), 
	(document.getElementById("signupBtn").style.display = "inline")) : 
	(document.getElementById("nextBtn").innerHTML = "Next")
}

function nextPrev(b) {
    var a = document.getElementsByClassName("tab");
    
    if (1 == b && !validateForm()) {
        return !1
    }(a[currentTab].style.display = "none"), showTab((currentTab += b))
}

function validateForm() {
	// console.log('chal gya')
    var c, a, b = !0;
    for (c = document.getElementsByClassName("tab")[currentTab].getElementsByTagName("input"), 
	a = 0; a < c.length; a++) {
        ("" == c[a].value || " " == c[a].value) && ((c[a].className += " invalid"), (b = !1))
    }
    return b
}
// $('form button').on("keyup keypress", function(e) {
//     var code = e.keyCode || e.which; 
//     if (code === 13) {         
// 		console.log('chala')      
//         showTab(currentTab);
//     }
// });
showTab(currentTab);

$(".packdetails .listpacks").slimScroll({
    height: "243px",
    color: "#000"
}), 0 != $(".packdetails .listpacks").length && $(".packdetails .listpacks").slimScroll({
    height: "300px",
    size: "6px",
    color: "#000",
    alwaysVisible: !0,
    distance: "16px",
    railVisible: !0,
    railColor: " #000",
    railOpacity: 1,
    railBorderRadius: "0px",
    wheelStep: 10,
    disableFadeOut: !1,
}), $(document).scroll(function() {
    var a = $(this).scrollTop();
    a > 200 ? $(".sticky-container").fadeIn() : $(".sticky-container").fadeOut(), a > 500 ? ($(".floating_wrap").addClass("visible"), $(".floatbutton").addClass("visible")) : ($(".floating_wrap").removeClass("visible"), $(".floatbutton").removeClass("visible"))
}), $(document).ready(function() {
    $(".clickbutton").click(function() {
        $(".floatbutton").toggleClass("active"), $(".crossplus").toggleClass("rotate")
    }), $(".topformswitch").click(function() {
        $(".topformwrap").toggleClass("active")
    })
});
$(".logos-slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        991: {
            items: 5
        },
        1000: {
            items: 8
        }
    }
});
$(".services-box-slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        767: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});
AOS.init();
jQuery(document).ready(function() {
    function a() {
        var b = $("#myTabContent").find("#dp-slider .dp_item:first-child").data("class");
        $("#myTabContent").find("#dp-dots li").removeClass("active"), $("#myTabContent").find("#dp-dots li[data-class=" + b + "]").addClass("active")
    }
    $("body").on("click", "#myTab .nav-link.active", function() {
        a()
    }), $("body").on("click", "#myTabContent #dp-dp-next", function() {
        $("#myTabContent").find(".dp_item").length;
        $("#myTabContent").find("#dp-slider .dp_item:first-child").hide().appendTo("#myTabContent #dp-slider").fadeIn(), $.each($("#myTabContent .dp_item"), function(b, c) {
            $(c).attr("data-position", b + 1)
        }), a()
    }), $("body").on("click", "#myTabContent #dp-prev", function() {
        $("#myTabContent").find(".dp_item").length;
        $("#myTabContent").find("#dp-slider .dp_item:last-child").hide().prependTo("#myTabContent #dp-slider").fadeIn(), $.each($("#myTabContent .dp_item"), function(b, c) {
            $(c).attr("data-position", b + 1)
        }), a()
    }), $("body").on("click", "#myTabContent #dp-dots li", function() {
        $("#myTabContent").find("#dp-dots li").removeClass("active"), $(this).addClass("active");
        var b = $(this).attr("data-class");
        $("#myTabContent").find("#dp-slider .dp_item[data-class=" + b + "]").hide().prependTo("#myTabContent #dp-slider").fadeIn(), $.each($("#myTabContent .dp_item"), function(c, d) {
            $(d).attr("data-position", c + 1)
        })
    }), $("body").on("click", "#myTabContent #dp-slider .dp_item:not(:first-child)", function() {
        var b = $(this).attr("data-class");
        $("#myTabContent").find("#dp-slider .dp_item[data-class=" + b + "]").hide().prependTo("#myTabContent #dp-slider").fadeIn(), $.each($("#myTabContent .dp_item"), function(c, d) {
            $(d).attr("data-position", c + 1)
        }), a()
    })
});
$(window).width() <= 991 && 0 != ".icons-sec-responsive-slider".length && ($(".icons-sec-responsive-slider").addClass("owl-carousel owl-theme"), $(".icons-sec-responsive-slider").owlCarousel({
    loop: !1,
    margin: 0,
    nav: !1,
    dots: !1,
    autoplay: !1,
    autoplayTimeout: !1,
    autoplayHoverPause: !1,
    mouseDrag: !0,
    responsive: {
        0: {
            items: 1
        },
        460: {
            items: 1
        },
        767: {
            items: 1
        },
        991: {
            items: 2
        }
    },
}));
$(window).width() <= 991 && 0 != ".testimonial-sec-responsive-slider".length && ($(".testimonial-sec-responsive-slider").addClass("owl-carousel owl-theme"), $(".testimonial-sec-responsive-slider").owlCarousel({
    loop: !1,
    margin: 0,
    nav: !1,
    dots: !1,
    autoplay: !1,
    autoplayTimeout: !1,
    autoplayHoverPause: !1,
    mouseDrag: !0,
    responsive: {
        0: {
            items: 1
        },
        460: {
            items: 1
        },
        767: {
            items: 1
        },
        991: {
            items: 2
        }
    },
}));
$(window).width() <= 991 && 0 != ".portfolio-images-responsive-slider".length && ($(".portfolio-images-responsive-slider").addClass("owl-carousel owl-theme"), $(".portfolio-images-responsive-slider").owlCarousel({
    loop: !1,
    margin: 0,
    nav: !1,
    dots: !1,
    autoplay: !1,
    autoplayTimeout: !1,
    autoplayHoverPause: !1,
    mouseDrag: !0,
    responsive: {
        0: {
            items: 1
        },
        460: {
            items: 1
        },
        577: {
            items: 1
        },
        767: {
            items: 2
        },
        991: {
            items: 5
        }
    },
}));
$(window).width() <= 991 && 0 != ".client-sec-responsive-slider".length && ($(".client-sec-responsive-slider").addClass("owl-carousel owl-theme"), $(".client-sec-responsive-slider").owlCarousel({
    loop: !1,
    margin: 0,
    nav: !1,
    dots: !1,
    autoplay: !1,
    autoplayTimeout: !1,
    autoplayHoverPause: !1,
    mouseDrag: !0,
    responsive: {
        0: {
            items: 1
        },
        460: {
            items: 1
        },
        767: {
            items: 3
        },
        991: {
            items: 4
        }
    },
}));
$(".openpopup").click(function() {
    $("#entry-popup").css("display", "flex")
}), $("#entry-box_close").click(function() {
    $("#entry-popup").fadeOut()
});
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
		loop: true
	})
	.add({
		targets: '.ml6 .letter',
		translateY: ["1.1em", 0],
		translateZ: 0,
		duration: 750,
		delay: (el, i) => 50 * i
	}).add({
		targets: '.ml6',
		opacity: 0,
		duration: 1000,
		easing: "easeOutExpo",
		delay: 1000
	});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});