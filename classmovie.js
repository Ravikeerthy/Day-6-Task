// Class - Movie

class Movie{
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getpg(movies){
        return movies.filter(movies => movies.rating === "PG");
    }
}

let movieList = [
    new Movie("Movie1, Studio1", "PG13"),
    new Movie("Movie2, Studio2", "PG"),
    new Movie("Movie3, Studio3", "PG14"),
    new Movie("Movie4, Studio4", "PG15"),

];

let res = new Movie("Casino Royale", "Eon Productions", "PG13");

console.log("The class movie details: ", res);

let movieRes = new Movie();

let movieArray = movieRes.getpg(movieList); 

console.log("PG Movies are: ", movieArray);





