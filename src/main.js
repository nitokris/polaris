import $ from "jquery"
import {XHL} from "./modules/ajax";

import('./style.css')

let Nitokris = {
    XHL,
}

$(document).ready(function () {
    Nitokris.XHL()
})