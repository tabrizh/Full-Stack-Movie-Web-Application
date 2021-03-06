const DUMMY_MOVIES = [
  {
    id: 0,
    title: 'Batman',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quae!',
    year: 2022,
    price: 10,
    image: 'card-batman.jpg',
    inStock: 10,
    isAvailable: true,
    genres: 'Drama, Adventure',
    actors: 'Anthony Hopkins, Ann Hethaway',
    rating: 7.8,
    year: 2022,
    type: 'movie',
    productCode: 'e3r4t5',
    youtubeLink:
      '<iframe class="mt-5 mb-5 m-3" id="youtube-details-page" width="560" height="315" src="https://www.youtube.com/embed/mqqft2x_Aa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 1,
    title: 'Spiderman No Way Home',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quae!',
    year: 2022,
    price: 10,
    image: 'card-spiderman.jpg',
    inStock: 5,
    isAvailable: true,
    genres: 'Drama, Adventure',
    actors: 'Anthony Hopkins, Ann Hethaway',
    rating: 7.8,
    year: 2022,
    type: 'movie',
    productCode: 'dd3f45',
    youtubeLink:
      '<iframe class="mt-5 mb-5 m-3" id="youtube-details-page" width="560" height="315" src="https://www.youtube.com/embed/JfVOs4VSpmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 2,
    title: 'Forrest Gump',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quae!',
    price: 10,
    image: 'card-forrestGump.jpg',
    inStock: 5,
    isAvailable: true,
    genres: 'Drama, Adventure',
    actors: 'Anthony Hopkins, Ann Hethaway',
    rating: 7.8,
    year: 2022,
    type: 'movie',
    productCode: 'dd3f45',
    youtubeLink:
      '<iframe class="mt-5 mb-5 m-3" id="youtube-details-page" width="560" height="315" src="https://www.youtube.com/embed/bLvqoHBptjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 3,
    title: 'Mister Nobody',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quae!',
    price: 10,
    image: 'card-misterNobody.jpg',
    inStock: 5,
    isAvailable: true,
    genres: 'Drama, Adventure',
    actors: 'Anthony Hopkins, Ann Hethaway',
    rating: 7.8,
    year: 2022,
    type: 'movie',
    productCode: 'dd3f45',
    youtubeLink:
      '<iframe class="mt-5 mb-5 m-3" id="youtube-details-page" width="560" height="315" src="https://www.youtube.com/embed/vXf3gVYXlHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 4,
    title: 'Bohemian Rhapsody',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quae!',
    price: 10,
    image: 'card-bohemianRhapsody.jpg',
    inStock: 5,
    isAvailable: true,
    genres: 'Drama, Adventure',
    actors: 'Anthony Hopkins, Ann Hethaway',
    rating: 7.8,
    year: 2022,
    type: 'movie',
    productCode: '4rsf32w',
    youtubeLink:
      '<iframe class="mt-5 mb-5 m-3" id="youtube-details-page" width="560" height="315" src="https://www.youtube.com/embed/mP0VHJYFOAU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 5,
    title: 'The Silence of the Lambs',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quae!',
    price: 10,
    image: 'card-silenceOfTheLambs.jpg',
    inStock: 5,
    isAvailable: true,
    genres: 'Drama, Adventure',
    actors: 'Anthony Hopkins, Ann Hethaway',
    rating: 7.8,
    year: 2022,
    type: 'movie',
    productCode: '5ths34',
    youtubeLink:
      '<iframe class="mt-5 mb-5 m-3" id="youtube-details-page" width="560" height="315" src="https://www.youtube.com/embed/W6Mm8Sbe__o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 6,
    title: 'X-Men',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quae!',
    price: 10,
    image: 'card-xmen.jpg',
    inStock: 5,
    isAvailable: true,
    genres: 'Drama, Adventure',
    actors: 'Anthony Hopkins, Ann Hethaway',
    rating: 7.8,
    year: 2022,
    type: 'movie',
    productCode: 'dd3f45',
    youtubeLink:
      '<iframe class="mt-5 mb-5 m-3" id="youtube-details-page" width="560" height="315" src="https://www.youtube.com/embed/VNxwlx6etXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 7,
    title: 'The Pirates of the Carribean Sea: The Curse of the Black Pearl',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quae!',
    price: 10,
    image: 'card-piratesOfTheCarribean1.jpg',
    inStock: 5,
    isAvailable: true,
    genres: 'Drama, Adventure',
    actors: 'Anthony Hopkins, Ann Hethaway',
    rating: 7.8,
    year: 2022,
    type: 'movie',
    productCode: 'dd3f45',
    youtubeLink:
      '<iframe class="mt-5 mb-5 m-3" id="youtube-details-page" width="560" height="315" src="https://www.youtube.com/embed/naQr0uTrH_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 8,
    title: 'Kingsman',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quae!',
    price: 10,
    image: 'card-kingsman.jpg',
    inStock: 5,
    isAvailable: true,
    genres: 'Drama, Adventure',
    actors: 'Anthony Hopkins, Ann Hethaway',
    rating: 7.8,
    year: 2022,
    type: 'movie',
    productCode: 'dd3f45',
    youtubeLink:
      '<iframe class="mt-5 mb-5 m-3" id="youtube-details-page" width="560" height="315" src="https://www.youtube.com/embed/6Nxc-3WpMbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 9,
    title: 'Focus',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quae!',
    price: 10,
    image: 'card-focus.jpg',
    inStock: 5,
    isAvailable: true,
    genres: 'Drama, Adventure',
    actors: 'Anthony Hopkins, Ann Hethaway',
    rating: 7.8,
    year: 2022,
    type: 'movie',
    productCode: 'dd3f45',
    youtubeLink:
      '<iframe class="mt-5 mb-5 m-3" id="youtube-details-page" width="560" height="315" src="https://www.youtube.com/embed/MxCRgtdAuBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 10,
    title: 'Breaking Bad',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quae!',
    year: 2022,
    price: 10,
    image: 'card-breakingBad.jpg',
    inStock: 10,
    isAvailable: true,
    genres: 'Drama, Adventure',
    actors: 'Anthony Hopkins, Ann Hethaway',
    rating: 7.8,
    year: 2022,
    type: 'tvShow',
    productCode: 'dd3f45',
    youtubeLink:
      '<iframe class="mt-5 mb-5 m-3" id="youtube-details-page" width="560" height="315" src="https://www.youtube.com/embed/HhesaQXLuRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 11,
    title: 'Game of Thrones',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quae!',
    year: 2022,
    price: 10,
    image: 'card-gameOfThrones.jpg',
    inStock: 5,
    isAvailable: true,
    genres: 'Drama, Adventure',
    actors: 'Anthony Hopkins, Ann Hethaway',
    rating: 7.8,
    year: 2022,
    type: 'tvShow',
    productCode: 'dd3f45',
    youtubeLink:
      '<iframe class="mt-5 mb-5 m-3" id="youtube-details-page" width="560" height="315" src="https://www.youtube.com/embed/KPLWWIOCOOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 12,
    title: 'Black Mirror',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quae!',
    price: 10,
    image: 'card-blackMirror.jpg',
    inStock: 5,
    isAvailable: true,
    genres: 'Drama, Adventure',
    actors: 'Anthony Hopkins, Ann Hethaway',
    rating: 7.8,
    year: 2022,
    type: 'tvShow',
    productCode: 'dd3f45',
    youtubeLink:
      '<iframe class="mt-5 mb-5 m-3" id="youtube-details-page" width="560" height="315" src="https://www.youtube.com/embed/jROLrhQkK78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 13,
    title: 'Brooklyn Nine Nine',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quae!',
    price: 10,
    image: 'card-brooklyn99.jpg',
    inStock: 5,
    isAvailable: true,
    genres: 'Drama, Adventure',
    actors: 'Anthony Hopkins, Ann Hethaway',
    rating: 7.8,
    year: 2022,
    type: 'tvShow',
    productCode: 'dd3f45',
    youtubeLink:
      '<iframe class="mt-5 mb-5 m-3" id="youtube-details-page" width="560" height="315" src="https://www.youtube.com/embed/sEOuJ4z5aTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
];
