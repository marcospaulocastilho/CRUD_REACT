import React, { useEffect, useState } from "react";
import VeiculoService from "../../services/VeiculoService";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function PesquisarVeiculos() {
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
    <Link to="/"><button>Voltar Home</button></Link>
      <form onSubmit={handleSubmit(buscarVeiculos)}>
        <input
          {...register("busca")}
          placeholder="Digite Placa ou Fabricante"
        />
        <input type="submit" value="Buscar" />
      </form>


      <table border="1">
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
                  <Link to={`/editar/${veiculo.id}`}>Editar</Link>
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

export default PesquisarVeiculos;
