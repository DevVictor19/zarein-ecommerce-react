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
        populares: false,
        promocao: false,
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
    sectionProducts: [
      {
        name: "Floricultura",
        id: "B1",
        img: images["Floricultura.png"],
        price: 148.19,
        populares: false,
        promocao: false,
      },
      {
        name: "Obsidiana",
        id: "B2",
        img: images["Obsidiana.png"],
        price: 210.38,
        populares: true,
        promocao: false,
      },
      {
        name: "Nublada",
        id: "B3",
        img: images["Nublada.png"],
        price: 138.32,
        populares: false,
        promocao: false,
      },
      {
        name: "Noite Elegante",
        id: "B4",
        img: images["NoiteElegante.png"],
        price: 228.32,
        populares: true,
        promocao: true,
      },
    ],
  },
  {
    sectionName: "Calçados",
    sectionProducts: [
      {
        name: "Pedras do Bosque",
        id: "c1",
        img: images["PedrasDoBosque.png"],
        price: 189.32,
        populares: false,
        promocao: false,
      },
      {
        name: "Simples Modernidade",
        id: "c2",
        img: images["SimplesModernidade.png"],
        price: 256.65,
        populares: true,
        promocao: false,
      },
      {
        name: "Bosques Noturnos",
        id: "c3",
        img: images["BosquesNoturnos.png"],
        price: 128.98,
        populares: false,
        promocao: true,
      },
      {
        name: "Pérola Marinha",
        id: "c4",
        img: images["PerolaMarinha.png"],
        price: 231.12,
        populares: true,
        promocao: true,
      },
    ],
  },

  {
    sectionName: "Acessórios",
    sectionProducts: [
      {
        name: "Pedras do Bosque",
        id: "c1",
        img: images["PedrasDoBosque.png"],
        price: 189.32,
        populares: false,
        promocao: false,
      },
      {
        name: "Simples Modernidade",
        id: "c2",
        img: images["SimplesModernidade.png"],
        price: 256.65,
        populares: true,
        promocao: false,
      },
      {
        name: "Bosques Noturnos",
        id: "c3",
        img: images["BosquesNoturnos.png"],
        price: 128.98,
        populares: false,
        promocao: true,
      },
      {
        name: "Pérola Marinha",
        id: "c4",
        img: images["PerolaMarinha.png"],
        price: 231.12,
        populares: true,
        promocao: true,
      },
    ],
  },
];

export const getProducts = () => products;
