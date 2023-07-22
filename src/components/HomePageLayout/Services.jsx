import Card from "./Cards";
const OurServices = () => {
  return (
    <>
      {/* Main Container */}
      <main className="bg-orange-100 border-t border-stone-300">
        {/* sub Container */}
        <section className="flex justify-center flex-wrap flex-col items-center">
          <div className="flex justify-center flex-col items-center">
            <h5 className="font-popins mt-6 font-medium text-cyan-800">
              WE PROVIDE SERVICES
            </h5>
            <div className="font-popins font-semibold flex justify-center items-center flex-col mt-5 text-4xl">
              <h2>The kind of services that our company</h2>
              <h2>provides to our clients</h2>
            </div>
          </div>
          <section className="my-8 flex flex-wrap flex-row gap-8  justify-center">
              <Card/>
          </section>
        </section>
      </main>
    </>
  );
};
export default OurServices;
