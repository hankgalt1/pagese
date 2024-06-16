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
        this.Trak_image = './game_window/'
        this.block = []
        this.oblako = []
        this.index = 0
        this.HpAxe = 10
        this.ScoreGold = 0
        this.ScoreBlack = 0
        this.playerSpeed = 3;
        this.enemyMaxY = 280;
        this.enemyMinY = 80;
        this.oblaka_za = false
        this.moneta_buttom = true
        this.derevo_count = 0
        this.listik_count = 0

    }
    random(){
        const random = Math.floor(Math.random() * 3);
        return random

    }
    setsizeoskolok(){
        const random = Math.floor(Math.random() * 48);
        return random

    }
    setvelosytyiskolok(){
        const random = Math.floor(Math.random() * 500);
        return random

    }
    funcoblako(){
        const random = Math.floor(Math.random() * this.scale.width*2);
        return random

    }
//Функция для загрузки ресурсов для загрузочного экрана.
    preload(){ 
        console.log('preload.game')
        this.load.image('bg_game',`${this.Trak_image}bg.png`)
        this.load.image('gold',`${this.Trak_image}gold.png`);
        this.load.image('green',`${this.Trak_image}red.png`);
        this.load.image('black',`${this.Trak_image}black.png`);
        this.load.image('oblako1',`${this.Trak_image}oblako1.png`);
        this.load.image('oblako2',`${this.Trak_image}oblako2.png`);
        this.load.image('oblako3',`${this.Trak_image}oblako3.png`);
        this.load.image('GUI',`${this.Trak_image}GUI.png`);
        this.load.image('buttom',`${this.Trak_image}button.png`);
        this.load.image('moneta',`${this.Trak_image}moneta.png`);
        this.load.image('derevo',`${this.Trak_image}derevo.png`);
        this.load.image('listick',`${this.Trak_image}listik.png`);
        this.load.spritesheet('utka', `${this.Trak_image}utka.png`, {frameWidth: 256, frameHeight: 256}),
        this.load.image('oskolok',`${this.Trak_image}oskolok.png`),
        this.load.spritesheet('efim', `${this.Trak_image}efim.png`, {frameWidth: 256, frameHeight: 256})




    }
//Функция для создания на кэнвасе объектов загрузочного экрана.
    create(){
        console.log('create.game')
        this.add.image(this.scale.width/2,this.scale.height/2,'bg_game').setDisplaySize(this.scale.width,this.scale.height)
        this.gui1 = this.add.image(0,0,"GUI").setDisplaySize(this.scale.width/3,this.scale.width/3).setOrigin(0)
        this.gui2 = this.add.image(this.gui1.width/1.5,0,"GUI").setDisplaySize(this.scale.width/3,this.scale.width/3).setOrigin(0)
        this.moneta = this.add.image(this.scale.width/2.5,this.scale.height/1.2,"moneta").setDisplaySize(this.scale.width/1.8,this.scale.width/1.8)
        this.derevo = this.add.image(this.gui1.width/2.8,this.gui1.width/3,"derevo").setDisplaySize(this.gui1.width/1.7,this.gui1.height/1.7)
        this.listick = this.add.image(this.gui1.width*1.05,this.gui1.width/3.2,"listick").setDisplaySize(this.gui1.width/2.1,this.gui1.height/2.1)
        this.derevo_text = this.add.text(this.derevo.x,this.derevo.y*1.65, `${this.derevo_count}`, {
            font: `600 ${this.scale.width/15}px font1`,
            color:'#000000' 
        }).setOrigin(0);

        this.listick_text = this.add.text(this.listick.x,this.derevo.y*1.65, `${this.listik_count}`, {
            font: `600 ${this.scale.width/15}px font1`,
            color:'#000000' 
        }).setOrigin(0);

        this.add.container(0,0,[
            this.gui1,
            this.gui1,
            this.derevo,
            this.listick,
            this.derevo_text





        ]);
        this.player = this.add.sprite(this.scale.width/2, this.scale.height/3, 'utka').setDisplaySize(100,100);
        this.anims.create({
            key: "utka",
            frameRate: 25,
            frames: this.anims.generateFrameNumbers("utka", { start: 0, end: 10 }),
            repeat: -1
        });
        this.efim= this.add.sprite(this.scale.width/2+25, this.scale.height/3+this.player.height/3, 'efim').setDisplaySize(100,100);
        this.anims.create({
            key: "efim",
            frameRate: 50,
            frames: this.anims.generateFrameNumbers("efim", { start: 0, end: 3 }),
            repeat: 1
        });

        
    
        
        

    }
