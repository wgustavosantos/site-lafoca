import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './novoEstudante.css'

const NovoEstudante = () => {
  const [dados, setDados] = useState({
    matricula: "",
    nomeAluno: "",
    emailAluno: "",
    bioAluno: "",
    admin: "",
    turma: "",
    redesSociais: [
      {},
      {},
    ],
    linhaDePesquisa: 1
  });
  const navigate = useNavigate();
  const {estudanteId} = useParams();

  useEffect(() => {
    if (estudanteId) {
      // Estamos em modo de edição, carregar os dados do estudante
      axios.get(`http://localhost:8080/estudantes/${estudanteId}`)
        .then(response => {
          setDados(response.data);
          
        })
        .catch(error => {
          console.error('Erro ao buscar estudante:', error);
        });
    }
  }, [estudanteId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const novoDados = {
      ...dados,
      matricula: event.target.matricula.value,
      nomeAluno: event.target.nomeAluno.value,
      emailAluno: event.target.emailAluno.value,
      bioAluno: event.target.bioAluno.value,
      turma: event.target.turma.value,
      redesSociais: [
        {
          nome: event.target.redesSociais1Nome.value,
          link: event.target.redesSociais1Link.value,
        },
        {
          nome: event.target.redesSociais2Nome.value,
          link: event.target.redesSociais2Link.value,
        },
      ],
      linhaDePesquisa: event.target.linhaDePesquisa.value,
    };

    setDados(novoDados);

    const formData = new FormData();

    formData.append('admin', 1);
    formData.append('matricula', novoDados.matricula);
    formData.append('nomeAluno', novoDados.nomeAluno);
    formData.append('emailAluno', novoDados.emailAluno);
    formData.append('bioAluno', novoDados.bioAluno);
    formData.append('turma', novoDados.turma);

    const redesSociaisFormatted = novoDados.redesSociais.map(rede => `${rede.nome}:${rede.link}`).join(',');
    formData.append("redesSociais", redesSociaisFormatted);
    formData.append('linhaDePesquisa', novoDados.linhaDePesquisa);

    if (event.target.imagem.files.length > 0) {
      const imagem = event.target.imagem.files[0];
      formData.append('imagem', new File([imagem], imagem.name));
    }

    try {
      const response = await axios.post("http://localhost:8080/estudantes", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response);
      navigate('/dashboard/lastPage');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="novo-estudante">

      <div className="novo-estudante__header">
        <button onClick={ () => navigate(-1)}>Voltar</button>

        <h1>Novo estudante</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="matricula">Matrícula</label>
          <input value={dados.matricula} onChange={(e) => setDados({...dados, matricula: e.target.value})} type="text" id="matricula" placeholder="Insira a matrícula" />
        </div>

        <div>
          <label htmlFor="nomeAluno">Nome do aluno</label>
          <input value={dados.nomeAluno} onChange={(e) => setDados({...dados, nomeAluno: e.target.value})} type="text" id="nomeAluno" placeholder="Insira o nome do aluno" />
        </div>

        <div>
          <label htmlFor="emailAluno">E-mail do aluno</label>
          <input value={dados.emailAluno} onChange={(e) => setDados({...dados, emailAluno: e.target.value})} type="email" id="emailAluno" placeholder="Insira o e-mail do aluno" />
        </div>

        <div>
          <label htmlFor="bioAluno">Biografia do aluno</label>
          <textarea value={dados.bioAluno} onChange={(e) => setDados({...dados, bioAluno: e.target.value})} id="bioAluno" placeholder="Insira a biografia do aluno"></textarea>
        </div>

        <div>
          <label htmlFor="turma">Turma</label>
          <input value={dados.turma} onChange={(e) => setDados({...dados, turma: e.target.value})} type="text" id="turma" placeholder="Insira a turma" />
        </div>

        <div>
          <label htmlFor="redesSociais">Redes sociais</label>
          <div>
            <input value={dados.redesSociais[1].nome} onChange={(e) => setDados({...dados, redesSociais: e.target.value})}  type="text" id="redesSociais1Nome" placeholder="Nome da rede social 1" />
            <input type="text" id="redesSociais1Link" placeholder="Link da rede social 1" />
          </div>
          <div>
            <input value={dados.redesSociais[0].nome} onChange={(e) => setDados({...dados, nomeAluno: e.target.value})}  type="text" id="redesSociais2Nome" placeholder="Nome da rede social 2" />
            <input type="text" id="redesSociais2Link" placeholder="Link da rede social 2" />
          </div>
        </div>

        <div>
          <label htmlFor="linhaDePesquisa">Linha de pesquisa</label>
          <input value={dados.linhaDePesquisa.id} onChange={(e) => setDados({...dados, linhaDePesquisa: e.target.value})} type="text" id="linhaDePesquisa" placeholder="Insira a linha de pesquisa" />
        </div>

        <div>
          <label htmlFor="imagem">Imagem</label>
          <input type="file" id="imagem" />
        </div>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default NovoEstudante;
