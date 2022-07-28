class CartItem {
    constructor(id, name, pricePerItem, freeShipping, quantity, imageUri) {
        this.id = id
        this.name = name
        this.pricePerItem = pricePerItem
        this.freeShipping = freeShipping
        this.quantity = quantity
        this.imageUri = imageUri
    }
}

export default CartItem