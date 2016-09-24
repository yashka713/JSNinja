/**
 * Created by Ярик on 24.09.2016.
 */
"use strict";

$(document).ready(function () {

    /* ✅ при загрузке главной страницы скрыть все пункты левого меню (categories) в которых нет подменю. */

    $(".panel.panel-default").hide().find(".panel-collapse.collapse").parent().show();

    /* ✅ при загрузке главной страницы перекрасить через один пункты меню QUOCK SHOP и POLICIES в футере
     в красный цвет */

    $('.footer-widget')
        .find('.col-sm-2:nth-child(2), .col-sm-2:nth-child(3)')
        .find("ul > li > a")
        .css("color", "red");

    /* ✅ при загрузке главной страницы скриптами поменять номер телефон на сайте на 1 (111) 111 11 11 */

    $(".contactinfo")
        .find("ul > li:first > a")
        .text("1 (111) 111 11 11");

    /* ✅ при загрузке главной страницы оставить в слайдере только 2й слайд */

    $(".carousel-inner")
        .find(".item:nth-child(2)").addClass("active")
        .parents()
        .find(".item:first, .item:last")
        .remove();

    /* ✅ при загрузке главной страницы перекрасить все заголовки в зеленый цвет */

    $(':header').css("color", "green");

});
