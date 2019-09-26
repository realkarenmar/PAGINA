var ejemplo = '[{"id": 1,"name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz", "address": }]';
console.log(ejemplo);

for (var i = 0; i < ejemplo.length; i++) {
    console.log(ejemplo[i].name + ' is a ' + ejemplo[i].username + '.' + ejemplo[i].email + ejemplo[i].address );
    }