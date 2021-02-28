const SHOP_DATA = {
  hats: {
    id: 1,
    title: "帽子",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "ブラウンブリム",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 2500,
      },
      {
        id: 2,
        name: "ブルービーニー",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 1800,
      },
      {
        id: 3,
        name: "ブラウンカウボーイ",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 3500,
      },
      {
        id: 4,
        name: "グレーブリム",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 2500,
      },
      {
        id: 5,
        name: "グリーンビーニー",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 1800,
      },
      {
        id: 6,
        name: "パルム帽子",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 1400,
      },
      {
        id: 7,
        name: "レッドビーニー",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 1800,
      },
      {
        id: 8,
        name: "ウルフ帽子",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 1400,
      },
      {
        id: 9,
        name: "青スナップバック",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 1600,
      },
    ],
  },
  sneakers: {
    id: 2,
    title: "スニーカー",
    routeName: "sneakers",
    items: [
      {
        id: 1,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 22000,
      },
      {
        id: 2,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 28000,
      },
      {
        id: 3,
        name: "Black Converse",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 11000,
      },
      {
        id: 4,
        name: "Nike White AirForce",
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 16000,
      },
      {
        id: 5,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 16000,
      },
      {
        id: 6,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 16000,
      },
      {
        id: 7,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 19000,
      },
      {
        id: 8,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 20000,
      },
    ],
  },
  jackets: {
    id: 3,
    title: "ジャケット",
    routeName: "jackets",
    items: [
      {
        id: 1,
        name: "Black Jean Shearling",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 12500,
      },
      {
        id: 2,
        name: "Blue Jean Jacket",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 9000,
      },
      {
        id: 3,
        name: "Grey Jean Jacket",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 9000,
      },
      {
        id: 4,
        name: "Brown Shearling",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 16500,
      },
      {
        id: 5,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 18500,
      },
    ],
  },
  womens: {
    id: 4,
    title: "レディース",
    routeName: "womens",
    items: [
      {
        id: 1,
        name: "青トップ",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 2500,
      },
      {
        id: 2,
        name: "花ブラウス",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 2000,
      },
      {
        id: 3,
        name: "花ドレス",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 8000,
      },
      {
        id: 4,
        name: "赤ドットドレス",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 8000,
      },
      {
        id: 5,
        name: "シマシマセーター",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 4500,
      },
      {
        id: 6,
        name: "黄色トラックスーツ",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 13500,
      },
      {
        id: 7,
        name: "白ブラウス",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 2000,
      },
    ],
  },
  mens: {
    id: 5,
    title: "メンズ",
    routeName: "mens",
    items: [
      {
        id: 1,
        name: "カモダウンヴェスト",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 32500,
      },
      {
        id: 2,
        name: "花Tシャツ",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 2000,
      },
      {
        id: 3,
        name: "白黒長袖",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 2500,
      },
      {
        id: 4,
        name: "ピンクTシャツ",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 2500,
      },
      {
        id: 5,
        name: "長袖のジャン",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 4000,
      },
      {
        id: 6,
        name: "Burgundy Tシャツ",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 2500,
      },
    ],
  },
};

export default SHOP_DATA;
