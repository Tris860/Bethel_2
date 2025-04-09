var player1;
var player2;
var player3;
var player4;
var player5;
var player6;

function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('youtube-player-1', {
        height: '315',
        width: '560',
        videoId: 'BsQqMeEcMMo', // Replace with your first video's ID
        playerVars: {
            'playsinline': 1
        }
    });

    player2 = new YT.Player('youtube-player-2', {
        height: '315',
        width: '560',
        videoId: 'pv7Ty2y_wMQ', // Replace with your second video's ID
        playerVars: {
            'playsinline': 1
        }
    });

    player3 = new YT.Player('youtube-player-3', {
        height: '315',
        width: '560',
        videoId: '1BigSTPT9uc', // Replace with your third video's ID
        playerVars: {
            'playsinline': 1
        }
    });
    player4 = new YT.Player('youtube-player-4', {
        height: '315',
        width: '560',
        videoId: 'hAftH74PKw0', // Replace with your third video's ID
        playerVars: {
            'playsinline': 1
        }
    });
    player5 = new YT.Player('youtube-player-5', {
        height: '315',
        width: '560',
        videoId: 'ytN1uREOq3U', // Replace with your third video's ID
        playerVars: {
            'playsinline': 1
        }
    });
    player6 = new YT.Player('youtube-player-6', {
        height: '315',
        width: '560',
        videoId: '3kqKaTTPjho', // Replace with your third video's ID
        playerVars: {
            'playsinline': 1
        }
    });
    // Add more player initializations as needed for more videos
}
document.addEventListener('DOMContentLoaded', function() {
    const inputBar = document.getElementById("inputbar");
    const songsDiv = document.getElementById("songs");
    const songItems = songsDiv.querySelectorAll(".song_right");
  
    inputBar.addEventListener('keyup', function() {
      const input = inputBar.value.toLowerCase();
  
      songItems.forEach(songItem => {
        const titleElement = songItem.querySelector(".song_detail h3:nth-child(1)");
        const leadSingerElement = songItem.querySelector(".song_detail h3:nth-child(2)");
        const releasedOnElement = songItem.querySelector(".song_detail h3:nth-child(3)");
  
        let title = "";
        let leadSinger = "";
        let releasedOn = "";
  
        if (titleElement) {
          title = titleElement.textContent.toLowerCase();
        }
        if (leadSingerElement) {
          leadSinger = leadSingerElement.textContent.toLowerCase();
        }
        if (releasedOnElement) {
          releasedOn = releasedOnElement.textContent.toLowerCase();
        }
  
        if (title.includes(input) || leadSinger.includes(input) || releasedOn.includes(input)) {
          songItem.style.display = "flex"; // Show the song item
        } else {
          songItem.style.display = "none"; // Hide the song item
        }
      });
    });
  });