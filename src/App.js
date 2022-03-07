import React from "react";
import axios from "axios";
import Movie from "./Movie";
import PropTypes from "prop-types";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };
  getMovies = async () => {
    const {
      //이방식은 ECMA6방식(es6)
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movie: movies, isLoading: false });
  };
  componentDidMount() {
    //render가일어나기전에 먼저일어난다
    this.getMovies();
    // setTimeout(() => {
    //   //setTimeout은 딜레이함수(javaScript에있는함수)
    //   this.setState({
    //     isLoading: false,
    //   });
    // }, 6000);
  }
  render() {
    const { isLoading, movie } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..(6초후입장)"
          : movie.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
/*11강의중간까지
state = {
    count: 0,
  };
  add = () => {
    this.setState((cur) => ({ count: cur.count + 1 }));
  };
  remove = () => {
    this.setState((cur) => ({ count: cur.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The Number is : {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.remove}>delete</button>
      </div>
    );
  }
}

*/
//일반적으로 직접작성한 데아터를 불러올때 하는거 노마드 old동영성 10까지내용
/* function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h3>{rating}/5.0</h3>
      <img src={picture} alt={name} />
    </div>
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};


 const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.2,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 3,
  },
]; 

 function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
} */
