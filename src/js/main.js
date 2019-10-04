"use strict";
// upload file
$(".upload").upload({
  action: '#', // TODO change to real handler
  label: 'Drop Your File Here or Click to Upload',
  autoUpload: true
});

// animation
new WOW({
  offset: 250,
  mobile: true, 
}).init();

