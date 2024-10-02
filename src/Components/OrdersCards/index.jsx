import React from "react";
import { dateTime } from "../utils";
import { ChevronRightIcon } from "@heroicons/react/24/outline";



const OrdersCards = props => {
    const {totalPrice, totalProducts} = props;

    return (
        <div className="flex justify-around items-center mb-2 border rounded-lg border-black font-medium w-80 p-4 cursor-pointer">
            <div className="w-full flex justify-between">
                <p className="flex flex-col">
                <span>Date: {dateTime()} </span>
                <span>Articles: {totalProducts} </span>
                </p>
                <p className="flex flex-row-reverse gap-2 justify-center items-center">
                <ChevronRightIcon className="h-6 w-6  text-black cursor-pointer"/>
                <span className="font-medium text-2xl">${totalPrice} </span>
                </p>
            </div>
        </div>
    );  

};

export { OrdersCards };