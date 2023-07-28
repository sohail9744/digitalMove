export default function Banner({ text }) {
  return (
    <>
      <main>
        <section className="py-16 flex items-center justify-center  bg-gradient-to-r from-indigo-900 via-purple-600 to-cyan-400 w-full">
          <h2 className="text-5xl font-popins font-semibold opacity-50">
            {text}
          </h2>
        </section>
      </main>
    </>
  );
}
