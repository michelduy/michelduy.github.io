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
 };

function open_close_magical(classe) {
    var cur = $(classe).children().first();

    var view = null;
    var button = null;

    for (;;) {
        if (!cur.length) {
            break;
        }

        if (view) {
            // On cherche et le bouton
            if (!cur.is('div')) {
                throw "Current element is not a popup Tabarouette!";
            }
            button = cur.children('button');

            // On fait le travail
            view.click(function(event){
                console.log();
                var popup2 = $(this).next();
                popup2.toggleClass("show");
                popup2.toggleClass("hide");
            });
            button.click(function(event){
                console.log('click on #close_article');
                var popup3 = $(this).parent();
                popup3.toggleClass("show");
                popup3.toggleClass("hide");
            });

            // On nétoie
            view = null;
            button = null;
        } else {
            // On cherche la vue.
            if (!cur.is('li')) {
                throw "Current element is not a view Tabarnak!";
            }
            view = cur;
        }

        cur = cur.next();
    }
};
