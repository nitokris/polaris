import $ from "jquery"
import {XHL} from "./modules/ajax";
import {progressBar} from "./modules/tools";

import('./style.css')

let Nitokris = {
    XHL,
}

$(document).ready(function () {
    Nitokris.XHL()
    progressBar()
})