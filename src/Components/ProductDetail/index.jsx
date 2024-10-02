import React, { useContext } from "react";
import { MinusCircleIcon } from "@heroicons/react/24/outline"
import { ShoppCartContext } from '../../Context'


const ProductDetail = () =>{

    const context = useContext(ShoppCartContext);

    return(
        <aside
        className={`${ context.isCardOpen ? "flex": "hidden"} 
        product-detail 
        w-[360px]
        h-[calc(100%-68px)]
        flex-col
        fixed
        right-0
        top-[68px]
        border
        border-black
        rounded-lg
        bg-white
    `}>
            <div  className="flex justify-between items-center p-6 overflow-y-scroll">
                <h2 
                className=" font-medium text-lg">
                    Detail
                </h2>
                <MinusCircleIcon 
                className="size-6 cursor-pointer"
                onClick={() => context.closeDetail()}
                />
            </div>
            <div>
                <figure className="px-6">
                    <img className= "w-full h-full rounded-lg" src= {context.productToShow.images?.[0]} alt={context.productToShow.title} />
                </figure>
                <p className="flex flex-col p-6">
                    <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
                    <span className="font-medium text-md">{context.productToShow.title}</span>
                    <span className="font-light text-sn">{context.productToShow.description}</span>
                </p>
            </div>
        </aside>
    )
};

export { ProductDetail };