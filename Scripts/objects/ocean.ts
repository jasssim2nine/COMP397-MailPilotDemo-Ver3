module objects{
    export class Ocean extends createjs.Bitmap{
    
        //Private Instance Variables
            private _dy:number;



        // Constructor
        constructor(){
            super(managers.Game.assetManager.getResult("ocean"));
            this.Start();
            
            }

            //Private Methods
            private _reset():void{
                this.y = -960;
            }

            private _move():void{
                this.y += this._dy;
            }

            private _checkBounds():void{
                if(this.y >= 0)
                {
                    this._reset();
                }
            }

            //public Methods

            //Initializes variables and set speed
            public Start():void{
                this._dy = 5;
                this._reset();
            }
            
            public Update():void{
                this._move();
                this._checkBounds();
            }
    }
}