$(document).ready(function () {
  $("#btnFrontWeb").click(function () {
    $("#rowFrontWeb").removeClass("display__none");
    $("#rowBackWeb").removeClass("display__flex");
    $("#rowDesignWeb").removeClass("display__flex");
    $("#rowFrontWeb").addClass("display__flex");
    $("#rowBackWeb").addClass("display__none");
    $("#rowDesignWeb").addClass("display__none");
    //--------------
    $("#btnFrontWeb").removeClass("inner__nav__inactive");
    $("#btnBackWeb").removeClass("inner__nav__active");
    $("#btnDesignWeb").removeClass("inner__nav__active");
    $("#btnFrontWeb").addClass("inner__nav__active");
    $("#btnBackWeb").addClass("inner__nav__inactive");
    $("#btnDesignWeb").addClass("inner__nav__inactive");
  });
  $("#btnBackWeb").click(function () {
    $("#rowFrontWeb").removeClass("display__flex");
    $("#rowBackWeb").removeClass("display__none");
    $("#rowDesignWeb").removeClass("display__flex");
    $("#rowFrontWeb").addClass("display__none");
    $("#rowBackWeb").addClass("display__flex");
    $("#rowDesignWeb").addClass("display__none");
    //--------------
    $("#btnFrontWeb").removeClass("inner__nav__active");
    $("#btnBackWeb").removeClass("inner__nav__inactive");
    $("#btnDesignWeb").removeClass("inner__nav__active");
    $("#btnFrontWeb").addClass("inner__nav__inactive");
    $("#btnBackWeb").addClass("inner__nav__active");
    $("#btnDesignWeb").addClass("inner__nav__inactive");
  });
  $("#btnDesignWeb").click(function () {
    $("#rowFrontWeb").removeClass("display__flex");
    $("#rowBackWeb").removeClass("display__flex");
    $("#rowDesignWeb").removeClass("display__none");
    $("#rowFrontWeb").addClass("display__none");
    $("#rowBackWeb").addClass("display__none");
    $("#rowDesignWeb").addClass("display__flex");
    //--------------
    $("#btnFrontWeb").removeClass("inner__nav__active");
    $("#btnBackWeb").removeClass("inner__nav__active");
    $("#btnDesignWeb").removeClass("inner__nav__inactive");
    $("#btnFrontWeb").addClass("inner__nav__inactive");
    $("#btnBackWeb").addClass("inner__nav__inactive");
    $("#btnDesignWeb").addClass("inner__nav__active");
  });

  $("#btnDevelopmentApp").click(function () {
    $("#rowDevelopmentApp").removeClass("display__none");
    $("#rowDesignApp").removeClass("display__flex");
    $("#rowDevelopmentApp").addClass("display__flex");
    $("#rowDesignApp").addClass("display__none");
    //--------------
    $("#btnDevelopmentApp").removeClass("inner__nav__inactive");
    $("#btnDesignApp").removeClass("inner__nav__active");
    $("#btnDevelopmentApp").addClass("inner__nav__active");
    $("#btnDesignApp").addClass("inner__nav__inactive");
  });

  $("#btnDesignApp").click(function () {
    $("#rowDevelopmentApp").removeClass("display__flex");
    $("#rowDesignApp").removeClass("display__none");
    $("#rowDevelopmentApp").addClass("display__none");
    $("#rowDesignApp").addClass("display__flex");
    //--------------
    $("#btnDevelopmentApp").removeClass("inner__nav__active");
    $("#btnDesignApp").removeClass("inner__nav__inactive");
    $("#btnDevelopmentApp").addClass("inner__nav__inactive");
    $("#btnDesignApp").addClass("inner__nav__active");
  });
});
