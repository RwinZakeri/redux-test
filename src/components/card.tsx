// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck ttt
import { BiPlus } from "react-icons/bi";
import { FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCard, removeCard } from "../store/card-slice";
const Card = () => {
  const data = useSelector((state) => state.card.items);
  const dispatch = useDispatch();

  return (
    <div className="w-4/5 lg:w-3/5 h-4/5 overflow-y-scroll bg-gray-800 rounded-2xl p-4 fixed z-50 left-1/2 top-14 -translate-x-1/2">
      {!data.length ? (
        <p>no items ... </p>
      ) : (
        <div className="flex flex-col gap-1">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 h-24 rounded-xl p-2 flex items-center justify-between"
            >
              <div className="flex gap-2">
                <p>{item.title}</p>
                <p>({item.quantity})</p>
              </div>
              <div className="space-x-2">
                <button onClick={() => dispatch(addToCard(item))}>
                  <BiPlus />
                </button>
                <button onClick={() => dispatch(removeCard(item.id))}>
                  <FaMinus />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
