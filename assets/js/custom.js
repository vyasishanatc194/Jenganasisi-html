// menu open and close

$("#menu-open").on("click", function () {
  $("#mySidenav2").addClass("width-menu");
  $("#cd-shadow-layer").css("display", "flex");
  $("body").css("position", "relative");
  $("body").css("overflow", "hidden");
  $("body").css("height", "100vh");
  $(".closebtn").css("display", "block");
  // $(".position-fixed-overlay").addClass("position-show");
  $(".closebtn2").css("position", "fixed");

  if (!$("#menu-cloned-one").hasClass("clonned")) {
    $("#menu-cloned-one").addClass("clonned");
    $("#submenu-cloned").clone(false).appendTo("#menu-cloned-one");
  }

  if (!$("#menu-cloned-two").hasClass("clonned2")) {
    $("#menu-cloned-two").addClass("clonned2");
    $("#cloned-top-menu").clone(false).appendTo("#menu-cloned-two");
  }

  if (!$("#menu-cloned-three").hasClass("clonned3")) {
    $("#menu-cloned-three").addClass("clonned3");
    $("#dashboard-menu-clone").clone(false).appendTo("#menu-cloned-three");
  }

  $(".pagination-datatatable-bottom").addClass("d-none");
});

$("#menu-closed").on("click", function () {
  $(".closebtn").css("display", "none");
  $("#mySidenav2").removeClass("width-menu");
  $("#cd-shadow-layer").css("display", "none");
  $("body").css("position", "relative");
  $("body").css("overflow", "");
  $("body").css("height", "");
  $(".closebtn2").css("position", "relative");
  // $('.navbar').css("margin-top", "30px");
  $(".pagination-datatatable-bottom").removeClass("d-none");
});

$(".menu-closed").on("click", function () {
  $(".closebtn").css("display", "none");
  $("#mySidenav2").removeClass("width-menu");
  $("#cd-shadow-layer").css("display", "none");
  $("body").css("position", "relative");
  $("body").css("overflow", "");
  $("body").css("height", "");
  $(".closebtn2").css("position", "relative");
  // $('.navbar').css("margin-top", "30px");
});

// end

