import React, { useState } from 'react';
import { Modal } from '../../pages/styles';
import api from '../../services/api';
import { FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

export default function Editar({item, close}) {

  console.log(close);

  const [data, setData] = useState({
    cargo: item.cargo,
    descricao: item.descricao,
  })


  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(e);
    api.put(`cargos/${item.id}`,{
      id: item.id,
      cargo: data.cargo,
      descricao: data.descricao
    })
    .then(res=>{
      toast.success('Cargo atualizado com sucesso');
      setInterval(function(){ window.location.reload(); }, 2300);
    })
    .catch((err) => {
      toast.error('Algo deu errado');
    })

    return
  }

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <div className="fechar">
          <FiX size={22} color="#fff" />
          <input className="close" type="button" value="Sair" onClick={close} />
        </div>
        <h2>Editar cargo #{item.id}</h2>
        <label>Nome do cargo: </label>
          <input
            type="text"
            name="cargo"
            id="cargo"
            placeholder=""
            required
            value={data.cargo}
            onChange={(e)=>handle(e)}
          />
        <br />
        <label>Descrição: </label>
          <input
            type="text"
            className="form-control"
            name="descricao"
            id="descricao"
            placeholder=""
            required
            value={data.descricao}
            onChange={(e)=>handle(e)}
          />
        <br />
        <button type="submit">
          Atualizar
        </button>
      </form>
    </Modal>
  );
}

//export default Create;