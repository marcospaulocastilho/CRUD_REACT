import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import VeiculoService from "../../services/VeiculoService";
import { useHistory } from "react-router-dom";


function EditarVeiculo() {

  const history = useHistory();
  
 

  const { id } = useParams();
  const [veiculo, setVeiculo] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function getVeiculo() {
    const response = await VeiculoService.getById(id);
    setVeiculo(response.data);
  }

  useEffect(() => {
    getVeiculo();
  }, []);

  async function editarVeiculo(data) {
    console.log(data);
    const response = await VeiculoService.update(id,data);
    history.push("/");
    console.log(response);
  }

  return (
    <div>
      {veiculo && (
        <form onSubmit={handleSubmit(editarVeiculo)}>
          <input
            {...register("placa", { required: true })}
            placeholder="Digite a placa"
            defaultValue={veiculo.placa}
          />
          <input
            {...register("combustivel", { required: true })}
            placeholder="Digite o combustível"
            defaultValue={veiculo.combustivel}
          />
          <input
            {...register("fabricante", { required: true })}
            placeholder="Digite o fabricante"
            defaultValue={veiculo.fabricante}
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
          <input type="submit" />
        </form>
      )}
    </div>
  );
}

export default EditarVeiculo;
