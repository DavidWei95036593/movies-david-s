const express = require(`express`);
const hbs = require(`hbs`);
const path = require(`path`);

const app = express();

app.set(`views`,path.join(__dirname,`/views`));
app.set(`view engine`,`hbs`);
//app.use is the keyword of middlewear
app.use(express.static(path.join(__dirname,"public")));

app.get(`/`,(req,res)=>{
  //app.set(view engine )has already set the default of every render to hbs
  res.render(`index`);

})
app.listen(`3000`,()=>{
  console.log(`listenning on port 3000!`);
});
