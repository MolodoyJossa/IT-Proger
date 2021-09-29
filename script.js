  $(document).ready(function() {
    $("#products-btn-big").click(function() {
      if ($("#ProductsMenuBig").css("display") === "none") {
        $("#ProductsMenuBig").slideToggle(500);
        $(".product-1").delay(150).fadeIn(550);
        $(".product-2").delay(200).fadeIn(550);
        $(".product-3").delay(250).fadeIn(550);
        $(".product-4").delay(300).fadeIn(550);
      } else {
        $(".product-4").fadeOut(300);
        $(".product-3").delay(80).fadeOut(300);
        $(".product-2").delay(160).fadeOut(300);
        $(".product-1").delay(240).fadeOut(300);
        $("#ProductsMenuBig").delay(400).slideToggle(500);
      }
    });
  });

  $(document).ready(function() {
    $("#products-btn-small").click(function() {
      if ($("#ProductsMenuSmall").css("display") === "none") {
        $("#ProductsMenuSmall").slideDown(600);
        $(".small-product-1").delay(150).fadeIn(550);
        $(".small-product-2").delay(200).fadeIn(550);
        $(".small-product-3").delay(250).fadeIn(550);
        $(".small-product-4").delay(300).fadeIn(550);
      } else {
        $(".small-product-4").fadeOut(300);
        $(".small-product-3").delay(80).fadeOut(300);
        $(".small-product-2").delay(160).fadeOut(300);
        $(".small-product-1").delay(240).fadeOut(300);
        $("#ProductsMenuSmall").delay(100).slideUp(500);
      }
    });
  });

  $(document).ready(function() {
    $(".search-btn-small").click(function() {
      $(".navSearchSmall-bg").slideToggle(1000);
      $(".nav-btn-small").toggle(800);
      $(".searchSmall").delay(200).toggle(800);
      $(".navPanelSmall-btn").toggle(800);

    });
  });

  $(document).ready(function() {
    $(".search-btn-big").click(function() {
      if ($("#ProductsMenuBig").css("display") != "none") {
        $(".product-4").fadeToggle(300);
        $(".product-3").delay(100).fadeToggle(300);
        $(".product-2").delay(200).fadeToggle(300);
        $(".product-1").delay(300).fadeToggle(300);
        $("#ProductsMenuBig").delay(250).slideToggle(500);
      }
      $(".navSearchBig-bg").slideToggle(1000);
      $(".searchBig").toggle(800);
      if ($(".nav-btn-big").css("opacity") === "1") {
        $(".nav-btn-big").fadeTo(800, 0);
        $(".nav-btn-big").addClass("disabled");
      }
      if ($(".nav-btn-big").css("opacity") === "0") {
        $(".nav-btn-big").fadeTo(800, 1);
        $(".nav-btn-big").removeClass("disabled");
      }
    });
  });

  $(document).ready(function() {
    $(".navPanelSmall-btn").click(function() {
      $(".navPanelSmall").slideDown(1000);
      $(".navPanelSmall-btn").fadeOut(700);
      $(".navPanelSmall-close-btn").delay(200).fadeIn(700);
      $(".search-btn-small").fadeOut(700);
      $(".nav-btn-small").fadeOut(700);
      $(".smallPanel-nav-1").delay(400).fadeIn(700);
      $(".smallPanel-nav-2").delay(600).fadeIn(700);
      $(".smallPanel-nav-3").delay(800).fadeIn(700);

    });
  });

  $(document).ready(function() {
    $(".navPanelSmall-close-btn").click(function() {
      $(".navPanelSmall").delay(150).slideUp(1000);
      $(".navPanelSmall-close-btn").fadeOut(750);
      $(".navPanelSmall-btn").delay(300).fadeIn(700);
      $(".nav-btn-small").delay(300).fadeIn(700);
      $(".search-btn-small").delay(300).fadeIn(700);
      $(".smallPanel-nav-3").delay(200).fadeOut(700);
      $(".smallPanel-nav-2").delay(400).fadeOut(700);
      $(".smallPanel-nav-1").delay(600).fadeOut(700);

    });
  });