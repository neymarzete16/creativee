let banner = document.querySelector('.banner');
banner.onmousemove = function(e){
    let x = e.pageX - banner.offsetLeft;
    let y = e.pageY - banner.offsetTop;
    banner.computedStyleMap.setProperty('--x', x + 'px');
    banner.computedStyleMap.setProperty('--y', y + 'px');
}
