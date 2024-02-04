var product={
    code:"sk10",
    tittle:"darkfantasy",
    category:"food",
    avlqty:20

}

console.log(product.tittle);

if("price" in product){
    console.log("found");
}
else{
    console.log("not found");
}

product["price"]=500
console.log(product);