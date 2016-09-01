/*jslint browser: true*/
/*global console, $, jQuery, alert*/
/*var sc = document.createElement("script"),
    att = document.createAttribute("src"),
    fin = document.getElementById("fin");
att.value = "js/jquery.nicescroll.min.js";
sc.setAttributeNode(att);
document.body.insertBefore(sc, fin);*/
$(document).ready(function () {
    'use strict';
    var nav = document.querySelector("nav"),
        edport = nav.getElementsByTagName("a");
    edport[8].textContent = "Portfolio";
    if (document.title === "Home") {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 30) {
                $("nav").addClass("nav-fix");
            } else {
                $("nav").removeClass("nav-fix");
            }
        });
    } else {
        $("nav").addClass("nav-fix");
    }
    
    $(".port .proj").hover(function () {
        $(this).children().slideDown();
    }, function () {
        $(this).children().slideUp();
    });
    $(".port .buts button").click(function () {
        $(".buts .act").removeClass("act");
        $(this).addClass("act");
    });
    $(function () {
        if (document.title === "Portfolio") {
            $('#mix').mixItUp();
        }
    });
    $(".serv .srv[data-num='1']").fadeIn();
    $(".serv .srvs li").click(function () {
        var n1 = $(".serv .srvs .act").data("num");
        $(".serv .srv[data-num='" + n1 + "']").slideUp();
        $(".serv .srvs .act").removeClass("act");
        $(this).addClass("act");
        var nn = $(this).data("num");
        $(".serv .srv[data-num='" + nn + "']").slideDown();
    });
    
    $("html").niceScroll({
        cursorcolor : '#29c2e1',
        cursorwidth : '7px',
        cursorborder: 'none',
        zindex      : '9999999'
    });
    var anc = document.createElement("a"),
        ic = document.getElementsByTagName("i"),
        j;
    anc.setAttribute("href", "http://www.facebook.com");
    anc.setAttribute("target", "_blank");
    for (j = 0; j < ic.length; j += 1) {
        if (ic[j].classList.contains("fa-facebook")) {
            var copyIC = ic[j].cloneNode(true),
                copyAnc = anc.cloneNode(true);
            copyAnc.appendChild(copyIC);
            ic[j].parentElement.replaceChild(copyAnc, ic[j]);
        }
    }
});


