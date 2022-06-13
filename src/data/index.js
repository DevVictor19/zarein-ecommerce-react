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

const products = {
  sectionName: "Vestidos",
  sectionProducts: [
    {
      name: "Flor do Campo",
      img: images["FlorDoCampo.png"],
      price: 98.79,
      populares: true,
      promocao: false,
    },
    {
      name: "Jardins do Inverno",
      img: images["JardinsDoInverno.png"],
      price: 104.79,
      populares: true,
      promocao: true,
    },
    {
      name: "Roseira Seda",
      img: images["RoseiraSeda.png"],
      price: 158.79,
      populares: true,
      promocao: false,
    },
    {
      name: "Ruas de Roma",
      img: images["RoseiraSeda.png"],
      price: 158.79,
      populares: false,
      promocao: false,
    },
  ],
};

export const getProducts = () => products;
