import './tailwind.output.scss'
import './App.css'

import { Provider } from 'react-redux'
import store from './store'
import React from 'react'
import Catalog from './components/Catalog'

function App() {
  return (
    <>
      <Provider store={store}>
        <main className="flex-1 pt-16">
          <div className="flex flex-col items-center justify-start flex-1 h-full min-h-screen p-4 overflow-x-hidden overflow-y-auto">
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4 p-10">
              <Catalog />
            </div>
          </div>
        </main>
      </Provider>
    </>
  )
}

export default App
