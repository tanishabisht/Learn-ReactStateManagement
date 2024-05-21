# Learn - React State Management

This is the third installment of a seven-part series designed to improve your React development skills. This project focuses on various methods for managing state in React applications.



## Getting Started with the Application
Follow these instructions to get the application running:
1. Install Node.js version 14.21.3:
   - `nvm install v14.21.3`
   - `nvm use v14.21.3`
2. Install necessary packages:
   - `npm install`
3. Start the application:
   - `npm start`



## State management

When building a React app using hooks, you can manage state:
1. Locally: `useState()`
2. Between parent and child: `props`
3. Globally: `useContext()`
4. With REST APIs: `useQuery()`, `usePaginatedQuery()`

**GOAL:** Try to keep state management as simple as possible

1. **Local State**: Use the `useState()` hook locally within functional components.

2. **Lifting State**: This is the process of moving local state up one level in the hierarchy to share state and its setter function as props.

<p><img src='./props.JPG' width='400'></p>

3. **Global State (with Contexts)**: Use this when you have multiple levels and refactoring becomes complex. Be aware that changing the state with `useContext()` can cause all components that use that context to re-render.

4. Consider memoizing components to prevent unnecessary re-renders.

Once you use global state, you might consider other libraries like MobX, Redux, Overmind, Zustand, or Recoil, or simply stick with `useState()`.



## External Data
Managing external data states (loading, errors, data updates, and caching) can be complex. Some libraries that simplify this are:
1. React Query, SWR (for REST APIs)
2. Apollo Client, Urql (for GraphQL)

### React Query
React Query provides tools for managing state with asynchronous data from REST APIs or GraphQL. It helps by:
1. Caching data after the initial fetch, improving speed and user experience.
2. Re-fetching data in the background to keep the site up-to-date.
3. Providing information about the request, such as status or errors.



## Resources
1. [Leigh Halliday](https://www.youtube.com/watch?v=FzlurzsCW4M)
2. [Dev Ed](https://www.youtube.com/watch?v=35lXWvCuM8o&t=205s)
3. [React Query Tutorial - The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpi7Ptjl5b50p9gLjOFani)



## React Learning Series
This project is part of a comprehensive React learning series:
1. [React Application for User Listing](https://github.com/tanishabisht/Learn-ReactUsersListing)
2. [Hooks in React](https://github.com/tanishabisht/Learn-ReactHooks)
3. [State Management in React](https://github.com/tanishabisht/Learn-ReactStateManagement) (this repository)
4. [Material-UI in React](https://github.com/tanishabisht/Learn-ReactMUI)
5. [Redux in React](https://github.com/tanishabisht/Learn-ReactRedux)
6. [Optimizing React Apps](https://github.com/tanishabisht/Learn-ReactOptimization)
7. [Building a Burger Builder App in React](https://github.com/tanishabisht/Learn-ReactBurgerBuilder)