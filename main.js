// Your code here.
const getFirstName = obj => obj.firstName;
const getLastName = obj => obj.lastName;
const getFullName = obj => `${obj.firstName} ${obj.lastName}`
const setFirstName = (fName, newName) => fName.firstName = newName
const setAge = (currentAge,newAge) => currentAge.age = newAge
const giveBirthday = obj => obj.age === undefined ? obj.age = 1 : obj.age++;

const marry = (p1,p2) => {
  p1.married = true;
  p2.married = true;
  p1.spouseName = `${p2.firstName} ${p2.lastName}`;
  p2.spouseName = `${p1.firstName} ${p1.lastName}`;
}

const divorce = (p1, p2) => {
   p1.married = false;
  p2.married = false;
  delete p1.spouseName;
  delete p2.spouseName;
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
