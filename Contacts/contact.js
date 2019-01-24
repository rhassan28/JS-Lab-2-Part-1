"use strict"
class AddressBook {
constructor () {
  this.contacts = [];
}
add(info) {
  this.contacts.push(info);

}
deleteAt(del) {
//console.log(del);
this.contacts.splice(del,1);
 }
print() {
  for (let i = 0; i < this.contacts.length; i++)
    console.log(this.contacts[i]);
 }
}

class Contact {
  constructor(name, email, relation, phone){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}
const book = new AddressBook();
console.log(book);
// book.add(new Contact("Matt", "matt@gmail.com", "205", "cousin"));
// book.add(new Contact("Derek", "derek@gmail.com", "430", "brother"));
// book.add(new Contact("Kim", "kim@gmail.com", "734", "mother"));
book.print();

while (true) {
  const choice = prompt("Would you like to Add, Print, Delete, or Quit?");
  if ( choice === "add") {
  const name = prompt("Enter Name")
  const email = prompt("Enter Email")
  const phone = prompt("Enter Phone")
  const relation = prompt("Enter Relation")
  book.add(new Contact(name, email, phone, relation));
}else if (choice === "print") {
  book.print();
}else if (choice === "delete") {
  const del = prompt ("what index do you want to delete?")
  book.deleteAt(del);
}else if (choice === "quit") {
  console.log("Bye...Loser");
break;
}
}
