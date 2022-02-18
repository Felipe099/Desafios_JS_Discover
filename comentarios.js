let student = {
    name: 'felipe',
    age: 25,
    weight: 74,
    starts: 4.9,
    isSubscribed: true,
};

const student1 = {
    name: 'Aline',
    age: 27,
    weight: 64,
    starts: 9.9,
    isSubscribed: false,
};

// console.log(
//     student.name +
//         ' de idade ' +
//         student.age +
//         ' anos pesa ' +
//         student.weight +
//         'kg.'
// );

let students = [student, student1];

console.log(`${students[0].name} ama demais ${students[1].name}`);
