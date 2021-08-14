// 타입추론

let student = {
    name: 'Jake',
    course: 'Getting Started with TypeScript',
    codingIQ: 80,
    code: function () {
        console.log('brain ins working hard;');
    }
}

function calculateCodingIQ(lostPoints: number) {
    return 100 - lostPoints;
}