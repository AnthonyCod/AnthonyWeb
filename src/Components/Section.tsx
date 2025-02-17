import ParticlesBackground from "../Components/Particle";
import me from "../Images/me.png";

const Section: React.FC = () => {
  return (
    <div className="w-full flex justify-center" id="part1">
      <ParticlesBackground />

      <div className="w-[90%] max-w-[1600px] my-10 h-auto text-white relative grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center text-left space-y-4">
          <h2 className="font-archivo text-6xl tracking-wider leading-tight">
            Hi, I'm Anthony
          </h2>
          <h2 className="font-archivo text-5xl tracking-wide leading-tight">
            Front End Developer
          </h2>
          <p className="font-archivo text-sm tracking-widest text-gray-300 leading-relaxed">
            Currently in my 7th semester of Systems Engineering at César Vallejo
            University in Peru. I love creating user-friendly and visually
            appealing web applications, and I'm constantly improving my skills
            to build innovative solutions.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={me}
            alt="Anthony Atiro"
            className="rounded-lg object-cover w-[550px] sm:w-[650px] lg:w-[800px] xl:w-[900px]"
            style={{
              maskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
              maskPosition: "center",
              maskSize: "cover",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
