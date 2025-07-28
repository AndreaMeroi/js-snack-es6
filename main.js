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
const weightList = ['weight.Bweight']

for (let i = 0; i < bike.length; i++) {
    const weight = bike[i];
    console.log(weight.Bweight)

}








