module scenes {
    export class OverScene extends objects.Scene {
        // Private Instance Variables
        private _overLabel: objects.Label;
        private _resetButton: objects.Button;
        private _ocean : objects.Ocean;
        private _scoreboard : managers.ScoreBoard;

        // Public Properties


        //Constructor
        constructor() {
            super()
            this.Start();
        }


        //Private Methods
        

        private _resetButtonClick(): void {

            managers.Game.currentScene = config.Scene.START;
        }

        //Public Methods

        //Initialize game variables and objects
        public Start(): void {
            this._ocean = new objects.Ocean();
            this._overLabel = new objects.Label("Game Over", "60px", "dock51", "#FFFF00", 320, 140, true);
            this._resetButton = new objects.Button( "resetButton", 320, 400);
            this._scoreboard = new managers.ScoreBoard();

            this.Main();

        }

        public Update() {

            this._ocean.Update();

        }
        public Main(): void {
             //add a ocean 
             this.addChild(this._ocean);
            this.addChild(this._overLabel);//add play label to the scene
            //this.addChild(this._highScoreLabel);
            this.addChild(this._resetButton);//add back button
            
            this.addChild(this._scoreboard.HighScoreLabel);
            this._scoreboard.HighScore = managers.Game.scoreBoard.Score;

            //click events for next button and back button 
            this._resetButton.on("click",this._resetButtonClick);
        }


    }
}