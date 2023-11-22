const calculateTotalCost = (customerName, products, discount = 0) => {
    let valueProducts = 0;

    products.forEach(element => {
        const price = element.price;
        const quantity = element.quantity;
        valueProducts += price * quantity;
    });

    if (discount != 0) {
        valueProducts = (valueProducts * ((100 - discount) / 100)).toFixed(2);
        return `Olá, ${customerName}! O total da sua compra é R$ ${valueProducts} (${discount}% de desconto).`;

    }
    return `Olá, ${customerName}! O total da sua compra é R$ ${valueProducts} (sem desconto).`;
}


