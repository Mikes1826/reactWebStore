import { MinusCircleIcon } from "@heroicons/react/24/outline";

const OrderCard = props => {

    const { id, title, imageURL, price, handleDelete } = props;
    let renderMinuscircleIcon;
    if (handleDelete){
        renderMinuscircleIcon = <MinusCircleIcon onClick={() => handleDelete(id)} className="size-6 cursor-pointer"/>
    };

    return (
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2"> 
                <figure className="w-20 h-20">
                    <img 
                    className="w-full h-full rounded-lg object-cover" src={imageURL} alt={title} />
                </figure>
                <p className="w-2/5 text-sm font-light ">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${price}</p>
                {renderMinuscircleIcon}
            </div>
        </div>
    );

};

export { OrderCard };