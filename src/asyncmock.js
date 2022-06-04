const products = [
    {
        id: '1',
        name: 'torta piñata',
        price: 5230,
        category: 'tortas',
        img: '/images/torta_piñata_1.jpeg',
        stock: 10,
        description: 'estructura del mas rico chocolate rellena de fantasticas golosinas'
    },
    {
        id: '2',
        name: 'buttercream cake',
        price: 4740,
        category: 'tortas',
        img: 'images/buttercream_cake_1.jpeg',
        stock: 10,
        description: 'bizcocho relleno cubierto de buttercream'
    },
    {
        id: '3',
        name: 'lemon pie',
        price: 1890,
        category: 'tartas',
        img: 'images/lemon_pie_1.jpeg',
        stock: 10,
        description: 'tarta de limon apta veganos'
    },
    {
        id: '4',
        name: 'cookies',
        price: 2100,
        category: 'cookies',
        img: 'images/cookies_1.jpeg',
        stock: 10,
        description: 'cookies de manteca decoradas con fondant'
    },
    {
        id: '5',
        name: 'fondant cake',
        price: 5100,
        category: 'tortas',
        img: 'images/fondant_cake_1.jpeg',
        stock: 10,
        description: 'bizcocho relleno cubierto con pasta americana'
    }


]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}