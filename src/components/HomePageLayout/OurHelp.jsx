import boss from "./Icons/boss.svg";

export default function Help() {
  return (
    <>
      <main className="border-t bg-orange-100 border-stone-300 flex justify-center items-center">
        <section className="lg:px-12 p-5 flex justify-start items-center w-full">
          <div className="flex w-full gap-8 flex-col justify-start items-start">
            <div className="font-popins lg:w-6/12 flex flex-col gap-2 sm:w-full">
              <h2 className="font-semibold text-red-500">
                HOW CAN WE HELP YOU?
              </h2>
              <h3 className="lg:text-4xl font-semibold text-black sm:text-xl">
                We can help in any way in the field of IT service and technology
              </h3>
            </div>
            <div className="flex justify-around gap-10 items-center lg:flex-row sm:flex-col">
              <div className="flex gap-3 lg:w-6/12 flex-col bg-blue-900 text-white p-7 rounded-md sm:w-full">
                <p className="break-words justify-start items-center font-roboto">
                  By choosing our services, you are making a decision to partner
                  with a team of seasoned and proficient developers specializing
                  in a wide range of cutting-edge technologies. Our developers
                  possess expertise in prominent frameworks such as React,
                  Angular, SAPUI5/Fiori, Vue.js, NativeScript, OutSystems, and
                  more, ensuring that your projects are built with the latest
                  advancements in mind.
                </p>
                <p className="break-words justify-start items-center font-roboto">
                  At our core, we embrace a customer-centric approach,
                  prioritizing a deep understanding of your specific needs and
                  objectives. Our collaborative process allows us to tailor
                  solutions that precisely align with your business goals,
                  resulting in high-quality, reliable, and cost-effective
                  outcomes.
                </p>
                <p className="break-words justify-start items-center font-roboto">
                  Beyond project delivery, we prioritize long-term partnerships,
                  offering continuous maintenance and support to ensure your
                  technology remains at its peak performance. Our proven track
                  record of successful projects, delivered on-time and within
                  budget, speaks to our commitment to excellence.
                </p>
                <p className="break-words justify-start items-center font-roboto">
                  With effective communication at the heart of our process, we
                  keep you informed and engaged throughout the journey,
                  fostering a transparent and trust-based relationship. Partner
                  with us, and let our experienced team propel your business to
                  new heights through innovative and custom-tailored solutions.
                </p>
              </div>
              <div className="lg:w-6/12 sm:w-full">
                <img src={boss} alt="not found" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
