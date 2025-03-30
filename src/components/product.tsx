// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck 
import { IoMdAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCard } from "../store/card-slice";
type propsList = {
  id: string;
  title: string;
  image: string;
  price: number;
};

const Card = ({ id, image, title, price }: propsList) => {
  const dispatch = useDispatch();

  const handelAddToCard = () => {
    dispatch(
      addToCard({
        id,
        title,
        price,
      })
    );
  };

  return (
    <div className="bg-white rounded-[18px] relative">
      <div className="h-40 w-[300px]">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>
      <div className="p-8 flex flex-col gap-4">
        <p className="text-black text-2xl font-semibold">{title}</p>
        <p className="text-[#242424]">Identifier number</p>
      </div>
      <div className="p-8 pt-6">
        <span className="text-[#941B0C] text-3xl font-bold">${price}</span>
      </div>

      <div
        onClick={handelAddToCard}
        className="cursor-pointer size-20 absolute z-10 right-0 bottom-0 bg-[#242424] rounded-tl-2xl  flex items-center justify-center"
      >
        <IoMdAdd className=" text-5xl right-0" />
      </div>
    </div>
  );
};

export default Card;
