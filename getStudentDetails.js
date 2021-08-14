"use strict";
// readonly -> final
// interface -> object(???)
// ? -> selectional
// define method in interface
function getStudentDetails(studentName) {
    return {
        studentName: 'kyu'
    };
}
function saveStudentDeatils(student) {
}
saveStudentDeatils({
    age: 21,
    studentName: 'fwefwew'
});
