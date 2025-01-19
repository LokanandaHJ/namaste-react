Ep1
Create react app uses webpack BTS
we are using Parcel as bundler - its a library

Package.lock.json -> keeps exact version that is installed

Props -> its like arguments to the Functional comp

Swiggy ->Config driven UI

2 typs of export
a> default export -> import 'A' from '../../../../'
b> named export -> import {A} from '../../../

Shimmer UI
First UI before actual UI

UseEffect
Everytime component is rendered useEffect is called
Without any dependencies [] useEffect is called everytime component is rendered

<Link> -> do not reload the page -> single page application
 or <a> -> reload the page

2 typs of routing

- client side -> Single page application -> Just loads the component -> one page just components getting interchanged
- server side -> HTML is coming from server side -> make network call to server for info

## Dynamic routing

useRouteError from react-router-dom -> create cutom error page
createBrowserRouter from react-router-dom -> used to create paths to routes

Mounting and rendering both are same

constructor -> Render -> component didMount

component did mount will be called when child is mounted first
PC -> PR -> CC -> CR -> CD -> PD

PC -> PR -> 1CC -> 1CR -> 2CC -> 2CR -> 1CD -> 2CD -> PD

componentDidMount is used for API calls

- Render the comp -> fill the data in component
- so we make API calls inside CD

React

- Render and Commit phase

-Render phase will be fast
-commit phase will be slow as DOM manipulation or DOM updatation

componentDidmount
componentDidUpdate
CoponentUnmount

Hooks -> Normal JavaScript utility functions

.postcssRc -> Parcel needs to understand that its using tailwind for css

tailwind is light weight

Higher order component takes components and returns a component
-pure functions

controlled and Uncontrolled components -> Uncontrolled components will have their own state and controlled are controlled by parents for example that itemList state is maintained by restarunt menu

Body(its Home page and it shows multiple rest cards) ----------> Restrauntcards (these are each cards shown in menu)----(from here based on id of res using Link and appRouter)----> RestrauntMenu (here we show only name of rest) ------> RestrauntCategory (here we show accordian ) -----(to show accordian we use itemList)---->itemList

Props drilling can be avoided using the React context

Redux toolkit

Reducer vs Reducers
Reducer is used in store and is a combination of multiple reducers
Reducers are used in slice

Redux uses Immer BTS

Testing

- Unit testing
- Integration testing
- End to End testing

JEST (react testing library uses JEST for testing)

JEST uses Babel

React testing library

- Install react tetsing lib
- Install Jest
- Install Babel dependencies
- Configure Babel (this is for Jestnpm )
- Configure parcel config file to disable default babel transpilation (Parcel uses Babel already so we need to change some)
