"use client";
import styles from "../../page.module.css";
import axios from "axios";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import * as s from "./style.js";
import Loading from "@/app/components/Loading/Loading";

export default function AddPlayer() {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      async function buscaTimes() {
        const res = await axios(`${process.env.NEXT_PUBLIC_base_url}/teams`);
        setTimes(res.data);
      }
      buscaTimes();
    } catch {
      Swal.fire({
        icon: "Erro",
        title: "Erro ao buscar times",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const createPlayer = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const name = e.target[0].value;
      const age = parseInt(e.target[1].value);
      const team = parseInt(e.target[2].value);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_base_url}/players`,
        {name: name, age: age, team_id: team}
      );
      setLoading(false);
      Swal.fire({
        icon: "sucess",
        title: "Sucesso!",
        text: "Jogador cadastrado com sucesso",
      });
    } catch (err) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Erro!",
        text: "Não conseguimos cadastrar o jogador, tente novamente mais tarde.",
      });
    }
  };

  return (
    <s.Main>
      {loading && <Loading />}
      <h1>Inserir jogador</h1>
      <s.Form id='form' onSubmit={createPlayer}>
        <s.FormRow>
          <s.Input type='text' placeholder='Nome' required />
          <s.Input type='text' placeholder='Idade' required />
        </s.FormRow>
        <s.FormRow>
          <s.Select required>
            {times.length === 0 ? (
              <option>Times</option>
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

        <button className={styles.button} type='submit'>
          Salvar
        </button>
      </s.Form>
    </s.Main>
  );
}
