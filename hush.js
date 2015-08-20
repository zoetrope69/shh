'use strict';

var image = [
    ['      ,--.      ________  ____  __\n'],
    ['      |(_)     / ____/ / / / / / /\n'],
    ['      |  |  ~~ \\ \\  / /_/ / /_/ / \n'],
    ['      | =|      \\ \\/ __  / __  /  \n'],
    ['      | _|   ___/ / / / / / / /   \n'],
    ['      |.=|  /____/_/ /_/_/ /_/  ~~\n'],
    ['   __ |  | __ __ __               \n'],
    ['  (_)\\|  ||,~|,~|,~|              \n'],
    ['   \\  |            |              \n'],
    ['    \\      ~       |              \n'],
    ['    |              |              \n'],
    ['     \\   -    .   /               \n'],
    ['      \\_       __/                \n'],
    ['        |      |                  \n'],
    ['        |  `   |                  \n'],
    ['        |    , |                  \n'],
    ['        |      |                  \n'],
    ['        |  |   |                  \n'],
    ['        |      |                  \n'],
    ['        |      |                  \n'],
    ['        |      |                  \n'],
    ['        |   .  |                  \n'],
];

var frames = [];

for(var i = 0; i < image.length; i++){

    frames[i] = image.slice(0, i+1).join('');
}

var count = frames.length;
for(var i = count; i < count+image.length; i++){
    frames[i] = image.slice(0, image.length-1-i).join('');
}

module.exports = frames;
