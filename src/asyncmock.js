const products = [
    {
        id: '1',
        name: 'torta piñata',
        price: 5230,
        category: 'tortas',
        img: '/images/torta_piñata_1.jpeg',
        stock: 10,
        description: 'estructura del mas rico chocolate rellena de fantasticas golosinas. Para tu fiesta, cumpleaños, para regalar o simplemente para compartir con tus seres queridos de esta gran delicia de la pasteleria. No dudes en probar todos nuestros productos que estan hechos con muchos amor y los mejores ingredientes de la mas alta calidad'
    },
    {
        id: '2',
        name: 'buttercream cake',
        price: 4740,
        category: 'tortas',
        img: '/images/buttercream_cake_1.jpeg',
        stock: 10,
        description: 'bizcocho relleno cubierto de buttercream.  Para tu fiesta, cumpleaños, para regalar o simplemente para compartir con tus seres queridos de esta gran delicia de la pasteleria. No dudes en probar todos nuestros productos que estan hechos con muchos amor y los mejores ingredientes de la mas alta calidad'
    },
    {
        id: '3',
        name: 'lemon pie',
        price: 1890,
        category: 'tartas',
        img: '/images/lemon_pie_1.jpeg',
        stock: 10,
        description: 'tarta de limon apta veganos.  Para tu fiesta, cumpleaños, para regalar o simplemente para compartir con tus seres queridos de esta gran delicia de la pasteleria. No dudes en probar todos nuestros productos que estan hechos con muchos amor y los mejores ingredientes de la mas alta calidad'
    },
    {
        id: '4',
        name: 'cookies',
        price: 2100,
        category: 'cookies',
        img: '/images/cookies_1.jpeg',
        stock: 10,
        description: 'cookies de manteca decoradas con fondant.  Para tu fiesta, cumpleaños, para regalar o simplemente para compartir con tus seres queridos de esta gran delicia de la pasteleria. No dudes en probar todos nuestros productos que estan hechos con muchos amor y los mejores ingredientes de la mas alta calidad'
    },
    {
        id: '5',
        name: 'fondant cake',
        price: 5100,
        category: 'tortas',
        img: '/images/fondant_cake_1.jpeg',
        stock: 10,
        description: 'bizcocho relleno cubierto con pasta americana.  Para tu fiesta, cumpleaños, para regalar o simplemente para compartir con tus seres queridos de esta gran delicia de la pasteleria. No dudes en probar todos nuestros productos que estan hechos con muchos amor y los mejores ingredientes de la mas alta calidad'
    }


]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === id))
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === categoryId))
        },500)
    })
}