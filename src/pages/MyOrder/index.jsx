import { useContext } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ShoppCartContext } from '../../Context';
import { OrderCard } from "../../Components/OrderCard";
import { Layout } from "../../Components/Layout";

function MyOrder() {

    const context = useContext(ShoppCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

    if (index === "last") index = context.order?.length - 1;

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-5">
                <Link to="/my-orders" className="absolute left-0">
                <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
                </Link>
                <h1>My Order</h1>
            </div>

            <div className="flex flex-col w-80">
                {
                context.order && context.order.length > 0 ? context.order[index]?.products.map(product => (
                    <OrderCard 
                        id = {product.id}
                        key = {product.id}
                        title = {product.title}
                        imageURL = {product.images}
                        price = {product.price}
                    />
                ))
                : <p>No hay ordenes listas</p>
                }
            </div>
        </Layout>
    )
};

export { MyOrder };