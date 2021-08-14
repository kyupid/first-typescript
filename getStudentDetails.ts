// enum GenderType { //enum 숫자열거형
//     Male,
//     Female,
//     Neutral
// }

enum GenderType { //enum 문자열거형
    Male = 'male',
    Female = 'female',
    Neutral = 'neutral'
}


// readonly -> final
// interface -> object(???)
// ? -> selectional
// define method in interface

interface Student {
    readonly age?: number;
    studentName: string;
    gender: 'male' | 'female' | 'genderNeutral', // literal type
    //addComment(comment: string): string;
    addComment?: (comment: string) => string;
}

function getStudentDetails(studentName: string): Student {
    return {
        studentName: 'kyu',
        gender: GenderType.Male
    };
}

function saveStudentDeatils(student: Student): void {

}

saveStudentDeatils({
    age: 21,
    gender: 'female',
    studentName: 'fwefwew'
})