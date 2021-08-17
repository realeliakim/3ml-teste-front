import React, { useEffect, useState } from 'react';
import { Modal } from '../../pages/styles';
import api from '../../services/api';
import { FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

export default function Criar({close}) {

  const [cargo, setCargo] = useState([]);
  const [data, setData] = useState({
    nome: '',
    sobrenome: '',
    nascimento: '',
    salario: '',
    cargo_id: '1'
  });

  useEffect(()=>{

    async function listCargos(){
      const response = await api.get('cargos');
      setCargo(response.data);
    }

    listCargos();

  }, []);

  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function handleSubmit(e){
    e.preventDefault();
    api.post('funcionarios',{
      nome: data.nome,
      sobrenome: data.sobrenome,
      nascimento: data.nascimento,
      salario: data.salario,
      cargo_id: data.cargo_id
    })
    .then(res=>{
      console.log(res.data);
      toast.success('Funcionário criado com sucesso');
      setInterval(function(){ window.location.reload(); }, 2300);
    })
  }

  return (
    <Modal>
      <br />
        <form onSubmit={handleSubmit}>
          <div className="fechar">
            <FiX size={22} color="#fff" />
            <input className="close" type="button" value="Sair" onClick={close} />
          </div>
          <h2>Cadastre um novo funcionário</h2>
          <label>Primeiro nome </label>
            <input
              type="text"
              name="nome"
              id="nome"
              required
              placeholder=""
              value={data.nome}
              onChange={(e)=>handle(e)}
            />
          <br />
          <label>Último nome </label>
            <input
              type="text"
              name="sobrenome"
              id="sobrenome"
              required
              placeholder=""
              value={data.sobrenome}
              onChange={(e)=>handle(e)}
            />
          <br />
          <label>Data de Nascimento </label>
            <input
              type="date"
              name="nascimento"
              id="nascimento"
              required
              placeholder=""
              value={data.nascimento}
              onChange={(e)=>handle(e)}
            />
          <label>Cargo 
            <select value={data.cargo_id} id="cargo_id" onChange={(e)=>handle(e)}>
              {cargo.map((item) => {
                return(
                  <option selected key={item.id} value={item.id} >
                    {item.cargo}
                  </option>
                )
              })}
            </select>
          </label>
          <br />
          <label>Salário </label>
            <input
              type="text"
              name="salario"
              id="salario"
              required
              placeholder=""
              value={data.salario}
              onChange={(e)=>handle(e)}
            />
          <br />
          <div style={{ width: '30%' }}>
            <button className="btn btn-success" type="submit">
              Criar
            </button>
          </div>
        </form>
      
    </Modal>
  );
}