window.onload = function() {

    var ifr = document.querySelector('iframe');

    // Init listener
    ifr.contentDocument.addEventListener('message',function(e) {
        var data = e.detail;
        console.log('Main received message: '+ data.type);
        data.content.forEach(function(el) {
            console.log(el);
        })
    },false);
};