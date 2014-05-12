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
                verdict = "FUCK, GET A KINDLE CLASSIC";
                explanation = "You should be buying a Paperwhite but you're too damn cheap."
            }
            else{
                ereadername = "Paperwhite"
                verdict = "GET A FUCKING PAPERWHITE";
                explanation = "Thank fuck someone has sense.";
            }
        }
        else if (usecase == "bigscreen"){
            if (cheap){
                ereadername = "??"
                verdict = "I DON'T FUCKING KNOW. GET A FUCKING PAPERWHITE.";
                explanation = "God fucking dammit, just be okay with the Paperwhite.";
            }
            else{
                ereadername = "Kobo Aura HD"
                verdict = "GET A FUCKING KOBO AURA HD.";
                explanation = "The word Kobo does sound pretty fucking cool.";
            }
        }
        else if (usecase == "movies"){
            if (cheap){
                ereadername = "Tablet"
                verdict = "SERIOUSLY? BUY A GODDAMN TABLET. MAYBE A FUCKING NEXUS 7 OR AN IPAD.";
                explanation = "You don't want a goddamn ereader.";
            }
            else{
                ereadername = "Tablet"
                verdict = "BUY A GODDAMN TABLET. AN IPAD OR A NEXUS 7.";
                explanation = "You don't want a goddamn ereader.";
            }
        }
        else{
            verdict = "WHAT THE FUCK DO YOU WANT TO USE IT FOR?"
            explanation = "How the fuck did you expect this to work."
        }

        $('#ereadername').text(ereadername);
        $('#ereader-name').text(verdict);
        $('#ereader-explanation').text(explanation);
    });
});