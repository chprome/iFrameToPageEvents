window.addEventListener('DOMContentLoaded', function() {

    var ifr = document.querySelector('iframe');

    // Init listener
    window.addEventListener('message',function(e) {
        var data = JSON.parse(e.data);
        console.log('Main received message: '+ data.type);
        data.content.forEach(function(el) {
            console.log(el);
        })
    },false);

    // Init sender
    var button = document.querySelector('button');

    button.addEventListener('click', function() {
        ifr.contentWindow.postMessage('init', 'http://192.168.1.34:9001');
    });
});