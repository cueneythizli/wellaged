import {
    V
}
from 'jointjs';

let measureText = function(text, attrs) {

    var fontSize = parseInt(attrs.fontSize, 10) || 10;

    var svgDocument = V('svg').node;
    var textElement = V('<text><tspan></tspan></text>').node;
    var textSpan = textElement.firstChild;
    var textNode = document.createTextNode('');

    textSpan.appendChild(textNode);
    svgDocument.appendChild(textElement);
    document.body.appendChild(svgDocument);

    var lines = text.split('\n');
    var width = 0;

    // Find the longest line width.
    for (let line of lines) {
        textNode.data = line;
        var lineWidth = textSpan.getComputedTextLength();

        width = Math.max(width, lineWidth);
    }

    var height = lines.length * (fontSize * 1.2);

    V(svgDocument).remove();

    return {
        width: width,
        height: height
    };
};

let guid = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

export {
    measureText, guid
};
