import React from 'react'

import MaterialTable from 'material-table'

import './styles.css'

function Table({ title, teste, teste2 }) {
  return (
    <div className='container'>
      <MaterialTable
        title={title}
        columns={teste}
        data={teste2}
        options={{
          exportButton: true,
        }}
      />
    </div>
  )
}

export default Table
