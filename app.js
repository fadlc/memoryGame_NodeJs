var express        = require('express');
var mongoose       = require('mongoose');

var app            = express();

mongoose.connect("mongodb://localhost/memory_images");

app.use(express.static(__dirname + '/public'));

var imagesSchema = {
    imageName:String
};

var Image = mongoose.model("Image", imagesSchema);

app.get('/api/images', function(req, res) {						
    Image.find(function(err, images){
         if(err){ 
             res.send(err); 
         }
            res.json(images);
            console.log(images);
    });
});


app.listen(8080, function() {
	console.log('App listening on port 8080');
});
