import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { useContext } from "react";
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppCartContext } from "../../Context";

function Home() {

    const context = useContext(ShoppCartContext);

    const renderView = () => {
            if (context.filteredItems?.length > 0) {
                return(
                    context.filteredItems?.map( item => (
                        <Card key = {item.id} data= {item}/>))
                )
            }else {
                return(
                    <div>There´s any of that</div>
                )
            };
    };


    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl">Exclusive products</h1>
            </div>
            <input 
            type="text" 
            placeholder="Search a product" className="w-2/5 border rounded-xl border-black p-2 mb-4 focus:outline-none"
            onChange={(event) =>context.setSearchByTitle(event.target.value)} />
        <div className="grid gap-4 grid-cols-4 w-fullmax-w-screen-lg">
        {renderView()}
        </div>
        <ProductDetail/>
        </Layout>
    );
};

export { Home };