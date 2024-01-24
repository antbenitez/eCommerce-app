import React, { useCallback, useEffect, useRef } from "react";

const useInterval = (callback, delay, lock = false) => {
  const callbackRef = useRef(callback);
  const intervalRef = useRef(null);

  useEffect(() => {
    const id = intervalRef.current;
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const tick = () => {
    callbackRef.current();
  };

  useEffect(() => {
    if (delay != null && !lock) {
      intervalRef.current = setInterval(tick, delay);
    }

    const id = intervalRef.current;
    return () => {
      clearInterval(id);
    };
  }, [delay]);

  const resetInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(callbackRef.current, delay);
  }, [delay]);

  return resetInterval;
};

export default useInterval;
