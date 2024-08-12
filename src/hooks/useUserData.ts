import { create } from "zustand";

type GameStats = 'words' | 'letters'

interface UserStore {
  userName: string
  userStatsWords: number[]
  userStatsLetters: number[]
  userTotalGames: number
  getUserStorage: () => void
  setUserStorage: () => void
  updateUserStats: (type: GameStats,newStats: number) => void
  updateUserTotalGames: () => void
}

export const useUserData = create<UserStore>((set, get) => ({
  userName: 'John Doe',
  userStatsWords: [],
  userStatsLetters: [],
  userTotalGames: 0,
  getUserStorage: () => {
    const storage = localStorage.getItem('userData')
    if (storage) {
      const { userName, userStatsWords, userStatsLetters, userTotalGames } = JSON.parse(storage)
      set({ userName, userStatsWords, userStatsLetters, userTotalGames })
    }
  },
  setUserStorage: () => {
    const { userName, userStatsWords, userStatsLetters, userTotalGames } = get()
    localStorage.setItem('userData', JSON.stringify({ userName, userStatsWords, userStatsLetters, userTotalGames }))
  },
  updateUserStats: (type, newStats) => {
    const { userStatsWords, userStatsLetters } = get()
    if (type === 'words') {
      set({ userStatsWords: [...userStatsWords, newStats] })
    } else {
      set({ userStatsLetters: [...userStatsLetters, newStats] })
    }
  },
  updateUserTotalGames: () => set((state) => ({ userTotalGames: state.userTotalGames + 1 }))
}))