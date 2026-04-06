import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext(undefined);
const storageKey = 'shelke-organic-farm-cart';

function getInitialCart() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    // Clear the old persisted cart so each new browser tab starts fresh.
    window.localStorage.removeItem(storageKey);

    const savedCart = window.sessionStorage.getItem(storageKey);

    if (!savedCart) {
      return [];
    }

    const parsedCart = JSON.parse(savedCart);
    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(getInitialCart);

  useEffect(() => {
    window.sessionStorage.setItem(storageKey, JSON.stringify(cartItems));
  }, [cartItems]);

  const removeItem = (itemId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity,
            }
          : item,
      ),
    );
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }

      return [
        ...currentItems,
        {
          id: product.id,
          image: product.image,
          name: product.name,
          price: product.price,
          quantity,
          unit: product.unit,
        },
      ];
    });
  };

  const cartCount = cartItems.reduce((totalCount, item) => totalCount + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0,
  );

  const value = {
    addToCart,
    cartCount,
    cartItems,
    cartTotal,
    removeItem,
    updateQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider.');
  }

  return context;
}
