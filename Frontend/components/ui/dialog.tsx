import React, { ReactNode } from 'react';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}

export const Dialog = ({ open, onOpenChange, children }: DialogProps) => {
  if (!open) return null;

  return (
    <div className="dialog-backdrop" onClick={() => onOpenChange(false)}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export const DialogContent = ({ children }: { children: ReactNode }) => (
  <div className="dialog-content-inner">{children}</div>
);

export const DialogHeader = ({ children }: { children: ReactNode }) => (
  <div className="dialog-header">{children}</div>
);

export const DialogTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="dialog-title">{children}</h2>
);

export const DialogFooter = ({ children }: { children: ReactNode }) => (
  <div className="dialog-footer">{children}</div>
);
