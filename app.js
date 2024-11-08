import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// //React Element

// // JSX is transpiled(convert to what browser understand) before it reaches the JS engine -> done by Parcel -> Babel which is inside Parcel (Babel is a JS compiler)
// // JSX => transform JSX into React.createElement => React element JS Object => HTML Object in browser
// const jsxEle = <h1>
//       <FuncComponent />
//       Hello from JSX of React</h1>

// //ReactDOM.render() function to render the JSX element into the DOM
const root = ReactDOM.createRoot(document.getElementById('root'))

// // root.render(jsxEle) // this is a React element
// // no need to use <> for the JSX element
// const FuncComponent = () => {
//       return <h1>Hello from Function Component</h1>
// }
// // need to use <> tag for react function components -> Babel understand this <> tag is a React component

const AppLayout = () => {
      return (
            <div className='app'>
                  <Header />
                  <Body />
            </div>
      )
}

const Header = () => {
      return (
            <>
                  <div className='header'>
                        <div className='logo-container'>
                              <img alt='res-logo' className='res-logo' src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
                        </div>
                        <div className='nav-items'>
                              <ul>
                                    <li>Home</li>
                                    <li>About us</li>
                                    <li>Contact us</li>
                                    <li>Cart</li>
                              </ul>
                        </div>
                  </div>
            </>
      )
}

const RestrauntCard = () => {
      return (
            <div className='res-card'>
                  <img className='card-image'
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/aqsnrylokzpn45qhg1pb" />
                  <h3 className='res-card-info'>Meghana Foods</h3>
                  <h4 className='res-card-info'>4.5 Stars</h4>
                  <p className='res-card-info'>Biriyani, South indian, North indian</p>
                  <p className='res-card-info'>38 minutes</p>
            </div>
      )
}

const Body = () => {
      return (
            <div className='body'>
                  <div className='search-bar'>search</div>
                  <div className='res-container'>
                        <RestrauntCard />
                        <RestrauntCard />

                        <RestrauntCard />

                        <RestrauntCard />

                        <RestrauntCard />

                        <RestrauntCard />

                        <RestrauntCard />

                        <RestrauntCard />

                  </div>
            </div>
      )
}
root.render(<AppLayout />) // this is a React function component