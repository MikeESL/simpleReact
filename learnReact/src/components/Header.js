import React from 'react';

// NOTE: if component only has render method, no need for class exetend component;
// make it a stateless functional component
// so all this: change to what you'll see on apprx. line 32
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//       <header className="top">
//         <h1>Catch
//           <span className="ofThe">
//             <span className="of">
//               o'
//             </span>
//             <span className="the">
//               the
//             </span>
//          </span>
//          Day
//        </h1>
//       </header>
//       <h3 className="tagline">
//         {/*Let's make this dynamic   */}
//         <span>{this.props.tagline}</span>
//       </h3>
//       </div>
//     )
//   }
// }
// Stateless Functional Component:
const Header = (props) => {
      return (
        <div>
        <header className="top">
          <h1>Catch
            <span className="ofThe">
              <span className="of">
                o'
              </span>
              <span className="the">
                the
              </span>
           </span>
           Day
         </h1>
        </header>
        <h3 className="tagline">
          {/*Let's make this dynamic   */}
          <span>{props.tagline}</span>
        </h3>
        </div>
      )
}



export default Header;
