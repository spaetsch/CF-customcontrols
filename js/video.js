
$(document).ready(function() {

  $("video").removeAttr("controls"); //strip out controls

  var $video = $("video")[0];
  var $playButton = $("#play-pause");
  var $muteButton = $("#mute");
  var $fullScreenButton = $("#full-screen");
  var $seekBar = $("#seek-bar");
  var $volumeBar = $("#volume-bar");


  // Event listener for the play/pause button
  $playButton.click(function() {
    if ($video.paused) {
      $video.play();            // Play the video
      $playButton.text("Pause");   // Update the button text to 'Pause'
    } else {
      $video.pause();         // Pause the video
      $playButton.text("Play");  // Update the button text to 'Play'
    }
  });

  // Event listener for the mute button
  $muteButton.click(function() {
    if ($video.muted == false) {
      $video.muted = true;  // Mute the video
      $muteButton.text("Unmute");    // Update the button text
    } else {
      $video.muted = false; // Unmute the video
      $muteButton.text("Mute");      // Update the button text
    }
  });

  // Event listener for the full-screen button
  $fullScreenButton.click(function(){
    if ($video.requestFullscreen) {
      $video.requestFullscreen();
    } else if  ($video.mozRequestFullscreen) {
      $video.mozRequestFullscreen();
    } else if ($video.webkitRequestFullscreen) {
      $video.webkitRequestFullscreen();
    }
  })

  // Event listener for the seek bar
  $seekBar.change(function(){
    var time = $video.duration * ($seekBar.val() / 100);
    $video.currentTime = time;

  });

  // Pause the video when the seek handle is being dragged
  $seekBar.mousedown(function(){
    $video.pause();         // Pause the video
    $playButton.text("Play");  // Update the button text to 'Play'
  });

  // Play the video when the seek handle is dropped
  $seekBar.mouseup(function(){
     $video.play();            // Play the video
      $playButton.text("Pause");
    });

  // Update the seek bar as the video plays
   $("video").on("timeupdate", function(){
      var newTime = (100 / $video.duration) * $video.currentTime;
      $seekBar.val(newTime);
    });

/*----*/


$volumeBar.change(function(){
  $video.volume = $volumeBar.val();
});







// 	// Event listener for the volume bar
// 	volumeBar.addEventListener("change", function() {
// 		// Update the video volume
// 		video.volume = volumeBar.value;
// 	});
 })
