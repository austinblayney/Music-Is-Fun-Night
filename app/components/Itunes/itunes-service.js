import Song from "../../models/Song.js";

let _songs = []
//these should be songs from the bcw-server
let _playlist = []
let _selectedSong = {}

// @ts-ignore
let _songApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/austin/songs",
  timeout: 3000
})

class ItunesService {
  constructor(drawPlaylistCB) {
    this.drawPlaylistCB = drawPlaylistCB
  }
  addToPlaylist(trackId) {
    //need to use _songs.find(s => s.trackId == trackId) which will return the complete song object
    let song = _songs.find(s => s.trackId == trackId)
    //then send a post request via your axios instance to post that song
    _songApi.post('/', song)
      .then(res => {
        console.log(res)
        this.getPlaylist()
      })
      .catch(e => console.error(e))
  }
  get Songs() {
    return _songs.map(s => new Song(s))
  }


  getPlaylist() {
    //have this method run when your application first loads
    _songApi.get('/')
      .then(res => {
        console.log(res)
        this.drawPlaylistCB(res.data.data)
<<<<<<< HEAD
=======
        callback(res.data)
>>>>>>> 6db74c6f89e38c76aeeb25a3bfceae62dd7216d4
      })
      .catch(e => console.error(e))
  }



  //DO NOT MODIFY
  getMusicByArtist(artist, callback) {
    var url = 'https://itunes.apple.com/search?callback=?&term=' + artist;
    // @ts-ignore
    $.getJSON(url)
      .then(res => {
        _songs = res.results.map(s => new Song(s))
        callback()
      })
      .catch(err => console.log(err))
  }
}



export default ItunesService