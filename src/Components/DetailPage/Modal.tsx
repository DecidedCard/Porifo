"use client";

const Modal = ({ isVisible, onClose, children }: any) => {
    if (!isVisible) return null;
    const handleClose = (e: any) => {
        if (e.target.id === "wrapper") onClose();
    };

    return (
        <div
            className="fixed inset-0 z-20 bg-realblack bg-opacity-25 backdrop-blur-xl flex items-center justify-center"
            id="wrapper"
            onClick={handleClose}
        >
            <div className="flex">
                <button className="text-white text-xl place-self-start mr-3 mt-2" onClick={onClose}>
                    X
                </button>
                <div className="p-2">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
