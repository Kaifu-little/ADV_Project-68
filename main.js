var images = ["myach1.jpg", "myach2.jpg", "myach3.jpg", "myach4.jpg"]
var i = 0;

function nextslide() {
    if (i = 5) {
        var i = 0
    } else {
        document.getElementById("album").src = images[i];
        i++;
    }
}
