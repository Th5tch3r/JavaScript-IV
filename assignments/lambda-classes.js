// CODE here for your Lambda Classes
//Person Class
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

//Instructor 
class Instructor extends Person {
    constructor(insAttr) {
        super(insAttr);
        this.specialty = insAttr.specialty;
        this.favLanguage = insAttr.favLanguage;
        this.catchPhrase = insAttr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

//Student 
class Student extends Person {
    constructor(stuAttr) {
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.map(items => console.log(items));
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

//PM
class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

//Objects for Instructor
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const Chic = new Instructor({
    name: 'Chic',
    location: 'Colorado',
    age: 28,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Cheer!`
});

//Objects for Student
const Summer = new Student({
    name: 'Summer',
    location: 'Atlanta',
    age: 20,
    previousBackground: 'none',
    favSubjects: ["CSS", "React"]
});

const Thatcher = new Student({
    name: 'Thatcher',
    location: 'Atlanta',
    age: 18,
    previousBackground: 'none',
    favSubjects: ["CSS", "JavaScript"]
});

//Objects for Project Manager
const Pete = new ProjectManager({
    name: 'Pete',
    location: 'Houston',
    age: 44,
    gradClassName: 'CS5'
});

const Matt = new ProjectManager({
    name: 'Matt',
    location: 'New York',
    age: 25,
    gradClassName: 'CS8'
});


//console.log
console.log(fred.speak()); 
console.log(Summer.listsSubjects());
console.log(Matt.debugsCode(Summer, "CSS"));
console.log(Pete.standUp("WEBPT10"));
console.log(Thatcher.sprintChallenge("Javascript"));
console.log(Chic.demo("Python"));
console.log(Chic.grade(Summer, "CSS"));
console.log(Thatcher.PRAssignment("FlexBox"));
console.log(Chic.catchPhrase);