var images = {
    roots : "img/",
    imgName : [
        "mario.jpg",
        "monhun.jpg",
        "zelda.jpg"
    ]
}

var inGallay = [];

for(var i=0; i < images.imgName.length; i++){
    inGallay[i] = images.roots+images.imgName[i]
}


export default inGallay;