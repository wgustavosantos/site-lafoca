import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Dashboard.css';
import { useParams, useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const [estudantes, setEstudantes] = useState([]);
  let {lastPage} = useParams();
  const jsonRef = useRef(null);
  const page = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Ao montar o componente, fazemos a requisição para obter a lista de estudantes
    
    axios.get(`http://localhost:8080/estudantes?size=5`)
      .then(response => {
        setEstudantes(response.data.content);
      })
      .catch(error => {
        console.error('Erro ao buscar estudantes:', error);
      });
  }, [lastPage]);

  const handleEditar = (id) => {
    navigate(`/novo-estudante/${id}`)
  };

  const handleExcluir = (id) => {
    // Lógica para excluir o estudante com o ID 'id'
    console.log(`Excluir estudante com ID ${id}`);
  };

  return (
    <div className="dashboard-container">
      <h1>Lista de Estudantes do LaFOCA</h1>
      <button onClick={() => navigate('/novo-estudante')}>Adicionar novo estudante</button>
      <table className="estudantes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {estudantes.map(estudante => (
            <tr key={estudante.id}>
              <td>{estudante.id}</td>
              <td>{estudante.nomeAluno}</td>
              <td>
                <button onClick={() => handleEditar(estudante.id)}>Editar</button>
                <button onClick={() => handleExcluir(estudante.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={() => handlePaginaAnterior()}>Página anterior</button>
      <button type="button" onClick={() => handleProximaPagina()}>Próxima página</button>
    </div>
  );

  function handleProximaPagina() {
    // Incrementa o valor do page
    page.current++;

    // Faz uma nova requisição com o page incrementado
    axios.get(`http://localhost:8080/estudantes?size=5&page=${page.current}`)
      .then(response => {
        jsonRef.current = response.data;
        setEstudantes(response.data.content);
      })
      .catch(error => {
        console.error('Erro ao buscar estudantes:', error);
      });
  }

  function handlePaginaAnterior() {
    // Decrementa o valor do page
    if (page.current > 0) {
      page.current--;

      // Faz uma nova requisição com o page decrementado
      axios.get(`http://localhost:8080/estudantes?size=5&page=${page.current}`)
        .then(response => {
          jsonRef.current = response.data;
          setEstudantes(response.data.content);
        })
        .catch(error => {
          console.error('Erro ao buscar estudantes:', error);
        });
    }
  }
};

export default Dashboard;
