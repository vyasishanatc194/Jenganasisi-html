$("#collapse-nav").click(function () {
  $(this).toggleClass("collapsed-menu");
  $(".right-sidenav").toggleClass("collapse-menu");
  $(".hader-dashboard").toggleClass("collapsed-header");
  $(".reseller-dashboard").toggleClass("dashboard-expand");
});

$(document).ready(function () {
  var bigimagedash = $("#bigdash");
  var thumbsdash = $("#thumbsdash");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimagedash
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

  thumbsdash
    .on("initialized.owl.carousel", function () {
      thumbsdash.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items: 5,
      margin: 10,
      dots: false,
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
    thumbsdash
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbsdash.find(".owl-item.active").length - 1;
    console.log(onscreen);
    var start = thumbsdash.find(".owl-item.active").first().index();
    var end = thumbsdash.find(".owl-item.active").last().index();
    console.log(end);
    if (current > end) {
      thumbsdash.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbsdash.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimagedash.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbsdash.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    bigimagedash.data("owl.carousel").to(number, 300, true);
  });
});

// uopdate heading

$("#store-heading-edit").click(function () {
  $("#store-heading-content").hide();
  $("#store-heading-form").show();
});

$("#store-heading-save").click(function () {
  $("#store-heading-content").show();
  $("#store-heading-form").hide();
});

// uopdate store info

$("#sotreInfo-edit").click(function () {
  $("#sotreInfo-content").hide();
  $("#sotreInfo-form").show();
});

$("#sotreInfo-save").click(function () {
  $("#sotreInfo-content").show();
  $("#sotreInfo-form").hide();
});

// uopdate store info

$("#sotreInventory-edit").click(function () {
  $("#sotreInventory-content").hide();
  $("#sotreInventory-form").show();
});

$("#sotreInventory-save").click(function () {
  $("#sotreInventory-content").show();
  $("#sotreInventory-form").hide();
});

// comapny profile

$("#viewcompany-edit").click(function () {
  $("#viewcompany-content").hide();
  $("#viewcompany-form").show();
});

$("#viewcompany-save").click(function () {
  $("#viewcompany-content").show();
  $("#viewcompany-form").hide();
});

// sellerheading 3edit

$("#seller-heading-edit").click(function () {
  $("#seller-heading-content").hide();
  $("#seller-heading-form").show();
});

$("#seller-heading-save").click(function () {
  $("#seller-heading-content").show();
  $("#seller-heading-form").hide();
});

// uopdate gallery info

$("#galleryinfo-edit").click(function () {
  $("#galleryinfo-content").hide();
  $("#galleryinfo-form").show();
});

$("#galleryinfo-save").click(function () {
  $("#galleryinfo-content").show();
  $("#galleryinfo-form").hide();
});

// rmoeve fields

$(document).ready(function () {
  $(document).on("click", ".remove-row", function () {
    $(this).parent().parent().parent().hide();
  });

  $(".remove-preview").click(function () {
    $(".back-to-editpage").hide();
  });

  $(".remove-status").click(function () {
    $(this).parent().hide();
  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
