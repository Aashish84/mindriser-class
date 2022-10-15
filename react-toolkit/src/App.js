import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateAmtTotal, getCartItems } from "./features/cart/cartSlice";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(updateAmtTotal());
    // eslint-disable-next-line
  }, [cartItems]);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
