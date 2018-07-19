module objects{
    export class Cloud extends objects.GameObject{
    
        //Private Instance Variables
            



        // Constructor
        constructor(){
            super("cloud");
            this.Start();
            
            }

            //Private Methods
            

            //public Methods

            //Initializes variables and set speed
            public Start():void{
                
               
               this.Reset();
            }
            
            public Update():void{
                this.Move();
                this.CheckBounds();
            }
            public Reset():void{
                this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
                this.y = -this.height;
                this._dx = Math.floor((Math.random() * 4) - 2);
                this._dy = Math.floor((Math.random() * 5) + 5);

            }

           public Move():void{
               this.y += this._dy;
               this.x += this._dx;
                
            }

            public CheckBounds():void{
               //check lower bounds
               if(this.y >= 480 + this.height)
               {
                   this.Reset();
               }
              
            }
               
    }
}