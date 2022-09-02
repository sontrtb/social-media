import { toast } from "react-toastify";

const successNotification = (mess: string) => {
  toast.success(mess, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const errorNotification = (mess: string) => {
  toast.error(mess, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const warningNotification = (mess: string) => {
  toast.warning(mess, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export { successNotification, errorNotification, warningNotification };
