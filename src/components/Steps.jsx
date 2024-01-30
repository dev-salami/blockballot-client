import React from "react";

function Steps() {
  return (
    <section className="bg-gray-900 rounded-3xl md:rounded-[60px] my-16 py-8">
      <div className="flex flex-col md:flex-row items-center my-12">
        <div className="md:w-1/2 font-semibold text-3xl mb-6 px-4 md:mb-0 text-center ">
          <p className="max-w-md mx-auto"> HOW DOES DECI-POLL WORK ?</p>
        </div>
        <div className="md:w-1/2 px-4 flex gap-4 flex-col">
          <div className="border border-white max-w-md rounded-2xl p-4">
            <h3>Step 1</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus ipsam aspernatur praesentium quis nesciunt eius, magni
              vero numquam facilis culpa? Quasi labore sit unde deserunt!
            </p>
          </div>
          <div className="border border-white max-w-md rounded-2xl p-4">
            <h3>Step 2</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus ipsam aspernatur praesentium quis nesciunt eius, magni
              vero numquam facilis culpa? Quasi labore sit unde deserunt!
            </p>
          </div>
          <div className="border border-white max-w-md rounded-2xl p-4">
            <h3>Step 3</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus ipsam aspernatur praesentium quis nesciunt eius, magni
              vero numquam facilis culpa? Quasi labore sit unde deserunt!
            </p>
          </div>
          <div className="border border-white max-w-md rounded-2xl p-4">
            <h3>Step 4</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus ipsam aspernatur praesentium quis nesciunt eius, magni
              vero numquam facilis culpa? Quasi labore sit unde deserunt!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
