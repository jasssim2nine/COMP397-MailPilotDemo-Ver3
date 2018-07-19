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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Public Properties
        //Constructor
        function PlayScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //Private Methods
        //Public Methods
        //Initialize game variables and objects
        PlayScene.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            this._plane = new objects.Plane();
            this._island = new objects.Island();
            //instantiate the cloud array
            this._clouds = new Array();
            this._cloudNum = 3;
            //loop and add each cloud to the array
            for (var count = 0; count < this._cloudNum; count++) {
                this._clouds[count] = new objects.Cloud();
            }
            //add engine sound
            this._engineSound = createjs.Sound.play("engine");
            this._engineSound.loop = -1; //play engine sound for ever
            this._engineSound.volume = 0.3;
            this._scoreBoard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreBoard;
            this.Main();
        };
        //check every frame
        PlayScene.prototype.Update = function () {
            var _this = this;
            this._ocean.Update();
            this._plane.Update();
            this._island.Update();
            //check collision between plane and island
            managers.Collision.Check(this._plane, this._island);
            this._clouds.forEach(function (cloud) {
                cloud.Update();
                //check collision between plane and current cloud 
                managers.Collision.Check(_this._plane, cloud);
            });
            //if lives fall below 0 then swith the scene.
            if (this._scoreBoard.Lives <= 0) {
                this._engineSound.stop();
                managers.Game.currentScene = config.Scene.OVER;
            }
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            //add ocean to the scene
            this.addChild(this._ocean);
            //add island to the scene
            this.addChild(this._island);
            //add plane to the scene
            this.addChild(this._plane);
            //add cloud to the scene
            this._clouds.forEach(function (cloud) {
                _this.addChild(cloud);
            });
            //add scoreboard labels to the game
            this.addChild(this._scoreBoard.LiveLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map