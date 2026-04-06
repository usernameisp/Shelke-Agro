import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';

function ModalShell({ isOpen, onClose, label, className = '', children }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div className="modal-overlay" role="presentation">
      <button className="modal-backdrop" type="button" aria-label="Close modal" onClick={onClose} />
      <div className={`modal-window ${className}`.trim()} role="dialog" aria-label={label} aria-modal="true">
        <button className="modal-close" type="button" aria-label="Close modal" onClick={onClose}>
          <FiX />
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default ModalShell;
