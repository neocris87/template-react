import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


type CountState = {
    count: number
    increment: () => void
    decrement: () => void
}

export const useCount = create(
    persist<CountState>(
        (set) => ({
            count: 0,
            increment: () => set((state) => ({ count: state.count + 1 })),
            decrement: () => set((state) => ({ count: state.count - 1 })),
        }),
        { name: "count", storage: createJSONStorage(() => localStorage) }
    )
)