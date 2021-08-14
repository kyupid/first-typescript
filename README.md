# first-typescript

## 궁금한점

왜 다른 ts 파일 안에 있는 인터페이스에 선언한 readonly가   
작성중인 ts 클래스 내에 있는 변수에 영향이 가는거지?   
   
예시).   

```typescript
// test1.ts

interface Student {
    readonly age?: number;
    studentName: string;
}

```
```typescript
// test2.ts
// 컴파일 불가
// becasue it is a readonly property.

class Student {
    fullName: string;
    age: number;

    constructor(fullName: string, age: number) {
        this.fullName = fullName;
        this.age = age;
    }
}
```
