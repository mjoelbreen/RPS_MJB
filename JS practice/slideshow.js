var slideshow = {
    photoList: ["mountains", "dog", "forest", "city"],
    currentPhotoIndex: 0,
    nextPhoto: function() {
        
        if (this.currentPhotoIndex < (this.photoList.length - 1)) {
            this.currentPhotoIndex += 1;
            console.log(this.photoList[this.currentPhotoIndex]);
    }   else {
        console.log("End of slideshow");
        }
    },
    prevPhoto: function() {
        
        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex -= 1;
            console.log(this.photoList[this.currentPhotoIndex]);
        }
    },
    getCurrentPhoto: function() {
        console.log(this.photoList[this.currentPhotoIndex]);
    }

}

slideshow.getCurrentPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.prevPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
