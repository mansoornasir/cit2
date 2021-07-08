// console.log('Message from NodeJS.')
// console.log('You are very late. Abdul Baqi.')
// console.log('This is another message.')

// var f = 10;
// var m = 5;

// var c = f + m;

// console.log(c)

// alert('This is it')

var spaces = 0;
var vowels = 0;
var sentences = 0;

var data = [
    {
        name: "Shahid",
        age: 21,
        gpa: 3.2,
        isStudent: true,
        marks: [30, 40, 50, 60, 0],
        subjects: {
            cpp: 3.2,
            java: 4.0,
            python: 2.3,
        },
        sentence: "This is sentence 1. And it is a bit longer.",
    },
    {
        name: "Shuja",
        age: 24,
        gpa: 3.3,
        isStudent: false,
        marks: [20, 60, 40, 60, 10],
        subjects: {
            cpp: 3.3,
            java: 1.0,
            python: 3.3,
        },
        sentence: "never thought i would write a crazy crazy sentence.",
    },
    {
        name: "Kamran",
        age: 24,
        gpa: 3.5,
        isStudent: true,
        marks: [33, 50, 70, 20, 10, 20, 40, 30],
        subjects: {
            cpp: 1.2,
            java: 3.0,
            python: 4.0,
        },
        sentence: "Lets hail the mentis lords. For the Hollow Nest!",
    },
];


for(var student = 0; student < data.length; student++)
{
    for(c = 0; c < data[student].sentence.length; c++) {

        switch(data[student].sentence.charAt(c)) {
            case ' ':
                spaces++;
                break;
            case '.':
            case '!':
                sentences++;
                break;
            case 'a':
            case 'e':
            case 'o':
            case 'i':
            case 'u':
                vowels++;
                break;
        }
        
    }
    console.log("Sentence   : " + data[student].sentence)
    console.log("Sentences   : " + sentences)
    console.log("Length     : " + data[student].sentence.length)
    console.log("Spaces     : " + spaces)
    console.log("Characters : " + (data[student].sentence.length - spaces))
    console.log("Words      : " + (spaces+1))
    console.log("Vowels     : " + vowels) 
    
    // reset
    spaces = 0;
    vowels = 0;
    sentences = 0;
}


// for(var student = 0; student < data.length; student++) {
//     if(data[student].isStudent) {
//         console.log("Name : " + data[student].name)
//         console.log("Age  : " + data[student].age)

//         console.log('------- Marks ------ ')
//         for(var m = 0; m < data[student].marks.length; m++) {
//             console.log(data[student].marks[m])
//         }
//         console.log('--------------------')

//         console.log(data[student].subjects.python)
//     }
// }

// for(var i = 0; i < data.length; i++) {
//     if(data[i].isStudent) {
//         console.log("Name : " + data[i].name)
//         console.log("Age  :" + data[i].age)

//         console.log("---- Marks ----")
//         for(var j = 0; j < data[i].marks.length; j++) {
//                 console.log(data[i].marks[j])
//             }
//         console.log("---------------")
//     }
// }

// console.log(data.name);
// console.log(data.age);
// console.log(data.isStudent);
// console.log(data.marks[5]);
// console.log(data.subjects.python);
// console.log(data.subjects["python"]);
