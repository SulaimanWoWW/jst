var canvas;
var gameState

//BP
var gravity = 0.7

var gameState = 0

var firing
var zombie
var zombieWalk
var zombieGroup 
var zombie1, zombie2, zombie3, zombie4, zombie5, zombie6, zombie7, zombie8, zombie9, zombie10
var policeWalking
var police
var zombieWalking
var policeImage
var bullet, bulletImg
var policeShooting
var shootingSound
var zombieDyingSound
var zombieDyingAnimation
var policeDying
var policeDyingSound
var score = 0
var zombieEnd
var bulletGroup
function preload() {
 backgroundImg = loadImage("./assets/background.png")


zombieWalk = loadAnimation("./assets/zombie1.png", "./assets/zombie2.png","./assets/zombie3.png","./assets/zombie4.png","./assets/zombie5.png","./assets/zombie6.png","./assets/zombie7.png","./assets/zombie8.png","./assets/zombie9.png","./assets/zombie10.png")
firing = loadSound("./assets/firing.mp3")
bulletImg = loadImage("./assets/bullet.png")
//policeShooting = loadImage("./assets/policeShooting1.png")
//policeImage = loadImage("./assets/policeWalking7.png")
zombieDyingSound = loadSound("./assets/zombieDying.mp3")
shootingSound = loadSound("./assets/shooting.mp3")
policeDyingSound = loadSound("./assets/policeDying.mp3")
policeDying = loadImage("./assets/policeDying7.png")
zombieEnd = loadImage("./assets/zombieWalking1.png")
zombieDyingAnimation = loadAnimation("./assets/zombieDying5.png")
policeShooting = loadAnimation("./assets/policeshooting1.png","./assets/policeshooting1.png")
policeWalking = loadAnimation("./assets/policeWalking1.png","./assets/policeWalking2.png","./assets/policeWalking3.png","./assets/policeWalking4.png","./assets/policeWalking5.png","./assets/policeWalking6.png","./assets/policeWalking7.png")
zombieWalking = loadAnimation("./assets/zombieWalking1.png","./assets/zombieWalking2.png","./assets/zombieWalking3.png","./assets/zombieWalking4.png","./assets/zombieWalking5.png","./assets/zombieWalking6.png","./assets/zombieWalking7.png","./assets/zombieWalking8.png")
}

//BP
function setup() {
  canvas = createCanvas(2000,1000);
 

  bg = createSprite(800,410)
  bg.addImage("background", backgroundImg)
  bg.scale = 2.05
   

  
   zombie1 = createSprite(400,720,20,20)
  zombie1.addAnimation("zombie", zombieWalking)
  zombie1.velocity.x = 4.5
  zombie1.addAnimation("dying", zombieDyingAnimation)
  zombie1.addImage("Win", zombieEnd)
  zombie1.debug = true
  zombie1.setCollider("rectangle",0,0,50,100)

  zombie2 = createSprite(300,800,20,20)
  zombie2.addAnimation("zombie", zombieWalking)
  zombie2.velocity.x = 1
  zombie2.addAnimation("dying", zombieDyingAnimation)
  zombie2.addImage("Win", zombieEnd)
  zombie2.setCollider("rectangle",0,0,50,100)

  zombie3 = createSprite(500,660,20,20)
  zombie3.addAnimation("zombie", zombieWalking)
  zombie3.velocity.x = 4
  zombie3.addAnimation("dying", zombieDyingAnimation)
  zombie3.addImage("Win", zombieEnd)
  zombie3.setCollider("rectangle",0,0,50,100)

  bulletGroup = new Group()

  zombie4 = createSprite(400,650,20,20)
  zombie4.addAnimation("zombie", zombieWalking)
  zombie4.velocity.x = 2
  zombie4.addAnimation("dying", zombieDyingAnimation)
  zombie4.addImage("Win", zombieEnd)
  zombie4.setCollider("rectangle",0,0,50,100)


  zombie5 = createSprite(600,770,20,20)
  zombie5.addAnimation("zombie", zombieWalking)
  zombie5.velocity.x = 3.5
  zombie5.addAnimation("dying", zombieDyingAnimation)
  zombie5.addImage("Win", zombieEnd)
  zombie5.setCollider("rectangle",0,0,50,100)

  zombie6 = createSprite(700,710,20,20)
  zombie6.addAnimation("zombie", zombieWalking)
  zombie6.velocity.x = 2
  zombie6.addAnimation("dying", zombieDyingAnimation)
  zombie6.addImage("Win", zombieEnd)
  zombie6.setCollider("rectangle",0,0,50,100)

  zombie7 = createSprite(200,720,20,20)
  zombie7.addAnimation("zombie", zombieWalking)
  zombie7.velocity.x = 1
  zombie7.addAnimation("dying", zombieDyingAnimation)
  zombie7.addImage("Win", zombieEnd)
  zombie7.setCollider("rectangle",0,0,50,100)

  zombie8 = createSprite(100,670,20,20)
  zombie8.addAnimation("zombie", zombieWalking)
  zombie8.velocity.x = 2
  zombie8.addAnimation("dying", zombieDyingAnimation)
  zombie8.addImage("Win", zombieEnd)
  zombie8.setCollider("rectangle",0,0,50,100)

  zombie9 = createSprite(300,640,20,20)
  zombie9.addAnimation("zombie", zombieWalking)
  zombie9.velocity.x = 5
  zombie9.addAnimation("dying", zombieDyingAnimation)
  zombie9.addImage("Win", zombieEnd)
  zombie9.setCollider("rectangle",0,0,50,100)

  zombie10 = createSprite(800,610,20,20)
  zombie10.addAnimation("zombie", zombieWalking)
  zombie10.velocity.x = 4
  zombie10.addAnimation("dying", zombieDyingAnimation)
  zombie10.addImage("Win", zombieEnd)
  zombie10.setCollider("rectangle",0,0,50,100)

  police = createSprite(1500,700,20,20)
  //police.addImage("policeImg", policeImage)
  police.addAnimation("policeWalking", policeWalking)
  police.addAnimation("police", policeShooting)
  police.scale = 1.5
  police.addImage("so",policeDying)
  police.debug = true
  police.setCollider("rectangle",0,0,40,80)


 

 
 
}

