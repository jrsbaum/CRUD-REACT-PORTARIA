import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("Você tem certeza que deseja deletar esse usuário")) {
        await axios.delete(`http://localhost:5000/users/${id}`);
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="columns mt-5 is-centered">
        <div className="column is-four-fifths">
          <Link to={`add`} className="button is-success">
            Adicionar
          </Link>
          <table className="table is-striped is-narrow is-fullwidth">
            <thead>
              <tr>
                <th>N°</th>
                <th>Nome</th>
                <th>RG/CPF</th>
                <th>Empresa</th>
                <th>Serviço</th>
                <th>Carro</th>
                <th>Cliente</th>
                <th>Criado em:</th>
                <th>Atualizado em:</th>
                <th>Editar Deletar</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.nome}</td>
                  <td>{user.rg}</td>
                  <td>{user.empresa}</td>
                  <td>{user.servico_tipo}</td>
                  <td>{user.carro}</td>
                  <td>{user.casa_cliente}</td>
                  <td>{user.createdAt}</td>
                  <td>{user.updatedAt}</td>
                  <td>
                    <Link
                      to={`edit/${user.id}`}
                      className="button is-small is-info mr-2"
                    >
                      ⠀Editar⠀
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="button is-small is-danger"
                    >
                      ⠀Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="field is-grouped is-grouped-multiline">
            <div className="control">
              <div className="tags has-addons">
                <span className="tag is-black">Project by:</span>
                <span className="tag is-info">Júnior Baum</span>
              </div>
            </div>
            <span className="tag is-black">Using:</span>
            <span className="tag is-info">React</span>
            <span className="tag is-success">NodeJs</span>
            <span className="tag is-link">Express</span>
            <span className="tag is-dark">MySql</span>
            <span className="tag is-primary">Axios</span>
            <span className="tag is-danger">Bulma</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