// wow
$(document).ready(function () {
  new WOW({
    mobile: false,
  }).init();

  $("#toggle-read").click(function () {
    var elem = $("#toggle-read").text();
    if (elem == "Read More...") {
      $("#toggle-read").text("Read Less");
      $("#text_hide_show").show();
    } else {
      $("#toggle-read").text("Read More...");
      $("#text_hide_show").hide();
    }
  });

  $("#toggle-read3").click(function () {
    var elem = $("#toggle-read3").text();
    if (elem == "Read More...") {
      $("#toggle-read3").text("Read Less");
      $("#text_hide_show3").show();
    } else {
      $("#toggle-read3").text("Read More...");
      $("#text_hide_show3").hide();
    }
  });

  $("#toggle-read2").click(function () {
    var elem = $("#toggle-read2").text();
    if (elem == "Read More...") {
      $("#toggle-read2").text("Read Less");
      $("#text_hide_show2").show();
    } else {
      $("#toggle-read2").text("Read More...");
      $("#text_hide_show2").hide();
    }
  });

  // nav slide

  // accordian

  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".card-header")
      .find(".fe")
      .addClass("fe-minus")
      .removeClass("fe-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fe")
        .removeClass("fe-plus")
        .addClass("fe-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fe")
        .removeClass("fe-minus")
        .addClass("fe-plus");
    });

  /// smooth scroll

  $("a.smoth-scroll").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 70,
        },
        1500
      );
    e.preventDefault();
  });

  // header sticky

  var headertopoption = $(window);
  var headTop = $(".navbar-dark");

  headertopoption.on("scroll", function () {
    if (headertopoption.scrollTop() > 100) {
      headTop.addClass("fixed-top slideInDown animated");
    } else {
      headTop.removeClass("fixed-top slideInDown animated");
    }
  });

  // menu click

  // $('.nav-tabs li a.active').click(function(){
  //     $(".nav-tabs li a.active").removeClass("active");
  //     $(this).addClass("active");
  // });

  $(".nav-toggle").click(function () {
    $(".nav-toggle").removeClass("active");
    $(".nav-toggle").parent().removeClass("active");
    $(this).addClass("active");
    $(this).parent().addClass("active");
  });

  $(".sub-nav li a").click(function () {
    $(".sub-nav li a").removeClass("active");
    $(this).addClass("active");
  });

  $(".nav-link").click(function () {
    $(".navbar-collapse").removeClass("show");

    $("#mySidenav2").removeClass("width-menu");
    $("#cd-shadow-layer").css("display", "none");
    $("body").css("position", "relative");
    $("body").css("overflow", "");
    $("body").css("height", "");
    $(".closebtn2").css("position", "relative");
  });

  // readmore

  // owl carousel our section

  // home page banner

  // our client

  $(".banner-carousel").owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 2000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    // animateOut: "fadeOut",
    // animateIn: "fadeIn",
    responsiveClass: true,
    // mouseDrag: false,
    // touchDrag: true,
    navText: ["<i class='fe fe-chevron-left'></i>","<i class='fe fe-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
        
      },
      600: {
        items: 1,
        
      },

      1000: {
        items: 1,
        dots: false,
        
      },
    },
  });

  // shipping-deal

  $(".shiping-carousel").owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 2000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,

    responsiveClass: true,

    // navText: ['<span class="span-roundcircle left-roundcircle"><img src="assets/images/icon/arrow-left-client.png" class="left_arrow_icon" alt="arrow" /></span>','<span class="span-roundcircle right-roundcircle"><img src="assets/images/icon/arrow-right-client.png" class="right_arrow_icon" alt="arrow" /></span>'],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },

      1000: {
        items: 2,
      },
      1025: {
        items: 3,
      },
    },
  });

  // service product

  $(".service-product-carousel").owlCarousel({
    loop: true,
    smartSpeed: 2000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    responsiveClass: true,
    // navText: ['<span class="span-roundcircle left-roundcircle"><img src="assets/images/icon/arrow-left-client.png" class="left_arrow_icon" alt="arrow" /></span>','<span class="span-roundcircle right-roundcircle"><img src="assets/images/icon/arrow-right-client.png" class="right_arrow_icon" alt="arrow" /></span>'],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },

      1025: {
        items: 2,
      },
      1040: {
        items: 3,
      },
    },
  });

  // testimonial slider

  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 2000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    // navText: ['<span class="span-roundcircle left-roundcircle"><img src="assets/images/icon/arrow-left-client.png" class="left_arrow_icon" alt="arrow" /></span>','<span class="span-roundcircle right-roundcircle"><img src="assets/images/icon/arrow-right-client.png" class="right_arrow_icon" alt="arrow" /></span>'],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },

      1000: {
        items: 1,
        dots: true,
      },
    },
  });

  $(".service-favorite-carousel").owlCarousel({
    loop: true,
    smartSpeed: 2000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    responsiveClass: true,
    // navText: ['<span class="span-roundcircle left-roundcircle"><img src="assets/images/icon/arrow-left-client.png" class="left_arrow_icon" alt="arrow" /></span>','<span class="span-roundcircle right-roundcircle"><img src="assets/images/icon/arrow-right-client.png" class="right_arrow_icon" alt="arrow" /></span>'],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },

      1025: {
        items: 2,
      },
      1040: {
        items: 4,
      },
    },
  });

  // lolo-carousel

  $(".logo-carousel").owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 2000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    responsiveClass: true,
    // navText: ['<span class="span-roundcircle left-roundcircle"><img src="assets/images/icon/arrow-left-client.png" class="left_arrow_icon" alt="arrow" /></span>','<span class="span-roundcircle right-roundcircle"><img src="assets/images/icon/arrow-right-client.png" class="right_arrow_icon" alt="arrow" /></span>'],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },

      1000: {
        items: 4,
      },
      1025: {
        items: 7,
      },
    },
  });

  $(".supplier-carousel").owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 2000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    responsiveClass: true,
    // navText: ['<span class="span-roundcircle left-roundcircle"><img src="assets/images/icon/arrow-left-client.png" class="left_arrow_icon" alt="arrow" /></span>','<span class="span-roundcircle right-roundcircle"><img src="assets/images/icon/arrow-right-client.png" class="right_arrow_icon" alt="arrow" /></span>'],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },

      1000: {
        items: 6,
      },
      1025: {
        items: 12,
      },
    },
  });

  // faverouite

  $(".faverouite-btn").click(function () {
    $(this).toggleClass("active");
    $(this).children().toggleClass("fa-heart-o");
    $(this).children().toggleClass("fa-heart");
  });

  $(".compare-check").change(function () {
    if ($(this).is(":checked")) {
      $(".compare-footer-section").show(300);
      $(".compare-footer-section").css("bottom", "0px");
      $(".compare-footer-section").removeClass("animated slideInDown");
      $(".compare-footer-section").addClass("animated slideInUp");
    } else {
      $(".compare-footer-section").removeClass("slideInUp");
      $(".compare-footer-section").addClass("animated fadeOutDown");
      setTimeout(function () {
        $(".compare-footer-section").hide(300);
      }, 500);
    }
  });

  //

  // end

  // service slider carousel https://codepen.io/angsa/pen/LrezoO

  $(document).ready(function () {
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
      .owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        // autoplay: true,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: [
          '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
          '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
        ],
      })
      .on("changed.owl.carousel", syncPosition);

    thumbs
      .on("initialized.owl.carousel", function () {
        thumbs.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
        items: 5,
        dots: false,
        margin: 10,
        nav: true,
        navText: [
          '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
          '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
        ],
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: 4,
        responsiveRefreshRate: 100,
        responsive: {
          0: {
            items: 2,
            nav: false,
          },
          600: {
            items: 3,
            nav: false,
          },
          1000: {
            items: 6,
            nav: false,
            slideBy: 10,
          },
          1040: {
            items: 10,
            nav: false,
            slideBy: 10,
          },
        },
      })
      .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
      //if loop is set to false, then you have to uncomment the next line
      //var current = el.item.index;

      //to disable loop, comment this block
      console.log(el);
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }
      //to this
      thumbs
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = thumbs.find(".owl-item.active").length - 1;
      console.log(onscreen);
      var start = thumbs.find(".owl-item.active").first().index();
      var end = thumbs.find(".owl-item.active").last().index();
      console.log(end);
      if (current > end) {
        thumbs.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
        thumbs.data("owl.carousel").to(current - onscreen, 100, true);
      }
    }

    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        bigimage.data("owl.carousel").to(number, 100, true);
      }
    }

    thumbs.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index();
      bigimage.data("owl.carousel").to(number, 300, true);
    });
  });
});

