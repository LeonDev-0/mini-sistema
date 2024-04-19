import { create } from "zustand";
export const useStoreProducts = create((set)=>({
    contador:20,
    title:'Mi empresa',
    increment:(value)=> set((state)=>({
        contador:state.contador+value

    })),
}))