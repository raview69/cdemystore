import { createStore, combineReducers } from "redux";
import { cartReducer } from "../features/cart/cartSlice.js";
import { inventoryReducer } from "../features/inventory/inventorySlice.js";
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice.js";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice.js";

export const store = createStore(
	combineReducers({
		cart: cartReducer,
		inventory: inventoryReducer,
		currencyFilter: currencyFilterReducer,
		searchTerm: searchTermReducer,
	})
);
