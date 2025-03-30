import Card from "./card";

type CartProps = {
  onClose: () => void;
};

const CardList = ({ onClose }: CartProps) => {
  return (
    <>
      <div
        className="w-full h-full bg-black z-50 opacity-75 fixed"
        onClick={onClose}
      />
      <Card />
    </>
  );
};

export default CardList;
