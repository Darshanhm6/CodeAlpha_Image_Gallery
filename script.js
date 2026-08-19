const galleryImages=document.querySelectorAll(".gallery img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const close=document.querySelector(".close");

const next=document.getElementById("next");

const prev=document.getElementById("prev");

let current=0;

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        current=index;
        showImage();
        lightbox.style.display="flex";

    });

});

function showImage(){

    lightboxImg.src=galleryImages[current].src;

}

next.addEventListener("click",()=>{

    current++;

    if(current>=galleryImages.length){

        current=0;
    }

    showImage();

});

prev.addEventListener("click",()=>{

    current--;

    if(current<0){

        current=galleryImages.length-1;
    }

    showImage();

});

close.addEventListener("click",()=>{

    lightbox.style.display="none";

});

window.onclick=function(e){

    if(e.target==lightbox){

        lightbox.style.display="none";
    }

}

function filterImages(category){

    const images=document.querySelectorAll(".image");

    images.forEach(img=>{

        if(category=="all"){

            img.style.display="block";

        }

        else if(img.classList.contains(category)){

            img.style.display="block";

        }

        else{

            img.style.display="none";
        }

    });

}