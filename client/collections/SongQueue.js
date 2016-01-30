// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);
    this.on('ended', function(){
      this.shift();
      if(this.length>0){
        this.playFirst();
      }
    }, this);
    this.on('dequeue', function(){
      this.remove();
    }, this);
    this.on('enqueue', function(song) {
      console.log('enqueueing');
      this.push(song);
    }, this);
  },

  playFirst: function(){
    //access appView.playerView.model and set it equal to the next song
    this.at(0).play();
    this.trigger('play');
  }


});