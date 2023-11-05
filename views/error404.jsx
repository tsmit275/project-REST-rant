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
            <p>Oops, sorry, we can't seem to find this page!</p>
        </main>
    </Def>
  )
}
//exporting error404 function so that other files can access and use it
module.exports = error404