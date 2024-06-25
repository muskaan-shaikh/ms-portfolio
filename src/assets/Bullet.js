import React from "react";

export default function Bullet({className}) {
  return <div className={`bg-logo rounded-full ${className}`} style={{width: '8px', height: '8px'}}></div>;
}
