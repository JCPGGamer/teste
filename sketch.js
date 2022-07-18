var cubo;
var pts = 0;
var inimigo,inmgGroup,inimigo2;
var estado = "1"
var pd,pd2,pd3,pd4;
var final,iniiicio;

function preload(){

}

function setup() {
 createCanvas(600,600);
 cubo = createSprite(300,400,30,30)
 pd = createSprite(600,0,600,1)
 pd2 = createSprite(0,300,1,600)
 pd3 = createSprite(600,300,1,600)
 pd4 = createSprite(600,600,600,1)
 final = createSprite(300,290,100,40)
 final.visible = false
 iniiicio = createSprite(15,15,30,10)
 inmgGroup = new Group();
}

function draw() {
 background("blue")
if(estado == "1"){
  inimigoSpawn();
  inimigoSpawn2();
iniiicio.visible = false
 if(keyDown("left_arrow")){
    cubo.x -=5
 }
 if(keyDown("right_arrow")){
cubo.x +=5
}
if(keyDown("up_arrow")){
cubo.y -=5
}
if(keyDown("down_arrow")){
cubo.y +=5
 }
 if(pd.isTouching(cubo)||pd2.isTouching(cubo)||pd3.isTouching(cubo)||pd4.isTouching(cubo)){
  estado = "2";
  cubo.destroy();
 }
  if(inmgGroup.isTouching(cubo)){
    estado = "2";
    cubo.destroy();
 }
 pts = pts+1
 text("Pontos= "+pts,15,15)
}


 drawSprites();
 if(estado == "2"){
  stroke("blue"); 
  fill("blue"); 
  textSize(30); 
  text("Perdeu", 250,300);
  final.visible = true
  inmgGroup.velocityXEach = 0
  inmgGroup.velocityYEach = 0
}

}

function inimigoSpawn(){
if(frameCount % 60 == 0){
inimigo = createSprite(300,-50,40,40);
inimigo.x = Math.round(random(30,570))
inimigo.velocityY = 15;
inimigo.lifetime = 60
inmgGroup.add(inimigo);
 }
}
function inimigoSpawn2(){
  if(frameCount % 60 == 0){
  inimigo2 = createSprite(-50,300,75,75);
  inimigo2.y = Math.round(random(30,570))
  inimigo2.velocityX = 5;
  inimigo2.lifetime = 240
  inmgGroup.add(inimigo2);
   }
  }