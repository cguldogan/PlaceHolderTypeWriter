var cursor = 0;

function simpleTyper(elementId, placeholder, interval) {
    var item = document.getElementById(elementId);
    setInterval(typewrite, interval, item, placeholder);
}

function typewrite(item, placeholder) {
    cursor = placeholder.length > cursor ? cursor : placeholder.length;
    item.setAttribute('placeholder', placeholder.substring(0, cursor));
    cursor = cursor + 1;
}