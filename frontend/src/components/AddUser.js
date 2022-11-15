import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [nome, setNome] = useState("");
  const [rg, setRg] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [servicotipo, setServicotipo] = useState("");
  const [carro, setCarro] = useState("");
  const [casacliente, setCasacliente] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        nome: nome,
        rg: rg,
        empresa: empresa,
        servico_tipo: servicotipo,
        carro: carro,
        casa_cliente: casacliente,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-8 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Nome</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome Completo"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">RG</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={rg}
                onChange={(e) => setRg(e.target.value)}
                placeholder="RG ou CPF"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Empresa</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                placeholder="Nome da empresa"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Serviço</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={servicotipo}
                onChange={(e) => setServicotipo(e.target.value)}
                placeholder="Tipo de Serviço"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Carro</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={carro}
                onChange={(e) => setCarro(e.target.value)}
                placeholder="Nome do carro, cor, placa"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Cliente</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={casacliente}
                onChange={(e) => setCasacliente(e.target.value)}
                placeholder="Número da casa do Cliente"
              />
            </div>
          </div>

          <div className="field">
            <button type="submit" className="button is-success">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
