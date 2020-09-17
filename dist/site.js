// Getting Vue
d = genskill.init();

window.onload = function() {
    console.log("Here !", d.Vue);

    var component_a = {
        data: function () {
            return {
                count: 0
            }
        },
        template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    };
 

    var app = new d.Vue({
        el: '#app',
        components: {
            'compa': component_a
        },
        data: {
            message: 'Hello Vue!'
        }
    });
};
    



