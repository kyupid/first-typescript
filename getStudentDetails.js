"use strict";
// enum GenderType { //enum 숫자열거형
//     Male,
//     Female,
//     Neutral
// }
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["Neutral"] = "neutral";
})(GenderType || (GenderType = {}));
function getStudentDetails(studentName) {
    return {
        studentName: 'kyu',
        gender: GenderType.Male
    };
}
function saveStudentDeatils(student) {
}
saveStudentDeatils({
    age: 21,
    gender: 'female',
    studentName: 'fwefwew'
});
