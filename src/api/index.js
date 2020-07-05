
const GOODS = [
  {
    id: 0,
    name: 'Рубашка на пуговицах',
    type: 'Рубашки',
    mainImage: '/goods/shirt.png',
    slideImages: ['/goods/shirt.png', '/goods/shirt1.png', '/goods/shirt2.png', '/goods/shirt3.png', '/goods/shirt4.png'],
    price: 320,
    amount: 20,
    popularRate: 1,
    date: null,
  },
  {
    id: 1,
    name: 'Рубашка на пуговицах',
    type: 'Рубашки',
    mainImage: '/goods/shirt.png',
    slideImages: ['/goods/shirt.png', '/goods/shirt1.png', '/goods/shirt2.png', '/goods/shirt3.png', '/goods/shirt4.png'],
    price: 180,
    amount: 20,
    popularRate: 1,
    date: null,
  },
];

export const fetchGoods = () => new Promise(resolve => {
  setTimeout(() => {
    resolve({ payload: GOODS })
  }, 1000);
});
