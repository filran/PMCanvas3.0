function proportion( widthscreen, heightscreen, newheightscreen ){
    newwidthscreen = ( widthscreen*newheightscreen ) / heightscreen;
    newwidthscreen = Math.round(newwidthscreen);
    
    return newwidthscreen;
}  
