var slideshow = {
    photoList: ["mountains", "dog", "forest", "city"],
    currentPhotoIndex: 0,
    nextPhoto: function() {
        
        if (this.currentPhotoIndex < (this.photoList.length - 1)) {
            this.currentPhotoIndex += 1;
            console.log(this.photoList[this.currentPhotoIndex]);
    }   else {
        console.log("End of slideshow");
        this.pause();
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
    },

    playInterval: null,
    play: function () {
            while (this.photoList[this.currentPhotoIndex] == this.photoList.length) {

            }
            this.playInterval = setInterval(this.nextPhoto.bind(this), 2000);
        
        
        
      
    },
    pause: function () {
        clearInterval(this.playInterval);
    }
  
    
    


}


slideshow.play();
