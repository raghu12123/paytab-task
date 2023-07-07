import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: Item[];
  totalPrice: number;
}

interface Item {
  id: any; // variation id
  product_id: any; // variation id
  name: string;
  price: number;
  quantity: any;
  image: string;
}


const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState : getInitialState(),
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const existingItem = state.items.find(
        (item) => item.id == action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += existingItem.price;
      } else {
        state.totalPrice += action.payload.price;
        state.items.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify({ items : state.items , totalPrice : state.totalPrice}));
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id == action.payload);

      if (item) {
        state.totalPrice -= item.price;
      }

      state.items = state.items.filter((item) => item.id !== action.payload);

      localStorage.setItem("cartItems", JSON.stringify({ items : state.items , totalPrice : state.totalPrice}));
    },

    increaseQty: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id == action.payload);

      if (item) {
        item.quantity += 1;
        state.totalPrice += item.price;

        localStorage.setItem("cartItems", JSON.stringify({ items : state.items , totalPrice : state.totalPrice}));
      }
    },

    decreaseQty: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id == action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalPrice -= item.price;

        localStorage.setItem("cartItems", JSON.stringify({ items : state.items , totalPrice : state.totalPrice}));
      }
    },
    emptyTheCart : (state ) => {
      state.items = []
      state.totalPrice = 0
      localStorage.setItem("cartItems",JSON.stringify({ items : [] , totalPrice : 0}))

    }
  },
});


function getInitialState(): CartState {
   
    const storedState = typeof window !== 'undefined' && localStorage.getItem('cartItems');
    if (storedState) {
      const parsedState = JSON.parse(storedState);
    
      if (parsedState) {
        return {
          ...initialState,
          ...parsedState,
        };
      }
    }

    return initialState;
  }


export const { addItem, removeItem, increaseQty, decreaseQty,emptyTheCart } =
  cartSlice.actions;

export default cartSlice.reducer;
