$(function () {
  $(".navtop>ul>li").mouseover(function () {
    $(this).children(".ulinul").stop().show();
  });
  $(".navtop>ul>li").mouseout(function () {
    $(this).children(".ulinul").stop().hide();
  });

  var $duration = 300,
    $tablehover = $(".tablehover"),
    $divsame = $(".divsame"),
    $divout = $(".divout");

  $tablehover.hover(
    function () {
      imgSrc = $(this).attr("src");
      result = imgSrc.split(".", 1) + "-1.jpg";
      //imgUnder = $($divsame).show();
      // console.log("imgSrc = " + imgSrc + ", result = " + result);
      $(this).attr("src", result);
      $(this.$divsame).show();
      $(this).siblings(".divsame").show();
      //   $(this).children(".ulinul6").stop().hide();
    },
    function () {
      $(this).attr("src", imgSrc);
      $(this.$divsame).hide();
      $(this).siblings(".divsame").hide();
    }
  );

  $(".imgmiddle").hover(
    function () {
      $(this).css({ width: "650px", height: "839px" });
    },
    function () {
      $(this).css({ width: "630px", height: "819px" });
    }
  );

  $(".imgfooter").hover(
    function () {
      $(this).css({ width: "969px", height: "1272px" });
    },
    function () {
      $(this).css({ width: "949px", height: "1252px" });
    }
  );

  $(".gridin").hover(
    function () {
      $(this).animate({ opacity: 1 });
    },
    function () {
      $(this).animate({ opacity: 0 });
    }
  );

  $(".gridin1").hover(
    function () {
      $(this).animate({ opacity: 1 });
    },
    function () {
      $(this).animate({ opacity: 0 });
    }
  );
  var i;
  var $divsecond2 = $(".divsecond2");
  var $divseconds = document.getElementsByClassName("divsecond2");

  // $(".right").click(function () {
  //   $(".divsecond1").css({ translate: "-100vw" }, 1000);
  // });

  // $(".left").click(function () {
  //   $(".divsecond1").css({ translate: "+100vw" }, 1000);
  // });

  $(document).ready(function () {
    var imgs;
    var img_count;
    var img_position = 1;

    imgs = $(".divsecond1 div");
    img_count = imgs.children().length;

    $(".right").click(function () {
      next();
    });
    $(".left").click(function () {
      back();
    });

    function back() {
      if (1 < img_position) {
        imgs.animate({ translate: "+=100vw" });
        img_position--;
      }
    }

    function next() {
      if (img_count > img_position) {
        imgs.animate({ translate: "-=100vw" });
        img_position++;
      }
    }
  });

  // document.querySelector(".right").addEventListener("click", function () {
  //   document.querySelector(".divsecond1").style.transform = "translate(-100vw)";
  // });
});

// $(".right").click(function () {
//   $(".toppicture li:first").appendTo(".toppicture");

//   $(".toppicture li:first").insertAfter(".toppicture li:last");
// });

// $(".left").click(function () {
//   $(".toppicture li:first").prependTo(".toppicture");

//   $(".toppicture li:first").insertAfter(".toppicture li:last");
// });

// $(".right").on({
//   click: function () {
//     $(".toppicture li:first").appendTo(".toppicture");
//     $(".toppicture li:first").next().show();

//     $(".toppicture li:first").insertAfter(".toppicture li:last");
//   },
// });
