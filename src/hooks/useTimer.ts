import { create } from "zustand";

export const useTimer = create<{
  time: number;
  isRunning: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  decrementTime: () => void;
}>((set, get) => ({
  time: 60,
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
  resetTimer: () => {
    set({ time: 60, isRunning: false });
  },
  decrementTime: () => set((state) => ({ time: state.time - 1 })),
}))
