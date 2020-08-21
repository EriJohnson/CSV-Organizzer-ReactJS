import React from 'react'

import MaterialTable from 'material-table'

import './styles.css'

function Table({ title, objColunas, objLinhas }) {
  return (
    <div className='container'>
      <MaterialTable
        title={title}
        columns={objColunas}
        data={objLinhas}
        options={{
          exportButton: true,
        }}
      />
    </div>
  )
}

export default Table
