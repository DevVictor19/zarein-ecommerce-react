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
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["FlorDoCampo.png"],
        sizes: ["P", "M", "G", "GG"],
        price: 218.79,
        populares: true,
        promocao: false,
      },
      {
        name: "Jardins do Inverno",
        id: "v2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["JardinsDoInverno.png"],
        sizes: ["P", "M", "G", "GG"],
        price: 134.79,
        populares: false,
        promocao: false,
      },
      {
        name: "Roseira Seda",
        id: "v3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["RoseiraSeda.png"],
        sizes: ["P", "M", "G", "GG"],
        price: 258.39,
        populares: true,
        promocao: false,
      },
      {
        name: "Orquídea Vermelha",
        id: "v4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["OrquideaVermelha.png"],
        sizes: ["P", "M", "G", "GG"],
        price: 137.17,
        populares: false,
        promocao: false,
      },

      {
        name: "Hibisco",
        id: "v5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["Hibisco.png"],
        sizes: ["P", "M", "G", "GG"],
        price: 138.19,
        populares: true,
        promocao: false,
      },

      {
        name: "Lírio do Campo",
        id: "v6",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["LirioDoCampo.png"],
        sizes: ["P", "M", "G", "GG"],
        price: 218.79,
        populares: false,
        promocao: false,
      },

      {
        name: "Primavera",
        id: "v7",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["Primavera.png"],
        sizes: ["P", "M", "G", "GG"],
        price: 123.79,
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
        id: "b1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["Floricultura.png"],
        sizes: null,
        price: 148.19,
        populares: false,
        promocao: false,
      },
      {
        name: "Obsidiana",
        id: "b2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["Obsidiana.png"],
        sizes: null,
        price: 210.38,
        populares: true,
        promocao: false,
      },
      {
        name: "Nublada",
        id: "b3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["Nublada.png"],
        sizes: null,
        price: 138.32,
        populares: false,
        promocao: false,
      },
      {
        name: "Noite Elegante",
        id: "b4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["NoiteElegante.png"],
        sizes: null,
        price: 228.32,
        populares: true,
        promocao: true,
      },
      {
        name: "Dia de Sol",
        id: "b5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["DiaDeSol.png"],
        sizes: null,
        price: 192.32,
        populares: false,
        promocao: true,
      },
      {
        name: "Canela",
        id: "b6",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["Canela.png"],
        sizes: null,
        price: 123.78,
        populares: false,
        promocao: false,
      },
      {
        name: "Luxúria do Porto",
        id: "b7",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["LuxuriaDoPorto.png"],
        sizes: null,
        price: 312.18,
        populares: true,
        promocao: false,
      },
      {
        name: "Pinho do Inverno",
        id: "b8",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["PinhoDoInverno.png"],
        sizes: null,
        price: 243.71,
        populares: true,
        promocao: true,
      },
      {
        name: "Noite na Taverna",
        id: "b9",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["NoiteNaTaverna.png"],
        sizes: null,
        price: 321.19,
        populares: true,
        promocao: false,
      },
      {
        name: "Buquê",
        id: "b10",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["Buque.png"],
        sizes: null,
        price: 101.47,
        populares: false,
        promocao: false,
      },
    ],
  },
  {
    sectionName: "Calçados",
    sectionProducts: [
      {
        name: "Pedras do Bosque",
        id: "c1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["PedrasDoBosque.png"],
        sizes: ["34", "35", "36", "37", "38", "39"],
        price: 189.32,
        populares: false,
        promocao: false,
      },
      {
        name: "Simples Modernidade",
        id: "c2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["SimplesModernidade.png"],
        sizes: ["34", "35", "36", "37", "38", "39"],
        price: 256.65,
        populares: true,
        promocao: false,
      },
      {
        name: "Bosques Noturnos",
        id: "c3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["BosquesNoturnos.png"],
        sizes: ["34", "35", "36", "37", "38", "39"],
        price: 128.98,
        populares: false,
        promocao: true,
      },
      {
        name: "Pérola Marinha",
        id: "c4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["PerolaMarinha.png"],
        sizes: ["34", "35", "36", "37", "38", "39"],
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
        name: "Gota no Oceano",
        id: "a1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["GotaNoOceano.png"],
        sizes: null,
        price: 78.32,
        populares: false,
        promocao: true,
      },
      {
        name: "Dunas de Areia",
        id: "a2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["DunasDeAreia.png"],
        sizes: null,
        price: 98.65,
        populares: true,
        promocao: false,
      },
      {
        name: "Infinito Azul",
        id: "a3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["InfinitoAzul.png"],
        sizes: null,
        price: 118.98,
        populares: false,
        promocao: false,
      },
      {
        name: "Campos Pacatos",
        id: "a4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["CamposPacatos.png"],
        sizes: null,
        price: 161.32,
        populares: true,
        promocao: false,
      },
      {
        name: "Ouro Preto",
        id: "a5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ipsum est, ut euismod felis ullamcorper a. Nulla facilisi. Nulla mollis efficitur lectus. ",
        img: images["OuroPreto.png"],
        sizes: null,
        price: 111.19,
        populares: true,
        promocao: false,
      },
    ],
  },
];

export const getProducts = () => products;

export const getProductsById = (id) => {
  const array_of_arrays_SectionProducts = products.map(
    (sectionObj) => sectionObj.sectionProducts
  );

  let filteredItem = null;

  array_of_arrays_SectionProducts.forEach((arrayOfproducts) => {
    arrayOfproducts.forEach((item) => {
      if (item.id === id) {
        filteredItem = item;
      }
    });
  });

  return filteredItem;
};