//Функция для обновления данных загрузочного экрана.
    update(){
        this.player.anims.play('utka',true);
        // if (this.input.activePointer.isDown) {
        //     console.log("Кнопка")
        // };
        if (this.input.mousePointer.isDown==true){
            this.efim.anims.play('efim',true)
            this.setOskolok= this.setsizeoskolok()
            this.setvel = this.setvelosytyiskolok()
            this.moneta.setDisplaySize(this.scale.width/2,this.scale.width/2),
            this.oskolok = this.physics.add.sprite(this.scale.width/1.4,this.scale.height/2,"oskolok").setGravityX(-this.setvel).setDisplaySize(this.setOskolok,this.setOskolok)
            this.input.mousePointer.isDown = false}
            
        else{
           this.moneta.setDisplaySize(this.scale.width/1.8,this.scale.width/1.8)
           this.efim.anims.stop
        }
        



        this.random_oblako= this.funcoblako()
        this.random_oblako1= this.funcoblako()
        if (this.random_oblako >3 && this.oblaka_za == false){
            const months = ["oblako1", "oblako2", "oblako3"];
            this.oblako.push(this.add.sprite(this.random_oblako1,this.scale.height+500,`${months[this.random()]}`).setDisplaySize(this.random_oblako,this.random_oblako))//0
            this.oblaka_za = true
        };
        if (this.oblaka_za ==true){
            this.oblako[this.oblako.length-1].y-=this.playerSpeed*3
            if(this.oblako[this.oblako.length-1].y < -500){
                this.oblaka_za = false
            };
        };
        
        

    

        if (this.block.length ==0){
            const months = ["green", "black", "gold"];
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*2,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*3,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*4,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*5,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*6,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*7,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*8,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*9,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*10,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0

        };
        
        if (this.block[`${this.block.length-1}`].y >= this.scale.height-this.scale.width/4/2){
            this.block[`${this.block.length-10}`].y-=this.playerSpeed
            this.block[`${this.block.length-9}`].y-=this.playerSpeed
            this.block[`${this.block.length-8}`].y-=this.playerSpeed
            this.block[`${this.block.length-7}`].y-=this.playerSpeed
            this.block[`${this.block.length-6}`].y-=this.playerSpeed
            this.block[`${this.block.length-5}`].y-=this.playerSpeed
            this.block[`${this.block.length-4}`].y-=this.playerSpeed
            this.block[`${this.block.length-3}`].y-=this.playerSpeed
            this.block[`${this.block.length-2}`].y-=this.playerSpeed
            this.block[`${this.block.length-1}`].y-=this.playerSpeed
            

        };
        if (this.block.length > 11){
            this.block[`${this.block.length-11}`].y-=this.playerSpeed
            this.block[`${this.block.length-12}`].y-=this.playerSpeed
            this.block[`${this.block.length-13}`].y-=this.playerSpeed
            this.block[`${this.block.length-14}`].y-=this.playerSpeed
            this.block[`${this.block.length-15}`].y-=this.playerSpeed
            this.block[`${this.block.length-16}`].y-=this.playerSpeed
            this.block[`${this.block.length-17}`].y-=this.playerSpeed
            this.block[`${this.block.length-18}`].y-=this.playerSpeed
            this.block[`${this.block.length-19}`].y-=this.playerSpeed
            this.block[`${this.block.length-20}`].y-=this.playerSpeed
        };

        if (this.block[`${this.block.length-1}`].y < this.scale.height-this.scale.width/4/2){
            const months = ["green", "black", "gold"];
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4-48,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*2-48,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*3-48,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*4-48,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*5-48,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*6-48,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*7-48,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*8-48,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*9-48,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0
            this.block.push(this.add.sprite(this.scale.width/1.2,this.scale.height+this.scale.width/4*10-48,`${months[this.random()]}`).setDisplaySize(this.scale.width/4,this.scale.width/4))//0

        };
        if (this.block[`${this.block.length-1}`].y <= this.scale.height-this.scale.width/4/2){
            this.block[`${this.block.length-10}`].y-=this.playerSpeed
            this.block[`${this.block.length-9}`].y-=this.playerSpeed
            this.block[`${this.block.length-8}`].y-=this.playerSpeed
            this.block[`${this.block.length-7}`].y-=this.playerSpeed
            this.block[`${this.block.length-6}`].y-=this.playerSpeed
            this.block[`${this.block.length-5}`].y-=this.playerSpeed
            this.block[`${this.block.length-4}`].y-=this.playerSpeed
            this.block[`${this.block.length-3}`].y-=this.playerSpeed
            this.block[`${this.block.length-2}`].y-=this.playerSpeed
            this.block[`${this.block.length-1}`].y-=this.playerSpeed
            
        };

        
    }
}
