module objects{
    export class Plane extends objects.GameObject{
    
        //Private Instance Variables
            



        // Constructor
        constructor(){
            super("plane");
            this.Start();
            
            }

            //Private Methods
            

            //public Methods

            //Initializes variables and set speed
            public Start():void{
                this.x = 320;
                this.y = 430;
               
            }
            
            public Update():void{
                this.Move();
                this.CheckBounds();
            }
            public Reset():void{
                
            }

           public Move():void{
                //this.x = objects.Game.stage.mouseX;

                //keyboard control
                if(managers.Game.keyBoardManager.moveLeft){
                    this.x -= 5;
                }
                if(managers.Game.keyBoardManager.moveRight){
                    this.x += 5;
                }
                
            }

            public CheckBounds():void{
                //right boundary
                    if(this.x >=640 - this.halfWidth)
                    {
                        this.x = 640 - this.halfWidth;
                    }
                //left boundary
                if(this.x <= this.halfWidth){
                    this.x = this.halfWidth;
                }
              
            }
               
    }
}