//BP
function draw() {

  background("white")
  
  if(keyWentDown("d")){
    police.changeAnimation("policeWalking", policeWalking)
    police.velocity.x += 3
    
  
  }
  if(keyWentUp("d")){
    police.velocity.x = 0
    police.changeAnimation("policeWalking", policeWalking)
    
    
  }
  


 
  if(keyWentDown("w")&& police.position.y>= 670 ){
    police.velocity.y -= 3
    police.changeAnimation("policeWalking", policeWalking)
  }
  
  if(keyWentUp("w")){
  police.velocity.y = 0
  police.changeAnimation("policeWalking", policeWalking)
  }

if(keyWentDown("a")){
  police.velocity.x -= 3
  police.changeAnimation("policeWalking", policeWalking)
}
if(keyWentUp("a")){
  police.velocity.x = 0
  police.changeAnimation("policeWalking", policeWalking)
}

if(keyWentDown("s")&& police.position.y<= 800){
  police.velocity.y += 3
  police.changeAnimation("policeWalking", policeWalking)
}

if(keyWentUp("s")){
  police.velocity.y = 0
  police.changeAnimation("policeWalking", policeWalking)
}
 
 


  
  if(keyWentDown("space")){
  
  police.changeAnimation("police", policeShooting)
  shootingSound.play()
  shootBullet()
  }
  if(bulletGroup.collide(zombie1)){
    zombie1.changeAnimation("dying", zombieDyingAnimation)
    zombieDyingSound.play()
    zombie1.velocity.x = 0
    score += 1
   // bulletGroup.destroyEach()
    

  }
  if(bulletGroup.collide(zombie2)){
    zombie2.changeAnimation("dying", zombieDyingAnimation)
    zombieDyingSound.play()
    zombie2.velocity.x = 0
    score += 1
    //bulletGroup.destroyEach()

  }
  if(bulletGroup.collide(zombie3)){
    zombie3.changeAnimation("dying", zombieDyingAnimation)
    zombieDyingSound.play()
    zombie3.velocity.x = 0
    score += 1
    //bulletGroup.destroyEach()
    

  }
  if(bulletGroup.collide(zombie4)){
    zombie4.changeAnimation("dying", zombieDyingAnimation)
    zombieDyingSound.play()
    zombie4.velocity.x = 0
    score += 1
    //bulletGroup.destroyEach()
    

  }
  if(bulletGroup.collide(zombie5)){
    zombie5.changeAnimation("dying", zombieDyingAnimation)
    zombieDyingSound.play()
    zombie5.velocity.x = 0
    score += 1
    //bulletGroup.destroyEach()
    

  }
  if(bulletGroup.collide(zombie6)){
    zombie6.changeAnimation("dying", zombieDyingAnimation)
    zombieDyingSound.play()
    zombie6.velocity.x = 0
    score += 1
    //bulletGroup.destroyEach()
    

  }
  if(bulletGroup.collide(zombie7)){
    zombie7.changeAnimation("dying", zombieDyingAnimation)
    zombieDyingSound.play()
    zombie7.velocity.x = 0
    score += 1
    //bulletGroup.destroyEach()

  }
  if(bulletGroup.collide(zombie8)){
    zombie8.changeAnimation("dying", zombieDyingAnimation)
    zombieDyingSound.play()
    zombie8.velocity.x = 0
    score += 1
    //bulletGroup.destroyEach()
    

  }
  if(bulletGroup.collide(zombie9)){
    zombie9.changeAnimation("dying", zombieDyingAnimation)
    zombieDyingSound.play()
    zombie9.velocity.x = 0
    score += 1
    //bulletGroup.destroyEach()
    

  }
  if(bulletGroup.collide(zombie10)){
    zombie10.changeAnimation("dying", zombieDyingAnimation)
    zombieDyingSound.play()
    zombie10.velocity.x = 0
    score += 1
    //bulletGroup.destroyEach()
    

  }

  

  if(police.collide(zombie1)){
    police.changeImage("so",policeDying)
    police.velocity.x = 0
    police.velocity.y = 0
    policeDyingSound.play()
  }
  if(zombie2.collide(police)){
    police.changeImage("so",policeDying)
    police.velocity.x = 0
    police.velocity.y = 0
    policeDyingSound.play()
  }
  if(zombie3.collide(police)){
    police.changeImage("so",policeDying)
    police.velocity.x = 0
    police.velocity.y = 0
    policeDyingSound.play()
  }
  if(zombie4.collide(police)){
    police.changeImage("so",policeDying)
    police.velocity.x = 0
    police.velocity.y = 0
    policeDyingSound.play()
  }
  if(zombie5.collide(police)){
    police.changeImage("so",policeDying)
    police.velocity.x = 0
    police.velocity.y = 0
    policeDyingSound.play()
  }
  if(zombie6.collide(police)){
    police.changeImage("so",policeDying)
    police.velocity.x = 0
    police.velocity.y = 0
    policeDyingSound.play()
  }
  if(zombie7.collide(police)){
    police.changeImage("so",policeDying)
    police.velocity.x = 0
    police.velocity.y = 0
    policeDyingSound.play()
  }
  if(zombie8.collide(police)){
    police.changeImage("so",policeDying)
    police.velocity.x = 0
    police.velocity.y = 0
    policeDyingSound.play()
  }
  if(zombie9.collide(police)){
    police.changeImage("so",policeDying)
    police.velocity.x = 0
    police.velocity.y = 0
    policeDyingSound.play()
  }
  if(zombie10.collide(police)){
    police.changeImage("so",policeDying)
    police.velocity.x = 0
    police.velocity.y = 0
    gameState =2
    policeDyingSound.play()
  }
  
  
  
  
  
  
  
  
       
  if(gameState === 2){

    police.velocity.x = 0
    police.velocity.y = 0
    zombie1.velocity.x = 0
    zombie2.velocity.x = 0
    zombie3.velocity.x = 0
    zombie4.velocity.x = 0
    zombie5.velocity.x = 0
    zombie6.velocity.x = 0
    zombie7.velocity.x = 0
    zombie8.velocity.x = 0
    zombie9.velocity.x = 0
    zombie10.velocity.x = 0
    zombie1.changeImage("Win",zombieEnd)
    zombie2.changeImage("Win",zombieEnd)
    zombie3.changeImage("Win",zombieEnd)
    zombie4.changeImage("Win",zombieEnd)
    zombie5.changeImage("Win",zombieEnd)
    zombie6.changeImage("Win",zombieEnd)
    zombie7.changeImage("Win",zombieEnd)
    zombie8.changeImage("Win",zombieEnd)
    zombie9.changeImage("Win",zombieEnd)
    zombie10.changeImage("Win",zombieEnd)


  }

 
  

  drawSprites()

  textSize(50)
  text("score: " + score, 100,50)
}

function gameOver(){
  swal({
    title:`Game Over!`,
    text:"thanks for playing!",
    imageUrl:"https://image.shutterstock.com/image-vector/space-shuttle-flying-pixel-isolated-260nw-456533581.jpg",
    imageSize:"150x150",
    confirmButtonText:"Play Again",
  },
  function(isConfirm){
    if(isConfirm){
      window.location.reload()
    }
    
  }
  )

}


function shootBullet(){
  bullet  = createSprite(police.position.x, police.position.y - 20)
  bullet.addImage("bullet", bulletImg)
  bullet.x = police.x
  bullet.velocity.x = -5
  bullet.scale = 0.1
  bulletGroup.add(bullet)
  bullet.debug = true
  bullet.setCollider("rectangle",0,0,20,20)
  
  
}
