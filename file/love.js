(function (window) {
    function random(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    // ... （之前的代码）

    Seed = function (tree, point, scale, color) {
        this.tree = tree;

        var scale = scale || 1
        var color = color || '#FF0000';

        this.heart = {
            point: point,
            scale: 2, // 设置初始的爱心大小为2倍
            color: color,
            figure: new Heart(),
        }

        this.circle = {
            point: point,
            scale: scale,
            color: color,
            radius: 5,
        }
    }
    Seed.prototype = {
        // ... （之前的代码）
    }

    // ... （之前的代码）

    window.random = random;
    window.bezier = bezier;
    window.Point = Point;
    window.Tree = Tree;

})(window);
