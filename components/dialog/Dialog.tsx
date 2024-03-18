import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { Dialog } from "@headlessui/react";
import { Modal } from "./Modal";

interface IDialogProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const DialogComponent = ({ isOpen, setIsOpen }: IDialogProps) => {
  return (
    <AnimatePresence>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        as="section"
        className="fixed inset-0 z-10 flex items-center justify-center overflow-y-hidden"
      >
        <div className="flex flex-col items-center justify-center px-2 py-8 text-center">
          <Dialog.Overlay />
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-primary/50 opacity-90"></div>
          </div>
          <Modal setIsOpen={setIsOpen} />
        </div>
      </Dialog>
    </AnimatePresence>
  );
};
