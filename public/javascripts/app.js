
$(document).ready(function(){
  const titleinput = $(`#movie-title`);
  titleinput.on(`keyup`,function(e){
    if(e.key===`Enter`){
    console.log(e);}
  })
  // console.log(titleinput);
})
