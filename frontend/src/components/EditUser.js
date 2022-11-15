import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [nome, setNome] = useState("");
  const [rg, setRg] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [servicotipo, setServicotipo] = useState("");
  const [carro, setCarro] = useState("");
  const [casacliente, setCasacliente] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        nome: nome,
        rg: rg,
        empresa: empresa,
        servicotipo: servicotipo,
        carro: carro,
        casacliente: casacliente,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setNome(response.data.nome);
    setRg(response.data.rg);
    setEmpresa(response.data.empresa);
    setServicotipo(response.data.servicotipo);
    setCarro(response.data.carro);
    setCasacliente(response.data.casacliente);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">nome</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">rg</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={rg}
                onChange={(e) => setRg(e.target.value)}
                placeholder="RG"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">empresa</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={empresa}
                onChange={(e) => setRg(e.target.value)}
                placeholder="Empresa"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">servicotipo</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={servicotipo}
                onChange={(e) => setServicotipo(e.target.value)}
                placeholder="ServicoTipo"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">carro</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={carro}
                onChange={(e) => setCarro(e.target.value)}
                placeholder="Carro"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">casacliente</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={casacliente}
                onChange={(e) => setCasacliente(e.target.value)}
                placeholder="CasaCliente"
              />
            </div>
          </div>

          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
