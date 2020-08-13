import React, { useState } from 'react'
import { CSVReader } from 'react-papaparse'

import Table from '../Table'
import ContainedButtons from '../Button'

const buttonRef = React.createRef()

function CsvReader() {
  const [listaColunasCSV, setListaColunasCSV] = useState([])
  const [dadosTabela, setDadosTabela] = useState([])

  function handleOpenDialog(e) {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e)
    }
  }

  function handleOnFileLoad(data) {
    const result = []
    const colunasCSV = data[0].data
    const linhasCSV = data.slice(1)

    //Listar as colunasCSV
    const colunas = colunasCSV.map(coluna => ({
      title: `${coluna}`,
      field: `${coluna.toLowerCase()}`,
    }))

    setListaColunasCSV(colunas)

    for (let i = 0; i < linhasCSV.length; i++) {
      let obj = {}
      let currentline = linhasCSV[i]

      for (let j = 0; j < colunas.length; j++) {
        obj[colunas[j]['field']] = currentline.data[j]
      }

      result.push(obj)
    }

    setDadosTabela(result)
  }

  function handleOnError(err, file, inputElem, reason) {
    console.log(err)
  }

  function handleOnRemoveFile(data) {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
  }

  function handleRemoveFile(e) {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e)
    }

    setListaColunasCSV([])
    setDadosTabela([])
  }

  return (
    <>
      <CSVReader
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={handleOnError}
        noClick
        noDrag
        onRemoveFile={handleOnRemoveFile}
      >
        {({ file }) => (
          <aside
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: 10,
              alignItems: 'center',
            }}
          >
            <ContainedButtons
              handleClick={handleOpenDialog}
              title='Escolher um arquivo CSV'
              variant='contained'
              icon='send'
            />
            <ContainedButtons
              handleClick={handleRemoveFile}
              title='remover'
              variant='outlined'
              icon='delete'
            />
          </aside>
        )}
      </CSVReader>
      <Table
        title='CSV IMPORTADO'
        teste={listaColunasCSV}
        teste2={dadosTabela}
      ></Table>
    </>
  )
}

export default CsvReader
