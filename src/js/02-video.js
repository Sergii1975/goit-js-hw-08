import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYTIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(function(currentTime) {
        const seconds = currentTime.seconds;
        localStorage.setItem(PLAYTIME_KEY, JSON.stringify(seconds));
    }, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(PLAYTIME_KEY)) || null);

