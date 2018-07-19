var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var OverScene = /** @class */ (function (_super) {
        __extends(OverScene, _super);
        // Public Properties
        //Constructor
        function OverScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //Private Methods
        OverScene.prototype._resetButtonClick = function () {
            managers.Game.currentScene = config.Scene.START;
        };
        //Public Methods
        //Initialize game variables and objects
        OverScene.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            this._overLabel = new objects.Label("Game Over", "60px", "dock51", "#FFFF00", 320, 140, true);
            this._resetButton = new objects.Button("resetButton", 320, 400);
            this._scoreboard = new managers.ScoreBoard();
            this.Main();
        };
        OverScene.prototype.Update = function () {
            this._ocean.Update();
        };
        OverScene.prototype.Main = function () {
            //add a ocean 
            this.addChild(this._ocean);
            this.addChild(this._overLabel); //add play label to the scene
            //this.addChild(this._highScoreLabel);
            this.addChild(this._resetButton); //add back button
            this.addChild(this._scoreboard.HighScoreLabel);
            this._scoreboard.HighScore = managers.Game.scoreBoard.Score;
            //click events for next button and back button 
            this._resetButton.on("click", this._resetButtonClick);
        };
        return OverScene;
    }(objects.Scene));
    scenes.OverScene = OverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map