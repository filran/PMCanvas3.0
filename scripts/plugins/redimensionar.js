(function($){
    $.fn.redimensionar = function(){
        largura_wrap = $(this).width();
        altura_wrap = $(this).height();

        largura_janela = window.innerWidth; 
        altura_janela = window.innerHeight*0.985;

        prop = proportion( largura_wrap, altura_wrap, altura_janela ); //

        $(this).css({"width":prop});
        $(this).css({"height":altura_janela});        
    }
})(jQuery);
