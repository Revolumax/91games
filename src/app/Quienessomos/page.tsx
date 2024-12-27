"use client";

import { GiDiamondHard } from "react-icons/gi";
import { FaBullseye } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Quienes() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "revolumax",
      imageUrl: "https://crafatar.com/renders/body/2e8bcb9e-9b9c-4ddb-86ba-d6f0f5f42ac3",
      uuid: "2e8bcb9e-9b9c-4ddb-86ba-d6f0f5f42ac3",
    },
    {
      name: "hzwild_",
      imageUrl: "https://crafatar.com/renders/body/70b65b8c-f4d7-4413-9636-b46ae9159092",
      uuid: "70b65b8c-f4d7-4413-9636-b46ae9159092",
    },
    {
      name: "araname",
      imageUrl: "https://crafatar.com/renders/body/ec561538-f3fd-461d-aff5-086b22154bce",
      uuid: null, // No UUID
    },
    {
      name: "logicnick",
      imageUrl: "https://crafatar.com/renders/body/42a5a2b1-9293-4d4d-a324-1edcb8220fea",
      uuid: "42a5a2b1-9293-4d4d-a324-1edcb8220fea",
    },
    {
      name: "josephDisc",
      imageUrl: "https://crafatar.com/renders/body/b81553e8-7eda-4365-946f-ab3295fd7813",
      uuid: "b81553e8-7eda-4365-946f-ab3295fd7813",
    },
    {
      name: "kqzu",
      imageUrl: "https://crafatar.com/renders/body/abf9f0b3-6728-4262-90a1-fd24aaeab944",
      uuid: "abf9f0b3-6728-4262-90a1-fd24aaeab944",
    },
    {
      name: "bwpi",
      imageUrl: "https://crafatar.com/renders/body/3b04caee-46f7-4a09-8199-f2ff99b881a9",
      uuid: "3b04caee-46f7-4a09-8199-f2ff99b881a9",
    },
    {
      name: "snt223",
      imageUrl: "https://crafatar.com/renders/body/6582c998-0387-4d67-a64d-6aefcfbbbdf5",
      uuid: "6582c998-0387-4d67-a64d-6aefcfbbbdf5",
    },
  ]);

  const fetchMinecraftUsername = async (uuid) => {
    const url = `https://playerdb.co/api/player/minecraft/${uuid}`;

    try {
      const response = await axios.get(url);
      return response.data.data.player.username;
    } catch (error) {
      console.error("Error al obtener el nombre del jugador:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchNames = async () => {
      const updatedMembers = await Promise.all(
        teamMembers.map(async (member) => {
          if (!member.uuid) {
            return member; // No actualiza si no hay UUID
          }

          const currentName = await fetchMinecraftUsername(member.uuid);
          return currentName ? { ...member, name: currentName } : member;
        })
      );

      setTeamMembers(updatedMembers);
    };

    fetchNames();
  }, []);

  return (
    <>
      <div className="h-[100px]"></div>
      <div className="text-center mx-auto mt-4 px-4 text-gray-500 dark:text-gray-300">
        <h5 className="text-black dark:text-white font-black text-[40px] sm:text-[50px] md:text-[70px]">Quienes Somos</h5>
        <br />
        <br />
        <br />
        <p className="text-gray-500 dark:text-gray-300 text-md sm:text-lg w-[50%] mx-auto">
          Somos un grupo apasionado y creativo en el servidor de UniversoCraft, dedicado a hacer que la experiencia en el modo creativo sea más emocionante y entretenida. Nuestra misión es combatir el aburrimiento organizando eventos innovadores y únicos que no encontrarás en ningún otro lugar del servidor. Desde desafíos de geografía hasta competiciones de trivia y más, nos especializamos en diseñar actividades que pongan a prueba tus conocimientos y habilidades, mientras fomentamos una comunidad unida y llena de diversión. ¡Únete a nosotros y descubre cómo transformamos el modo creativo en una experiencia inolvidable!
        </p>
      </div>

      <div className="text-center mt-[80px]">
        <h5 className="text-black dark:text-white font-black text-[40px] sm:text-[50px] md:text-[70px]">Nuestro Equipo</h5>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
                style={{
                  height: "450px",
                  backgroundImage: `url(${member.imageUrl})`,
                }}
              >
                <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                <main className="p-5 z-10">
                  <p className="text-md sm:text-lg tracking-tight font-medium leading-7 font-regular text-white hover:underline">
                    {member.name}
                  </p>
                </main>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
