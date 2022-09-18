var listaPaginas = ["#about-me", "#soft-skills", "#hard-skills"];
var indexAtual = 0;
var blockscroll = false;

function vaipara(menuItem) {
        document.getElementById("about").style.display = "none";
        document.getElementById("experience").style.display = "none";
        document.getElementById("education").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById(menuItem).style.display = "block";
        $(".experience-list .bottom").slideUp( "slow" );
        $(".experience-list .top .top-right").html("+");

        if($( window ).width() <= 1100) {
                $('#main-menu').fadeOut("slow");
        }

        if(menuItem == "about") {
                var idAtual = listaPaginas[indexAtual];
                var idProximo = listaPaginas[0];

                $(idAtual).hide();
                $(idProximo).show();

                indexAtual = 0;
        }
}

function vaiParaAbout(index) {
        var idAtual = listaPaginas[indexAtual];
        var idProximo = listaPaginas[index];

        $(idAtual).fadeOut("slow", function () {
                $(idProximo).fadeIn("slow", function () {
                        blockscroll = false;
                });
        });

        indexAtual = index;
}

$( document ).ready(function() {
        $('body').bind('wheel', function (e) {
        
                if (blockscroll == false) {
                        if (e.originalEvent.deltaY / 1200 < 0) {
                                if (indexAtual > 0) {
                                        blockscroll = true;
                                        vaiParaAbout(indexAtual - 1);
                                }
                        }else {
                                if (indexAtual < 2) {
                                        blockscroll = true;
                                        vaiParaAbout(indexAtual + 1);
                            window.location.search.substr(1)    }
                        }
                }
        });

        $("#hamburger-menu").click(function() {
                $("#main-menu").fadeToggle("slow");
        });

        $( window ).resize(function() {
                if($( window ).width() <= 1100) {
                        $('#main-menu').fadeOut("slow");
                } else {
                        $('#main-menu').fadeIn("slow");
                }
        });

        $(".experience-list .top").click(function() {
                var $mybottom = $(this).next('.bottom');
                if(!$mybottom.is(':visible')) {
                        $(".experience-list .bottom").slideUp( "slow" );
                        $(".experience-list .top .top-right").html("+");
                }

                $mybottom.slideToggle( "slow" );
                var text = $(this).find('.top-right').html();

                if(text == "+") {
                        $(this).find('.top-right').html("-");
                } else {
                        $(this).find('.top-right').html("+");
                }
        });

        if(window.location.search != "") {
                vaipara("contact");
               $('#contact .success').show();
        }
});