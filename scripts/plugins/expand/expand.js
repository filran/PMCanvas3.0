/*This plugin is for expand o postit or canvas's area*/

(function($){  


    //open expand
    $.fn.expand = function( tipo ){
        //o tipo é se for para amplicar post ou área

        var time = 100; 

        $("<div id='backgroundexpand' class='backgroundexpand'></div>").appendTo("body");
        
        //EXPAND BACKGROUND
        $(".backgroundexpand").css({"z-index":"1","opacity":0}).addClass("com_fundo");
        $(".backgroundexpand").animate({"opacity":1},time);

        if( tipo=="postit" || tipo=="newpostit"){
            //create elements
            $("<div bigpostit-id='' class='bigpostit'></div>").appendTo(".backgroundexpand");

            var id = $(this).attr("postit-id");
            var autor = $(this).attr("autor");
            var areacandidata = $(this).attr("areacandidata");
            
            var selector = "li[postit-id="+id+"]";
            var selectorbig = "div[bigpostit-id="+id+"]";
            var time = 100; 
            var content = $(selector).text();          

            $(selector).animate({"opacity":"0"});
            $("div[bigpostit-id]").attr("bigpostit-id",id);            
            $(selectorbig).animate({"opacity":"1"},time);


            $(".bigpostit")
                .append("<div id='autor'>Autor:"+autor+"</div>")
                .append("<div><a href='#' id='fechar'><img src='imagens/icones/right.png'/></a></div>") //Botão Fechar
                .append("<div><a href='#' id='abrirteclado'><img src='imagens/icones/keyboard.png'/></a></div>")
                .append("<div id='wrapconteudopostit'><p id='conteudopostit' class='write' contenteditable='true'>"+content+"</p></div>");

            $("#abrirteclado").click(function(){
                tecladovisivel = $("#teclado").css("display");
                if( tecladovisivel=="block" ){
                    $("#teclado").css("display","none");
                }else{
                    $("#teclado").css("display","block");
                }                
            });

            //CENTRALIZAR CONTEUDO DO POST-IT
            centralizar_conteudopostit();
            $("#conteudopostit")
                .keydown(function(){
                    centralizar_conteudopostit();
                }).mouseout(function(){
                    centralizar_conteudopostit();
                }).trigger("click");

            $("#keyboard > li").click(function(){
                centralizar_conteudopostit();
            });


            if( tipo=="newpostit" ){
                //Indicar local para digitar
                texto_anotacao = "Sua anotação aqui";
                conteudo_postit = $("#conteudopostit").text();
                $("#conteudopostit")
                    .html(texto_anotacao)
                    .one("click",function(){
                        $(this).html("");
                    });                
            }
            
            

            //CLOSE
            $("#fechar").click(function(){
                $(selectorbig+".bigpostit").animate({"opacity":"0"},time, function(){
                    $(this).remove();     
                    $(".backgroundexpand").animate({"background-color":"rgba(0,0,0,0)"}).css({"z-index":"-1"},time,function(){
                        $(".backgroundexpand").addClass("sem_fundo");
                        $(this).remove();
                    });  
                });
                $(selector).animate({"opacity":"1"},time,function(){
                    $(".backgroundexpand").remove();
                });


                $("#teclado").css("display","none");
                $("#container_keyboard").removeAttr("style");
        

                //atualizar conteudo do postit
                conteudo = $("#conteudopostit").text();
                if(conteudo==""){
                    $(selector).remove();
                }else{
                    $(selector).html(conteudo);
                }
                
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
            var conteudo = $(selector+" > ul.receberpostit > li");  

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
                $(selector).animate({"opacity":"1"},time,function(){
                    $(".backgroundexpand").remove();
                });
                $(selector+" > ul.receberpostit").append(conteudo);
            });
        }

            
    }    
})(jQuery);


//centralizar conteudopostit==================================
function centralizar_conteudopostit(){
    var altura_wrapconteudopostit = $("#wrapconteudopostit").height(); // T      100%
    var altura_conteudopostit = $("#conteudopostit").height();         // P      x%      
    var top_conteudopostit = Math.round( (((altura_wrapconteudopostit-altura_conteudopostit)/2)*100)/altura_wrapconteudopostit)-4+"%";
    $("#conteudopostit").css("top",top_conteudopostit);
}

