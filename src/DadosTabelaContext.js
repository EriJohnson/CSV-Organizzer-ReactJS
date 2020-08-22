import React, { createContext, useState } from 'react'

export const DadosTabelaContext = createContext()

export const DadosTabelaProvider = ({ children }) => {
  const [colunasTabela, setColunasTabela] = useState()
  const [linhasTabela, setLinhasTabela] = useState([])
  const values = {
    colunasTabela,
    setColunasTabela,
    linhasTabela,
    setLinhasTabela,
  }

  return (
    <DadosTabelaContext.Provider value={values}>
      {children}
    </DadosTabelaContext.Provider>
  )
}
