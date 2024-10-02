import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { ShoppCartContext } from '../../Context';
import { OrderCard } from "../../Components/OrderCard";
import "./style.css";
import { totalPrice } from "../utils";

const CheckoutSideMenu = () =>{

    const context = useContext(ShoppCartContext);

    const handleDelete = (id) =>{
        const filteredProduct = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProduct);
        context.setCount(count => count - 1 );
    };

    const handleCheckout = () => {
        const orderToAdd = {
            date: "01.02.23",
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.closeSideMenu(); 
        context.setSearchByTitle(null);
    };

    return(
        <aside className={`${ context.checkSideMenu ? "flex": "hidden"}  product-detail  w-[360px] h-[calc(100%-68px)] flex-col fixed right-0 top-[68px] border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6 ">
                <h2 
                className=" font-medium text-lg">
                    My Order
                </h2>
                <MinusCircleIcon 
                className="size-6 cursor-pointer"
                onClick={() => context.closeSideMenu()}
                />
            </div>
            <div className="p-3 overflow-y-scroll flex-1">
                {
                context.cartProducts.map (product => (
                    <OrderCard 
                        handleDelete = {handleDelete}
                        id = {product.id}
                        key = {product.id}
                        title = {product.title}
                        imageURL = {product.images}
                        price = {product.price}
                    />
                ))
                }
            </div>
            <div className="px-6 mb-6">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light">Total: </span>
                    <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to="/my-orders/last">
                    <button onClick={() => handleCheckout()} className="w-full bg-black p-3 text-white rounded-lg font-medium ">
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    )
};

export { CheckoutSideMenu };