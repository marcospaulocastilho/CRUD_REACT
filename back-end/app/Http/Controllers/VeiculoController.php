<?php

namespace App\Http\Controllers;

use App\Models\Veiculo;
use Illuminate\Http\Request;

class VeiculoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get()
    {
        $response = Veiculo::all();

        if (count($response) > 0) {
            return response()->json(["message" => "Veículos encontrados", "data" => $response]);
        } else {
            return response()->json(["message" => "Nenhum veículo encontrado", "data" => $response]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $response = Veiculo::where("id", $id)->first();
        if ($response) {
            return response()->json(["message" => "Veículo encontrado", "data" => $response]);
        } else {
            return response()->json(["message" => "nenhum Veículo encontrado", "data" => $response]);
        }
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

        $response = Veiculo::create([
            'placa' => $request->placa,
            'combustivel' => $request->combustivel,
            'fabricante' => $request->fabricante,
        ]);

        if ($response) {
            return response()->json(["message" => "Veículo cadastrado", "data" => $response]);
        } else {
            return response()->json(["message" => "Erro ao cadastrar veículo", "data" => $response]);
        }
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {

        $response = Veiculo::where('placa', 'LIKE', '%'.$request->busca.'%' )
        ->orWhere('fabricante', 'LIKE', '%'.$request->busca.'%')->get();


        if (count($response) > 0) {
            return response()->json(["message" => "Veículos encontrados", "data" => $response]);
        } else {
            return response()->json(["message" => "Nenhum veículo encontrado", "data" => $response]);
        }
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $req = $request->all();

        $response = Veiculo::where("id", $id)->update($req);
        if ($response) {
            return response()->json(["message" => "Veículo alterado", "data" => $response]);
        } else {
            return response()->json(["message" => "Erro ao alterar veiculo", "data" => $response]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $response = Veiculo::where("id", $id)->delete();
        if ($response) {
            return response()->json(["message" => "Veículo Deletado", "data" => $response]);
        } else {
            return response()->json(["message" => "Erro ao Deletar veiculo", "data" => $response]);
        }
    }
}
