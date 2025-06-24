

const Team = () => {
  return (
    <div className="m-h-screen bg-[#ecf9f7] p-10">
      <div className="flex flex-col flex-wrap md:m-10">
        <h1 className="how-it-works text-[2.5rem] text-center text-[#277] pb-10">
          How does it work?
        </h1>
        <div className="flex justify-between md:items-center flex-col md:flex-row w-full">
          <div className="flex md:flex-col items-center md:w-72 w-full gap-12">
            <div className="icon">
              <img src="/png/check.png" alt="" className="w-[60%]" />
            </div>
            <div className="flex flex-col md:items-center mt-5">
              <h2 className="text-[#277] font-bold md:text-xl lg:text-2xl">
                Online consultation
              </h2>
              <p className="md:text-center text-sm md:text-[14px] lg:text-[16px]">
                Complete a short questionnaire to check your eligibility for
                treatment
              </p>
            </div>
          </div>
          <div className="flex md:flex-col items-center md:w-72 w-full gap-5">
            <div className="icon">
              <img src="/png/check2.png" alt="" className="w-[60%]" />
            </div>
            <div className="flex flex-col md:items-center mt-5">
              <h2 className="text-[#277] font-bold md:text-xl lg:text-2xl">
                Choose a treatment
              </h2>
              <p className="md:text-center text-sm md:text-[14px] lg:text-[16px]">
                Select the treatment or medication you need from leading brands
              </p>
            </div>
          </div>
          <div className="flex md:flex-col items-center md:w-72 w-full gap-5">
            <div className="icon">
              <img src="/png/truck.png" alt="" className="w-[60%]" />
            </div>
            <div className="flex flex-col md:items-center mt-5">
              <h2 className="text-[#277] font-bold md:text-xl lg:text-2xl">
                Express delivery
              </h2>
              <p className="md:text-center text-sm md:text-[14px] lg:text-[16px]">
                Medication is dispensed and delivered to your home or work
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* main team section */}
      <div className="team-block bg-white rounded-md my-10 mx-auto p-7 shadow-md flex flex-col place-items-center">
        <h2 className="text-center text-[#277] font-bold text-2xl">
          A fully qualified team
        </h2>
        <p className="text-center">
          Both our pharmacy and pharmacists are based in Nigeria and are
          registered with the General Pharmaceutical Council.
        </p>
        <div className="pharms flex flex-wrap mx-auto my-5 justify-center gap-4">
          <div className="flex flex-col w-64 h-72 bg-[#ecf9f7] rounded-lg relative items-center shadow hover:animate-pulse transition-all duration-700">
            <span className="text-sm bg-[#277] text-white w-44 h-6 flex absolute top-0 right-0 justify-center rounded-tr-md rounded-bl-md">
              PCN Number: 97555454
            </span>
            <div className="w-36 h-36 rounded-full bg-[#277] absolute top-10">
              <img
                src="/png/hero.png"
                alt=""
                className="w-36 h-36 rounded-full"
              />
            </div>
            <div className=" w- full p-4 rounded-full absolute bottom-0 flex flex-col items-center">
              <h2 className="font-bold text-[#277]">
                Blessed Akhigbe (PharmD)
              </h2>
              <p className="font-[500]">Superintendent Pharmacist</p>
              <p className="text-[12px]">Doctor of Pharmacy</p>
              <p className="text-[12px]">University of Benin</p>
            </div>
          </div>
          <div className="flex flex-col w-64 h-72 bg-[#ecf9f7] rounded-lg relative items-center shadow hover:animate-pulse transition-all duration-700">
            <span className="text-sm bg-[#277] text-white w-44 h-6 flex absolute top-0 right-0 justify-center rounded-tr-md rounded-bl-md">
              PCN Number: 97555454
            </span>
            <div className="w-36 h-36 rounded-full bg-[#277] absolute top-10">
              <img
                src="/png/hero.png"
                alt=""
                className="w-36 h-36 rounded-full"
              />
            </div>
            <div className=" w- full p-4 rounded-full absolute bottom-0 flex flex-col items-center">
              <h2 className="font-bold text-[#277]">
                Blessed Akhigbe (PharmD)
              </h2>
              <p className="font-[500]">Superintendent Pharmacist</p>
              <p className="text-[12px]">Doctor of Pharmacy</p>
              <p className="text-[12px]">University of Benin</p>
            </div>
          </div>
          <div className="flex flex-col w-64 h-72 bg-[#ecf9f7] rounded-lg relative items-center shadow hover:animate-pulse transition-all duration-700">
            <span className="text-sm bg-[#277] text-white w-44 h-6 flex absolute top-0 right-0 justify-center rounded-tr-md rounded-bl-md">
              PCN Number: 97555454
            </span>
            <div className="w-36 h-36 rounded-full bg-[#277] absolute top-10">
              <img
                src="/png/hero.png"
                alt=""
                className="w-36 h-36 rounded-full"
              />
            </div>
            <div className=" w- full p-4 rounded-full absolute bottom-0 flex flex-col items-center">
              <h2 className="font-bold text-[#277]">
                Blessed Akhigbe (PharmD)
              </h2>
              <p className="font-[500]">Superintendent Pharmacist</p>
              <p className="text-[12px]">Doctor of Pharmacy</p>
              <p className="text-[12px]">University of Benin</p>
            </div>
          </div>

          <span className="m-5 flex justify-center w-full text-[#277] hover:underline cursor-pointer">
            Read More
          </span>
        </div>
      </div>
    </div>
  );
};

export default Team;
