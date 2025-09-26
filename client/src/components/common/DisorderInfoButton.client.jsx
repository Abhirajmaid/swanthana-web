"use client";
import React from "react";

export default function DisorderInfoButton({ title, html, modalId = "disorder-info-modal" }) {
  return (
    <>
      <button
        className="btn-primary px-5 py-2 rounded-full"
        onClick={() => document.getElementById(modalId)?.showModal?.()}
      >
        Learn More
      </button>
      <dialog id={modalId} className="rounded-2xl w-[min(90vw,720px)] p-0 shadow-2xl">
        <div className="p-6 sm:p-8">
          <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
          <div className="prose max-w-none text-brand-dark" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="mt-6 flex justify-end">
            <button
              className="btn-border px-5 py-2 rounded-full"
              onClick={() => document.getElementById(modalId)?.close?.()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}


