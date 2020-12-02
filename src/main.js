import $ from 'jquery';
import 'jquery-lazy';
import {XHL} from "./modules/ajax";
import {progressBar} from "./modules/tools";

import('./style.css');

let Polaris = {
    //ajax加载文章
    XHL,
    //自适应
    AH: function () {
        $(window).resize(function () {
            Polaris.AH()
        })
    },
    //
}

$(function () {
    progressBar();
    Polaris.XHL();
    Polaris.AH();
    $(".lazy").lazy();
});