/**
 * 获取计算后的样式(兼容ie)
 * @param el
 * @param attr
 * @returns {*}
 */
function getStyle(el,attr) {
    return el.currentStyle?el.currentStyle[attr]:getComputedStyle(el)[attr];
}