import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaLock,
  FaGlobe,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 sm:px-6 md:px-12 lg:px-24 py-16 md:py-24 text-white font-mono overflow-x-hidden">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse">
        My Skills
      </h1>

      <div className="max-w-5xl mx-auto">
        <VerticalTimeline lineColor="#a855f7">

          {/* Languages */}
          <VerticalTimelineElement
            contentStyle={{
              background: "rgba(74, 237, 114, 0.25)",
              color: "#fff",
              border: "1px solid #1b9046",
              backdropFilter: "blur(8px)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #22c55e" }}
            iconStyle={{ background: "#1b9046", color: "#fff" }}
            icon={<FaCode />}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-green-400">
              Languages
            </h3>
            <p className="text-sm sm:text-base">Java, Python, C++</p>
          </VerticalTimelineElement>

          {/* Frontend */}
          <VerticalTimelineElement
            contentStyle={{
              background: "rgba(109, 40, 217, 0.2)",
              color: "#fff",
              border: "1px solid #9333ea",
              backdropFilter: "blur(8px)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #9333ea" }}
            iconStyle={{ background: "#9333ea", color: "#fff" }}
            icon={<FaLaptopCode />}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-purple-400">
              Frontend Development
            </h3>
            <p className="text-sm sm:text-base">
              HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS
            </p>
          </VerticalTimelineElement>

          {/* Backend */}
          <VerticalTimelineElement
            contentStyle={{
              background: "rgba(14, 165, 233, 0.2)",
              color: "#fff",
              border: "1px solid #06b6d4",
              backdropFilter: "blur(8px)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #06b6d4" }}
            iconStyle={{ background: "#06b6d4", color: "#fff" }}
            icon={<FaServer />}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-400">
              Backend Development
            </h3>
            <p className="text-sm sm:text-base">Node.js, Express.js, EJS</p>
          </VerticalTimelineElement>

          {/* Database */}
          <VerticalTimelineElement
            contentStyle={{
              background: "rgba(34, 197, 94, 0.2)",
              color: "#fff",
              border: "1px solid #22c55e",
              backdropFilter: "blur(8px)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #22c55e" }}
            iconStyle={{ background: "#22c55e", color: "#fff" }}
            icon={<FaDatabase />}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-green-400">
              Databases
            </h3>
            <p className="text-sm sm:text-base">MongoDB, MySQL</p>
          </VerticalTimelineElement>

          {/* Tools */}
          <VerticalTimelineElement
            contentStyle={{
              background: "rgba(244, 114, 182, 0.2)",
              color: "#fff",
              border: "1px solid #ec4899",
              backdropFilter: "blur(8px)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #ec4899" }}
            iconStyle={{ background: "#ec4899", color: "#fff" }}
            icon={<FaTools />}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-pink-400">
              Tools
            </h3>
            <p className="text-sm sm:text-base">Git, GitHub, Postman, Hoppscotch</p>
          </VerticalTimelineElement>

          {/* Authentication */}
          <VerticalTimelineElement
            contentStyle={{
              background: "rgba(251, 191, 36, 0.2)",
              color: "#fff",
              border: "1px solid #facc15",
              backdropFilter: "blur(8px)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #facc15" }}
            iconStyle={{ background: "#facc15", color: "#000" }}
            icon={<FaLock />}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-300">
              Authentication
            </h3>
            <p className="text-sm sm:text-base">
              Sessions, Cookies, JWT, Passport
            </p>
          </VerticalTimelineElement>

          {/* Extra
          <VerticalTimelineElement
            contentStyle={{
              background: "rgba(236, 72, 153, 0.2)",
              color: "#fff",
              border: "1px solid #f472b6",
              backdropFilter: "blur(8px)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #f472b6" }}
            iconStyle={{ background: "#f472b6", color: "#fff" }}
            icon={<FaGlobe />}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-pink-300">
              Extra
            </h3>
            <p className="text-sm sm:text-base">Wordpress</p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Skills;
