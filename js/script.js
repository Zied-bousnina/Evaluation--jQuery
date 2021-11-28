$(document).ready(function () {
    
  

    var nom = $("input[name=nom]"),
        prenom = $('input[name=prenom]'),
        email = $('input[name=Email]'),
        pays = $("#pays"),
        form = $('#form'),
        language = $('input:checkbox'),
        com = $('textarea[name=commentaire]');
        // console.log(com.val())

       
        $(form).on('submit',function() {
            $(".alert").remove();
            if ($(prenom).val().length <2) {
                $(prenom).after('<span id="obli" class="alert">Indiquez votre prenom</span>')
                $(prenom).css("border", "1px solid Red")

                return false;
                
            }
            if ($(nom).val().length<3) {
                $(nom).after('<span id="obli" class="alert">Indiquez votre nom</span>')
                return false;
                
            }
            if ($(email).val() == '') {
                $(email).after('<span id="obli" class="alert">Indiquez votre email</span>')
                return false;
                
            }

            if ($(pays).val() == 0) {
                $(pays).after('<span id="obli" class="alert">Indiquez votre Pays</span>')
                return false;
                
            }
            if ($("input:radio:checked").length == 0) {
                $('#eeee').after('<span style="color:red" class="alert">Indiquez votre Pays</span>')
                return false;
                
            }
            if (!$(language).is(':checked ') ) {
                $("#check").after('<span style="color:red" class="alert">check votre competences</span>')
                return false;
                
            }
            if (com.val().length <9) {
                $(com).after('<span id="obli" class="alert">Indiquez un commentaire(10 char min</span>')
                $("textarea[name=commentaire]").css("outline"," red auto 1px")
                 
                return false;
            }

            
        })
        $(prenom).keypress(function() {
            $(".alert").remove()
            
        if ($(prenom).val().length >=1) {
            $("input[name=prenom]:focus-visible").css("outline"," green auto 1px")
            $(".alert").remove()
        }else{
            $(prenom).after('<span id="obli" class="alert">Indiquez votre prenom(2 char min)</span>')
            $("input[name=prenom]:focus-visible").css("outline"," red auto 1px")

              
        }
           
        })
        $(nom).keypress(function() {
            $(".alert").remove()
            
            if ($(nom).val().length >= 2 ) {
                
                $("input[name=nom]:focus-visible").css("outline"," green auto 1px")
                $(".alert").remove()
            }else{
                $(nom).after('<span id="obli" class="alert">Indiquez votre nom(3 char min)</span>')
                $("input[name=nom]:focus-visible").css("outline"," red auto 1px")
                
                  
            }
           
        })

        $(email).keypress(function() {
            $(".alert").remove()
            
            if ( $(email).val().length >= 2  ) {
                
                $("input[name=Email]:focus-visible").css("outline"," green auto 1px")
                $(".alert").remove()
            }else{
                $(email).after('<span id="obli" class="alert">Indiquez votre Email(Doit contient "@", ".")</span>')
                $("input[name=Email]:focus-visible").css("outline"," red auto 1px")
                
                  
            }
           
        })

        $(com).keypress(function() {
            $(".alert").remove()
            
            if ( $(com).val().length > 9  ) {
                
                $("textarea[name=commentaire]:focus-visible").css("outline"," green auto 1px")
                $(".alert").remove()
            }else{
                $(com).after('<span id="obli" class="alert">Indiquez un commentaire(10 char min</span>')
                $("textarea[name=commentaire]:focus-visible").css("outline"," red auto 1px")
                
                
            }
            
           
        })

})







