import { useCallback, useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const CircularProgress: React.FC<{ values: Array<number>; interval?: number}> =
  ({ values, interval = 1000, children }) => {
    const [valuesIndex, setValuesIndex] = useState<number>(0);

    const startTimer = useCallback(() => {
      setTimeout(() => {
        setValuesIndex((prevValIndex) => (prevValIndex + 1) % values.length);
      }, interval);
    }, [interval, values.length]);

    useEffect(() => {
      startTimer();
    }, [startTimer]);

    return (
      <CircularProgressbarWithChildren
        value={values[valuesIndex]}
        strokeWidth={6}
        styles={{
          path: {
            stroke: "#fff",
          },
          trail: {
            stroke: "#595959",
          },
        }}
      >
      {children}
      </CircularProgressbarWithChildren>
      
      
    );
  };

export default CircularProgress;
