"use client";
import axios from "axios";
import {useState, useEffect} from "react";
import styles from "./page.module.css";
import Swal from "sweetalert2";

export default function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const readPlayers = async () => {
      try {
        const res = await axios(`${process.env.NEXT_PUBLIC_base_url}/players`);
        setPlayers(res.data);
      } catch {}
    };
    readPlayers();
  }, []);

  const handleDeletePlayer = async (id) => {
    console.log("id", typeof id, id);
    Swal.fire({
      title: "Voce tem certeza?",
      text: "Remover o jogador é uma ação irreversível",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(
            `${process.env.NEXT_PUBLIC_base_url}/players/${id}`
          );
          setPlayers((prevPlayers) =>
            prevPlayers.filter((player) => player.id !== id)
          );
          Swal.fire("Excluído!", "Jogador excluido com sucesso.", "success");
        } catch (err) {
          console.log("Erro", err);
          Swal.fire("Erro!", "Ocorreu um erro ao excluir o jogador.", "error");
        }
      }
    });
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Jogadores
        <button className={styles.button}>
          <a href='/jogador/novo'> + ADICIONAR JOGADOR</a>
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Time</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.Team?.name}</td>
              <td>
                <button className={styles.editBtn}>
                  <a href={`jogador/${player.id}`}>✏️</a>
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDeletePlayer(player.id)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
