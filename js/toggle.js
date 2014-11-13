/**
 * Created by sirools on 01/04/2014.
 */

 function open_close(idOpenSource, idCloseSource, idArticle) {
    $(idOpenSource).click(function(event){
        console.log('click on #1');
        $(idArticle).toggleClass("show");
        $(idArticle).toggleClass("hide");

    });


    $(idCloseSource).click(function(event){
        console.log('click on #close_article');
        $(idArticle).toggleClass("show");
        $(idArticle).toggleClass("hide");

    });
 }
