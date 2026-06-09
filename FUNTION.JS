$ (document) .ready (function() {
    $ ('#contactForm') .on ('submit', function (event) {
        let isvalid = true;
        // validate Name
        if ($('#name') .val () . trim () === '' ) {
            $ ('#name') .addClass ('is-invalid') ; isvalid = false;
        } else{
            $('#name') .removeClass ('is-invalid');
        }
        //Validate Email 
        const Emailpattern=
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (! Emailpattern.test ($('#email'). val())) {
            $ ('#email') .addClass ('is-invalid');
            isvalid = false;
        } else {
            $ ('#email') .removeClass ('is-invalid') ;
        } 
        // validate Message
        if ($('#message') .val() .trim() === '' ) {
            $ ('#message') .addClass ('is-invalid') ;
            isvalid = false;
} else{
    $ ('#message') .removeClass ('is-invalid');
}
if (! isvalid) {
    event .preventDefault ();
}
    });
    });

    let searchBox =
    document.getElementById("SearchBox");
    searchBox.addEventListener("keyup",function(){
        let filter= searchBox.value.toUpperCase();
        let album =
        document.querySelectorAll(".album");
        album.forEach(function(item){
            let text = item. innerText.toUpperCase();
            if(text.includes(filter)){
                item.style.display = "block";
            }
            else {
                item.style.display = "none";

            }
        });
    });
        
