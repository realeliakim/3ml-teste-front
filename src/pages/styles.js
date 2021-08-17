import styled from "styled-components";

export const Content = styled.div`
  margin-left: 250px;
  padding: 1px 16px;

  @media screen and (max-width: 700px){
    margin-left: 0;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 2%;

  span{
    margin: 2em 0;
    font-weight: 600;
    font-size: 1.2em;
  }
`


export const Button = styled.button`

  float: right;
  margin-bottom: 1.5em;
  background-color: #83bf02;
  color: #fff;
  border: 0;
  padding: .5em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.1em;
  border-radius: 6px;
  transition: ease-in 0.2s;


  svg{
    margin-right: 5px;
  }

  :hover{
    background-color: #5fd204;
    transform: scale(1.1);

  }
`

export const Table = styled.table`

  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

  caption{
    font-size: 1.5em;
    margin: .5 0 .75em;
  }

  tr{
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: .35em;
  }

  tr:hover:not(:first-child){
    background-color: #fff;
  }

  th, td{
    padding: .62em;
    text-align: center;
  }

  th{
    font-size: 1.1em;
    letter-spacing: normal.1em;
    text-transform: uppercase;
  }

  th:first-child{
    width: 10%;
  }

  td{
    font-size: 1.2em;
  }

  button{
    border: 0;
    padding: 8px 3px;
    margin-right: 2px;
    align-items: center;
    display: inline-block;
    border-radius: 4px;
    color: #f8f8f8;
    width: 30%;
  }

  button:first-child{
    background-color: #3583f6;
  }

  button:not(:first-child){
    background-color: #e1055d;
  }

`

export const Modal = styled.div`

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.7);
  z-index: 999;


  form{
    position: fixed;
    max-width: 600px;
    top: 15%;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 4em 2rem;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0,0,0, 0.8);
  }

  .close{
    background-color: #e1053d;
    border: 0;
    width: 20%;
    color: #fff;
    position: absolute;
    top: 10px;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 15px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }

  .fechar svg{
    position: absolute;
    top: 15px;
    right: 100px;
    z-index: 999;
    //margin-right: 0px;
  }

  h2{
    margin-bottom: 1.2em;
    font-size: 2em;
  }

  label{
    width: 40%;
    font-size: 1.3em;
    margin-right: 5%;
  }

  input, select{
    padding: 7px;
    padding-left: 10px;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 5%;
    font-size: 15px;
    border: 1px solid #cdcdcd;
  }

  input:focus{
    box-shadow: 0 0 5px rgba(109,176,233, 0.9);
  }

  button{
    width: 30%;
    background-color: #83bf02;
    border: 0;
    position: absolute;
    right: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 9px 15px;
    border-radius: 5px;
    color: #fff;
    margin-top: 10px;
    font-size: 16px;
  }







`


