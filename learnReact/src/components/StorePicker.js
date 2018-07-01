import React from 'react';
// LEARNING-NOTES: Every Class in React needs at least the render method
class StorePicker extends React.Component {
  render (){
    // return in the () to write 'normal html'; remember return is not a function, it's a keyword (needs that space)
    // also, from the render comp you can only return one element, so the parent must wrap everything (can't return siblings):
    return (<form action="" className="store-selector">
              <h2>Please Enter a Store</h2>
              { /* this is how to do a comment in JSX */}
              <input required placeholder="Store Name" type="text" />
              <button type="Submit">Visit Store -></button>
            </form>
  )

  }
}

export default StorePicker;
