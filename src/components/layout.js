
import React from 'react';
import Header from '@/components/header';  // Import the Header component

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header />  {/* The header will always be on top */}
      <main className="main-body">{children}</main> {/* Main content is passed here */}
    </div>
  );
}
