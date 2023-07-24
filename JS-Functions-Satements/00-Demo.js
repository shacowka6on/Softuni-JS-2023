function printStudentInfo(student){
    console.log(student.name + " is " + student.age + " years old.");
}
printStudentInfo({
    name: "Alex",
    lastName: "Georgiev",
    age: 19,
    grade: 4, 
});

function printFullName(name){
    return name.first + " " + name.last;
}
const fullName = printFullName({
    first: "John", last: "Doe"
});
console.log(fullName);