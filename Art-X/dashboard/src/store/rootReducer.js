import authReducer from "./Reducers/authReducer";
import categoryReducer from "./Reducers/categoryReducer";
import paintingReducer from "./Reducers/paintingReducer";

const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
  painting: paintingReducer,
};

export default rootReducer;
