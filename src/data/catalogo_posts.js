function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
    return null;
  });
  return images;
}

const images = importAll(
  require.context("./catalogo_posts/", false, /\.(png|jpe?g|svg)$/)
);

const posts = [
  {
    post_title: "Lorem Ipsum",
    post_img: images["post1.png"],
    post_id: "p1",
    post_paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lacus enim. Donec a lacus diam. Class aptent taciti sociosqu ad litora torquent per chonubia nostra, per ",
      "nceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris condimentum lorem nec risus tempus efficitur. Suspendisse ac ex nec sg",
    ],
  },
  {
    post_title: "Lorem Ipsum",
    post_img: images["post2.png"],
    post_id: "p2",
    post_paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lacus enim. Donec a lacus diam. Class aptent taciti sociosqu ad litora torquent per chonubia nostra, per ",
      "nceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris condimentum lorem nec risus tempus efficitur. Suspendisse ac ex nec sg",
    ],
  },
  {
    post_title: "Lorem Ipsum",
    post_img: images["post3.png"],
    post_id: "p3",
    post_paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lacus enim. Donec a lacus diam. Class aptent taciti sociosqu ad litora torquent per chonubia nostra, per ",
      "nceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris condimentum lorem nec risus tempus efficitur. Suspendisse ac ex nec sg",
    ],
  },
  {
    post_title: "Lorem Ipsum",
    post_img: images["post4.png"],
    post_id: "p4",
    post_paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lacus enim. Donec a lacus diam. Class aptent taciti sociosqu ad litora torquent per chonubia nostra, per ",
      "nceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris condimentum lorem nec risus tempus efficitur. Suspendisse ac ex nec sg",
    ],
  },
];

export const getPosts = () => posts;
