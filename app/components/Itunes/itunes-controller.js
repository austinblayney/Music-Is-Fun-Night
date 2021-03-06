import ItunesService from "./itunes-service.js";
import Song from "../../models/Song.js";
//Private
const itunesService = new ItunesService(drawPlaylist)

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(itunesService.Songs)


  let template = ''
  itunesService.Songs.forEach(song => {
    template += `<div class=" card text-white bg-dark mb-3 col-4" app.controllers.itunesController.getMusicByArtist>
      <h1>${song.title}</h1>
      <img src="${song.albumArt}" />
      <h1>${song.artist}<h1>
     <audio controls>
      <source src="${song.preview}"></source>
     </audio>
       <button type="submit" class="w3-button w3-border w3-hover-black" onclick="app.controllers.itunesCtrl.addToPlaylist('${song.trackId}')">Add To Playlist</button>
    </div > `

    document.querySelector("#songs").innerHTML = template;
  })
  // < button type = "submit" class="w3-button w3-border w3-hover-black" > Remove From Playlist</button >





<<<<<<< HEAD
}

=======
>>>>>>> 6db74c6f89e38c76aeeb25a3bfceae62dd7216d4
function drawPlaylist(playlist) {
  function drawDetails(Song) {
    let template = `
        <div class="col-2 border border-dark rounded m-1">
            <h3>${Song.name}</h3>
            <img src="${Song.albumArt["front_default"]}" alt="" srcset="">
                <p>Artist: ${Song.artist}</p>
                  <p>Album: ${Song.album}</p>
            <p>Price: ${Song.price}</p>
                <p>Preview: ${Song.preview}</p>
                    <p>track: ${Song.trackId}</p>
            <button class="btn btn-outline-info btn-light" onclick="app.controllers.itunesCtrl.addToPlaylist()">Add to my Playlist</button>
        </div>
    ` //builds up a template of song cards from your playlist and sets the template equal to an element on the DOM
<<<<<<< HEAD
    document.querySelector("#song-list").innerHTML = template
=======
    document.querySelector("#song-list").innerHTML = template;
>>>>>>> 6db74c6f89e38c76aeeb25a3bfceae62dd7216d4
  }





}


//PUBLIC
class ItunesController {
  constructor() {
    itunesService.getPlaylist()
  }

  addToPlaylist(trackId) {
    itunesService.addToPlaylist(trackId)
  }



  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist, drawSongs)
  }
}



export default ItunesController