// //findBooksByCategory
const findBooksByCategory = (bookList, category) => bookList.filter(book => book.categories.includes(category));


//findBookById
const findBookById = (bookList, id) => {
    const filterById = bookList.find(element => element.id === id)

    if (filterById) {
        return filterById;
    }
    return;
}


//sellBook
const sellBook = (bookList, bookId, userType = "normal") => {
    const discountPercent = userTypeDiscount[userType];
    const filterById = bookList.find(book => book.id === bookId);

    if (!filterById || filterById.quantity <= 0) {
        return "Livro indisponível para compra"
    }

    const originalPrice = filterById.price;
    const discount = (originalPrice * discountPercent).toFixed(0);
    const totalPrice = (originalPrice - discount).toFixed(2);
    filterById.quantity--;

    if(filterById.quantity <= 0){
        return "Não temos mais esse livro disponível."
    }

    return `Livro ${filterById.title} vendido com sucesso por R$ ${totalPrice} (${discount}% de desconto).`;
}


//calculateAverageRating
const calculateAverageRating = (bookList, bookId) => {
    const filterById = bookList.find(element => element.id === bookId);

    if (!filterById) {
        return "Livro não encontrado."
    } else if (filterById.ratings.length === 0) {
        return `O livro ${filterById.title} não possui nennhuma avaliação.`;
    } else {
        const ratingsLength = filterById.ratings.length;
        const ratingsSum = filterById.ratings.reduce((accumulator, rating) => accumulator + rating, 0);
        const ratingsAverage = (ratingsSum / ratingsLength).toFixed(2);

        return `O livro ${filterById.title} possui uma média de avaliação igual a ${ratingsAverage}.`;
    }
}

