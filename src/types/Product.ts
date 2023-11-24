type ProductRate = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  rate: ProductRate;
};

// export type Product = {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
// };

// export type ProductLinks = {
//   viewDetails: string;
//   addToCart: string;
//   removeFromCart: string;
//   addToWishlist: string;
// };

// type ProductInfo = {
//   product: Product;
//   links: ProductLinks;
// };

// const productInfo: ProductInfo = {
//   product: {
//     id: 1,
//     title: 'san pham 1',
//     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
//     price: 99.99,
//   },
//   links: {
//     viewDetails: '/products/1',
//     addToCart: '/cart/add/1',
//     removeFromCart: '/cart/remove/1',
//     addToWishlist: '/wishlist/add/1',
//   },
// };


// function displayProductInfo(productInfo: ProductInfo) {
//   const { product, links } = productInfo;
//   console.log(`Product ID: ${product.id}`);
//   console.log(`Name: ${product.title}`);
//   console.log(`Price: ${product.price}`);
//   console.log(`Image: ${product.image}`);
//   console.log('Links:');
//   console.log(` View Details: ${links.viewDetails}`);
//   console.log(` Add to Cart: ${links.addToCart}`);
//   console.log(` Remove from Cart: ${links.removeFromCart}`);
//   console.log(` Add to Wishlist: ${links.addToWishlist}`);
// }

// displayProductInfo(productInfo);
