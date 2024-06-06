// @ts-ignore
import phaser from '../phaser.js';
import { SCENE_KEYS } from '../scene-keys.js';



export class PreloadScene extends Phaser.Scene{
    constructor(){
        super({
            // @ts-ignore
            key:SCENE_KEYS.PRELOAD_SCENE,
            active:true
        });
        console.log('Загрузочная сцена');
    }
//Функция для переменных загрузочного экрана.  
    init(){
        console.log('init')
        this.Trak_image = './preloader_window/png/'
        this.pre = 0
        this.url = new URL(location.href, location.origin);
        console.log(this.url)

    }
//Функция для загрузки ресурсов для загрузочного экрана.
    preload(){
        console.log('preload')
        this.load.image('bg',`${this.Trak_image}bg_preloader.png`)
        this.load.image('coin',`${this.Trak_image}icon_efimcoin.png`)
        this.load.image('preloader',`${this.Trak_image}loading_preloader.png`)

        

    }
//Функция для создания на кэнвасе объектов загрузочного экрана.
    create(){
        console.log('create')
        this.add.image(-4,-4,'bg').setOrigin(0).setDisplaySize(this.scale.width+4,this.scale.height+4)

        this.add.image(this.scale.width/2,this.scale.height/2/1.25,'coin').setDisplaySize(this.scale.width/1.5,this.scale.width/1.5)

        //this.preloader_igm = this.add.image(this.scale.width/2,this.scale.height/1.1,'preloader').setScale(1,0.3)
        this.Name_Preload_text =this.add.text(this.scale.width/2-220,this.scale.height/1.6, 'HOARY EFIM', {
            font: '600 100px font1',
            color:'#793b24' 
        });
        

        this.preload_text = this.add.text(this.scale.width/2-80,-100, `Загрузка`, {
            font: '600 40px font1',
            color:'#000000' 
        }).setOrigin(0);


        //this.add.rectangle(this.scale.width/2-this.scale.width/2+20, this.scale.height/1.1, 10, 150, 0x37c3be)

        

        this.add.container(this.scale.width/2-this.scale.width/2+20, this.scale.height/1.1,[
            

            this.preload_text,
            this.preloader_igm = this.add.image(this.scale.width/2-20,0,'preloader').setScale(1,0.3),
            
            this.recting = this.add.rectangle(470/2/2+40, -22, 0, 155, 0x37c3be).setScale(1,0.3)
            


        ]);
        console.log(this.preloader_igm.x)
        
       

        
    }
//Функция для обновления данных загрузочного экрана.
    update(){
        this.recting.setSize(this.pre,150).setOrigin(0)
        if (this.pre < this.preloader_igm.width-40){
            this.pre++
            

        };
        

        
        
        
    }
}
