$(function() {
    // get the form
    var form = $('#contactForm');

    // get the message div
    var formMessages = $('#formMessages');

    $(form).submit(function(event) {
        // stop the browser from submitting the form
        event.preventDefault();
        console.log("da");

        // serialize the form data/inputs into key value {name: name, email: email, message: message} 
        var formData = $(form).serialize();

        // submit the form using AJAX
        $.ajax({
        		type: 'POST',
            url: $(form).attr('action'),
            data: formData
        }).done(function(response) {
    				// make sure that the formMessages div has the 'alert-success' class
    				$(formMessages).removeClass('alert-danger');
    				$(formMessages).addClass('alert-success');

    				// set the message text
    				$(formMessages).text(response);

    				// show the div with message
    				$(formMessages).fadeIn().delay(4000).fadeOut();

    				// clear the form
    				$('#name').val('');
    				$('#email').val('');
    				$('#message').val('');
				}).fail(function(data) {
				    // make sure that the formMessages div has the 'alert-error' class
				    $(formMessages).removeClass('alert-success');
				    $(formMessages).addClass('alert-error');

				    // set the message text
				    if (data.responseText !== '') {
				        $(formMessages).text(data.responseText);
				    } else {
				        $(formMessages).text('Oops! An error occured and your message could not be sent.');
				    }

				    // show the div with message
    				$(formMessages).fadeIn().delay(4000).fadeOut();
				});
    });
});