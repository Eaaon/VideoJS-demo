 var videoBox = document.querySelector('.video');
    var video = document.querySelector('.video video');
	function play(videoUrl) {
        videoBox.style.display = 'block';
        video.src = videoUrl;
	}

	document.querySelector('.video .mask').addEventListener('click', function (e) {
        videoBox.style.display = 'none';
        video.pause();
	})

    function videoClose() {
        videoBox.style.display = 'none';
        video.pause();
    }
