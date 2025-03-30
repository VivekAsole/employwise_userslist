import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const Toast = () => {
    const { toastMsg, setToastMsg } = useAuth()

    useEffect(() => {
        setTimeout(() => {
            setToastMsg('')
        }, 2500);

    }, []);

    return (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md animate-fadeIn">
            {toastMsg}
        </div>
    );
};

export default Toast;
