# Shopping Cart with Redux Toolkit

![Screenshot 2023-12-16 214420](https://github.com/bsilvers64/redux-dive/assets/48654366/d4faca1d-42ea-41de-930d-8d16f18d8d6b)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

# Learnings from Shopping Cart Project with Redux Toolkit

This project serves as a comprehensive exploration of Redux Toolkit in building a shopping cart application. The key learnings and insights gained from this project are outlined below:

### 1. redux can be used with any front-end framework, its not specific to react.

Redux is a versatile state management library that can be seamlessly integrated with any front-end framework, showcasing its flexibility and applicability beyond React.

### 2. first we setup the store. we can think about it as the entire state of the application.
we create it using the configureStore function provided by the redux-toolkit library.
we import a provider component in indexjs and pass our store as a prop to this component, while enclosing the the app /root component in the provider components.

The `<Provider>` component makes the Redux store available to any nested components that need to access the Redux store.

### 2.1. One call to configureStore will:

	1. Call combineReducers to combine your slices reducers into the root reducer function
	2. Add the thunk middleware and called applyMiddleware
 	3. In development, automatically add more middleware to check for common mistakes like accidentally mutating the state
	4. Automatically set up the Redux DevTools Extension connection
	5. Call createStore to create a Redux store using that root reducer and those configuration options

Components that need access to the state slices can use the useSelector and useDispatch hooks provided by react-redux. These hooks simplify the process of extracting data from the store and dispatching actions.

🢂 Then we create a slice for our application. its like a feature. we export the reducer from our slice and import it in the store. where we add it to the configureStore.

🢂 We split up functionality in our app where a state is responsible. for an action, Dispatch will take this object and look through the reducers that match the action type.

🢂 useSelector automatically subscribes your component to the Redux store, and it will re-render whenever the relevant state values change. This ensures that your component stays in sync with the global state managed by Redux. we use useSelector to access our entire state or its slices. one of our state values include the amount of items in cart. in our cart page, we check if the amount value < 1, i.e. if cart is empty, we display the html for empty page otherwise we display the cart items.

🢂 In Redux Toolkit, a slice is a bundled package containing reducer logic and related actions for a specific state section.

🢂 The useDispatch hook provides a way to access the Redux store's dispatch function within a functional component. The dispatch function is used to send actions to the Redux store. Dispatching an action triggers the Redux store to invoke the appropriate reducers, and these reducers, in turn, update the state based on the action. triggering state updates and re-renders in your components. By using dispatch(fetchWeather(city)), you're dispatching the fetchWeather action from the slice, which in turn triggers the asynchronous API call and updates the Redux store's state according to the extraReducers defined in the slice. This way, your component remains unaware of the internal structure of the slice and its actions, keeping your code modular and maintainable.

🢂 redux-toolkit lib comes with immer library. slices return actioncreators and reducers. whatever we will return from our reducer as the state will become our new state. Reducers, as the name suggests, take in two things: previous state and an action. Then they reduce it (read it return) to one entity: the new updated instance of state.

🢂 when we dispatch action using useDispatch, in which we call an anyonymous function, in which call the actionCreator function imported from the slice
where we defined this action creator from the reducer section, the dispatch sends an action of type:

"slicename/reducername"

🢂 10. When you use the find method to locate an object in an array, it returns a reference to the original object. In JavaScript, when you work with objects and arrays, what gets passed around is a reference to the object in memory, not a copy of the object. This means that when you modify properties of the object obtained from find, you are modifying the actual object stored in the original array.

🢂 11. the createSlice function uses the Immer library under the hood, which allows you to write "mutating" code that is automatically translated into immutable updates. When you write code like state.cartItems = [] or ourItem.amount += 1, you're actually updating a draft of the state, and Immer ensures that it produces a new immutable state based on the changes you specified.

🢂 12. We use configureStore to create the Redux store, and we provide an object to the reducer key. Each key-value pair in this object represents a slice of the state, where the key is the slice name ('cart' in this case), and the value is the corresponding reducer.

🢂 13. createAsyncThunk simplifies the process of handling asynchronous actions in a Redux application. It helps in creating asynchronous action creators in a more organized and concise way.

🢂 14. The asynchronous callback function is the logic that will be executed when the getCartItems action is dispatched. The first argument to createAsyncThunk ('cart/getCartItems') is used as a prefix for the action types generated by Redux Toolkit.


## How to Run the Project

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the application: `npm start`

**Feel free to explore the code, experiment with Redux Toolkit features, and adapt the shopping cart project to your specific needs. Happy coding!**
