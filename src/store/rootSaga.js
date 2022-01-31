import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";
import { watchRequest } from "../api/watchRequest";

function* rootSaga() {
  yield all([watchRequest()]);
  // yield all([pokemonPageWatcher()]);
}
export default rootSaga;
