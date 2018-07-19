module managers{
    export class ScoreBoard{
        //private Instance Variable
            private _lives:number;
            private _score:number;
            private _highScore:number;

        //Public Instance variables
        public LiveLabel: objects.Label;
        public ScoreLabel : objects.Label;
        public HighScoreLabel : objects.Label;

        //public properties
        get Lives():number{
            return this._lives;
        }
        set Lives(newLives:number){
            this._lives = newLives;
            this.LiveLabel.text = "Lives: " + this._lives;
        }
        get Score():number{
            return this._score;
        }
        set Score(newScore:number){
            this._score = newScore;
            this.ScoreLabel.text = "Score: " + this._score;
        }
        get HighScore():number{
            return this._highScore;
        }
        set HighScore(newHighScore:number){
            this._highScore = newHighScore;
            this.HighScoreLabel.text = "High Score: " + this._highScore;
        }

        //contructor
        constructor(){
            this._initialize();
        }
        //private methods

        private _initialize():void{
            this.LiveLabel = new objects.Label("Lives: 0", "20px","Dock51","#FFFF00",10,10,false);
            this.ScoreLabel = new objects.Label("Score: 99999", "20px","dock51","#FFFF00",500,10,false);
            this.HighScoreLabel = new objects.Label("High Score: 99999", "20px","dock51","#FFFF00",320,40,true);

            this.Lives = 5;
            this.Score = 0;
            this.HighScore = 0;


        }


        //public methods


    }
}