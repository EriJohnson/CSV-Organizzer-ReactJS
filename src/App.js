import React from 'react'
import { DadosTabelaProvider } from './DadosTabelaContext'

import CsvReader from './components/CsvReader'
import Table from './components/Table'

import './assets/styles/global.css'

function App() {
  return (
    <DadosTabelaProvider>
      <CsvReader />
      <Table />
    </DadosTabelaProvider>
  )
}

export default App
