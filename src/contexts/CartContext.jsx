import React,{createContext, useState, useEffect} from 'react'

//create context

export const CartContex = createContext();



const CartProvider = ({children}) => {
    //cart state
    const [cart, setCart] = useState([]);
    //añadir item a carrito
    const addToCart = (product,id) =>{
        const newItem = {...product, amount: 1}; //iniciliza un nuevo elemento
        //verifico si el articulo ya esta en el carrito
        const cartItem =  cart.find((item) => {
            return item.id === id;
        });
        //el articulo ya esta en el carrito
        if(cartItem){
            const newCart = [... cart].map(item=>{
                if(item.id === id){
                    return {...item, amount: cartItem.amount + 1}
                }else {
                    return item;
                }
            });
            setCart(newCart);
        }else {
            setCart([...cart, newItem])
        };
        //console.log(newItem)
        //console.log(product)
        //console.log(`${product.title} añadido al carrito`)
    };
    //console.log(cart)


    //eliminar elemento  del carrito
    const removeFromCart = (id) => {
        const newCart = cart.filter (item =>{
            return item.id !== id;
        })
        setCart(newCart)
    }

    //eleminiar todo el carrito
    const clearCart = () => {
        setCart([]);
    }
    //incrementar monto
    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem,id)
      
      

    }
    //mermar monto
    const decreaseAmount = (id) => {
        const cartItem = cart.find((item)=> item.id === id);
        removeFromCart(id)
        if(cartItem) {
            const newCart = cart.map (item => {
                if(item.id === id ){
                    return{...item, amount: cartItem.amount - 1 };
                }else {
                    return item;
                }
            });
            setCart(newCart);
        }
            if(cartItem.amount < 2 ){
                removeFromCart(id);
            }
        

    }







    return (
        <CartContex.Provider value={{cart,addToCart, removeFromCart, clearCart, increaseAmount , decreaseAmount}}>{children}</CartContex.Provider>
    );
};
export default CartProvider;

