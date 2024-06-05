// @ts-ignore
import phaser from './phaser.js';
import { SCENE_KEYS } from './scene-keys.js';
import {PreloadScene} from './scene/preload-scene.js'
import {GameScen} from './scene/game_scene.js'
const width = window.innerWidth;
const height = window.innerHeight;

const game = new Phaser.Game({
    type:Phaser.CANVAS,
    pixelArt:false,
    scale:{
        parent: 'game-container',
        width:720,
        height:1280,
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH
    },
    
    backgroundColor:'#000000',
    
});
// @ts-ignore
game.scene.add(SCENE_KEYS.PRELOAD_SCENE, PreloadScene);
game.scene.add(SCENE_KEYS.GAME_SCENE, GameScen);

