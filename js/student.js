"option strict" //turns off the ability to create a new value without using let or var
class Student {
    name;
    favcolor;
    favnumber;

constructor(name, favcolor, favnumber) {
    this.name = name;
    this.favcolor = favcolor
    this.favnumber = favnumber;
}

log(){
console.log(this.name, this.favcolor,this.favnumber);
}
}

let students = [
  new Student("Fred", "green", 8),
  new Student("Wilma","red", 1),
  new Student("Barney", "blue", 7),
  new Student("Betty","orange", 3),
  new Student("Pebbles","pink", 2)
];
//below is creating the table dynamically
const display = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let s of students){
     let tr = "<tr>";
     tr += `<td>${s.name}</td>`;
     tr += `<td>${s.favcolor}</td>`;
     tr += `<td>${s.favnumber}</td>`;
     tr += "</tr>";
     tbody.innerHTML += tr;
       
    }
}

const save = () => {
    let name = document.getElementById("name").value;
    let favcolor = document.getElementById("favcolor").value;
    let favnumber = document.getElementById("favnumber").value;
    let student = new Student(name, favcolor, favnumber);
    students.push(student);
    console.log(students);

}
