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
            <form method="POST" action="/places">
              <div>
                <label htmlFor="name">Place Name</label>
                <input id="name" name="name" required/>
                </div> 
              <div>
                <label htmlFor="pic">Place Picture</label>
                <input type="url" id="pic" name="pic"></input>
              </div>
              <div>
                <label htmlFor="name">City</label>
                <input id="city" name="city"/>
                </div>  
              <div>
                <label htmlFor="name">State</label>
                <input id="state" name="state"/>
                </div>  
              <div>
                <label htmlFor="name">Cuisines</label>
                <input id="cuisines" name="cuisines" required/>
                </div> 
             <input type="submit" value="Add Place"/>
            </form>
        </main>
    </Def>
 )
}

module.exports = new_form