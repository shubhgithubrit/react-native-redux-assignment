import { LOAD_PRODUCT } from "../actions";

const initialState = {
    products: [
        {
          _id: "1",
          name: "Sand ki Ankh",
          releaseYear: 2019,
          certificate: "A",
          runtime: "139 min",
          genre: "Drama",
          imdbRating: 8.8,
          overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
          metaScore: "66",
          director: "David Fincher",
          imageUrl:  "https://i.scdn.co/image/ab67616d0000b273c95027d84a3ae3a3d4debddd"
        },
        {
          _id: "2",
          name: "Luka Chuppi",
          releaseYear: 2019,
          certificate: "A",
          runtime: "139 min",
          genre: "Drama",
          imdbRating: 8.8,
          overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
          metaScore: "66",
          director: "David Fincher",
          imageUrl:  "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/01/pjimage-4-1548221300.jpg"
        },
        {
          _id: "3",
          name: "Bhool Bhulaiyaa 2",
          releaseYear: 1999,
          certificate: "A",
          runtime: "139 min",
          genre: "Drama",
          imdbRating: 8.8,
          overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
          metaScore: "66",
          director: "David Fincher",
          imageUrl:  "https://eng.cinereporters.com/static/c1e/client/76339/uploaded_original/16953b9f5b4b59bef1cdb8a8c32f2f1c.jpeg"
        },
        {
          _id: "4",
          name: "RRR",
          releaseYear: 2022,
          certificate: "A",
          runtime: "139 min",
          genre: "Drama",
          imdbRating: 8.8,
          overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
          metaScore: "66",
          director: "David Fincher",
          imageUrl:  "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
        },
        {
          _id: "5",
          name: "Pushpa",
          releaseYear: 2000,
          certificate: "A",
          runtime: "139 min",
          genre: "Drama",
          imdbRating: 9,
          overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
          metaScore: "66",
          director: "David Fincher",
          imageUrl:  "https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/12/allu-arjun-opens-up-about-his-plans-for-pushpa-2-001.jpg"
        },
        {
          _id: "6",
          name: "Jannat",
          releaseYear: 2004,
          certificate: "A",
          runtime: "139 min",
          genre: "Drama",
          imdbRating: 9,
          overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
          metaScore: "66",
          director: "David Fincher",
          imageUrl:  "https://images-na.ssl-images-amazon.com/images/I/91iiaDveGFL._RI_.jpg"
        },
        {
          _id: "7",
          name: "Rockstar",
          releaseYear: 1999,
          certificate: "A",
          runtime: "139 min",
          genre: "Drama",
          imdbRating: 8.8,
          overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
          metaScore: "66",
          director: "David Fincher",
          imageUrl:  "https://m.media-amazon.com/images/M/MV5BOTc3NzAxMjg4M15BMl5BanBnXkFtZTcwMDc2ODQwNw@@._V1_.jpg"
        },
        {
          _id: "8",
          name: "War",
          releaseYear: 1999,
          certificate: "A",
          runtime: "139 min",
          genre: "Drama",
          imdbRating: 8.8,
          overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
          metaScore: "66",
          director: "David Fincher",
          imageUrl:  "https://m.media-amazon.com/images/M/MV5BNTlmNDMzOWQtYzg4Ny00OWQ0LWFhN2MtNmQ2MDczZGZhNTU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
        },
        {
          _id: "9",
          name: "MissionImpossible",
          releaseYear: 1999,
          certificate: "A",
          runtime: "139 min",
          genre: "Drama",
          imdbRating: 8.8,
          overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
          metaScore: "66",
          director: "David Fincher",
          imageUrl:  "https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_.jpg"
        },
        {
          _id: "10",
          name: "Gabbar",
          releaseYear: 1999,
          certificate: "A",
          runtime: "139 min",
          genre: "Drama",
          imdbRating: 8.8,
          overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
          metaScore: "66",
          director: "David Fincher",
          imageUrl:  "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/95/73/0_q7ct0csh_1531492829698_l_medium.jpg"
        },
    
      ]


}

const productReducer = (state = initialState, action) => {
    console.log(action.type);
    
    switch (action.type) {
        case LOAD_PRODUCT:
            return {
                products: [
                    ...state.products,
                    action.products
                ]
            }

       
        default:
            return state;
    }
}

export default productReducer;