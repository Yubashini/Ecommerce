export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    stock: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}

export interface Order {
    id: string;
    userId: string;
    productIds: string[];
    totalAmount: number;
    orderDate: Date;
    status: 'pending' | 'shipped' | 'delivered' | 'canceled';
}