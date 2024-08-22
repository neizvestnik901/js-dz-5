
let user = {};

for (let i = 0; i < 10; i++) {
    let name = prompt(`Введите имя пользователя: ${i + 1}:`);
    let age = prompt(`Введите возраст пользователя: ${i + 1}:`);

    user[i + 1] = {
        name: name,
        age: age
    };

    console.log(`Пользователь - ${i + 1}`);
    console.log(`Имя - ${name}`);
    console.log(`Возраст - ${age}`);
}

console.log('База пользователей:');
console.log(user);