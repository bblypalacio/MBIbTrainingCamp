///<reference path="ZooAnimals.ts" />
var Zoo;
(function (Zoo) {
    var Reptile = /** @class */ (function () {
        function Reptile() {
            this.skinType = "scales";
        }
        Reptile.prototype.isMammal = function () {
            return false;
        };
        return Reptile;
    }());
    Zoo.Reptile = Reptile;
})(Zoo || (Zoo = {}));
///<reference path="ZooWild.ts" />
lizard = new Zoo.Reptile();
console.log(lizard.isMammal());
console.log(lizard.skinType);
///<reference path="ZooAnimals.ts" />
var Zoo;
(function (Zoo) {
    var Bird = /** @class */ (function () {
        function Bird() {
            this.skinType = "feather";
        }
        Bird.prototype.isMammal = function () {
            return true;
        };
        return Bird;
    }());
    Zoo.Bird = Bird;
})(Zoo || (Zoo = {}));
lizar = new Zoo.Reptile();
penguin = new Zoo.Bird();
console.log(lizard.isMammal);
console.log(lizard.skinType);
console.log(penguin.skinType);
