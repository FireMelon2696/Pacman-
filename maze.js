class Maze {

    constructor(){
        this.wall1 = createSprite(560,200,100,100);
        this.wall2 = createSprite(360,200,100,100);
        this.wall5 = createSprite(160,190,100,180);
        this.wall1.addImage(v);
        this.wall5.addImage(d);
        this.wall2.addImage(e);
        this.wall1.scale = 0.7;
        this.wall5.scale = 0.7;
        this.wall2.scale = 0.8;
        this.ow1 = createSprite(350,7,700,10);
        this.ow2 = createSprite(350,393,700,10);
        this.ow3 = createSprite(7,70,10,170);
        this.ow4 = createSprite(7,330,10,170);
        this.ow5 = createSprite(693,70,10,170);
        this.ow6 = createSprite(693,330,10,170);
        this.ow1.shapeColor = ("white");
        this.ow2.shapeColor = ("white");
        this.ow3.shapeColor = ("white");
        this.ow4.shapeColor = ("white");
        this.ow6.shapeColor = ("white");
        this.ow5.shapeColor = ("white");
        this.gb1 = createSprite(350,110,100,7);
        this.gb2 = createSprite(300,85,7,50);
        this.gb3 = createSprite(400,85,7,50);
        this.pb1 = createSprite(320,365,7,50);
        this.pb2 = createSprite(380,365,7,50);
        this.gb1.shapeColor = ("white");
        this.gb2.shapeColor = ("white");
        this.gb3.shapeColor = ("white");
        this.pb1.shapeColor = ("white");
        this.pb2.shapeColor = ("white");
        this.tp1 = createSprite(30,150,70,10);
        this.tp2 = createSprite(30,250,70,10);
        this.tp3 = createSprite(670,150,70,10);
        this.tp4 = createSprite(670,250,70,10);
        this.tp1.shapeColor = ("white");
        this.tp2.shapeColor = ("white");
        this.tp3.shapeColor = ("white");
        this.tp4.shapeColor = ("white");
        
    }
    display(){
        drawSprites();
    }
}