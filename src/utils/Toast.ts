import { toast, ToastOptions } from 'react-toastify';

interface ToastType extends ToastOptions {
  id?: React.ReactText;
  message?: string;
}

export const toastCustomStyle = {
  fontSize: 13,
};

export const showToast = (props: ToastType) => {
  toast(props.message || 'Oh! something went wrong...', {
    type: props.type,
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    closeButton: true,
    onClick: props.onClick,
  });
};
