import Auth from "./Auth";
import { storeInit } from "./StoreInit";
export default function useModuleInit() {
  return {
    root: Auth,
    storeInit
  }
}