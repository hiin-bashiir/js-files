
const people = [
    { name: "Abdi", age: 24, city: "Garowe" },
    { name: "Kalid", age: 20, city: "Galkacyo" },
    { name: "Hani", age: 18, city: "Bosaso" },
];

for (const user of people) {
    console.log("Properties and values of each person:");

    for (const key in user) {
        console.log(key + ": " + user[key]);
    }

    console.log("----");
}
