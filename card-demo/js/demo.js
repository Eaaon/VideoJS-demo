
function playPause() {

    var myVideo = document.getElementsByTagName('video');

    if (myVideo.paused){

        myVideo.play();
    }
    else{

        myVideo.pause();
        poster='img/advertising_video1.jpg';
    }
}
var videos = document.getElementsByTagName('video');
for (var i = videos.length - 1; i >= 0; i--) {
    (function(){
        var p = i;
        videos[p].addEventListener('play',function(){
            pauseAll(p);
        })
    })()
}
function pauseAll(index){
    for (var j = videos.length - 1; j >= 0; j--) {
        if (j!=index) videos[j].pause();
    }
};/**
 * Created by Administrator on 2017/9/18.
 */
