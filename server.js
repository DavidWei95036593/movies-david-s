const express = require(`express`);
const hbs = require(`hbs`);
const path = require(`path`);
const axios = require(`axios`);
const app = express();
const port = process.env.PORT || 3000;
app.set(`views`,path.join(__dirname,`/views`));
app.set(`view engine`,`hbs`);
//app.use is the keyword of middlewear
app.use(express.static(path.join(__dirname,"public")));

app.get(`/`,(req,res)=>{
  //app.set(view engine )has already set the default of every render to hbs
  res.render(`index`);
})
app.get(`/movieInfo`,(req,res)=>{
  const title = req.query.title;
  const api_id="tt3896198";
  const apiKey = process.env.API_KEY || `2e4ddc07`;
  // const APIKEY = '2e4ddc07';
  axios.get(`https://omdbapi.com/?apikey=${apiKey}&t=${title}`)
  .then((response)=>{
    const Writer = response.data.Writer;
    const poster = response.data.Poster;
    const DVD = response.data.DVD;
    const Director = response.data.Director;
    const Actor = response.data.Actors;
    // console.log(Actor);
    res.send({poster,DVD,Director,Writer,Actor});
    // res.send({DVD);

  }).catch((response)=>{
    res.send({});
  })



})
app.listen(port,()=>{
  console.log(port);
});
