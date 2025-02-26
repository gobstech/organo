import './CampoTexto.css';
import React, { useState } from 'react';

export const CampoTexto = (props) => {
  const labelModificado = `${props.label}`;
  const placeholderModificada = `${props.placeholder}...`;

  const aoDigitar = (event) => {
    props.aoAlterado(event.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{labelModificado}</label>
      <input
        value={props.valor}
        onChange={aoDigitar}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
