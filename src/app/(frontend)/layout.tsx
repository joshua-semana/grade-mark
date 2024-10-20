import React from "react";

interface Props {
  children: React.ReactNode;
}

import "./globals.css"

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

export default Layout;