import { createStore, applyMiddleware, compose } from 'redux';

export const configureStore = (preloadedState) => {
  const middlewares = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);
}