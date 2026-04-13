import YogeshImg from "../assets/YogeshPP.jpeg";
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 font-mono">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12">

        {/* Left side - Text */}
        <div className="text-white w-full max-w-xl space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-400 animate-pulse">
            Hi there,
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            I'm Yogesh Yadav
          </h2>

          {/* ✨ Animated Text */}
          <TypeAnimation
            sequence={[
              'Software Developer',
              2000,
              'Full Stack Web Developer',
              2000,
              'Code & Tech Explorer',
              2000,
              'MERN Stack Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block text-lg sm:text-xl md:text-2xl text-purple-400 font-semibold"
          />

          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            Passionate about building responsive websites with stunning user interfaces.
            Experienced in Frontend , Backend, Databases and  modern web technologies.
            I love turning ideas into reality through code. From pixel-perfect UIs to powerful APIs — I bring the full stack to the table.
          </p>

          <a
            href="/YogeshYadav_Resume.pdf"
            download
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-2xl transition duration-300 shadow-md hover:shadow-xl text-sm sm:text-base"
          >
            Resume
          </a>
        </div>

        {/* Right side - Circular Enhanced Image */}
        <div className="relative group flex-shrink-0">
          {/* Animated circular gradient border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>

          {/* Main circular image container - Responsive sizes */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Multiple glowing orbs for depth - Responsive sizes */}
            <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-32 h-32 sm:w-40 sm:h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-400/40 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 bg-pink-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Floating particles effect - Responsive positioning */}
            <div className="absolute inset-0">
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-8 right-6 sm:top-12 sm:right-8 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400/80 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-12 left-6 sm:bottom-16 sm:left-8 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-cyan-400/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-6 right-3 sm:bottom-8 sm:right-4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-pink-400/70 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Circular image with enhanced styling - Responsive border */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500 ease-out border-2 sm:border-4 border-white/10">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 z-10"></div>

              {/* The actual circular image */}
              <img
                src={YogeshImg}
                alt="Yogesh Yadav"
                className="w-full h-full object-cover filter group-hover:brightness-110 group-hover:contrast-105 transition-all duration-500"
              />

              {/* Circular shimmer effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-45 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            </div>

            {/* Multiple decorative rings - Responsive borders */}
            <div className="absolute -inset-1 sm:-inset-2 border sm:border-2 border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute -inset-2 sm:-inset-4 border border-cyan-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            <div className="absolute -inset-3 sm:-inset-6 border border-pink-500/15 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>

            {/* Orbiting dots - Responsive sizes */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
              <div className="absolute -top-1 sm:-top-2 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400/80 rounded-full shadow-lg"></div>
              <div className="absolute top-1/2 -right-1 sm:-right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400/70 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-pink-400/75 rounded-full shadow-lg"></div>
              <div className="absolute top-1/2 -left-1 sm:-left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400/60 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Custom CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;