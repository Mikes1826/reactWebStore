import React from "react";
import { useContext } from "react";
import { ShoppCartContext } from "../../Context";
import { HeartIcon, CheckCircleIcon } from "@heroicons/react/24/outline"

const Card = (data) => {

    const context = useContext(ShoppCartContext);

    const shoWProduct = (productDetail) =>{
        context.openDetail();
        context.setProductToShow(productDetail);
        context.closeSideMenu();
    };

    const addProductsToCart = (event, productData) => {
        event.stopPropagation();
        context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, productData]);
        context.openSideMenu();
        context.closeDetail();
        console.log("CART: ", context.cartProducts);
    };

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;


        if (isInCart) {
            return(
                <div  className="absolute  top-0  right-0  flex  justify-center  items-center bg-white w-6 h-6 m-2 rounded-full font-bold">
                    <CheckCircleIcon   className="size-5 text-green-500 "/>
                </div>
            )
        }else{
            return(
                <div  className="absolute  top-0  right-0  flex  justify-center  items-center bg-white w-6 h-6 m-2 rounded-full font-bold
                " onClick={(event) =>addProductsToCart(event, data.data)} >
                    <HeartIcon   className="size-5 text-red-500"/>
                </div>
            )
        };
    };

    return (    
        <div  className="bg-white  cursor-pointer w-56 h-60 rounded-lg
        " onClick={() => shoWProduct(data.data)} >
        <figure  className="relative mb-5 w-full h-4/5 ">
            <span  className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm font-semibold m-3 px-2 py-0.5 ">
                {data.data.category.name}
            </span>
            <img className="w-full  h-full  object-cover rounded-lg
            " src={data.data.images[0]} alt={data.data.title} />
            {renderIcon(data.data.id)}
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-light">
            {data.data.title} 
            </span>
            <span className="text-lg font-semibold">
            ${data.data.price} 
            </span>
        </p>
    </div>
    )
};

export { Card };