function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
    return null;
  });
  return images;
}

const images = importAll(
  require.context("./products/", false, /\.(png|jpe?g|svg)$/)
);

const products = [
  {
    sectionName: "Vestidos",
    sectionProducts: [
      {
        name: "Flor do Campo",
        id: "v1",
        img: images["FlorDoCampo.png"],
        price: 98.79,
        populares: true,
        promocao: false,
      },
      {
        name: "Jardins do Inverno",
        id: "v2",
        img: images["JardinsDoInverno.png"],
        price: 104.79,
        populares: true,
        promocao: true,
      },
      {
        name: "Roseira Seda",
        id: "v3",
        img: images["RoseiraSeda.png"],
        price: 158.79,
        populares: true,
        promocao: false,
      },
      {
        name: "Ruas de Roma",
        id: "v4",
        img: images["RuasDeRoma.png"],
        price: 158.79,
        populares: false,
        promocao: false,
      },

      {
        name: "Ruas de Roma",
        id: "v5",
        img: images["RuasDeRoma.png"],
        price: 158.79,
        populares: false,
        promocao: false,
      },

      {
        name: "Ruas de Roma",
        id: "v6",
        img: images["RuasDeRoma.png"],
        price: 158.79,
        populares: false,
        promocao: false,
      },
    ],
  },
  {
    sectionName: "Bolsas",
    sectionProducts: [],
  },
];

export const getProducts = () => products;
