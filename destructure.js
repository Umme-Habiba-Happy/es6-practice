const person = {name: 'jack william', age:17, gfName: 'ema watson', address:'kocu khet', phone:'0117112211', friends:['tom hancks', 'tom cruise', 'oliver']};
// const gfName = person.gfName;
// const phone = person.phone;
// const {phone} = person; 
// const {gfName }= person;
const {phone, gfName, salary}= person;
//here salary property is missing in this object -output will be undefined
console.log(gfName, phone,salary);
const friends = ['alia', 'koli', 'kajol', 'priya'];
const [...restfriend] = friends;
console.log(restfriend);
