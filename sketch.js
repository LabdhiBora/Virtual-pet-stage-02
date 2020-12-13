//Create variables here
var  dog;
var happyDog;
var normalDog;
var database;
var foods;
var foodStock;
var lastFeed;
 var fedTime;
var foodObject;
var feed,addFood;

function preload()
{
  //load images here
  normalDog=loadImage("images/Dog.png");
  happyDog=loadImage("images/dogImg1.png");
  feedImg=loadImage("images/Milk.png")
}

function setup() {
  createCanvas(900, 500);
  database=firebase.database()
  dog=createSprite(750,250,50,50);
  dog.addImage(normalDog);
  dog.scale=0.3;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  food=new  Food();

  
}


function draw() {  
background("yellow");
food.display();
if(keyWentUp(UP_ARROW)){
  foods--;
  writeStock(foods);
  dog.addImage(happyDog);
;}

textSize(20);
fill ("black");
text ("Note: please press the UP arrow to feed the dog",50,50);
text("Remaining food "+foods,50,100);
  drawSprites();
  //add styles here

        feed=createButton("Feed the dog");
        feed.position(600,100);
       feed.mousePressed(feedImg)
     

        addFood=createButton("Add the food");
        addFood.position(800,100);
       
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}
function readStock(data){
foods=data.val()
}



