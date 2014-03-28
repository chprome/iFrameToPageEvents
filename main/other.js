window.addEventListener('DOMContentLoaded', function() {

    var dom = document;

    // init sender
    var button = document.querySelector('button');
    button.addEventListener('click', function () {

        var message = {
            type: 'ParsingEvent',
            content: ['1', '2', '3']
        };

        var event = new CustomEvent("message", {detail: message});
        dom.dispatchEvent(event);
    });


});