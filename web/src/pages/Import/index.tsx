import React from 'react';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';

import { Header, Tittle, DropzoneContainer } from './styles';

import Logo from '../../assets/logo.svg';
import Alert from '../../assets/alert.svg';

const Import = () => {
  return (
    <>
      <Header>
        <img src={Logo} alt="goFinances" />
        <ul>
          <li>
            <Link to="/">Listagem</Link>
          </li>
          <li>
            <Link to="/import">Importar</Link>
          </li>
        </ul>
      </Header>
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
