import React, { useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
const PostCard = () => {
	

  return (
    <div className="lg:grid lg:grid-cols-2 flex flex-row items-center justify-center h-5/6 w-screen mx-10">
      <div className=" gap-4 m-10">
        <div className="bg-white rounded-lg w-5/6 overflow-y-auto max-h-5/6 p-6">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3  className="text-4xl text-center mt-8 leading-6 font-black text-gray-900">
                      Title
                      </h3>
                   
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                          <div id="flex flex-cols items-center justify-center">
                            <button id="interest" className="rounded-xl h-5 p-4">
                               
                            </button>
                          <div> <text className="font-bold text-lg"> Date : </text>September 25, 2021</div>
                          <div> <text className="font-bold text-lg">Location : </text> Orlando,FL</div>
                          <br/>
                      <img className="h-auto w-full" src="https://previews.customer.envatousercontent.com/files/308521832/Final%20Presentation%20single.jpg"/>
                      <br/>
                      <div> <text className="font-bold text-lg"> Description : </text> Hi tell some information about the organizatino here. Clubs are fun etc etc.</div>
                          </div>
                      
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
       
      </div>
      <div className="bg-white rounded-lg w-5/6  my-8 max-h-full p-6">
        <div className="flex flex-col items-center justify-center">
          <text className="text-4xl my-4  font-black text-dark-blueGray">
            {" "}
            Create a Post{" "}
          </text>
          <form>
            <div className="mb-8">
              <label
                className="block text-gray-700  text-sm font-bold mb-2"
                for="username"
              >
                What are you meeting for?
              </label>
              <input
                className="shadow appearance-none border border-pink-500 rounded lg:w-80 w-auto py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="name"
                onChange={(event) => {}}
                placeholder="Username"
                type="text"
                value=""
              />
            </div>

            <div className="mb-8">
              <label
                className="block text-gray-700  text-sm font-bold mb-2"
                for="username"
              >
                Where are you meeting?
              </label>
              <input
                className="shadow appearance-none border border-pink-500 rounded lg:w-80 w-auto py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="name"
                onChange={(event) => {}}
                placeholder="Username"
                type="text"
                value=""
              />
            </div>

            <div className="mb-8">
              <label
                className="block text-gray-700  text-sm font-bold mb-2"
                for="username"
              >
                Date/Time
              </label>
              <input
                className="shadow appearance-none border border-pink-500 rounded lg:w-80 w-auto py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="name"
                onChange={(event) => {}}
                placeholder="Username"
                type="text"
                value=""
              />
            </div>

            <div className="mb-8">
              <label
                className="block text-gray-700  text-sm font-bold mb-2"
                for="username"
              >
                About your meeting
              </label>
              <textarea
                className="shadow h-32 appearance-none border border-pink-500 rounded lg:w-80 w-auto py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="name"
                onChange={(event) => {}}
                placeholder="Username"
                type="text"
                value=""
              />
            </div>
          </form>
          <button className="ml-4 mt-4 rounded h-full py-2 px-4 text-white font-bold  bg-pink-600 hover:bg-pink-500  focus:outline-none focus:ring-2 focus:bg-pink-500  focus:ring-opacity-50">
            {" "}
            Register{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
