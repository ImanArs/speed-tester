import React from "react";

export const useModal = () => {
  const [isModalOpen, setIsOpen] = React.useState(false)

  const openModal = React.useCallback(() => setIsOpen(true), [])
  const closeModal = React.useCallback(() => setIsOpen(false), [])

  return {
    isModalOpen,
    openModal,
    closeModal,
  }
}
