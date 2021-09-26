/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Modual(props) {

  const cancelButtonRef = useRef(null)

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  options.timeZone = 'UTC';
  options.timeZoneName = 'short';

  return (
    <Transition.Root show={props.isVisible} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={() => props.setIsVisible(!props.isVisible)}>
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex items-center">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <Dialog.Title as="h3" className="text-2xl text-center mt-8 leading-6 font-black text-gray-900">
                      {props.toDisplay.title}
                    </Dialog.Title>
                    <div className="mt-2 flex flex-col items-center justify-center w-full">
                          <div id="flex flex-cols items-center justify-center">
                            
                          <div> <text className="font-bold text-lg"> Date : </text>{props.toDisplay.date.toLocaleString("us-en")}</div>
                          <div> <text className="font-bold text-lg">Location : </text>{props.toDisplay.location}</div>
                          <br/>
                      <img className="h-auto w-full" src={props.toDisplay.image_address}/>
                      <br/>
                      <div> <text className="font-bold text-lg"> Description : </text>{props.toDisplay.description}</div>
                      
                          </div>
                          <button id="interest" className="mt-5 border-none rounded-xl h-5 p-4 bg-pink-500 text-white text-center items-center flex justify-center px-2 y-2">
                               I'm Interested!
                            </button>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
