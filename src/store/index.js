import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;
