"use client"

import React, { useEffect, useState } from "react"
import Modalhook from "../hooks/modalhook"
import { Closebutton } from "../lib/icons/closebutton"
import { Hello } from "../lib/icons/hello"
import { Tooltip as ReactTooltip } from "react-tooltip"
import Personalimage from "../public/images/profilepicture.jpg"
import BioCard from "@/lib/UI/biocard"

export default function Footer() {
  const { isOpen, openModal, closeModal } = Modalhook()
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.pointerEvents = "none"
    } else {
      document.body.style.pointerEvents = "auto"
    }
  }, [isOpen])

  function copyToClipboard() {
    navigator.clipboard.writeText("mierlo.paul@hotmail.com")
  }

  return (
    <>
      <div className="mt-32 ">
        <div className="sm:px-8">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="flex flex-row justify-between mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="flex ml-10">
                    <h2 className="contact-button font-bold tracking-tight text-zinc-800 sm:text-1xl dark:hover:text-slate-600">
                      <button
                        onClick={openModal}
                        className="hover:cursor-pointer hover:text-neutral-200 transition-all"
                      >
                        Contact me
                      </button>
                    </h2>
                  </div>
                  <div className="text-s text-neutral-400">
                    @Paul van Mierlo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-opacity-75 bg-gray-500 cursor-default"></div>
          <div className="fixed overflow-y-auto	w-screen z-10 inset-0 ">
            <div className="fixed overflow-y-auto w-screen z-10 inset-0 flex items-center justify-center pointer-events-auto">
              <BioCard
                avatarSrc={Personalimage}
                fullname="Paul van Mierlo"
                bio={
                  "Hello feel free to contact me. Click on the contact button below to copy my email adress."
                }
                closeModal={closeModal}
                isCopied={isCopied}
                setIsCopied={setIsCopied}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}
