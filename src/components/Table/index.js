import React, { useContext } from 'react'
import MaterialTable from 'material-table'

import { DadosTabelaContext } from '../../DadosTabelaContext'

import './styles.css'

function Table() {
  const { colunasTabela } = useContext(DadosTabelaContext)
  const { linhasTabela } = useContext(DadosTabelaContext)

  return (
    <div className='container'>
      {colunasTabela && linhasTabela && (
        <MaterialTable
          columns={colunasTabela}
          data={linhasTabela}
          options={{
            exportButton: true,
            columnsButton: true,
          }}
        />
      )}
    </div>
  )
}

export default Table
