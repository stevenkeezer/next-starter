"use client";

import React, { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export default function Tawk() {
  const tawkMessengerRef = useRef<any | null>(null);

  const handleMinimize = () => {
    if (tawkMessengerRef.current) {
      tawkMessengerRef.current.minimize();
    }
  };

  return (
    <div>
      {/* <button onClick={handleMinimize}> Minimize the Chat </button> */}
      <TawkMessengerReact propertyId="657b55e270c9f2407f7fdce8" widgetId="1hhksevmk" ref={tawkMessengerRef} />
    </div>
  );
}
