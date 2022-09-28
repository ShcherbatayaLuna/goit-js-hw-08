import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

const STORAGE_KEY = 'videoplayer-current-time';

// player.on('play', function () {
//   console.log('played the video!');
// });

const time = localStorage.getItem(STORAGE_KEY);

if (time) {
  player.setCurrentTime(time);
}

player.on(
  'timeupdate',
  throttle(event => localStorage.setItem(STORAGE_KEY, event.seconds), 1000)
);
