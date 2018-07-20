module objects{
    export class Explosion extends objects.GameObject{

        //private instance variabes


        // public properties


        //constructors
        constructor(){
            super("explosion");
            this.Start();
        }

        //private methods
        private _animatoinEnded(): void{
            this.alpha =0;
            this.off("animationend",this._animatoinEnded.bind(this),false);
            managers.Game.currentSceneObject.removeChild(this);
        }


        //public methods
        public Start():void{
            this.on("animationend",this._animatoinEnded.bind(this),false);
                
            
        }

        public Update():void{

        }

        public Reset():void{

        }
    }
}