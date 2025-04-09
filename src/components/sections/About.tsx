import { skills } from "../../assets/constant";
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>

          <div className="grid grid-cols-1">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills?.map((tech, key) => (
                  <span
                    key={key}
                    className="m-1 text-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                  >
                    <tech.icon size={40} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li className="">
                <strong> B.Tech. in Computer Science and Engineering </strong> -
                AKTU University (2020 - 2024)
              </li>
              <li>
                <span className="font-semibold"> Relevant Coursework</span>:
                Data Structures and Algorithms, Web Development, OS, DBMS,
                Computer Networks
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  {" "}
                  Software Developer Intern at Susalabs Ltd (Dec 2023 - August
                  2024){" "}
                </h4>
                <ul className="list-disc mt-2 list-inside text-gray-300 space-y-2">
                  <li className="">
                    Assisted in merging three databases into a single source,
                    which streamlined the entire application,
                  </li>
                  <li>
                    optimized the performance of our application by implementing
                    code splitting, reducing bundle size, and improving load
                    times.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">
                  {" "}
                  Frontend Intern at Agbiz Technology (May 2023 - July 2023){" "}
                </h4>
                <ul className="list-disc mt-2 list-inside text-gray-300 space-y-2">
                  <li>
                    Assisted in building front-end components and integration
                    REST APIs
                  </li>
                  <li>
                    worked with React Hook Form for form validation, context
                    API,
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
