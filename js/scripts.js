$(document).ready(function() {

    // When user clicks on 'Add' button, everything in here runs...
    $("form#new-contact").submit(function(event) {

        // Attributes - get value from input fields in the form and store them in variables
        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName  = $("input#new-last-name").val();
        var inputtedStreet    = $("input#new-street").val();
        var inputtedCity      = $("input#new-city").val();
        var inputtedState     = $("input#new-state").val();
        var inputtedZip       = $("input#new-zip").val();
        var inputtedPhone     = $("input#new-phone").val();
        var inputtedEmail     = $("input#new-email").val();

        var newAddress = {
                street:      inputtedStreet,
                city:        inputtedCity,
                state:       inputtedState,
                zip:         inputtedZip,
                fullAddress: function() {
                    return this.street + " " + this.city + ", " + this.state + " " + this.zip;
                }
            };

        // Define a 'Contact' Object
        var newContact = {
                    firstName:   inputtedFirstName,
                    lastName:    inputtedLastName,
                    address:     newAddress.fullAddress(),
                    phone:       inputtedPhone,
                    email:       inputtedEmail
                };

        // Populates the list of clickable names
        $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

        // Resets the inputs to be blank
        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
        $("input#new-street").val("");
        $("input#new-city").val("");
        $("input#new-state").val("");
        $("input#new-zip").val("");
        $("input#new-phone").val("");
        $("input#new-email").val("");

        // When user clicks on name, this reveals the properties of that
        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
            $(".address").text(newContact.address);
            $(".phone").text(newContact.phone);
            $(".email").text(newContact.email);
        });

        event.preventDefault();

    });

});
