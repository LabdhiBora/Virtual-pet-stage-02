class Food{
    constructor(){
      var foodStock;
      var lastFed;
      this.image=loadImage("images/Milk.png");
      this.foodStock=0;
    }
      
    
    display(){
        var x=10,y=200;
    imageMode (CENTER);
    image(this.image,220,220,70,70);

    if(this.foodStock===0){
       for(var i=0;i<this.foodStock;i++){
           if(i%10===0){
               x=180;
               y=y+50
           }
           this.image(this.image,x,y,50,50);
           x=x+30;
       }
    }
  
    }
}