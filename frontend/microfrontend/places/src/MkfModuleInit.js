import Places from "./Places";
import { storeInit } from "./StoreInit";
export default function useModuleInit() {
  return {
    id: 'Places',
    root: Places,
    storeInit
  }
}