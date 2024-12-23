import Image from "next/image";

export default function Ganadores() {
  const teamMembers = [
    {
      name: "7stvn",
      imageUrl:
        "https://crafatar.com/renders/body/5aaad8cd-40ea-4418-8aef-12be8f1d36bf",
      evento: "GEO el parlamento",
    },
    {
      name: "ChloeHowl",
      imageUrl:
        "https://crafatar.com/renders/body/f3ec4010-7e48-40fb-a4c2-5d7db09fede3",
      evento: "Geografía",
    },
    {
      name: "Kqzu",
      imageUrl:
        "https://crafatar.com/renders/body/0b943ecf-5c23-4369-8485-5b5840dc5ef0",
      evento: "GEO el parlamento",
    },
    {
      name: "DieguitttoBy2002",
      imageUrl:
        "https://crafatar.com/renders/body/b1f1c7df-c3a9-4c1a-a761-5ef074bf4834",
      evento: "Race Preguntas",
    },
    {
      name: "roddv",
      imageUrl:
        "https://crafatar.com/renders/body/5e114847-af2f-4287-98c4-76c42bf2c74d",
      evento: "Skins",
    },
    {
      name: "NOMEPRUEBES",
      imageUrl:
        "https://crafatar.com/renders/body/ec561538-f3fd-461d-aff5-086b22154bce",
      evento: "Geografía",
    },
    {
      name: "Lord_King_Axolot",
      imageUrl:
        "https://crafatar.com/renders/body/ec561538-f3fd-461d-aff5-086b22154bce",
      evento: "Skins",
    },
    {
      name: "lowcss",
      imageUrl:
        "https://crafatar.com/renders/body/ec561538-f3fd-461d-aff5-086b22154bce",
      evento: "Cultura General",
    },
    {
      name: "Cafeaulait",
      imageUrl:
        "https://crafatar.com/renders/body/6c36e08c-6234-4e79-adbf-76c417ec9568",
      evento: "Geo Capitales",
    },

    {
      name: "ssarita_",
      imageUrl:
        "https://crafatar.com/renders/body/ec561538-f3fd-461d-aff5-086b22154bce",
      evento: "GEO El parlamento",
    },
    {
      name: "Snt223",
      imageUrl:
        "https://crafatar.com/renders/body/6582c998-0387-4d67-a64d-6aefcfbbbdf5",
      evento: "GEO El parlamento",
    },

    {
      name: "Mivw",
      imageUrl:
        "https://crafatar.com/renders/body/9fc34935-b21f-41bd-ac92-1d41609b1ba3",
      evento: "GEO El parlamento",
    },

    {
      name: "Ra1ndr0ps",
      imageUrl:
        "https://crafatar.com/renders/body/b868161f-3139-4b74-814e-23fc43a067c2",
      evento: "Cultura General",
    },

    {
      name: "YTRuben_777",
      imageUrl:
        "https://crafatar.com/renders/body/ec561538-f3fd-461d-aff5-086b22154bce",
      evento: "Cultura General",
    },  
    
    {
      name: "elmexicano_xX",
      imageUrl:
        "https://crafatar.com/renders/body/9a112ef7-c9c5-46ba-9e8d-4c3e2b2c8fbd",
      evento: "Cultura General",
    }, 

    {
      name: "ManzT_T",
      imageUrl:
        "https://crafatar.com/renders/body/2b9c353b-f2d6-498d-9eb7-7c722b864005",
      evento: "GEO mapa mundial",
    }, 


    //git add .
//git commit -m "Descripción de los cambios"
// git push origin main
  ];

  return (
    <>
      <h5 className="text-black font-black text-[70px] text-center mt-[100px] dark:text-white">
        NUESTROS FINALISTAS
      </h5>
      <div 
        className="flex ml-[0px] mt-[100px] w-full h-auto bg-center bg-cover"
        style={{
          backgroundImage: `url("https://path/to/your/confetti-background.png")`, // Reemplaza esta URL con la URL de tu imagen de confeti
        }}
      >
        <div className="flex mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative flex items-end justify-start text-left bg-cover bg-center"
                style={{
                  height: "300px",
                  width: "150px",
                  backgroundImage: `url(${member.imageUrl})`,
                }}
              >
                <div className="absolute top-0 mt-20 right-0 bottom-0 left-0"></div>
                <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                  <div className="text-white font-regular flex flex-col justify-start"></div>
                </div>
                <main className="p-[5px] z-10 bg-black">
                  <p className="text-md tracking-tight font-medium leading-7 font-regular text-white">
                    {member.name}
                  </p>
                  <p className="text-md tracking-tight font-medium leading-7 font-regular text-white">
                  {member.evento}
                    
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
