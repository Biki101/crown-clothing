import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartHidden: true,
  setCartHidden: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartHidden, setCartHidden] = useState(true);
  const value = { cartHidden, setCartHidden };

  //   useEffect(() => {
  //     setCartHidden("true");
  //   }, []);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
