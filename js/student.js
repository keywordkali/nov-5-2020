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
