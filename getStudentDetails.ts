
// readonly -> final
// interface -> object(???)
// ? -> selectional
// define method in interface

interface Student {
    readonly age?: number;
    studentName: string;
    //addComment(comment: string): string;
    addComment?: (comment: string) => string;
}

function getStudentDetails(studentName: string): Student {
    return {
        studentName: 'kyu'
    };
}

function saveStudentDeatils(student: Student): void {

}

saveStudentDeatils({
    age: 21,
    studentName: 'fwefwew'
})