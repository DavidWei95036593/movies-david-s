
$(document).ready(function(){
  console.log("hello");
  const titleinput = $(`#movie-title`);
  const poster =$(`#poster`);
  const errorMessage = $(`#error-message`);
  const dvd = $(`#DVD`);
  const director = $(`#Director`);
  const writer = $(`#Writer`);
  const actor = $(`#Actor`);
  titleinput.on(`keyup`,function(e){
    if(e.key===`Enter`){

      // window.location.replace(`/movie`);
      const movieTitle = titleinput.val();
      titleinput.val(``);
      $.get(`/movieInfo?title=${movieTitle}`,(response)=>{
        if(response.poster){
          // console.log(response);
          writer.removeClass(`hidden`);
          actor.removeClass(`hidden`);
          director.removeClass(`hidden`);
          dvd.removeClass(`hidden`);
          poster.removeClass(`hidden`);
          errorMessage.addClass(`hidden`);
          poster.attr(`src`,response.poster);
          dvd.text(`The release date is ` +`${response.DVD}`);
          director.text(`The Director/s is/are `+`${response.Director}`);
          actor.text(`The Actors are `+`${response.Actor}`);
          writer.text(`The Writer is `+`${response.Writer}`);
          // poster.attr(response.)
        }else{

          errorMessage.removeClass(`hidden`);
          errorMessage.text(`Could not find the poster for
            ${movieTitle}`);
            poster.addClass(`hidden`);
            dvd.addClass(`hidden`);
            director.addClass(`hidden`);
            writer.addClass(`hidden`);
            actor.addClass(`hidden`);
        }
      })
      // console.log(`enter password`);
  }
  })
  // console.log(titleinput);
})
