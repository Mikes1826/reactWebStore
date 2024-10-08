import { NavLink } from "react-router-dom";
import { ShoppCartContext } from "../../Context";
import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline"


const Navbar = () => {

    const activeStyle = "underline underline-offset-4";
    const context = useContext(ShoppCartContext);

    // Sign Out
    const signOut = localStorage.getItem("sign-out");
    const parsedSignOut = JSON.parse(signOut);
    const isUserSignOut = context.signOut || parsedSignOut;
    

    const handleSignOut = () =>{
        const stringifySignOut = JSON.stringify(true);
        localStorage.setItem("sign-out", stringifySignOut);
        context.setSignOut(true);
    }

    const renderView = () => {
        if (isUserSignOut)
            {
            return (
                <li>
                    <NavLink 
                        to= "/sign-in"
                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined}
                        onClick={() => handleSignOut()}
                        >
                        Sign out
                    </NavLink>
                </li>
            )
        }else {
            return (
                <>
                <li className="
                    text-black/60
                "
                >
                    Micito@correo.com
                </li>
                <li>
                    <NavLink 
                        to= "/my-orders"
                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined
                }>
                        My Orders
                    </NavLink>
                </li> 
                <li>
                    <NavLink 
                        to= "/my-account"
                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to= "/sign-in"
                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined}
                        onClick={() => handleSignOut()}
                        >
                        Sign out
                    </NavLink>
                </li>
                <li className="flex">
                    <ShoppingBagIcon className="size-5 mr-1"/>
                    <p className="font-semibold">{context.cartProducts.length}</p>
                </li>
                </>
            )
        }
    };



    return (
        <nav className=" flex  justify-between  items-center  fixed  z-10  top-0 w-full  py-5 px-8 text-sm font-light">
            <ul className=" flex  items-center gap-3">
                <li className="
                font-semibold 
                text-lg
                ">
                    <NavLink>
                        Floui
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to= "/"
                        onClick={() => context.setSearchByCategory()}
                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        all
                    </NavLink>
                </li> 
                <li>
                    <NavLink 
                        to= "/clothes"
                        onClick={() => context.setSearchByCategory("clothes")}
                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to= "/electronics"
                    onClick={() => context.setSearchByCategory("electronics")}
                    className = {({ isActive }) =>
                        isActive ? activeStyle : undefined
                }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to= "/furnitures"
                    onClick={() => context.setSearchByCategory("furniture")}
                    className = {({ isActive }) =>
                        isActive ? activeStyle : undefined
                }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to= "/toys"
                        onClick={() => context.setSearchByCategory("toys")}
                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to= "/others"
                        onClick={() => context.setSearchByCategory("others")}
                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined
                }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                {renderView()}
            </ul>
        </nav>
    )
};

export { Navbar };