$(document).ready(function () {
  var bigimage2 = $("#big2");
  var thumbs2 = $("#thumbs2");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage2
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      // autoplay: true,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: [
        '<i class="fe fe-chevron-left" aria-hidden="true"></i>',
        '<i class="fe fe-chevron-right" aria-hidden="true"></i>',
      ],
    })
    .on("changed.owl.carousel", syncPosition);

  thumbs2
    .on("initialized.owl.carousel", function () {
      thumbs2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items: 4,
      dots: false,
      nav: true,
      navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
      ],
      smartSpeed: 200,
      slideSpeed: 200,
      slideBy: 4,
      margin: 10,
      responsiveRefreshRate: 100,
      responsive: {
        320: {
          items: 3,
          nav: false,
        },
        375: {
          items: 4,
          nav: false,
        },
        600: {
          items: 8,
          nav: false,
        },
        1000: {
          items: 5,
          nav: false,
          slideBy: 4,
        },
      },
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    console.log(el);
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs2.find(".owl-item.active").length - 1;
    console.log(onscreen);
    var start = thumbs2.find(".owl-item.active").first().index();
    var end = thumbs2.find(".owl-item.active").last().index();
    console.log(end);
    if (current > end) {
      thumbs2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage2.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage2.data("owl.carousel").to(number, 300, true);
  });
});

$(document).ready(function () {
  var bigimage3 = $("#big3");
  var thumbs3 = $("#thumbs3");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage3
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      // autoplay: true,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: [
        '<i class="fe fe-chevron-left" aria-hidden="true"></i>',
        '<i class="fe fe-chevron-right" aria-hidden="true"></i>',
      ],
    })
    .on("changed.owl.carousel", syncPosition);

  thumbs3
    .on("initialized.owl.carousel", function () {
      thumbs3.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items: 4,
      dots: false,
      nav: true,
      navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
      ],
      smartSpeed: 200,
      slideSpeed: 200,
      slideBy: 4,
      margin: 10,
      responsiveRefreshRate: 100,
      responsive: {
        320: {
          items: 3,
          nav: false,
        },
        375: {
          items: 4,
          nav: false,
        },
        600: {
          items: 8,
          nav: false,
        },
        1000: {
          items: 5,
          nav: false,
          slideBy: 4,
        },
      },
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    console.log(el);
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs3
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs3.find(".owl-item.active").length - 1;
    console.log(onscreen);
    var start = thumbs3.find(".owl-item.active").first().index();
    var end = thumbs3.find(".owl-item.active").last().index();
    console.log(end);
    if (current > end) {
      thumbs3.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs3.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage3.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs3.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage3.data("owl.carousel").to(number, 300, true);
  });
});

// faq
