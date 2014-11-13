/**
 * Created by sirools on 01/04/2014.
 */

 // function maFonction(idSource, idArticle) {
 //    console.log(idSource);
 //    $(idSource).click(function(event){
 //        console.log('click on #1');
 //        $(idArticle).toggleClass("show");
 //        $(idArticle).toggleClass("hide");
           
 //    });


 //    $(idSource).click(function(event){
 //        console.log('click on #close_article');
 //        $(idArticle).toggleClass("show");
 //        $(idArticle).toggleClass("hide");   
            
 //    });
 // }



    $('#Picture_Article').click(function(event){
        console.log('click on #1');
        $('#Article').toggleClass("show");
        $('#Article').toggleClass("hide");
           
    });


    $('#close_article').click(function(event){
        console.log('click on #close_article');
        $('#Article').toggleClass("show");
        $('#Article').toggleClass("hide");   
            
    });


    $('#Picture_Article2').click(function(event){
        console.log('click on #2');
        $('#Article2').toggleClass("show");
        $('#Article2').toggleClass("hide");       
    });


    $('#close_article2').click(function(event){
        console.log('click on #close_article2');
        $('#Article2').toggleClass("show");
        $('#Article2').toggleClass("hide");       
    });

