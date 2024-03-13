1. What is React ? 
= React is a front - end and open - source JavaScript library which is useful in developing user interfaces specifically for applications with a single page.It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach. 

The important features of React are:

It supports server-side rendering.(SEO FRIENDLY ) (Server-side rendering is the process of rendering a client-side JavaScript framework website to static HTML and CSS on the server, resulting in faster website load times. It allows the browser to render the page quickly using just HTML and CSS while the JavaScript downloads in the background)
It will make use of the virtual DOM rather than real DOM (Data Object Model) as RealDOM manipulations are expensive.
It follows unidirectional data binding or data flow.
It uses reusable or composable UI components for developing the view.

2. What are the advantages of using React?
= 
***Use of Virtual DOM to improve efficiency***: React uses virtual DOM to render the view. As the name suggests, virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves.
***Gentle learning curve***: React has a gentle learning curve when compared to frameworks like Angular. Anyone with little knowledge of javascript can start building web applications using React.
***SEO friendly***: React allows developers to develop engaging user interfaces that can be easily navigated in various search engines. It also allows server-side rendering, which boosts the SEO of an app.
***Reusable components***: React uses component-based architecture for developing applications. Components are independent and reusable bits of code. These components can be shared across various applications having similar functionality. The re-use of components increases the pace of development.
***Huge ecosystem of libraries to choose from***: React provides you with the freedom to choose the tools, libraries, and architecture for developing an application based on your requirement

3. What are the limitations of React?
The few limitations of React are as given below:

React is not a full-blown framework as it is only a library.
The components of React are numerous and will take time to fully grasp the b. enefits of all.
It might be difficult for beginner programmers to understand React.
Coding might become complex as it will make use of inline templating and JSX.



4. JSX stands for ***JavaScript XML***. It allows us to write HTML inside JavaScript ,  As stated in the official docs of React, JSX provides syntactic sugar for React.createElement( ) function.

Note- We can create react applications without using JSX as well.



5. what is props in React ?
 =  Props (short for properties) are a way to pass data from parent to child components in React.
 Props are used to communicate between components and to allow components to share data.




6. What is the virtual DOM? How does react use the virtual DOM to render the UI?

= The Virtual DOM (VDOM) is a concept used in web development frameworks like React to improve the performance of updating the user interface. It is essentially a lightweight copy of the actual DOM (Document Object Model) representation of a web page. The DOM represents the structure of a web page, and manipulating it can be slow and inefficient, especially when dealing with complex web applications that need frequent updates.

Here's how React uses the Virtual DOM and the process of rendering the UI:

1. **Initialization**: When a React component is initially rendered, it creates a virtual representation of the DOM, known as the Virtual DOM.

2. **Render**: When a component's state or props change, React re-renders the component, generating a new Virtual DOM tree.

3. **Reconciliation**: React then compares the new Virtual DOM tree with the previous one to determine the differences or changes between them. This process is called reconciliation.

4. **Diff Algorithm**: React employs a reconciliation algorithm (often referred to as the "diffing" algorithm) to efficiently identify the minimal number of DOM updates needed to bring the actual DOM in sync with the new Virtual DOM tree. This algorithm is at the core of React's performance optimization.

5. **Update**: After identifying the differences, React updates only the parts of the actual DOM that have changed, minimizing the work required to keep the UI up-to-date. This selective updating is much faster than completely re-rendering the entire DOM.

6. **Re-rendering Components**: React also determines which React components need to be re-rendered based on the changes in props or state. It avoids re-rendering unaffected components, further improving performance.

**React Fiber** : React Fiber is an internal, reimplementation of the React core algorithm, which was introduced in React version 16. It is designed to improve the performance and responsiveness of React applications.React Fiber is a complete rewrite of React's core algorithm. It is designed to make React faster, more responsive, and more capable of handling complex UI animations and gestures. Fiber is also designed to make React more scalable, so that it can be used to build large, complex applications.
Fiber works by breaking down the reconciliation process into smaller, more manageable chunks. This allows React to render updates to the UI incrementally, rather than having to re-render the entire UI from scratch. This makes updates to the UI appear smoother and more responsive.

In summary, React uses the Virtual DOM to optimize the process of updating the user interface by creating a lightweight representation of the actual DOM, performing a reconciliation process to identify changes, and then applying those changes efficiently using a diffing algorithm. React Fiber is an enhancement to the core algorithm, designed to further improve performance and responsiveness.

7. **Prop drilling** is a term used in React to describe the process of passing data through multiple layers of nested components in a component tree. It occurs when a component needs to receive certain data via its props, but that data must be passed down from its parent component, then potentially to its child components, and so on, until it reaches the component that needs it. This can lead to a situation where components in the middle of the hierarchy do not actually use the data but are required to pass it along.

Here are the advantages and disadvantages of prop drilling:

**Advantages of Prop Drilling**:

1. **Simplicity**: Prop drilling is straightforward and easy to understand. It doesn't introduce complex state management techniques or additional libraries, making it a simple way to share data among components.

4. **No Additional Libraries**: Prop drilling doesn't require the use of additional state management libraries like Redux or Mobx, which can reduce the complexity of your project.

**Disadvantages of Prop Drilling**:

1. **Complexity with Deep Hierarchies**: In large component trees with many layers of nesting, prop drilling can become cumbersome and lead to a lot of boilerplate code for passing props through intermediary components.

2. **Maintenance Overhead**: As your application grows and changes, you may need to update the prop drilling in multiple places, which can introduce maintenance overhead and increase the chances of introducing bugs.

3. **Readability and Maintainability**: In some cases, prop drilling can make your code less readable and harder to maintain, especially when you have to pass multiple props through many layers of components.

4. **Performance Impact**: While the performance impact of prop drilling is generally negligible for small to medium-sized applications, in very large component trees, it may lead to a slight decrease in performance due to the propagation of props.

To mitigate the disadvantages of prop drilling, React provides other solutions like Context API, which allows you to share data across components without explicitly passing it through props. Additionally, state management libraries like Redux or Mobx can be used to centralize and manage application state, making it more accessible to components without prop drilling. . Redux is a popular choice for managing application state in React applications, and it can help you avoid prop drilling and make state management more efficient and centralized.
Redux allows you to maintain a single, centralized state store for your entire application



8. 
 **Data binding** 
  in React refers to the process of establishing a connection between the UI (User Interface) elements of a React component and the data it displays or manipulates. It ensures that changes in data are reflected in the UI, and vice versa, without the need for manual updates.
(Having a sync with data and Ui elements)

There are two primary types of data binding in React:

One-Way Data Binding:

In one-way data binding, data flows in one direction, typically from a data source (e.g., state or props) to the UI elements.
React primarily uses one-way data binding. Components receive data through props and use state to manage and update their own data.
When the data source changes, React automatically re-renders the component with the updated data.


Two-Way Data Binding:

Two-way data binding allows data to flow both from the data source to the UI elements and from the UI elements back to the data source.
React doesn't natively support two-way data binding like some other frameworks (e.g., Angular). Instead, you have to manually implement it using controlled components.


9. what is NPM  ?
= NPM stands for Node Package Manager ,  npm is free to use.

You can download all npm public software packages without any registration or logon.


10. what is Git and Github?
= Git and GitHub are tools used for collaborative work on projects. Git is a version control system that tracks changes in code. GitHub is a web-based hosting service that allows users to manage Git repositories.


11. What are keys in React?
A key is a special string attribute that needs to be included when using lists of elements.
 By keys we can identify which elements were added, changed or removed.
Keys should be given to array elements for providing a unique identity for each element.
