// Legacy format
// var video = document.querySelector('#videoElement')
//
// navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia
//
// if (navigator.getUserMedia) {
//   navigator.getUserMedia({video: true}, handleVideo, videoError)
// }
//
// function handleVideo (stream) {
//   video.src = window.URL.createObjectURL(stream)
// }
//
// function videoError (e) {
//     // do something
// }
// This is the modern format
// Prefer camera resolution nearest to 1280x720.
var constraints = { audio: true, video: { width: 1280, height: 720 } }

navigator.mediaDevices.getUserMedia(constraints)
.then(function (mediaStream) {
  var video = document.querySelector('video')
  video.srcObject = mediaStream
  video.onloadedmetadata = function (e) {
    video.play()
  }
})
.catch(function (err) { console.log(err.name + ': ' + err.message) }) // always check for errors at the end.
