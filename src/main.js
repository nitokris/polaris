import $ from 'jquery'
import 'jquery-lazy'
// import {XHL} from "./modules/ajax";
// import {progressBar} from "./modules/tools";

require('./style.css')

// let Nitokris = {
//     XHL,
// }

$(function () {
    $(".lazy").lazy();
})