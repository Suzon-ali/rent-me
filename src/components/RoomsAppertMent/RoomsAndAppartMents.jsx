import AppartMents from "./AppartMents";

const RoomsAndAppartMents = () => {
  return (
    <div>
      <div className="py-10">
        <h2 className="text-5xl text-center font-bold py-4">
          Rooms & Apartments
        </h2>
        <hr className="w-20 mx-auto border border-success" />
        <p className="font-semibold text-center py-4">
          FIND YOUR ROOMS, FOR YOUR ABAILITY
        </p>
      </div>

      <AppartMents />
    </div>
  );
};

export default RoomsAndAppartMents;
