"use strict";
// 타입추론
var student = {
    name: 'Jake',
    course: 'Getting Started with TypeScript',
    codingIQ: 80,
    code: function () {
        console.log('brain ins working hard;');
    }
};
function calculateCodingIQ(lostPoints) {
    return 100 - lostPoints;
}
