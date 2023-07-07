export const getDiscountedPricePercentage = (originalPrice, discounttedPrice) => {
    const discount = originalPrice - discounttedPrice;
    const discountPercengate = (discount/originalPrice) * 100;
    return discountPercengate.toFixed(2);         
};