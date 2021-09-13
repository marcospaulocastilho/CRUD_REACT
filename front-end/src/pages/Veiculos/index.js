import React, { useEffect, useState } from "react";
import VeiculoService from "../../services/VeiculoService";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Veiculos() {
  const [veiculos, setVeiculos] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function cadastrarVeiculo(data) {
    console.log(data);
    const response = await VeiculoService.store(data);
    getVeiculos();
  }

  async function getVeiculos() {
    const response = await VeiculoService.get();
    setVeiculos(response.data);
  }

  async function buscarVeiculos(data) {
    const response = await VeiculoService.search(data);
    setVeiculos(response.data);
  }


  async function deletarVeiculos(id) {
    await VeiculoService.destroy(id);
    getVeiculos();
  }

  useEffect(() => {
    getVeiculos();
  }, []);

  return (
    <div>

<header>
<h1 style={{color: "blue"}}>Cadastro de Veículos</h1>
</header>

    

      <form onSubmit={handleSubmit(cadastrarVeiculo)}>
        <input
          {...register("placa", { required: true })}
          placeholder="Digite a placa"
        />
        <input
          {...register("combustivel", { required: true })}
          placeholder="Digite o combustível"
        />
        <input
          {...register("fabricante", { required: true })}
          placeholder="Digite o fabricante"
        />
        {errors.placa && (
          <>
            <br />
            <span>A placa deve ser preenchida</span>
            <br />
          </>
        )}
        {errors.combustivel && (
          <>
            <br />
            <span>O combustivel deve ser preenchida</span>
            <br />
          </>
        )}
        {errors.fabricante && (
          <>
            <br />
            <span>O fabricante deve ser preenchida</span>
            <br />
          </>
        )}
        <input type="submit" value="Cadastrar" />
      </form>
          <br / >
      <Link to="/pesquisar"><button>Pesquisar</button></Link>
        

      <table border="1" >
        <thead>
          <tr>
            <td>Placa</td>
            <td>Combustivel</td>
            <td>Fabricante</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          {veiculos.map((veiculo) => {
            return (
              
              <tr key={veiculo.id}>
                <td>{veiculo.placa}</td>
                <td>{veiculo.combustivel}</td>
                <td>{veiculo.fabricante}</td>
                <td>
                
                  <Link to={`/editar/${veiculo.id}`}><button>Editar</button></Link>
                  <button onClick={() => deletarVeiculos(veiculo.id)}>
                    Apagar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Veiculos;
