import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout"
import { OrdersCards } from "../../Components/OrdersCards";
import { ShoppCartContext } from "../../Context";
import { totalPrice } from "../../Components/utils";


function MyOrders() {
    const context = useContext(ShoppCartContext);


    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80">
                <h1>My Orders</h1>
            </div>
            
            {
                context.order.map((order, index)=>(
                    <Link key = {index} to={`/my-orders/${index}`}>
                        <OrdersCards  
                        totalPrice = {order.totalPrice}
                        totalProducts = {order.totalProducts}
                        />
                    </Link>
                ))
            }
        </Layout>
    )
};

export { MyOrders };