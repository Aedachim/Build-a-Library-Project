//Parent class
class Media {
    // sharing 'title' with all the other childclasses, it doesnt has a default value
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  // get methods():
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
  //boolean value
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  //boolean value with NOT 
    toggleCheckOutStatus() {
      return this._isCheckedOut = !this._isCheckedOut;
    }
  // average of the ratings
    getAverageRating() {
      function sum(total, amount) {
        return total + amount;
      }
    //calculate the average
    const length = this._ratings.length;
    const average = this._ratings.reduce(sum) / length;
    return average; 
    }
  // if function for the rating from 1 to 5
    addRating(newRating) {
      if (newRating >= 1 && newRating <= 5) {
        this._ratings.push(newRating);
      } else {
        console.log('Each rating should be between 1 to 5.');
      }
    }
  }
  // childclass book
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = 0; 
  // mediaList from book
      mediaList._books.push(this._author + ' | ' + this._title);
    }
    // get methods()
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    } 
  }
  //childclass movie
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = 0;
      //added movieCast for the director (actor)
      this._movieCast = [];
  //mediaList for the movies
      mediaList._movies.push(this._director + ' | ' + this._title);
    }
    //get methods()
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
    get movieCast() {
      return this._movieCast;
    }
    // function for the added actor 
    addCast(castName) {
      this._movieCast.push(castName);
    }
    // shows how many actors
    getNumOfCast() {
      return this._movieCast.length;
    }
  }
  //childclass CDs:
  class CD extends Media {
    constructor(title, artist, tracks) {
      super(title);
      this._artist = artist;
      this._tracks = tracks; //changed from 'songs', to avoid confusion with songTitles; tracks = number of songs
      //added songTitles
      this._songTitles = [];
  // mediaList for the CDs
      mediaList._CDs.push(this._title + ' | ' + this._artist);
     }
     // get methods()
     get artist() {
       return this._artist;
     }
     get tracks() {
       return this._tracks;
     }
     //if function with songTitles for more Tracks/ Songs
     get songTitles() {
       if (this._tracks === this._songTitles.length) {
         return this._songTitles;
       } else if (this._tracks > this._songTitles.length) {
         let moreTracks = this._tracks - this._songTitles.length;
         return this._songTitles + `and ${moreTracks} unknown track(s)`;
       } else if (this._tracks < this._songTitles.length) {
         let moreTitles = this._songTitles.length - this._tracks;
         return this._tracks + moreTitles; 
       }
     }
  // adding songTitels 
     addSongTitles(songTitle) {
       this._songTitles.push(songTitle);
     }
     // pick random songs
     shuffle() {
       let trackLength = this._songTitles.length;
       let randomNum = Math.floor(Math.random() * trackLength);
       return this._songTitles[randomNum];
     }
  }
  // Catalog about books, movies and CDs
  class Catalog {
    constructor() {
      this._books = [];
      this._movies = [];
      this._CDs = [];
    }
    // get methods()
    get books() {
      return this._books;
    }
    get movies() {
      return this._movies;
    }
    get CDs() {
      return this._CDs;
    }
  }
  
  const mediaList = new Catalog;
  
  // instance of book 
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  // boolean value
  historyOfEverything.toggleCheckOutStatus();
  //boolean value
  console.log(historyOfEverything.isCheckedOut);
  //rating
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  //average
  console.log(historyOfEverything.getAverageRating());
  //instance of movie
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  //boolean value
  speed.toggleCheckOutStatus();
  //boolean value
  console.log(speed.isCheckedOut);
  //rating
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  //average
  console.log(speed.getAverageRating());
  // adding actors
  speed.addCast('Riley Ten');
  speed.addCast('Franc Mento');
  console.log(speed.getNumOfCast());
  //instance of movie
  const theFastTheFurious = new Movie('The Fast The Furious', 'Vin Diesel', 'Paul Walker', 'Dwayne Johnson', 320);
  //rating
  theFastTheFurious.addRating(5);
  //adding actors
  theFastTheFurious.addCast('Jason Statham');
  theFastTheFurious.addCast('Michelle Rodriguez');
  theFastTheFurious.addCast('Tyrese Gibson');
  //console.log(theFastTheFurious.movieCast);
  console.log(theFastTheFurious.getNumOfCast());
  // CDs Instance;
  const GenTen = new CD('GenTen', 'James Othilir', 2);
  // console.log(GenTen.tracks);
  //console.log(GenTen.songTitles);
  //console.log(GenTen.shuffle());
  
  GenTen.addRating(4);
  GenTen.addSongTitles('Far Away, yay');
  GenTen.addSongTitles('Pink Bottles in the air');
  
  //log mediaList: 
  console.log(mediaList.books);
  console.log(mediaList.movies);
  console.log(mediaList.CDs);