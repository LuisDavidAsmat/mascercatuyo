
const ConfirmationModal: React.FC<
{
    show: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    onClickXSvg?: () => void;
    title: string;
    message: string;
    acceptText: string;
    declineText: string;
}> = ({ show, onConfirm, onCancel, title, message,  acceptText, declineText, onClickXSvg }) => (
    <dialog className={`modal ${show ? "modal-open" : ""} dark:bg-white`}>
        <div className="modal-box max-w-xs bg-white text-black dark:bg-white">
            <svg
                className="float-right h-7 w-7 stroke-black bg-transparent cursor-pointer fill-none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={onClickXSvg}
            >
                <circle cx="12" cy="12" r="10" />
                <path d="m14.5 9.5-5 5m0-5 5 5" strokeLinecap="round" />
            </svg>
            <h3 className="mt-8 font-bold text-lg">{title}</h3>
            <p className="py-4">{message}</p>
            <div className="modal-action flex justify-center">
                <button className="btn bg-buttons hover:bg-btn-hover active:bg-orange-400 rounded-lg border border-emerald-950 text-gray-700" onClick={onConfirm}>
                    {acceptText}                
                </button>
                <button className="btn bg-stone-300 hover:bg-stone-400 rounded-lg border border-emerald-950 text-gray-700" onClick={onCancel}>
                    {declineText}              
                </button>
            </div>
        </div>
    </dialog>
)

export default ConfirmationModal;