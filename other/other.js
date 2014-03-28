window.addEventListener('DOMContentLoaded', function() {


    var otherWindow = null,
         otherUrl = null;

    // init callback
    window.addEventListener('message', function (e) {
        if(otherWindow === null) {
            console.log('iFrame received message');
            otherWindow = e.source;
            otherUrl = e.origin;
            initThisListener();
        }
    }, false);

    function initThisListener() {
        // init sender
        var button = document.querySelector('button');
        button.addEventListener('click', function () {

            var message = {
                type: 'ParsingEvent',
                content: ['1', '2', '3']
            };
            otherWindow.postMessage(JSON.stringify(message), otherUrl);
        });
    }


});