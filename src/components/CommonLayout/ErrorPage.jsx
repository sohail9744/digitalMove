import MissingPage from "../../Images/Error404Page.svg";
export default function ErrorPage() {
  return (
    <>
      <main className="flex justify-center flex-col gap-6 items-center h-screen">
        <img width="20%" src={MissingPage} alt="not found" />
        <div className="font-popins text-xl font-semibold">
          <h1>Sorry we couldn't found this page</h1>
        </div>
      </main>
    </>
  );
}
