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

let fred = new Student("Fred", "green", 8);
let wilma = new Student("Wilma","red", 1);
fred.log();
wilma.log();
