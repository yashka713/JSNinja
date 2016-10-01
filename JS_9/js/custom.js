/**
 * Created by Ярик on 24.09.2016.
 */
"use strict";

$(document).ready(function () {
    //базовые методы

    $("div:first").attr("class", "myClass");
    $("div:first").removeAttr("myClass");
    $("div:first").addClass("myClass-2");
    $("div:first").hasClass("myClass-2");
    $("div:first").removeClass("myClass-2");
    $("div:first").toggleClass("myClass-3");
    $("input:text:first").val();
    $("div").eq(2);
    $("div").filter(".container");
    $("div").filter(".container").map(function (i, el) {
        console.log(i);
        console.log(el);
        return this.val();
    });
    $("div").not(".col-sm-2");
    $("div").slice(1, 5);
    $("div").slice(1, 5).add('input');
    $("div").children();
    $("div").parent();
    $("div").slice(1, 2).closest("#header");
    $("div.container").find("#header");
    $(".header-middle").siblings();
    $("div.container").find("ul").andSelf();
    $("div.container").find("ul").hide().css("color");

    //работа с DOM

    $(".contactinfo a:first").html('<i></i>i>+1 111 111 111');
    $(".contactinfo a:first").text();
    $(".contactinfo a:first").append('<b>+38 050 64 56 220</b>');
    $(".contactinfo a:first").prepend('<b>+38 050 64 56 220</b>');
    $(".contactinfo a:first").prepend('<b>+38 050 64 56 220</b>');
    $('<b>+38 050 64 56 220</b>').appendTo(".contactinfo a:first");
    $(".contactinfo a:first").wrap('<div class="container"></div>');
    $(".contactinfo a:first").wrapInner('<div class="container"></div>');

    //стили

    $(".contactinfo").css({color: "green", float: "right"});
    $(".contactinfo").width();
    $(".contactinfo").height();

});
