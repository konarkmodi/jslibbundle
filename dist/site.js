// Getting Vue
d = webpackNumbers.init();

window.onload = function() {
    console.log("Here !", d.Vue);

    var app = new d.Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    });
};
    



