import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { loginReducer } from '../components/Modal/SignIn/module/reducer/reducer';
import volcanoReducer from '../components/VolcanoTable/module/reducer/volcanoReducer';
import detailReducer from '../components/DetailVolcano/module/reducer/detailReducer';
import populationReducer from '../components/Chart/module/reducer/chartReducer';
import registerReducer from '../components/RegisterationForm/module/reducer/registerReducers';

const rootReducer = combineReducers({
  auth: loginReducer,
  volcanoData: volcanoReducer,
  volcanoDetail: detailReducer,
  populationData: populationReducer,
  register: registerReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
