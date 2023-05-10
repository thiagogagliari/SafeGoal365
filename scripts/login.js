const users = [
    {
        id: '1',
        login: 'thiagogagliari',
        pass: 'Thisam@y100512'
    },
    {
        id: '2',
        login: 'igorvidal',
        pass: 'igorvl'
    },
    {
        id: '3',
        login: 'samuelalmd93',
        pass: 'Dino6740'
    },
    {
        id: '4',
        login: 'CLZpaulinho',
        pass: '413721'
    },
    {
        id: '5',
        login: 'dagodf',
        pass: 'Dago2023'
    },
    {
        id: '6',
        login: 'nestorgarcia',
        pass: 'ongarcia'
    },
    {
        id: '7',
        login: 'maurirodrigues',
        pass: 'malice1'
    },
    {
        id: '8',
        login: 'rouger',
        pass: '1978'
    },
    {
        id: '9',
        login: 'eng.michel2013',
        pass: '15081963'
    },
    {
        id: '10',
        login: 'wandrey',
        pass: 'Oliver154263'
    },
    {
        id: '11',
        login: 'amontos2017',
        pass: '55651331oi'
    }
];

function logar() {
    let getUsers = document.getElementById('login').value;
    let getPassword = document.getElementById('senha').value;
    let validLogin = false;


    for (let i in users) {
        if (getUsers == users[i].login && getPassword == users[i].pass) {
            validLogin = true
            break;
        } else {
            validLogin = false
        }
    }

    if (validLogin == true) {
        alert(`Seja bem-vindo ${getUsers}`);
        location.href = 'pages/2EYoKS4u4Z.html';
    } else {
        alert('Usuário e/ou senha inválidos!');
    }

};
