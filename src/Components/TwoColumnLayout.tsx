const TwoColumnLayout: React.FC = () => {
  return (
    <div className="my-40 relative" id="part3">
      <h2 className="text-2xl font-archivo text-center mb-10">MY PROJECTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-20">
        {/* First Project */}
        <a
          href="https://anthonycod.github.io/gorrion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative bg-white overflow-hidden">
            <iframe
              src="https://anthonycod.github.io/gorrion/"
              width="100%"
              height="600"
              title="Polleria Gorrion"
              frameBorder="0"
              style={{
                pointerEvents: "none",
                zIndex: 10, // Ensure iframe is above particles
                position: "relative", // Ensure it's in the flow of the layout
              }}
            />
          </div>
        </a>

        {/* Second Project */}
        <a
          href="https://anthonycod.github.io/SkillConnect/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative overflow-hidden">
            <iframe
              src="https://anthonycod.github.io/SkillConnect/"
              width="90%"
              height="600"
              title="SkillConnect"
              frameBorder="0"
              style={{
                pointerEvents: "none",
                zIndex: 10, // Ensure iframe is above particles
                position: "relative", // Ensure it's in the flow of the layout
              }}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
