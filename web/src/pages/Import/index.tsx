import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';

import { Tittle, DropzoneContainer } from './styles';
import Header from '../../Components/Header';

import Alert from '../../assets/alert.svg';

const Import = () => {
  return (
    <>
      <Header import />
      <Tittle>Importar uma transação</Tittle>
      <DropzoneContainer>
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Selecione ou arraste o arquivo aqui</p>
            </div>
          )}
        </Dropzone>
        <div>
          <span>
            <img src={Alert} alt="" />
            Permitido apenas arquivos CSV
          </span>
          <button type="submit">Enviar</button>
        </div>
      </DropzoneContainer>
    </>
  );
};

export default Import;
