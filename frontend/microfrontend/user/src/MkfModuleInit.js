import Auth from "./Auth";
import { storeInit } from "./StoreInit";
export default function useModuleInit() {
  return {
    id: 'User',
    root: Auth,
    storeInit
  }
}