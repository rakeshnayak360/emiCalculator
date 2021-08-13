import './App.css';
import EmiForm from './components/EmiForm';
import { Provider } from "react-redux";

import inputReducer from "./store/reducer/inputReducer";
import resultReducer from "./store/reducer/resultReducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  input: inputReducer,
  result: resultReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


function App() {
  return (
    <Provider store={store}>
      <div>
        <EmiForm />
      </div>
    </Provider>
  );
}

export default App;
