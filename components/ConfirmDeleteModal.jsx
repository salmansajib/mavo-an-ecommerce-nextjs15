import React, { useEffect, useRef } from "react";

function ConfirmDeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
}) {
  const dialogRef = useRef(null);
  const confirmButtonRef = useRef(null);

  // Focus management when modal opens
  useEffect(() => {
    if (isOpen && confirmButtonRef.current) {
      confirmButtonRef.current.focus();
    }
  }, [isOpen]);

  // Handle keyboard navigation and ESC key
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-3"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onKeyDown={handleKeyDown}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
        ref={dialogRef}
      >
        <h3
          id="modal-title"
          className="text-lg font-semibold font-josefin-sans mb-4"
        >
          {title}
        </h3>
        <p id="modal-description" className="font-josefin-sans mb-6">
          {message}
        </p>
        <div className="flex items-center justify-end gap-2 font-josefin-sans">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            aria-label={cancelText}
          >
            {cancelText}
          </button>
          <button
            ref={confirmButtonRef}
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            aria-label={confirmText}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
