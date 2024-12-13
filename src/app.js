import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header';
import Body from './components/Body';
import Error from './components/Error';
import Contact from './components/Contact';
import About from './components/About';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

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
      <Outlet />
    </div>
  )
}

const appROuter = createBrowserRouter([
  {

    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ],
    errorElement: <Error />
  }
])


root.render(<RouterProvider router={appROuter} />) // this is a React function component
