import { create } from "zustand";

type GameStats = 'words' | 'letters'

interface UserStore {
  user: {
    name: string
    stats: {
      words: number
      lastTimeWords: number
      letters: number
      lastTimeLetters: number
    }
    totalGames: number
  }
  getUserStorage: () => void
  setUserStorage: () => void
  updateUserBestStats: (type: GameStats, newStats: number) => void
  updateUserLastStats: (type: GameStats, newStats: number) => void
  updateUserTotalGames: () => void
}

export const useUserData = create<UserStore>((set, get) => ({
  user: {
    name: 'Ученик',
    stats: {
      words: 0,
      lastTimeWords: 0,
      letters: 0,
      lastTimeLetters: 0,
    },
    totalGames: 0
  },
  getUserStorage: () => {
    const storage = JSON.parse(localStorage.getItem('user') || 'null')
    set({ user: storage })
  },
  setUserStorage: () => {
    const { user } = get()
    localStorage.setItem('userData', JSON.stringify(user))
  },
  updateUserBestStats: (type, newStats) => {
      if (type === 'words') {
        localStorage.setItem('user', JSON.stringify({ ...get().user, stats: { ...get().user.stats, words: newStats } }))
      }
      if (type === 'letters') {
        localStorage.setItem('user', JSON.stringify({ ...get().user, stats: { ...get().user.stats, letters: newStats } }))
      }
    },
  updateUserLastStats: (type: GameStats, newStats: number) => {
    if (type === 'words') {
      localStorage.setItem('user', JSON.stringify({ ...get().user, stats: { ...get().user.stats, lastTimeWords: newStats } }))
    } 
    if (type === 'letters') {
      localStorage.setItem('user', JSON.stringify({ ...get().user, stats: { ...get().user.stats, lastTimeLetters: newStats } }))
    }
  },
  updateUserTotalGames: () => {
    set((state) => ({ user: { ...state.user, totalGames: state.user.totalGames + 1 } }))
  }
}))