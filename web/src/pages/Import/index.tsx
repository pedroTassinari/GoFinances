import React, { MouseEvent, useState } from 'react';
import Alert, { Color } from '@material-ui/lab/Alert';
import Dropzone from 'react-dropzone';
import { useHistory } from 'react-router-dom';

import { Tittle, DropzoneContainer, AlertContainer } from './styles';
import Header from '../../Components/Header';

import AlertIcon from '../../assets/alert.svg';

import api from '../../services/api';

interface ModalMessage {
  message: string;
  severity: Color;
}

const Import = () => {
  const [file, setFile] = useState<File>();
  const [modalMessage, setModalMessage] = useState<ModalMessage>();
  const history = useHistory();

  function handleDropFiles(acceptedFiles: File[]) {
    const [newFile] = acceptedFiles;

    setFile(newFile);
  }

  async function handleClick(
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> {
    event.preventDefault();
    // <Alert severity="error">This is an error alert — check it out!</Alert>
    //   <Alert severity="warning">This is a warning alert — check it out!</Alert>
    //   <Alert severity="info">This is an info alert — check it out!</Alert>
    //   <Alert severity="success">This is a success alert — check it out!</Alert>
    if (!file) {
      setModalMessage({
        message: 'You must upload a file',
        severity: 'warning',
      });
      return;
    }
    const data = new FormData();

    data.append('file', file);

    const { status } = await api.post('/transactions/import', data);

    if (status === 200) {
      setModalMessage({
        message: 'Uploaded with success',
        severity: 'success',
      });

      setTimeout(() => {
        history.push('/');
      }, 2000);
    } else {
      setModalMessage({
        message: 'You have gotten an error',
        severity: 'error',
      });
    }
  }

  return (
    <>
      <Header small secondLink />
      <Tittle>Importar uma transação</Tittle>
      <DropzoneContainer>
        <Dropzone
          onDrop={acceptedFiles => handleDropFiles(acceptedFiles)}
          accept=".csv, application/vnd.ms-excel, text/csv"
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>{file?.name || `Selecione ou arraste o arquivo aqui`}</p>
            </div>
          )}
        </Dropzone>
        <div>
          <span>
            <img src={AlertIcon} alt="" />
            Permitido apenas arquivos CSV
          </span>
          <button type="submit" onClick={event => handleClick(event)}>
            Enviar
          </button>
        </div>
      </DropzoneContainer>

      {modalMessage && (
        <AlertContainer>
          <Alert
            severity={modalMessage.severity}
            onClose={() => {
              setModalMessage(undefined);
            }}
          >
            {modalMessage.message}
          </Alert>
        </AlertContainer>
      )}
    </>
  );
};

export default Import;
