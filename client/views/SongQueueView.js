// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',


  initialize: function() {
    this.render();
  },

  render: function() {
    // console.log('render SONGQUEUEVIEW');
    this.$el.children().detach();
    if(this.collection){
      this.$el.html('<th>Queue</th>').append(
        this.collection.map(function(song) {
          return new SongQueueEntryView({model: song}).render();
        })
      );
    }
  }

});
