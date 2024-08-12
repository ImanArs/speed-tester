import { create } from "zustand";

export const useTimerStore = create<{
  time: number;
  isRunning: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: (initialTime: number) => void;
  decrementTime: () => void;
}>((set, get) => ({
  time: 10,
  isRunning: false,
  startTimer: () => {
    set({ isRunning: true });
    const timer = setInterval(() => {
      const { time, decrementTime, stopTimer } = get();
      if (time > 0) {
        decrementTime();
      } else {
        clearInterval(timer);
        stopTimer();
        set({ isRunning: false });
      }
    }, 1000);
  },
  stopTimer: () => {
    set({ isRunning: false });
  },
  resetTimer: (initialTime: number) => {
    set({ time: initialTime, isRunning: false });
  },
  decrementTime: () => set((state) => ({ time: state.time - 1 })),
}))