//allows react library to be used in code 
const React = require('react')

//imports local file named 'default' using a relative path beginning with './'
const Def = require('./default')
//declaring a Js function named 'error404'
function error404 () {
  return (
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND GIRL</h1>
            <div>
              <img src="https://tinyurl.com/yl9qaomh" alt="A pair of eyes" className="image-1"/>
            </div>
            <div>
              Photo by <a href="AUTHOR_LINK">Victoria Knopf</a> on <a href="UNSPLASH_LINK">Unsplash</a>
            </div>
            <p>Oops, sorry, we can't seem to find this page!</p>
        </main>
    </Def>
  )
}
//exporting error404 function so that other files can access and use it
module.exports = error404