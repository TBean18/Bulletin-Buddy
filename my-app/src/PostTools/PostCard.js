import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, withRouter } from "react-router-dom";
const PostCard = () => {
  // TODO :
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [image_address, setImage_Address] = useState("");
  const [tags, setTags] = useState("");

  // Tags
  const [chosenTags, setChosenTags] = useState([]);
  const [tagStyle, setTagStyle] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const { jwt } = useContext(GlobalContext);

  async function makePost() {
    const url = "http://localhost:3001/api/hubs/newPost";
    const school = localStorage.school.replace(/"/g, "");
    const JWT = localStorage.JWT.replace(/"/g, "");

    const payload = JSON.stringify({
      title,
      description,
      date,
      location,
      image_address,
      tags,
      school,
    });

    console.log(JWT);
    console.log(payload);
    let response = await fetch(url, {
      headers: {
        "x-auth-token": JWT,
        "Content-Type": "application/json",
      },
      body: payload,
      method: "POST",
    });
    let body = await response.json();
    if (body.error !== "") {
      console.log(`OH NO! and error has been detected: \n ${body.error}`);
    } else {
      console.log(`Hooray!! : ${body} `);
    }
  }

  // Toggles a tag on or off
  const toggleTag = (tag, index) => {
    let temp = [...tags];
    let temp2 = [...tagStyle];

    if (!temp.includes(tag)) {
      temp.push(tag);
    } else {
      let index = temp.indexOf(tag);
      temp.splice(index, 1);
    }

    temp2[index] = !temp2[index];
    setTags(temp);
    setTagStyle(temp2);
  };

  // Renders our list of tags
  const getTags = () => {
    const tags = [
      "STEM",
      "Computer Science",
      "Social",
      "LifeStyle",
      "Business",
      "Health",
      "Food",
      "Other",
    ];
    return tags.map((tag, index) => {
      let selectedOn =
        "text-xs rounded-lg bg-red-100 border-pink-500 border hover:bg-red-50 px-4 py-2 text-dark-blueGray";
      let selectedOff =
        "text-xs rounded-lg bg-gray-100 border-gray-300 border hover:bg-red-50 px-4 py-1 text-dark-blueGray";

      return (
        <text
          onClick={() => {
            toggleTag(tags[index], index);
          }}
          className={tagStyle[index] ? selectedOn : selectedOff}
        >
          {" "}
          {tags[index]}{" "}
        </text>
      );
    });
  };

  return (
    <div className="grid grid-cols-2 items-center justify-center h-screen w-screen m-10">
      <div className="grid grid-row-2 gap-4 m-10">
        {/* <div className="bg-white rounded-lg w-full  h-96 p-6"></div>
        <div className="bg-white rounded-lg w-full  h-96 p-6"></div> */}
       <div className="bg-white rounded-lg w-5/6 overflow-y-auto max-h-5/6 p-6">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3  className="text-4xl text-center mt-8 leading-6 font-black text-gray-900">
                      {title}
                      </h3>
                   
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                          <div id="flex flex-cols items-center justify-center">
                            <button id="interest" className="rounded-xl h-5 p-4">
                               
                            </button>
                          <div> <text className="font-bold text-lg"> Date : </text> {date}</div>
                          <div> <text className="font-bold text-lg">Location : </text> {location}</div>
                          <br/>
                      <img className="h-auto w-full" src={image_address}/>
                      <br/>
                      <div> <text className="font-bold text-lg"> Description : </text> {description}</div>
                          </div>
                      
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
      <div className="bg-white rounded-lg w-5/6  h-5/6 p-6">
        <div className="flex flex-col items-center justify-center">
          <text className="text-4xl my-4  font-black text-dark-blueGray">
            {" "}
            Create a Post{" "}
          </text>
          <form className="flex flex-col items-center justify-center">
            <div className="mb-4">
              <label
                className="block text-gray-700  text-sm font-bold mb-2"
                for="username"
              >
                What are you meeting for?
              </label>
              <input
                className="shadow appearance-none border border-pink-500 rounded lg:w-80 w-auto py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                name="title"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                placeholder="Event Title"
                type="text"
                value={title}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700  text-sm font-bold mb-2"
                for="username"
              >
                Where are you meeting?
              </label>
              <input
                className="shadow appearance-none border border-pink-500 rounded lg:w-80 w-auto py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                name="location"
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
                placeholder="Event Location"
                type="text"
                value={location}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700  text-sm font-bold mb-2"
                for="username"
              >
                Image Address
              </label>
              <input
                className="shadow appearance-none border border-pink-500 rounded lg:w-80 w-auto py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                name="date"
                onChange={(event) => {
                  setImage_Address(event.target.value);
                }}
                placeholder="Please insert a link to your poster here"
                type="text"
                value={image_address}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700  text-sm font-bold mb-2"
                for="username"
              >
                Date/Time
              </label>
              <input
                className="shadow appearance-none border border-pink-500 rounded lg:w-80 w-auto py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                name="date"
                onChange={(event) => {
                  setDate(event.target.value);
                }}
                placeholder="Please insert the Image address for your poster"
                type="datetime-local"
                value={date}
              />
            </div>

            <div className="mb-4">
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
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                placeholder="Username"
                type="text"
                value={description}
              />
            </div>

            <div className="mb-4 gap-2 flex flex-wrap flex-row px-32 items-center justify-center">{getTags()}</div>
          </form>
          <button
            onClick={() => makePost()}
            className="ml-4 mt-4 rounded h-full py-2 px-4 text-white font-bold  bg-pink-600 hover:bg-pink-500  focus:outline-none focus:ring-2 focus:bg-pink-500  focus:ring-opacity-50"
          >
            {" "}
            Add a new post{" "}
          </button>

                <Link to='/hub'>

          <button
            onClick={() => makePost()}
            className="ml-4 mt-4 rounded h-full py-2 px-4 text-white font-bold  bg-pink-600 hover:bg-pink-500  focus:outline-none focus:ring-2 focus:bg-pink-500  focus:ring-opacity-50"
          >
            {" "}
            Go to the Hub{" "}
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
