var emp1= {
  "Name"    : "Arijit Deb",
  "Age"     : "35",
  "Salary"  : "8000",
  "Address" : {
    "BlockNo"    : "04-661",
    "StreetName" : "New Upper Changi Road",
    "Country"    : "Singapore"
  }
};

console.log(emp1.Name);
console.log(emp1["Salary"]);
console.log(emp1["Address"]["Country"]);
console.log(emp1["Address"].Country);
console.log(emp1.Address.BlockNo);