const Card = ({ data }) => {
  return (
    <>
      {data.map((items, index) => (
        <div
          key={index}
          className="p-6 bg-customColor w-1/4 rounded hover:scale-105 translate-transform duration-300 ease-in-out"
        >
          <div className="flex justify-center items-center flex-col">
            <div className="w-32 h-24">
              <img src={items.icon} alt="not found" />
            </div>
            <h3 className="font-popins font-semibold m-4 text-xl">
              {items.title}
            </h3>
            <p className="break-words font-quickSand font-medium w-full">
              {items.des}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
