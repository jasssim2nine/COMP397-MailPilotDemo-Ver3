module objects{
    export  abstract class GameObject extends createjs.Sprite{
        //Private Instance Variable
            protected _dx:number;
            protected _dy:number;
            
        //Public  Properties
        public width:number;
        public height:number;
        public halfWidth: number;
        public halfHeight : number;
        public isColliding : boolean;
        
        // Constructor
        constructor(imageString:string ){
            super(managers.Game.textureAtlas,imageString);
            this.name = imageString;
            this._initialize();
        }
        //Private Methods
            private _initialize():void{
                this.width = this.getBounds().width;
                this.height = this.getBounds().height;

                this.halfWidth = this.width *0.5;
                this.halfHeight = this.height *0.5;

                this.regX = this.halfWidth;
                this.regY = this.halfHeight;
                this.isColliding = false; 
            }
        //Public Methods

        public Start():void{

        }

        public Update():void{

        }

        public Reset():void{

        }

        public CheckBounds():void{

        }
        public Move():void{
            
        }

        

    } 

}