import { useState } from "react";

export function useBoardModal() {
  const [isBoardDetailOpen, setIsBoardDetailOpen] = useState<boolean>(false);
  const [isBoardCreateOpen, setIsBoardCreateOpen] = useState<boolean>(false);
  const [isBoardDetailEditMode, setIsBoardDetailEditMode] =
    useState<boolean>(false);

  function openBoardDetailModal() {
    setIsBoardDetailOpen(true);
  }

  function closeBoardDetailModal() {
    setIsBoardDetailOpen(false);
    setIsBoardDetailEditMode(false);
  }

  function openBoardCreateModal() {
    setIsBoardCreateOpen(true);
  }

  function closeBoardCreateModal() {
    setIsBoardCreateOpen(false);
  }

  return [
    isBoardDetailOpen,
    isBoardCreateOpen,
    isBoardDetailEditMode,
    openBoardDetailModal,
    closeBoardDetailModal,
    openBoardCreateModal,
    closeBoardCreateModal,
    setIsBoardDetailEditMode
  ] as const;
}
