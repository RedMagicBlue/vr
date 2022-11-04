// Playlist ID
    var listID = 'PLHy9fCGISL6TtJ-CZC_FjbNK9_Ec4BnFM';
// Number of videos in playlist    
    var numberOfVideos = 8;
// Random number generator 
    var randomizer = Math.floor(Math.random() * numberOfVideos + 1);
// Embed video code
    document.writeln('<iframe id="random-video" src="//www.youtube.com/embed/videoseries?list=' + listID + '&index=' + randomizer + '&autoplay=1&controls=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>');

//Fullscreen stuff (optional)
    $(function(){
        $('#random-video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
        $(window).resize(function(){
          $('#random-video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
        });
    });