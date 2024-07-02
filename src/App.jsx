import React from 'react'
import Cards from './components/Cards'
import Pagination from './components/Pagination'
import { DataProvider } from './DataContext'

const App = () => {
  return (
    <DataProvider>
      <div className='h-full bg-sky-200 flex flex-col items-center justify-center gap-3 py-5'>
      <Cards/>
      <Pagination/>
    </div>
    </DataProvider>
    
  )
}

export default App
