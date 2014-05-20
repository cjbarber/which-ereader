$(function(){
    var ereadername = "";
    var verdict = "";
    var explanation = "";
    $('#which-ebookreader').click(function(){

        var usecase = $('#usecase').val();
        var cheap = $('#cheap').is(':checked')

        if (usecase == "books"){
            if (cheap){
                ereadername = "Kindle Classic"
                verdict = "FUCK, GET A <a href=\"http://www.amazon.com/exec/obidos/ASIN/B007HCCNJU/01733-20\">KINDLE CLASSIC</a>";
                explanation = "You should be buying a Paperwhite but you're too damn cheap."
            }
            else{
                ereadername = "Paperwhite"
                verdict = "GET A FUCKING <a href=\"http://www.amazon.com/exec/obidos/ASIN/B00AWH595M/01733-20\">PAPERWHITE</a>";
                explanation = "Thank fuck someone has sense.";
            }
        }
        else if (usecase == "bigscreen"){
            if (cheap){
                ereadername = "??"
                verdict = "I DON'T FUCKING KNOW. GET A FUCKING <a href=\"http://www.amazon.com/exec/obidos/ASIN/B00AWH595M/01733-20\">PAPERWHITE.</a>";
                explanation = "God fucking dammit, just be okay with the Paperwhite.";
            }
            else{
                ereadername = "Kobo Aura HD"
                verdict = "GET A FUCKING <a href=\"http://www.amazon.com/exec/obidos/ASIN/B00CFV45KS/01733-20\">KOBO AURA HD.</a>";
                explanation = "What the fuck is a Kobo? Go Google it for fucks sake.";
            }
        }
        else if (usecase == "movies"){
            if (cheap){
                ereadername = "Tablet"
                verdict = "SERIOUSLY? BUY A GODDAMN TABLET. AN <a href=\"http://www.amazon.com/exec/obidos/ASIN/B009W8YQ6K/01733-20\">IPAD</a> OR A <a href=\"http://www.amazon.com/exec/obidos/ASIN/B00DVFLJKQ/01733-20\">NEXUS 7.</a>";
                explanation = "You don't want a goddamn ereader.";
            }
            else{
                ereadername = "Tablet"
                verdict = "BUY A GODDAMN TABLET. AN <a href=\"http://www.amazon.com/exec/obidos/ASIN/B009W8YQ6K/01733-20\">IPAD</a> OR A <a href=\"http://www.amazon.com/exec/obidos/ASIN/B00DVFLJKQ/01733-20\">NEXUS 7.</a>";
                explanation = "You don't want a goddamn ereader.";
            }
        }
        else{
            verdict = "WHAT THE FUCK DO YOU WANT TO USE IT FOR?"
            explanation = "How the fuck did you expect this to work?"
        }

        $('#ereadername').text(ereadername);
        $('#ereader-name').html(verdict);
        $('#ereader-explanation').text(explanation);
    });
});