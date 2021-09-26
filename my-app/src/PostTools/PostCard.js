import React, { useState } from 'react'

const PostCard = () => {
	return (
		<div className="grid grid-cols-2 items-center justify-center h-screen w-screen m-10">
			<div className="grid grid-row-2 gap-4 m-10">
			<div className="bg-white rounded-lg w-full  h-96 p-6">
			</div>
			<div className="bg-white rounded-lg w-full  h-96 p-6">
			</div>
			</div>
			<div className="bg-white rounded-lg w-5/6  h-5/6 p-6">
			<div className="flex flex-col items-center justify-center">
			<text className="text-4xl my-4  font-black text-dark-blueGray">
						{" "}
						Register Now{" "}
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
	)
}

export default PostCard
