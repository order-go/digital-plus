const Price=({price}: {price: number}) => {
    return <p className=" text-base">{price.toFixed(2)}$</p>;
}

export default Price;