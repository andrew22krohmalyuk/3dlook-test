
export const TYPES = {
  SHIRT: 'Рубашки',
  RAINCOATS: 'Плащи',
  SNEAKERS: 'Кроссовки',
  PANTS: 'Брюки',
};

const GOODS = [
  {
    id: 0,
    name: 'Рубашка на пуговицах',
    type: TYPES.SHIRT,
    mainImage: '/goods/shirt.png',
    slideImages: ['/goods/shirt.png', '/goods/shirt1.png', '/goods/shirt2.png', '/goods/shirt3.png', '/goods/shirt4.png'],
    price: 320,
    amount: 17,
    popularRate: 1,
    date: null,
  },
  {
    id: 1,
    name: 'Nike Air Max 270 React',
    type: TYPES.SNEAKERS,
    mainImage: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-4e115db9-fa44-42fe-b5d9-3115e5e7f1ed/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-270-react-2LDsVK.jpg',
    slideImages: [
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-4e115db9-fa44-42fe-b5d9-3115e5e7f1ed/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-270-react-2LDsVK.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-b11b4f4c-c12d-4645-beb0-ac81f87e3abb/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-270-react-2LDsVK.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-c6925d1c-b42f-41a6-a291-87222af3449a/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-270-react-2LDsVK.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-1f91d8d0-6ff2-48cc-bb2f-a52cc2dd38ec/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-270-react-2LDsVK.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-6b2d13c5-afc7-4a77-81f4-ea2d1660172a/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-270-react-2LDsVK.jpg'
    ],
    price: 225,
    amount: 19,
    popularRate: 2,
    date: null,
  },
  {
    id: 2,
    name: 'Nike Sportswear',
    type: TYPES.PANTS,
    mainImage: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/cdd68ca8-2817-401e-9743-c9597c91c3e1/%D0%B4%D0%B6%D0%BE%D0%B3%D0%B3%D0%B5%D1%80%D1%8B-%D0%B8%D0%B7-%D1%82%D0%BA%D0%B0%D0%BD%D0%B8-%D1%84%D1%80%D0%B5%D0%BD%D1%87-%D1%82%D0%B5%D1%80%D1%80%D0%B8-sportswear-t9SC1m.jpg',
    slideImages: [
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/cdd68ca8-2817-401e-9743-c9597c91c3e1/%D0%B4%D0%B6%D0%BE%D0%B3%D0%B3%D0%B5%D1%80%D1%8B-%D0%B8%D0%B7-%D1%82%D0%BA%D0%B0%D0%BD%D0%B8-%D1%84%D1%80%D0%B5%D0%BD%D1%87-%D1%82%D0%B5%D1%80%D1%80%D0%B8-sportswear-t9SC1m.jpg',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5,q_80/8ddc1de4-23d2-4050-ae3f-353a17751bb2/%D0%B4%D0%B6%D0%BE%D0%B3%D0%B3%D0%B5%D1%80%D1%8B-%D0%B8%D0%B7-%D1%82%D0%BA%D0%B0%D0%BD%D0%B8-%D1%84%D1%80%D0%B5%D0%BD%D1%87-%D1%82%D0%B5%D1%80%D1%80%D0%B8-sportswear-t9SC1m.jpg',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5,q_80/d06bc1d0-9c9b-426e-832e-08fe82e04c5d/%D0%B4%D0%B6%D0%BE%D0%B3%D0%B3%D0%B5%D1%80%D1%8B-%D0%B8%D0%B7-%D1%82%D0%BA%D0%B0%D0%BD%D0%B8-%D1%84%D1%80%D0%B5%D0%BD%D1%87-%D1%82%D0%B5%D1%80%D1%80%D0%B8-sportswear-t9SC1m.jpg',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/cdd68ca8-2817-401e-9743-c9597c91c3e1/%D0%B4%D0%B6%D0%BE%D0%B3%D0%B3%D0%B5%D1%80%D1%8B-%D0%B8%D0%B7-%D1%82%D0%BA%D0%B0%D0%BD%D0%B8-%D1%84%D1%80%D0%B5%D0%BD%D1%87-%D1%82%D0%B5%D1%80%D1%80%D0%B8-sportswear-t9SC1m.jpg?2',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5,q_80/8ddc1de4-23d2-4050-ae3f-353a17751bb2/%D0%B4%D0%B6%D0%BE%D0%B3%D0%B3%D0%B5%D1%80%D1%8B-%D0%B8%D0%B7-%D1%82%D0%BA%D0%B0%D0%BD%D0%B8-%D1%84%D1%80%D0%B5%D0%BD%D1%87-%D1%82%D0%B5%D1%80%D1%80%D0%B8-sportswear-t9SC1m.jpg?1'
    ],
    price: 120,
    amount: 22,
    popularRate: 3,
    date: null,
  },
  {
    id: 3,
    name: 'NikeLab',
    type: TYPES.RAINCOATS,
    mainImage: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/pbnjswjklulobncoekn7/%D0%BA%D1%83%D1%80%D1%82%D0%BA%D0%B0-lab-KwCTgT.jpg',
    slideImages: [
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/pbnjswjklulobncoekn7/%D0%BA%D1%83%D1%80%D1%82%D0%BA%D0%B0-lab-KwCTgT.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ujnfpfhmnyw5oh35pvkv/%D0%BA%D1%83%D1%80%D1%82%D0%BA%D0%B0-lab-KwCTgT.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/rhzthqypmheedwlnjf2b/%D0%BA%D1%83%D1%80%D1%82%D0%BA%D0%B0-lab-KwCTgT.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ispctrje91qz71cbcmx4/%D0%BA%D1%83%D1%80%D1%82%D0%BA%D0%B0-lab-KwCTgT.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ntmpfhs4zbgzgayfenxg/%D0%BA%D1%83%D1%80%D1%82%D0%BA%D0%B0-lab-KwCTgT.jpg'
    ],
    price: 135,
    amount: 4,
    popularRate: 4,
    date: null,
  },
];

export const fetchGoods = () => new Promise(resolve => {
  setTimeout(() => {
    resolve({ payload: GOODS })
  }, 1000);
});
