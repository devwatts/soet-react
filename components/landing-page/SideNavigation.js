export default function SideNavigation(props) {
  return (
    <div className="lg:w-[30%] md:w-[90%] flex flex-wrap justify-between m-[20px] sm:ml-[auto] sm:mr-[auto] lg:ml-[20px] lg:mr-[20px] items-center h-[400px]">
      <div className="flex mt-[10px] w-[100%] justify-between">
        <div className="flex  w-[45%] before:bg-[#ed3237] ">
          <button
            onClick={() => props.changeOption("HOME")}
            className={`${
              props.currentOption === "HOME"
                ? "bg-[#ed3237] border-[#ed3237]"
                : "bg-[#006cb5] border-[#ed3237]"
            } text-sm border-[3px] text-white py-1 px-2 rounded w-[100%] h-[50px] hover:scale-105 hover:bg-[#ed3237]`}
          >
            Home
          </button>
        </div>
        <div className="flex  w-[45%] before:bg-[#ed3237] ">
          <button
            onClick={() => props.changeOption("SOET VISION & MISSION")}
            className={`${
              props.currentOption === "SOET VISION & MISSION"
                ? "bg-[#ed3237] border-[#ed3237]"
                : "bg-[#006cb5] border-[#ed3237]"
            } text-sm border-[3px] text-white py-1 px-2 rounded w-[100%] h-[50px] hover:scale-105 hover:bg-[#ed3237]`}
          >
            SOET Vision & Mission
          </button>
        </div>
      </div>
      <div className="flex mt-[10px] w-[100%] justify-between">
        <div className="flex  w-[45%] before:bg-[#ed3237] ">
          <button
            onClick={() => props.changeOption("DEPARTMENTAL PEO'S & PSO's")}
            className={`${
              props.currentOption === "DEPARTMENTAL PEO'S & PSO's"
                ? "bg-[#ed3237] border-[#ed3237]"
                : "bg-[#006cb5] border-[#ed3237]"
            } text-sm border-[3px] text-white py-1 px-2 rounded w-[100%] h-[50px] hover:scale-105 hover:bg-[#ed3237]`}
          >
            Departmental PEOs & PSOs
          </button>
        </div>
        <div className="flex  w-[45%] before:bg-[#ed3237] ">
          <button
            onClick={() => props.changeOption("FACULTY")}
            className={`${
              props.currentOption === "FACULTY"
                ? "bg-[#ed3237] border-[#ed3237]"
                : "bg-[#006cb5] border-[#ed3237]"
            } text-sm border-[3px] text-white py-1 px-2 rounded w-[100%] h-[50px] hover:scale-105 hover:bg-[#ed3237]`}
          >
            Faculty
          </button>
        </div>
      </div>
      <div className="flex mt-[10px] w-[100%] justify-between">
        <div className="flex  w-[45%] before:bg-[#ed3237] ">
          <button
            onClick={() => props.changeOption("DEPARTMENT HIGHLIGHTS")}
            className={`${
              props.currentOption === "DEPARTMENT HIGHLIGHTS"
                ? "bg-[#ed3237] border-[#ed3237]"
                : "bg-[#006cb5] border-[#ed3237]"
            } text-sm border-[3px] text-white py-1 px-2 rounded w-[100%] h-[50px] hover:scale-105 hover:bg-[#ed3237]`}
          >
            Department Highlights
          </button>
        </div>
        <div className="flex  w-[45%] before:bg-[#ed3237] ">
          <button
            onClick={() => props.changeOption("RESEARCH & DEVELOPMENT")}
            className={`${
              props.currentOption === "RESEARCH & DEVELOPMENT"
                ? "bg-[#ed3237] border-[#ed3237]"
                : "bg-[#006cb5] border-[#ed3237]"
            } text-sm border-[3px] text-white py-1 px-2 rounded w-[100%] h-[50px] hover:scale-105 hover:bg-[#ed3237]`}
          >
            Research & Development
          </button>
        </div>
      </div>
      <div className="flex mt-[10px] w-[100%] justify-between">
        <div className="flex  w-[45%] before:bg-[#ed3237] ">
          <button
            onClick={() => props.changeOption("RESOURCES")}
            className={`${
              props.currentOption === "RESOURCES"
                ? "bg-[#ed3237] border-[#ed3237]"
                : "bg-[#006cb5] border-[#ed3237]"
            } text-sm border-[3px] text-white py-1 px-2 rounded w-[100%] h-[50px] hover:scale-105 hover:bg-[#ed3237]`}
          >
            Resources
          </button>
        </div>
        <div className="flex  w-[45%] before:bg-[#ed3237] ">
          <button
            onClick={() => props.changeOption("PLACEMENT RECORDS")}
            className={`${
              props.currentOption === "PLACEMENT RECORDS"
                ? "bg-[#ed3237] border-[#ed3237]"
                : "bg-[#006cb5] border-[#ed3237]"
            } text-sm border-[3px] text-white py-1 px-2 rounded w-[100%] h-[50px] hover:scale-105 hover:bg-[#ed3237]`}
          >
            Placement Records
          </button>
        </div>
      </div>
      <div className="flex mt-[10px] w-[100%] justify-between">
        <div className="flex  w-[45%] before:bg-[#ed3237] ">
          <button
            onClick={() => props.changeOption("ALUMNI")}
            className={`${
              props.currentOption === "ALUMNI"
                ? "bg-[#ed3237] border-[#ed3237]"
                : "bg-[#006cb5] border-[#ed3237]"
            } text-sm border-[3px] text-white py-1 px-2 rounded w-[100%] h-[50px] hover:scale-105 hover:bg-[#ed3237]`}
          >
            Our Alumni
          </button>
        </div>
        <div className="flex  w-[45%] before:bg-[#ed3237] ">
          <button
            onClick={() => props.changeOption("MAGAZINE")}
            className={`${
              props.currentOption === "MAGAZINE"
                ? "bg-[#ed3237] border-[#ed3237]"
                : "bg-[#006cb5] border-[#ed3237]"
            } text-sm border-[3px] text-white py-1 px-2 rounded w-[100%] h-[50px] hover:scale-105 hover:bg-[#ed3237]`}
          >
            SOET Magazine
          </button>
        </div>
      </div>
    </div>
  );
}
