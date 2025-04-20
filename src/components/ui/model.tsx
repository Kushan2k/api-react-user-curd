import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed h-screen inset-0 bg-gray-200 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-3 rounded-md shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold capitalize">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 "
          >
            <X color="black" size={30} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
