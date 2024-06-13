'use client';

import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function TawkWidget() {
  const propertyId = process.env.NEXT_PUBLIC_PROPERTY_ID;
  const widgetId = process.env.NEXT_PUBLIC_WIDGET_ID;

  return (
    <TawkMessengerReact
      propertyId={propertyId}
      autoInit={true}
      widgetId={widgetId}
    />
  );
}

// {
//   const tawkMessengerRef = useRef();

//   const handleMinimize () => {
//       tawkMessengerRef.current.minimize();
//   };

//   return (
//       <div className="App">
//           <button onClick={handleMinimize}> Minimize the Chat </button>

//           <TawkMessengerReact
//               propertyId="property_id"
//               widgetId="default"
//               ref={tawkMessengerRef}/>
//       </div>
//   );
// }