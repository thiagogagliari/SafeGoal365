const users = [
    {
        id: '1',
        login: 'thiagogagliari',
        pass: '19852810',
        name: 'Thiago Gagliari'
    },
    {
        id: '2',
        login: 'igorvidal',
        pass: 'igorvl',
        name: 'Igor Vidal'
    },
    {
        id: '3',
        login: 'samuelalmd93',
        pass: 'Dino6740',
        name: 'Samuel Almeida'
    },
    {
        id: '4',
        login: 'CLZpaulinho',
        pass: '413721',
        name: 'Paulo Edson'
    },
    {
        id: '5',
        login: 'dagodf',
        pass: 'Dago2023',
        name: 'Dagoberto Corrêa'
    },
    {
        id: '6',
        login: 'nestorgarcia',
        pass: 'ongarcia',
        name: 'Nestor García'
    },
    {
        id: '7',
        login: 'maurirodrigues',
        pass: 'malice1',
        name: 'Mauri Rodrigues'
    },
    {
        id: '8',
        login: 'rouger',
        pass: '1978',
        name: 'Rouger Iurk'
    },
    {
        id: '9',
        login: 'eng.michel2013',
        pass: '15081963',
        name: 'Michel'
    },
    {
        id: '10',
        login: 'wandrey',
        pass: 'Oliver154263',
        name: 'Wandrey'
    },
    {
        id: '11',
        login: 'amontos2017',
        pass: '55651331oi',
        name: 'Marcelo Alves'
    },
    {
        id: '12',
        login: 'hardshok',
        pass: 'Hpd123456@',
        name: 'Leonardo Luz'
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