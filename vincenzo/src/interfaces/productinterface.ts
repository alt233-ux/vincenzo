export interface Product {
    id: string;
    name: string;
    image:string;
    price: string;
    description: string;
}

const mockProducts: Product [] = [

    {
        id: "1",
        name: "product 1",
        image: "https://images.unsplash.com/photo-1720975945110-6278215f280d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
        price: "9.99",
        description: "Lorem ipsum dolor sit amet"
    },

    {
        id: "2",
        name: "product 2",
        image: "https://images.unsplash.com/photo-1720999127413-dd922893f04a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
        price: "19.99",
        description: "Lorem ipsum dolor sit amet"
    },

    {
        id: "3",
        name: "product 3",
        image: "https://images.unsplash.com/photo-1720964880193-66d0ac29fcc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
        price: "29.99",
        description: "Lorem ipsum dolor sit amet"
    },


];

export default mockProducts;