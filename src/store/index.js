import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(rootSaga);

export default store;
