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
var objects;
(function (objects) {
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        // Constructor
        function Plane() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            return _this;
        }
        //Private Methods
        Plane.prototype._animationEnded = function () {
            this.alpha = 1;
            this.planeFlash.alpha = 0;
        };
        //public Methods
        //Initializes variables and set speed
        Plane.prototype.Start = function () {
            this.planeFlash = new objects.PlaneFlash;
            this.planeFlash.alpha = 0;
            this.planeFlash.on("animationend", this._animationEnded.bind(this), false);
            managers.Game.currentSceneObject.addChild(this.planeFlash);
            this.x = 320;
            this.y = 430;
        };
        Plane.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Plane.prototype.Reset = function () {
        };
        Plane.prototype.Move = function () {
            //this.x = objects.Game.stage.mouseX;
            //keyboard control
            if (managers.Game.keyBoardManager.moveLeft) {
                this.x -= 5;
            }
            if (managers.Game.keyBoardManager.moveRight) {
                this.x += 5;
            }
            this.planeFlash.x = this.x;
            this.planeFlash.y = this.y;
        };
        Plane.prototype.CheckBounds = function () {
            //right boundary
            if (this.x >= 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
            }
            //left boundary
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map