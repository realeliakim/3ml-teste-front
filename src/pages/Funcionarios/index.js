import React, { useEffect, useState } from 'react';
import { Content, Container, Button, Table } from '../styles';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Criar from '../../components/Funcionario/criar';
import Editar from '../../components/Funcionario/editar';
import { FiUsers, FiPlus } from 'react-icons/fi';
import api from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { parseISO, format } from 'date-fns';

export default function Funcionario(){

  const [ funcionario, setFuncionario ] = useState([]);
  const [ showCriarModal, setShowCriarModal ] = useState(false);
  const [ showEditarModal, setShowEditarModal ] = useState(false);
  const [ detail, setDetail ] = useState();

  useEffect(()=>{

    async function listFuncionarios(){
      const response = await api.get('funcionarios');
      setFuncionario(response.data);
    }

    listFuncionarios();

  }, []);

  function handleModal(){
    setShowCriarModal(!showCriarModal);
  }


  function handleEditar(item){
    setShowEditarModal(!showEditarModal);
    setDetail(item);
  }

  async function handleExcluir(id){
    const response = await api.delete(`funcionarios/${id}`)
    .then(res=>{
      toast.success('Funcionário cadastrado com sucesso');
      setInterval(function(){ window.location.reload(); }, 2300);
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      <Header />
      <ToastContainer />
      <Content>
        <Title name="Página de funcionários">
          <FiUsers size={25} />
        </Title>
        {funcionario.length === 0 ? (
          <Container>
            <span>Nenhum funcionario cadastrado até o momento...</span>
            <Button onClick={handleModal}>
              <FiPlus size={25} color="#fff" />
              Novo Funcionario
            </Button>
          </Container>
        ) : 
        <>
          <Button onClick={handleModal}>
            <FiPlus size={25} color="#fff" />
            Novo Funcionario
          </Button>
          <Table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Nascimento</th>
                <th scope="col">Cargo</th>
                <th scope="col">Salário</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {funcionario.map((item) => {
                let date = parseISO(item.nascimento)
                return (
                <tr key={item.id}>
                  <td data-label="#">{item.id}</td>
                  <td data-label="Nome">{item.nome} {item.sobrenome}</td>
                  <td data-label="Nascimento">{format(date, 'dd/MM/yyyy')}</td>
                  <td data-label="Cargo">{item.cargo.cargo}</td>
                  <td data-label="Salario">{item.salario}</td>
                  <td data-label="Acoes">
                    <button onClick={ () => handleEditar(item) }>Editar</button>
                    <button onClick={ () => handleExcluir(item.id) }>Excluir</button>
                  </td>
                </tr>
                )
              })}
            </tbody>
          </Table>
        </>
        }
      </Content>

      {showCriarModal && (
        <Criar
        close={handleModal}
        />
      )}
  
      {showEditarModal && (
        <Editar
          item={detail}
          close={handleEditar}
        />
      )}
    </div>
  )
}