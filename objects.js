var student={
    id:1000,
    name:"rumana",
    course:"django"

}
console.log(student.name);
//console.log(student["name"]);

//adding new attribute

student["email"]="rumana@gmail.com"
console.log(student);
//check the attribute in object

console.log("name" in student);