export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(amount);
};

export const calculateDiscount = (price: number, discount: number): number => {
    return price - (price * (discount / 100));
};