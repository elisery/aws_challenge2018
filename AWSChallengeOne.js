
const skillMap = (arr) => {
  const skillObj = {};
  arr.forEach(person => {
    person.skills.forEach(skill => {
      skillObj[skill] ? skillObj[skill].push(person.name) : skillObj[skill] = [person.name];
    });
  }); 
  return skillObj;
}