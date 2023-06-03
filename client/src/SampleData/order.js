import product1 from "../Assets/product1.png";

export const order = {
    _id: "1",
    createdAt: "2021-05-01T00:00:00.000Z",
    updatedAt: "2021-05-01T00:00:00.000Z",
    userId: "1",
    total: 4720,
    gst: 720,
    subTotal: 4000,
    type: "buy",
    quantity: 10,
    product: {
        id: "1",
        title: "Cow Milk",
        image: product1,
        price: 50,
        size: "2 Litre",
        stock: 10,
        brandName: "AapkaDoodhwala",
        category: "Dairy",
    }
}