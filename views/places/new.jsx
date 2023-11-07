//Creating a form
//Making sure we have the react library imported and our default code
const React = require('react')
const Def = require('../default')

//creating our form and adding Jsx to it 
function new_form () {
 return (
    <Def>
        <main>
            <h1>Add a New Place</h1>
        </main>
    </Def>
 )
}

module.exports = new_form