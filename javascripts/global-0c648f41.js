(function(){$(function(){(function(){var a;a=function(){var a,e;a=$(window).scrollTop();e=$(window).height();return $(".animate").each(function(){var f,b,c;b=$(this).height();c=$(this).offset().top;f=a+e>c+b/2;b=a<c+b+b;if(f&&b){if(!$(this).hasClass("animated"))return $(this).addClass("animated").trigger("animated")}else if($(this).hasClass("animated"))return $(this).removeClass("animated")})};$(a);return $(window).scroll(a)})();$(".site-header").affix({offset:{top:$(".site-header").offset().top}});
(function(){if(!Modernizr.svg)return $("img.svg").each(function(){var a,d;a=$(this);d=a.attr("src").replace(".svg",".png");return a.attr("src",d)})})();$(".nav-toggle").click(function(){var a;a=$($(this).data("target"));return"none"===a.css("display")?a.slideDown(250):a.slideUp(250)});if("#contact"===window.location.hash)return $("#contact").modal("show")});$(window).on("page:change",function(){animateVisible();headerAffix();return replaceSVG()})}).call(this);