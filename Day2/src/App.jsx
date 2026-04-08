import React from 'react'
import AutoFocusInputs from './AutoFocusInputs'
import UsersList from './UsersList'
import Messages from './Messages'
import Product from './Product'
import ColorList from './ColorList'

const App = () => {
  return (
    <>
    <AutoFocusInputs />
    <UsersList />
    <Messages />
    <Product name="Rajeswari" price="5000" />
    <br/>
    <br />
    <ColorList />
      
    </>
  )
}

export default App
