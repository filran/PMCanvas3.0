/*This plugin is for expand o postit or canvas's area*/

(function($){  


    //open expand
    $.fn.expand = function( tipo ){
        //o tipo é se for para amplicar post ou área
        
        $("<div id='backgroundexpand' class='backgroundexpand'></div>").appendTo("body");
        
        //EXPAND BACKGROUND
        $(".backgroundexpand").css({"z-index":"1","opacity":0}).addClass("com_fundo");
        $(".backgroundexpand").animate({"opacity":1},time);

        if( tipo=="postit" ){
            //create elements
            $("<div bigpostit-id='' class='bigpostit'></div>").appendTo(".backgroundexpand");

            var id = $(this).attr("postit-id");
            var selector = "li[postit-id="+id+"]";
            var selectorbig = "div[bigpostit-id="+id+"]";
            var time = 100; 
            var content = $(selector).text();          

            $(selector).animate({"opacity":"0"});
            $("div[bigpostit-id]").attr("bigpostit-id",id);
            $(selectorbig).animate({"opacity":"1"},time).html(content+"<br>"+id); 

            //close
            $(".backgroundexpand").click(function(){
                $(selectorbig+".bigpostit").animate({"opacity":"0"},time, function(){
                    $(this).remove();     
                    $(".backgroundexpand").animate({"background-color":"rgba(0,0,0,0)"}).css({"z-index":"-1"},time,function(){
                        $(".backgroundexpand").addClass("sem_fundo");
                        $(this).remove();
                    });  
                });
                $(selector).animate({"opacity":"1"},time);
            });
            
        }else if(tipo=="area"){
 //create elements
            $("<div bigareacanvas-id='' class='bigareacanvas'><h1></h1></div>").appendTo(".backgroundexpand");

            var id = $(this).attr("id");
            var id = id.replace("zoomarea_","");
            var selector = "#area li[id="+id+"]";
            var selectorbig = "div[bigareacanvas-id=big_"+id+"]";
            var time = 100; 
            var tituloarea = $(selector+" h1").text();
            //var conteudo = $(selector+" > ul.receberpostit > li");  

            $(selector).animate({"opacity":"0"});
            $("div[bigareacanvas-id]").attr("bigareacanvas-id","big_"+id);
            $(selectorbig).animate({"opacity":"1"},time).append(conteudo);
            $(selectorbig+" h1").append(tituloarea);

            //close
            $(".backgroundexpand").click(function(){
                $(selectorbig+".bigareacanvas").animate({"opacity":"0"},time, function(){
                    $(this).remove();     
                    $(".backgroundexpand").animate({"background-color":"rgba(0,0,0,0)"}).css({"z-index":"-1"},time,function(){
                        $(".backgroundexpand").addClass("sem_fundo");
                        $(this).remove();
                    });  
                });
                $(selector).animate({"opacity":"1"},time);
            });
        }

            
    }    
})(jQuery);
