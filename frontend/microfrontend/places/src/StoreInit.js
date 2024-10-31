import store from "./store/store";
import {save} from "./store/places";

export function storeInit() {
  return ['Places', store, {save}]
}