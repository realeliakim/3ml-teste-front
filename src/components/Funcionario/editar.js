import React, { useEffect, useState } from 'react';
import { Modal } from '../../pages/styles';
import api from '../../services/api';
import { FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { parseISO, format } from 'date-fns';


export default function Editar({item, close}) {

  const date = parseISO(item.nascimento);
  const [cargo, setCargo] = useState([]);
  const [data, setData] = useState({
    nome: item.nome,
    sobrenome: item.sobrenome,
    nascimento: format(date, 'yyyy-MM-dd'),
    salario: item.salario,
    cargo_id: item.cargo_id
  })

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

    api.put(`funcionarios/${item.id}`,{
      id: item.id,
      nome: data.nome,
      sobrenome: data.sobrenome,
      nascimento: data.nascimento,
      salario: data.salario,
      cargo_id: data.cargo_id
    })
    .then(res=>{
      console.log(res.data);
      toast.success('Funcionário atualizado com sucesso');
      setInterval(function(){ window.location.reload(); }, 2300);
    })
    console.log(data);
  }

  return (
    <Modal>
      <br />
        <form onSubmit={handleSubmit}>
          <div className="fechar">
            <FiX size={22} color="#fff" />
            <input className="close" type="button" value="Sair" onClick={close} />
          </div>
          <h2>Editar funcionário #{item.id}</h2>
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
            placeholder=""
            required
            value={data.sobrenome}
            onChange={(e)=>handle(e)}
          />
          <br />
          <label>Data de nascimento </label>
          <input
            type="date"
            name="nascimento"
            id="nascimento"
            placeholder="dd/mm/aaaa"
            required
            value={data.nascimento}
            onChange={(e)=>handle(e)}
          />
          <br />
          <label>Cargo 
            <select value={data.cargo_id} id="cargo_id" onChange={(e)=>handle(e)}>
              {cargo.map((unit, index) => {
                return(
                  <option key={unit.id} value={unit.id}>
                    {unit.cargo}
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
              Atualizar
            </button>
          </div>
        </form>
      
    </Modal>
  );
}