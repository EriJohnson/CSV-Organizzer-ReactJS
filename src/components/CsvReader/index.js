import React, { useContext } from 'react'
import { CSVReader } from 'react-papaparse'

import { DadosTabelaContext } from '../../DadosTabelaContext'

import ContainedButtons from '../Button'

const buttonRef = React.createRef()

function CsvReader() {
  const { setTituloTabela } = useContext(DadosTabelaContext)
  const { setColunasTabela } = useContext(DadosTabelaContext)
  const { setLinhasTabela } = useContext(DadosTabelaContext)

  function handleOpenDialog(e) {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e)
    }
  }

  function handleOnFileLoad(data, file) {
    const [colunasCSV, ...linhasCSV] = data
    setTituloTabela(file.name)

    //Listar as colunasCSV
    const colunas = colunasCSV.data.map(coluna => ({
      title: `${coluna}`,
      field: `${coluna.toLowerCase()}`,
    }))

    setColunasTabela(colunas)

    const dadosParaTabela = []
    for (let i = 0; i < linhasCSV.length; i++) {
      let obj = {}
      let currentline = linhasCSV[i]

      for (let j = 0; j < colunas.length; j++) {
        obj[colunas[j]['field']] = currentline.data[j]
      }

      dadosParaTabela.push(obj)
    }

    setLinhasTabela(dadosParaTabela)
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

    setColunasTabela()
    setLinhasTabela([])
  }

  return (
    <>
      <h1>CSV Organizzer</h1>
      <div className='container'>
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
      </div>
    </>
  )
}

export default CsvReader
