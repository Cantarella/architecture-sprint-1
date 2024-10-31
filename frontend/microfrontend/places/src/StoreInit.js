import store from "./store/store";
import {save} from "./store/user";

export function storeInit() {
  return ['User', store, {save}]
}