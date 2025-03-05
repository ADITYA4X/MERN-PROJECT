import authReducer from "./Reducers/authReducer";
import categoryReducer from "./Reducers/categoryReducer";
import paintingReducer from "./Reducers/paintingReducer";
import sellerReducer from "./Reducers/sellerReducer";

const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
  painting: paintingReducer,
  seller: sellerReducer,
};

export default rootReducer;
