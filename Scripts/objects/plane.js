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
        //Private Instance Variables
        // Constructor
        function Plane() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            return _this;
        }
        //Private Methods
        //public Methods
        //Initializes variables and set speed
        Plane.prototype.Start = function () {
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