import React, { useEffect, useState } from 'react';
import { Content, Container, Button, Table } from '../styles';
import Create from '../../components/Cargo/create';
import Editar from '../../components/Cargo/editar';
import Header from '../../components/Header';
import Title from '../../components/Title';
import api from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { FiSettings, FiPlus } from 'react-icons/fi';


export default function Cargo(){

  const [ cargos, setCargos ] = useState([]);
  const [ showCriarModal, setShowCriarModal] = useState(false);
  const [ showEditarModal, setShowEditarModal] = useState(false);
  const [ detail, setDetail ] = useState();

 
  useEffect(()=>{
    async function loadCargos(){
      const response = await api.get('cargos');
      setCargos(response.data);
    }

    loadCargos();

  }, []); 

  function handleModal(){
    setShowCriarModal(!showCriarModal);
    
  }

  function handleEditar(item){
    setShowEditarModal(!showEditarModal);
    setDetail(item);
  }

  async function handleExcluir(id){
    
    const response = await api.delete(`cargos/${id}`)
    .then(res=>{
      toast.success('Cargo excluido com sucesso');
      setInterval(function(){ window.location.reload(); }, 3000);
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
        <Title name="Página de cargos">
          <FiSettings size={25} />
        </Title>
        {cargos.length === 0 ? (
          <Container>
            <span>Nenhum cargo cadastrado...</span>
            <Button onClick={handleModal}>
              <FiPlus size={25} color="#fff" />
              Novo cargo
            </Button>
          </Container>
        ) : 
        <>
          <Button onClick={handleModal}>
            <FiPlus size={25} color="#fff" />
              Novo cargo
          </Button>
          <Table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Cargo</th>
                <th scope="col">Descricao</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {cargos.map((item) => {
                return(
                  <tr key={item.id}>
                    <td data-label="#">{item.id}</td>
                    <td data-label="Cargo">{item.cargo}</td>
                    <td data-label="Descricao">{item.descricao}</td>
                    
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
      <Create 
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
