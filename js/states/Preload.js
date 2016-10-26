var WB = WB || {};

WB.PreloadState = WB.PreloadState || {};

WB.PreloadState.preload = function() {
    this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.logo.anchor.setTo(0.5);
    this.logo.width = this.game.world.width * 0.80;
    this.logo.height = this.game.world.width * 0.80;
            
	// this.load.image('sprite_key', 'location/of/image/file');
    // this.load.image('player', 'assets/images/NN-Player.jpg');
    this.load.image('play_button', 'assets/images/Play.png');
    this.load.image('letter_tile', 'assets/images/Level_Button.png');

	// this.load.spritesheet('spritesheet_key', 'location/of/sheet/file', frameWidth, frameHeight, framesOnSheet, frameMargin, frameSpacing);
    // this.load.spritesheet('player', 'assets/images/PlayerSheet.png', 100, 100, 4, 0, 0);
        
	// this.load.text('text_key', 'location/of/text/file');
    // this.load.text('levels', 'assets/data/levels.json');
};      
        
WB.PreloadState.create = function() {
    this.game.time.events.add(Phaser.Timer.SECOND * 3, function() {
        this.state.start('HomeState');
    }, this);
};     
