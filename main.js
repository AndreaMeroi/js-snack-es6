console.log('Snack 1')
/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.*/


const bike = [
    {
        Bname: 'scott',
        Bweight: 10
    },
    {
        Bname: 'cipollini',
        Bweight: 8
    },
    {
        Bname: 'bianchi',
        Bweight: 5
    },
    {
        Bname: 'cannondale',
        Bweight: 9
    },
    {
        Bname: 'giant',
        Bweight: 3
    },
    {
        Bname: 'pinarello',
        Bweight: 4
    },
    {
        Bname: 'campagnolo',
        Bweight: 15
    }

]

/*Stampare a schermo la bici con peso minore.*/

// select bweigh values then select lower number 
let minWB = bike[0]

for (let i = 0; i < bike.length; i++) {

    const curBike = bike[i];

    if (curBike.Bweight < minWB.Bweight) {
        minWB = bike[i];
    }

}
console.log(minWB)

console.log('Snack 2')

//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const teams = [
    {
        Tname: 'Inter',
        points: 0,
        failsDone: 0,
        failsSuffered: 0

    },
    {
        Tname: 'Milan',
        points: 0,
        failsDone: 0,
        failsSuffered: 0

    },
    {
        Tname: 'Juve',
        points: 0,
        failsDone: 0,
        failsSuffered: 0

    },
    {
        Tname: 'Toro',
        points: 0,
        failsDone: 0,
        failsSuffered: 0

    },
    {
        Tname: 'Samp',
        points: 0,
        failsDone: 0,
        failsSuffered: 0

    }
]


//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.












//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.







