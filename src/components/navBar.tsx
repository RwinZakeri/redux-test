// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState } from "react";
import { useSelector } from "react-redux";
import CardList from "./card-list";

const NavBar = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  // Match the Redux store key (state.card, not state.cart)
  const cartItems = useSelector((state) => state.card?.items || []);

  // Calculate total quantity in cart
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handlerOpenCard = () => {
    setCartIsOpen(true);
  };
  const handlerCloseCard = () => {
    setCartIsOpen(false);
  };

  return (
    <>
      {cartIsOpen && <CardList onClose={handlerCloseCard} />}

      <div>
        <button onClick={handlerOpenCard}>shop ({totalItems})</button>
      </div>
    </>
  );
};

export default NavBar;
