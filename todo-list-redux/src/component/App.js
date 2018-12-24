import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleItem from '../containers/VisibleItem';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <VisibleItem>
    { (index) => {
      return (
        <div key= {index}>This is Item {index} in the list</div>
      )
    }}
    </VisibleItem>
  </div>
)

export default App