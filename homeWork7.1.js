var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

// const pattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-zA-Z]{2,}$/; // регулярний вираз для перевірки email
const pattern = /^[a-z0-9]+\.?([a-z0-9]+)?@(gmail.com)|(yahoo.com)$/;

let validEmails = [];

arr.forEach(element => {
    if (element.email.match(pattern)) {
        validEmails.push(element.email);
    }
});

console.log(validEmails);