import "./HeroSection.css";
import heroillustration from "../assets/hero-illustration.svg";

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen text-[#14284d] bg-[radial-gradient(at_77%_52%,#ffdbe785,transparent_40%),#ffffff] grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-center gap-7 md:gap-6 lg:gap-[clamp(28px,4vw,68px)] px-5 py-10 md:px-8 md:py-10 lg:px-[clamp(24px,6vw,100px)] lg:py-[clamp(36px,5vw,76px)] overflow-hidden">
      {/* Left Column: Content Section */}
      <div className="relative z-[2] max-w-full lg:max-w-[660px]">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-3 px-[18px] py-[10px] text-[13px] font-semibold text-[#d13b73] tracking-[0.01em] bg-[#fff0f5] border border-[#ffdbe6] rounded-full">
          <span aria-hidden="true">✦</span>
          <span>Learn</span>
          <i className="text-[#f7a2c2] not-italic">•</i>
          <span>Practice</span>
          <i className="text-[#f7a2c2] not-italic">•</i>
          <span>Grow</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-[#14284d] tracking-[-0.04em] mt-5 lg:mt-[26px] mb-[18px] font-extrabold leading-[1.1] text-[clamp(34px,9vw,48px)] lg:text-[clamp(40px,4.8vw,68px)]">
          Your Tasks,
          <br />
          <span className="bg-[linear-gradient(95deg,#a24df3_0%,#ff6584_72%)] bg-clip-text text-transparent">
            Your Progress
          </span>
        </h1>

        {/* Description */}
        <p className="text-[#647694] m-0 text-[15px] lg:text-[clamp(15px,1.2vw,17px)] leading-[1.75]">
          Complete your daily tasks, build real projects,
          <br className="hidden md:inline" />
          track your progress and get one step closer
          <br className="hidden md:inline" />
          to your dream career.
        </p>

        {/* 4 Feature Items */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-2.5 gap-y-4 md:gap-x-3.5 md:gap-y-[18px] lg:gap-[18px] mt-[26px] lg:mt-8">
          <div className="min-w-0">
            <div
              className="w-[46px] h-[46px] rounded-[14px] grid place-items-center mb-3 text-base font-extrabold text-[#ff4071] bg-[#fff0f5]"
              aria-hidden="true"
            >
              ▣
            </div>
            <h2 className="text-[#1d3155] mb-1.5 text-xs sm:text-[13px] font-bold leading-[1.35]">
              Daily Tasks
            </h2>
            <p className="text-[#71809a] m-0 text-[11px] sm:text-xs leading-[1.6]">
              Stay consistent
              <br />
              and improve
            </p>
          </div>

          <div className="min-w-0">
            <div
              className="w-[46px] h-[46px] rounded-[14px] grid place-items-center mb-3 text-base font-extrabold text-[#9450f3] bg-[#f2eaff]"
              aria-hidden="true"
            >
              &lt;/&gt;
            </div>
            <h2 className="text-[#1d3155] mb-1.5 text-xs sm:text-[13px] font-bold leading-[1.35]">
              Hands-on Practice
            </h2>
            <p className="text-[#71809a] m-0 text-[11px] sm:text-xs leading-[1.6]">
              Build real world
              <br />
              projects
            </p>
          </div>

          <div className="min-w-0">
            <div
              className="w-[46px] h-[46px] rounded-[14px] grid place-items-center mb-3 text-base font-extrabold text-[#13a98b] bg-[#e0fbf3]"
              aria-hidden="true"
            >
              ▥
            </div>
            <h2 className="text-[#1d3155] mb-1.5 text-xs sm:text-[13px] font-bold leading-[1.35]">
              Track Progress
            </h2>
            <p className="text-[#71809a] m-0 text-[11px] sm:text-xs leading-[1.6]">
              See your growth
              <br />
              over time
            </p>
          </div>

          <div className="min-w-0">
            <div
              className="w-[46px] h-[46px] rounded-[14px] grid place-items-center mb-3 text-base font-extrabold text-[#ff527b] bg-[#fff0f5]"
              aria-hidden="true"
            >
              ♧
            </div>
            <h2 className="text-[#1d3155] mb-1.5 text-xs sm:text-[13px] font-bold leading-[1.35]">
              Community Support
            </h2>
            <p className="text-[#71809a] m-0 text-[11px] sm:text-xs leading-[1.6]">
              Learn together,
              <br />
              move forward
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4 lg:gap-[22px] mt-7 lg:mt-9">
          <a
            className="inline-flex justify-center items-center gap-3.5 min-h-[48px] lg:min-h-[52px] px-[26px] text-sm font-bold text-white no-underline rounded-[15px] bg-[linear-gradient(110deg,#ff6584,#f43f73)] shadow-[0_12px_26px_rgba(255,107,149,0.28)] hover:shadow-[0_16px_30px_rgba(255,107,149,0.4)] hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto"
            href="#student-tasks"
          >
            View Your Tasks <span className="text-lg leading-none" aria-hidden="true">→</span>
          </a>
          <a
            className="group inline-flex justify-center items-center gap-3 min-h-[48px] lg:min-h-[52px] px-3 text-sm font-bold text-[#ff6584] hover:text-[#e84c6e] hover:-translate-y-px no-underline transition-all duration-200 w-full sm:w-auto"
            href="#how-it-works"
          >
            <span
              className="w-9 h-9 rounded-full grid place-items-center pl-0.5 text-[11px] text-[#ff6584] bg-[#fff0f5] group-hover:bg-[#ffdce8] transition-colors duration-200"
              aria-hidden="true"
            >
              ▶
            </span>
            Watch How It Works
          </a>
        </div>
      </div>

      {/* Right Column: Visual Art Section (Uses relative/absolute for floating elements) */}
      <div
        className="relative flex justify-center items-center w-full min-h-[320px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[520px] isolate mt-3 lg:mt-0"
        aria-label="Student learning illustration"
      >
        {/* Soft Background Radial Glow */}
        <div className="absolute w-[85%] aspect-square rounded-full z-0 bg-[radial-gradient(circle,#ffe6ee_0%,rgba(255,240,246,0.75)_47%,transparent_72%)] pointer-events-none"></div>

        {/* Floating Card: Today's Tasks Preview */}
        <div className="absolute top-[2%] lg:top-[8%] left-0 md:-left-[2%] lg:left-0 w-[75%] sm:w-[min(70%,300px)] md:w-[76%] lg:w-[min(65%,360px)] p-4 sm:p-[16px_18px] lg:p-[22px_24px_20px] bg-white/96 border border-[#ffdbe6] rounded-[20px] -rotate-1 shadow-[0_22px_55px_rgba(235,78,126,0.12)] backdrop-blur-md z-[2]">
          <div className="flex items-center gap-2.5 sm:gap-[11px] pb-3.5 border-b border-[#fff0f5] text-sm">
            <span className="text-xl text-[#ff6584]" aria-hidden="true">
              ▦
            </span>
            <strong className="font-bold text-[#14284d]">Today's Tasks</strong>
            <span className="ml-auto text-[11px] font-bold text-[#ff6584] bg-[#fff0f5] rounded-full px-2.5 sm:px-[11px] py-1 sm:py-1.5">
              1/4
            </span>
          </div>

          <div className="h-[5px] bg-[#fff0f5] rounded-full my-3.5 lg:my-[14px_0_10px] overflow-hidden">
            <span className="block w-1/4 h-full rounded-full bg-[linear-gradient(90deg,#ff9bb2,#ff4071)]"></span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-[11px] py-2 lg:py-2.5 text-[11px] lg:text-[13px] text-[#405474]">
            <span className="shrink-0 w-[18px] h-[18px] rounded-full grid place-items-center text-white bg-[#ff4071] border-2 border-[#ff4071] text-[11px] font-extrabold">
              ✓
            </span>
            <span>HTML Basics</span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-[11px] py-2 lg:py-2.5 text-[11px] lg:text-[13px] text-[#405474]">
            <span className="shrink-0 w-[18px] h-[18px] rounded-full border-2 border-[#ffd0df]"></span>
            <span>CSS Box Model</span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-[11px] py-2 lg:py-2.5 text-[11px] lg:text-[13px] text-[#405474]">
            <span className="shrink-0 w-[18px] h-[18px] rounded-full border-2 border-[#ffd0df]"></span>
            <span>JavaScript Loops</span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-[11px] py-2 lg:py-2.5 text-[11px] lg:text-[13px] text-[#405474]">
            <span className="shrink-0 w-[18px] h-[18px] rounded-full border-2 border-[#ffd0df]"></span>
            <span>React Introduction</span>
          </div>
        </div>

        {/* Floating Handwritten Inspiration Note */}
        <div className="absolute top-[45%] lg:top-[44%] left-0 md:-left-[2%] lg:-left-[7%] -rotate-9 text-[#b84a71] text-[11px] lg:text-[13px] italic leading-[1.45] z-[3] select-none">
          Small steps
          <br />
          <strong className="text-[#ff6584] font-bold">Big dreams</strong>
          <span className="block ml-8 sm:ml-[50px] text-xl lg:text-2xl not-italic font-normal" aria-hidden="true">
            ↗
          </span>
        </div>

        {/* Floating Book Stack */}
        <div
          className="absolute bottom-[8%] lg:bottom-[14%] left-[2%] md:left-[2%] lg:left-[9%] -rotate-2 grid gap-[3px] w-[85px] sm:w-[100px] lg:w-[125px] z-[3] select-none"
          aria-hidden="true"
        >
          <span className="text-white bg-[#ff6584] rounded-[4px_8px_8px_4px] px-2.5 py-1 sm:px-[11px] sm:py-[5px] text-[9px] sm:text-[10px] font-extrabold shadow-[0_3px_#ffccd9]">
            HTML
          </span>
          <span className="text-white bg-[#8655e9] rounded-[4px_8px_8px_4px] px-2.5 py-1 sm:px-[11px] sm:py-[5px] text-[9px] sm:text-[10px] font-extrabold shadow-[0_3px_#ffccd9]">
            CSS
          </span>
          <span className="text-white bg-[#851e47] rounded-[4px_8px_8px_4px] px-2.5 py-1 sm:px-[11px] sm:py-[5px] text-[9px] sm:text-[10px] font-extrabold shadow-[0_3px_#ffccd9]">
            JavaScript
          </span>
        </div>

        {/* Central Student Illustration */}
        <img
          className="absolute bottom-[2%] -right-[2%] md:-right-[12%] lg:-right-[4%] w-[95%] md:w-[110%] lg:w-[min(100%,600px)] max-h-[350px] lg:max-h-[480px] object-contain object-bottom-right z-[1]"
          alt="Illustration of a student working on a laptop"
          src={heroillustration}
        />

        {/* Subtle Decorative Art Caption */}
        <div className="absolute bottom-[-6px] lg:bottom-0 right-[2%] lg:right-[6%] flex items-center gap-2 text-xs text-[#7788a5] z-[4]">
          <span className="w-2 h-2 rounded-full bg-[#ff4071] shadow-[0_0_0_4px_#ffe4ed]"></span>
          Keep learning. Keep growing.
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
