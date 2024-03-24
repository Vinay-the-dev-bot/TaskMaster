import { useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
const LoadingToast = ({ message }) => {
  const toast = useToast();
  const toastIdRef = React.useRef();
  useEffect(() => {
    toastIdRef.current = toast({
      title: `${message}`,
      status: "loading",
      position: "top",
      duration: null,
    });
    return () => {
      toast.close(toastIdRef.current);
    };
  }, []);
};
export default LoadingToast;
