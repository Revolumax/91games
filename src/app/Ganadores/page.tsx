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
      evento: "Geografía",
    },
  ];

  return (
    <>
      <h5 className="text-black font-black text-[70px] text-center mt-[100px]">
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
