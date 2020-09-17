// Getting Vue
d = genskill.init();

window.onload = function() {
    console.log("Here !", d.gs_calendar);

    var component_a = {
        data: function () {
            return {
                count: 0
            }
        },
        template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    };
 

    var app = new d.Vue({
        components: {
            'compa': component_a,
            'calendar': d.gs_calendar
        },
        data: {
            message: 'Hello Vue!',
            date1: null
        }
    });
};
    



