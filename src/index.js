import Vue  from 'vue';
import Dialog from 'primevue/dialog';


export function init() {
    Vue.component('Dialog', Dialog);
    return {"Vue" : Vue}
}
