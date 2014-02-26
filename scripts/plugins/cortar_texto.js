(function($){

    $.fn.cortar_texto = function(textLimiter){              
        $(this).text(function(i, t) {
            t = $.trim(t);
            if( t.length <=50 ){
                return t;
            }else{        
                return t.slice(0,textLimiter) + '...';
            }
        });  
    }

    
})(jQuery);

