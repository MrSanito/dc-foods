"use client";

import React from "react";

export function FloatingWidgets() {
  const openWhatsApp = () => {
    window.open("https://wa.me/917265907267?text=Hello%20DC%20Foods%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.", "_blank");
  };

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-2">
      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="flex size-10 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-md hover:bg-muted transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m18 15-6-6-6 6"></path>
        </svg>
      </button>

      {/* WhatsApp Floating */}
      <button
        onClick={openWhatsApp}
        aria-label="Chat on WhatsApp"
        className="flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
        </svg>
      </button>
    </div>
  );
}

