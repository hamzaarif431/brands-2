function order_now_value(objButton){
      x = objButton.name;
      t = objButton.title;
      document.getElementById('lead_area').value = x;
      document.getElementById('package_area').value = t;
      //document.getElementById('lead_text').innerHTML = x;
      
    }
    $(".order_now").click(function () {
      var pkgname = $(this).attr("title");
      if ($(this).attr("title") !== undefined) {
        $("#lead_pkg_name").html(pkgname);
        $("#lead_name_field").val(pkgname);
        return;
      } else {
        var pkgname = $(this).attr("title");
        $("#lead_pkg_name").html("LOGO DESIGN FOR Ã‚Â£39 ONLY");
      }
      return false;
      $("#lead_pkg_name").html(function (index, curHTML) {
        var lead_popup_text = curHTML.split(/[\s-]/),
          lead_new_text =
            '<span class="some">' + lead_popup_text.pop() + "</span>";
        return lead_popup_text.join(" ").concat(" " + lead_new_text);
      });
    });
  
    $(document).ready(function(e) {      
        var key = '5XpThOAEkfgOvEJ';  
          var currentIP = $("meta[name=ip2loc]").attr('content'); 
            var pgurl = $("meta[name=page_url]").attr('content');    
            $.ajax({method: 'get',
          url: 'http://ip-api.com/json/' + currentIP,
          data: {key: key},
          success: function (data) {if (data) {
            $('input[name=ip2loc_ip]').val(data.query);
            $('input[name=ip2loc_isp]').val(data.isp);
            $('input[name=ip2loc_org]').val(data.org);
            $('input[name=ip2loc_country]').val(data.country);
            $('input[name=ip2loc_region]').val(data.regionName);
            $('input[name=ip2loc_city]').val(data.city);
            $('input[name=pageurl]').val(pgurl);
        }}
      });
    });


    $('[data-fancybox="gallery"]').fancybox({
      loop: true,
      buttons: [
        "zoom",
        "share",
        "slideShow",
        "fullScreen",
        //"download",
        "thumbs",
        "close",
      ],
    });

    $(document).ready(function () {
      $(".has-c").click(function () {
        $(this).hide();
      });
    });


    var _ouibounce = ouibounce(document.getElementById("ouibounce-modal"), {
      aggressive: true,
    });
    $(document).ready(function () {
      var popup_status = $("#popup_status").val();
      if (popup_status == "close") {
        var newsletter_p = setInterval(function () {
          $("#ouibounce-modal").css("display", "block");
          clearInterval(newsletter_p);
          $("#popup_status").val("open");
        }, 25000);
      }
    });


    $(window).load(function () {
      var reverseLogoCard = true;
      var lastLogoCardIndex = -1;
      $(".logo-card .back").show();
      $(".logo-card").data("reverseLogoCard", reverseLogoCard).flip({
        trigger: "manual",
        reverse: reverseLogoCard,
      });

      function flipLogoCard() {
        var max = $(".logo-card").length;
        if ($("body").width() < 551) max = 6;
        var index = Math.floor(Math.random() * max);
        if (index == lastLogoCardIndex) {
          index = Math.floor(Math.random() * max);
        }
        lastLogoCardIndex = index;
        var wait = Math.random() * 1000 * Math.floor(Math.random() * 4) + 750;
        var card = $(".logo-card").eq(index);
        reverseLogoCard = card.data("reverseLogoCard") ? false : true;
        card.data("reverseLogoCard", reverseLogoCard);
        card.flip("toggle", function () {
          card.flip({
            reverse: reverseLogoCard,
          });
          setTimeout(function () {
            flipLogoCard();
          }, wait);
        });
      }
      setTimeout(function () {
        flipLogoCard();
      }, 1000);
    });

    /***SLIDERS**/

    // $(".package-carousel").owlCarousel({
    //   items: 3,
    //   autoPlay: true,
    //   nav: true,
    //   loop: false,
    //   dots: false,
    //   pagination: false,
    //   paginationNumbers: false,
    //   responsiveClass: true,
    //   responsive: {
    //     0: {
    //       items: 1,
    //     },

    //     600: {
    //       items: 1,
    //     },

    //     1000: {
    //       items: 3
    //     },
    //   },
    //   navigation: true,
    //   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    // });


    if($(window).width() < 1200 ){
      if(('.package-carousel').length != 0){
          $('.package-carousel').addClass('owl-carousel owl-theme');
          $(".package-carousel").owlCarousel({
              loop: false,
              navigation: true,
              navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
              dots: false,
              margin:25,
              autoplay:false,
              autoplayTimeout:3000,
              autoplayHoverPause:true,
                  responsive:{
                      0:{
                          items:1
                      },
                      
                      576:{
                          items:1
                      },
                      768:{
                          items:2
                      },
                      992: {
                        items: 2
                      }

                  }        
              });
      }
      
    }; 