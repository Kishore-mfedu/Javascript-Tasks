document.addEventListener("DOMContentLoaded", function () {
  const genreSelect = document.getElementById("genre");
  const movies = Array.from(document.querySelectorAll(".mov"));


  function showDramaMovies() {
    movies
      .map((movie) => {
        const genre = movie.querySelector(".genre-type").textContent;
        return { element: movie, genre: genre };
      })
      .filter((movie) => movie.genre === "drama")
      .forEach((movie) => {
        movie.element.style.display = "block";
      });

    movies
      .filter((movie) => {
        const genre = movie.querySelector(".genre-type").textContent;
        return genre !== "drama";
      })
      .forEach((movie) => {
        movie.style.display = "none";
      });
  }


  function showHorrorMovies() {
    movies
      .map((movie) => {
        const genre = movie.querySelector(".genre-type").textContent;
        return { element: movie, genre: genre };
      })
      .filter((movie) => movie.genre === "horror")
      .forEach((movie) => {
        movie.element.style.display = "block";
      });

    movies
      .filter((movie) => {
        const genre = movie.querySelector(".genre-type").textContent;
        return genre !== "horror";
      })
      .forEach((movie) => {
        movie.style.display = "none";
      });
  }


  function showComedyMovies() {
    movies
      .map((movie) => {
        const genre = movie.querySelector(".genre-type").textContent;
        return { element: movie, genre: genre };
      })
      .filter((movie) => movie.genre === "comedy")
      .forEach((movie) => {
        movie.element.style.display = "block";
      });

    movies
      .filter((movie) => {
        const genre = movie.querySelector(".genre-type").textContent;
        return genre !== "comedy";
      })
      .forEach((movie) => {
        movie.style.display = "none";
      });
  }

  function showLoveMovies() {
    movies
      .map((movie) => {
        const genre = movie.querySelector(".genre-type").textContent;
        return { element: movie, genre: genre };
      })
      .filter((movie) => movie.genre === "love")
      .forEach((movie) => {
        movie.element.style.display = "block";
      });

    movies
      .filter((movie) => {
        const genre = movie.querySelector(".genre-type").textContent;
        return genre !== "love";
      })
      .forEach((movie) => {
        movie.style.display = "none";
      });
  }

  
  genreSelect.addEventListener("change", function () {
    const selectedGenre = genreSelect.value;

    switch (selectedGenre) {
      case "drama":
        showDramaMovies();
        break;
      case "horror":
        showHorrorMovies();
        break;
      case "comedy":
        showComedyMovies();
        break;
      case "love":
        showLoveMovies();
        break;
      default:
        movies.forEach((movie) => {
          movie.style.display = "block";
        });
    }
  });
});
