import React from "react";
import { useState, createContext, useEffect } from "react";



export const ShoppCartContext = createContext();

export const ShoppiCartProvider = ({children}) => {
    // ShopiCart - Counter
    const [count, setCount] = useState( 0 );
    // Product detail
    const [isCardOpen, setIsCardOpen] = useState( false );
    const openDetail = () => setIsCardOpen ( true );
    const closeDetail = () => setIsCardOpen ( false );
    // SIDE MENUA
    const [checkSideMenu, setCheckSideMenu] = useState( false );
    const openSideMenu = () => setCheckSideMenu(true);
    const closeSideMenu = () => setCheckSideMenu(false);

    //Product detail show product
    const [productToShow, setProductToShow] = useState ({});
    //addItem
    const [cartProducts, setCartProducts] = useState ([]);
    //Shopping cart .. order
    const [order, setOrder] = useState([]);
    // GEet Products
    const [items, setItems] = useState( null );
    const [filteredItems, setFilteredItems] = useState( null );

    // get products by titles
    const [searchByTitle, setSearchByTitle] = useState( null );
    // get products by categorys
    const [searchByCategory, setSearchByCategory] = useState( null );


    useEffect(() =>{
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data => setItems(data));
    }, []);

    const filteredItemsByTitle = (items, searchByTitle) =>{
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    };

    const filteredItemsByCategory = (items, searchByCategory) =>{
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
    };
    
    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === "BY_TITLE_AND_CATEGORY") {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
        };
        if (searchType === "BY_TITLE") {
            return filteredItemsByTitle(items, searchByTitle);
        };
        if (searchType === "BY_CATEGORY") {
            return filteredItemsByCategory(items, searchByCategory);
        };
        if (!searchType) {
            return items;
        };
    };



    useEffect(() =>{
        if (searchByTitle && searchByCategory ) setFilteredItems(filterBy("BY_TITLE_AND_CATEGORY",items, searchByTitle, searchByCategory));
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy("BY_TITLE",items, searchByTitle, searchByCategory));
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_CATEGORY",items, searchByTitle, searchByCategory));
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null,items, searchByTitle, searchByCategory));

    }, [items, searchByTitle, searchByCategory]);


    return (    
        <ShoppCartContext.Provider value= {{
            count,
            setCount,
            isCardOpen,
            openDetail,
            closeDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            checkSideMenu,
            setCheckSideMenu,
            openSideMenu,
            closeSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppCartContext.Provider>
    )
};

