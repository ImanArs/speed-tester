import { create } from "zustand";

export const useModal = create<{
  isModalOpen: boolean;
  toggleModal: () => void;
  openModal: () => void;
  closeModal: () => void;
}>((set) => ({
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}))