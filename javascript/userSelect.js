fimg = document.images;
          for(j=0;j<fimg.length;j++){
        fimg[j].galleryimg = "no";
        fimg[j].oncontextmenu = function(){return false;}
        fimg[j].ondragstart = function(){return false;}
     }