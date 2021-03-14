canvas = document.getElementById('myCanvas');
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 40;
block_image_height = 40;

var player_objects = "";
var block_image_objects = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_objects = Img;

player_objects.scaleToWidth(150);
player_objects.scaleToHeight(140);
player_objects.set({
    top:player_y,
    left:player_x
});
canvas.add(player_objects);
    });
}

player_update();

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
       block_image_objects = Img;

block_image_objects.scaleToWidth(block_image_width);
block_image_objects.scaleToHeight(block_image_height);
block_image_objects.set({
    top:player_y,
    left:player_x
});
canvas.add(block_image_objects);
    });
}
        
    })
}