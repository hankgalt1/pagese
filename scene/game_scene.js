// @ts-ignore
import phaser from '../phaser.js';
import { SCENE_KEYS } from '../scene-keys.js';


export class GameScen extends Phaser.Scene{
    constructor(){
        super({
            // @ts-ignore
            key:SCENE_KEYS.GAME_SCENE,
            
        });
        console.log('Загрузочная сцена');
    }
//Функция для переменных загрузочного экрана.  
    init(){
        console.log('init')
        this.Trak_image = './preloader_window/png/'

    }
//Функция для загрузки ресурсов для загрузочного экрана.
    preload(){ 
        console.log('preload.game')

    }
//Функция для создания на кэнвасе объектов загрузочного экрана.
    create(){
        console.log('create.game')
    }
//Функция для обновления данных загрузочного экрана.
    update(){
        console.log('update.game')
        
    }
}
