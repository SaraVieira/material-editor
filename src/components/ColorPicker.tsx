import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { HexColorPicker } from "react-colorful";

const useClickOutside = (
  ref: React.MutableRefObject<unknown>[],
  callback: () => void
) => {
  const handleClick = (e: any) => {
    console.log(ref);
    if (
      ref.filter((r) => r.current).length === ref.length &&
      !ref.filter((r) => r.current && (r.current as any).contains(e.target))
        .length
    ) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export const ColorPicker = ({
  color,
  onChange,
}: {
  color: string;
  onChange: (s: string) => void;
}) => {
  const [picker, setPicker] = useState(false);
  const pickerRef = useRef<React.MutableRefObject<HTMLDivElement>>();
  const buttonRef = useRef<React.MutableRefObject<HTMLButtonElement>>();
  useClickOutside([pickerRef, buttonRef], () => picker && setPicker(false));
  return (
    <>
      <Button
        ref={buttonRef as any}
        className="w-[100px] shadow-sm"
        style={{
          background: color,
        }}
        onClick={() => setPicker(true)}
        aria-label="Choose a color"
      />
      {picker ? (
        <div className="absolute z-[999] mt-8" ref={pickerRef as any}>
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      ) : null}
    </>
  );
};
