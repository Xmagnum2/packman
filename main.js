import Phaser from "phaser";

const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 300,
    parent: 'phaser-game',
    myCustomProperty: true
};

const game = new Phaser.Game(config);
console.log(game);