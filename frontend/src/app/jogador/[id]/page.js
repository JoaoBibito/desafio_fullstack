"use client";
import {usePathname} from "next/navigation";
import {useState, useEffect} from "react";
import axios from "axios";
import Loading from "@/app/components/Loading/Loading";
import * as s from "./styles.js";
import Swal from "sweetalert2";

export default function UpdatePlayer() {
  const rota = usePathname();
  const id = rota.split("/").pop();
  const [player, setPlayer] = useState({name: "", age: "", team_id: ""});
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscaJogador = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_base_url}/players/${id}`
        );
        setPlayer({
          name: res.data.name, // Atualiza o estado com os dados do jogador
          age: res.data.age.toString(),
          team_id: res.data.team_id,
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Erro ao buscar jogador",
        });
      }
    };
    const buscaTimes = async () => {
      try {
        const res = await axios(`${process.env.NEXT_PUBLIC_base_url}/teams`);
        setTimes(res.data);
      } catch {
        Swal.fire({
          icon: "Erro",
          title: "Erro ao buscar times",
        });
      }
    };

    buscaTimes();
    buscaJogador();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  const handleInputChange = async (e) => {
    let {name, value} = e.target;

    setPlayer({
      ...player,
      [name]: value,
    });
  };

  const editPlayer = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_base_url}/players/${id}`,
        {
          name: player.name,
          age: parseInt(player.age),
          team_id: parseInt(player.team_id),
        }
      );
      if (res.status === 200) {
        Swal.fire("Excluído!", "Jogador excluido com sucesso.", "success");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <s.Main>
      <h1>Editar jogador</h1>
      <s.Form id='form' onSubmit={editPlayer}>
        <s.FormRow>
          <s.Input
            name='name'
            type='text'
            placeholder='Nome'
            onChange={handleInputChange}
            value={player.name}
            required
          />
          <s.Input
            name='age'
            type='text'
            placeholder='Idade'
            onChange={handleInputChange}
            value={player.age}
            required
          />
        </s.FormRow>
        <s.FormRow>
          <s.Select
            name='team_id'
            value={player.team_id}
            onChange={handleInputChange}
            required
          >
            {times.length === 0 ? (
              <option>Carregando...</option>
            ) : (
              <>
                <option value=''>Times</option>
                {times.map((team) => {
                  return (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  );
                })}
              </>
            )}
          </s.Select>
        </s.FormRow>

        <s.Button type='submit'>Salvar</s.Button>
      </s.Form>
    </s.Main>
  );
}
