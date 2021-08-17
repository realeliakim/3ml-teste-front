import './header.css';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar.png';
import { FiUsers, FiSettings } from 'react-icons/fi';

export default function Header(){
  return (
    <div class="sidebar">
      <div>
        <img src={avatar} alt="avatar"></img>
      </div>

      <Link to="/">
        <FiSettings color="#fff" size={24} />
        Cargos
      </Link>
      <Link to="/funcionario">
        <FiUsers color="#fff" size={24} />
        Funcionários
      </Link>
    </div>
  )
}