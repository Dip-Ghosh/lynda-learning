import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {library} from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import "animate.css/animate.css"
 
import{faShoppingCart, faDollarSign} from '@fortawesome/free-solid-svg-icons'
library.add(faShoppingCart, faDollarSign);


createApp(App).mount('#app')
