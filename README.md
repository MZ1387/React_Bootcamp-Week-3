# React_Bootcamp-Week-3

Week 3 Curriculum for React Bootcamp.

## Understanding Redux

## State inside of React components
- The top-level React component managed our primary state. In this type of data architecture, data flows downward to child components. To make changes to state, child components propagate events up to their parent components by calling prop-functions. Any state mutations took place at the top and then flowed downward again.
- As apps grow in size and complexity, managing state inside of React components can become cumbersome… A common pain point is the tight coupling between user interactions and state changes. For complex web applications, oftentimes a single user interaction can affect many different, discrete parts of the state.
- Certain component-managed state is fine, like activating certain buttons on mouse hover. But by managing all other state externally, React components become simple HTML rendering functions. This makes them smaller, easier to understand, and more composable.

## Flux
- The Flux design pattern is made up of four parts, organized as a one-way data pipeline:
- The view dispatches actions that describe what happened.
- The store receives these actions and determines what state changes should occur.
- After the state updates, the new state is pushed to the View.

## Redux
- Your app reads the state from this store
- The state is never mutated directly outside the store
- The views emit actions that describe what happened
- A new state is created by combining the old state and the action by a function called the reducer

## Determine what should be stateful
- All of your application’s data is in a single data structure called the state which is held in the store.
- Your app reads the state from this store.
- The state is never mutated directly outside the store.
- The views emit actions that describe what happened.
  - We use dispatch() to send these actions to the store.
- A new state is created by combining the old state and the action by a function called the reducer.
- Reducer functions must be pure functions.
  - a single store controls state, making updates by using a reducer. This reducer takes the current state and an action and returns a new state.
