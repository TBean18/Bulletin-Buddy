import React, { useState, useContext } from "react";
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from "react-query";
import { GlobalContext } from "../context/GlobalState";
import "./Hub.css";
import Modual from "./Modual";

import { ReactQueryDevTools } from "react-query/devtools";
import Navbar from "../Navigation/Navbar";

// var sampleData = [];
var sampleData = [
	{
		tag: "Tag-1",
		posts: [
			{
				title: "Event 1 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2024, 2, 25),
				location: "HS1 119",
				image_address:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSK2X69ipVyfmrE03FnK6x_Zm0y2Cvs1nxJA&usqp=CAU",
			},
			{
				title: "Event 2 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 9, 25),
				location: "HS1 119",
				image_address:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72K1o6yF59nvppJMFnsFLYEdD1nq7lTN-Ag&usqp=CAU",
			},
			{
				title: "Event 3 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 9, 25),
				location: "HS1 119",
				image_address:
					"https://images.freecreatives.com/wp-content/uploads/2016/07/Nightclub-Party-Flyer.jpg",
			},
		],
	},
	{
		tag: "Tag-2",
		posts: [
			{
				title: "Event 4 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 9, 25),
				location: "HS1 119",
				image_address:
					"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/kids-sports-club-flyer-template-design-76d8f54da3d628f583379f64f0ff3619_screen.jpg?ts=1566583843",
			},
			{
				title: "Event 1 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 9, 25),
				location: "HS1 119",
				image_address:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6n-xP-e79CUf7h0bHRB493mdNgkb1LiJ11A&usqp=CAU",
			},
			{
				title: "Event 1 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 9, 25),
				location: "HS1 119",
				image_address:
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAnFBMVEX////SbK3y8vLY2Njz9PPer87r2ObSZqv79vn39/f7+/vz9/XQY6nLYaXNYKXe3t7o6Ojl5eXTbKvZlL/38fbRc6347PPR0dHQcK7MZ6jVa6316PLrzeDRYarblMHRd7DLy8vIV5/hqM3w3unIZqTYm8DsyuLmwdvXg7nmudbVh7jw1uffmcTeo8jMVqDUjrjdscvPe6ywsLC9vb0h0/vNAAAFhElEQVR4nO3di3KiSBQG4IOojSwXQbzQaEgk8UZMNpP3f7c9TVwnppKKY6Dpdf+/pqKFkPBxTnejVVMSIQiCIAiCIEj7cdtNo7RBp+0MGsO1b1NpyNc265gmcN22Ucd068eZ0ZZvqb852xadpG7c+9JFoW3b4bA1W6dT98rwe9QN7X/Tnq/ukXf8xZFtG8BrSDe03+fadCc4Ozz+Oc3rRTO609L9Ll4UXpLLO7sZXfRBdzg/+8JEZunCT0/vo/n8XLfu0t7Uqfs4Gs+PWbX7Ylb5iD43F08rzei+XBGGl+RSW2O6qJ5r/9M0pDtpwqi193xN6d7xLl6tDNZ1h+GHMddCGtNVGWq/szxNs7q2A90fpGtW6sW5fbNS7wcrzp1nUPy7pF6db5kSyfGdenVB26iTXLUOtYMOuhYCHXTQ6Q900EGnP9BBB53+QAcddPoDHXTQ6Q900EGnP9BBB53+QAcddPoDHXTQ6Y95utns8DD78a8yTzfLnGdpSbF0ip9fKeN08j4ZWTK14ofEl1ens/xk5PXmIn1MrrB2VuCMvMeeEEoXX6NOWsK6Xp3gAXedupjHnRTsu9pxJ5artKrdTydN83RivRH7rbB26/QKdbGw4jTlhU9Y1zfuag100EGnP9DVqns3ycfqebWkSameyE8WAHn8wftLPkQejzRR9yX405X7i+U8PnMl1K6Tlu/7/FOkfvXuVHq+J7h2Mg188XHn1PM8fhC+71XHBnxMfDjGTN2mLMuZJZ7LrNzxKW7mk2yrINus2KqK/K5KbD2W5dqyvGWRrXJRHVPs+TYmX02KpTijfPo784Z3G6e7au9cpglNHFoLsVIb5uq/73FlpFXVzOsRTSyxVy9lqeBjMqIH4RVqQ++M6umv3WxENFvMaX0/p62X0+TpmTKRu85u41DOPZvP53m67u+4Xcc9msQio/04owdvSeVTj1bBDU3GDzRJDdQxj2sXZLTxRtT3vYk7WrPyhgo/6NOj4LvnFZV7KlLuPMGQeOw6M39La29Hk+eSlfx8ETg0/v4dRAu6Mev8hMbcaYW3+Fsd9eI9Uul5Je35DYKVcv+5L2q+VDqxocQSPdZ5c6o6lK/Gwp/Qi4k6q9Jx7fjUi2BHyahHGdeuHyy4MGpJE888qhZq0lC6NHcci+u15c7s71a0Whxql3//p1qqHUO2AY+9YEnzp5RbLyc3zx3aqCWdX+DGtA46wRPPKC1oH6xo+cTdyeMuu+er8j2urdoJnlpcoo3cEK0LtlRdRyWbYu+BioJLddCprqTD3JmsM55fVefS2w7G6WRO3FTefuJkN7yGLfkEsg035Dxx5mN1t5UntON9bt50mVoKJ06fq5pu1QXgtfKldJKtPONzCf33mbEMUlndf6h9Y5Hm40Dy7C/8gG9A1BmnvpR+8LZYB/dW9VLALSt5X8tTx3jq5uWMD13av8/8pAbvb52rK3Lywh+kfV2TgQ466PQHOuig0x/ooINOf6CDDjr9gQ466PQHOuig0x/ooINOf6CDDjr9gQ466PQHOuig0x/ooINOf6CDDjr9gQ466PQHOuig0x/ooINOf6CDDjrtqf37Xs35JmJOHNSrS+6EQfHu6tW5y55RqfcbwOkvk1L3t7dTx6xABx10+gMddNDpD3TQQac/0EH3v9AN2vacZFCzzqzi1fzBg1nFq710RhWvfhy5bZuOaQBHxlSvGZwZ5at9Qnnvcwdtxm3ShiAIgiDISYYRr/wUut2Ihh1+HBD/i7oDl/gZdYZqK5FN6lFt+48lpNupa1N4S9Mp3VIYdWya0nA6jegX2bbLWxnXGXZC97Vz2/bZ/mnYMnVf3bCjdL8GikSvHXp9Jfu2Mx3QVJU2jLr2lKa3YdtniyAIgiCIofkHFqoJzhX21/sAAAAASUVORK5CYII=",
			},
		],
	},
	{
		tag: "Tag-1",
		posts: [
			{
				title: "Event 1 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 9, 25),
				location: "HS1 119",
				image_address:
					"https://img.freepik.com/free-psd/social-media-instagram-post-template_47618-73.jpg?size=338&ext=jpg",
			},
			{
				title: "Event 1 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 9, 25),
				location: "HS1 119",
				image_address:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72K1o6yF59nvppJMFnsFLYEdD1nq7lTN-Ag&usqp=CAU",
			},
			{
				title: "Event 1 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 9, 25),
				location: "HS1 119",
				image_address:
					"https://images.freecreatives.com/wp-content/uploads/2016/07/Nightclub-Party-Flyer.jpg",
			},
		],
	},
	{
		tag: "Tag-1",
		posts: [
			{
				title: "Event 1 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 8, 25),
				location: "HS1 119",
				image_address:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSK2X69ipVyfmrE03FnK6x_Zm0y2Cvs1nxJA&usqp=CAU",
			},
			{
				title: "Event 2 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 7, 25),
				location: "HS1 119",
				image_address:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72K1o6yF59nvppJMFnsFLYEdD1nq7lTN-Ag&usqp=CAU",
			},
			{
				title: "Event 3 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 4, 25),
				location: "HS1 119",
				image_address:
					"https://images.freecreatives.com/wp-content/uploads/2016/07/Nightclub-Party-Flyer.jpg",
			},
		],
	},
	{
		tag: "Tag-1",
		posts: [
			{
				title: "Event 1 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 9, 25),
				location: "HS1 119",
				image_address:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSK2X69ipVyfmrE03FnK6x_Zm0y2Cvs1nxJA&usqp=CAU",
			},
			{
				title: "Event 2 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 9, 25),
				location: "HS1 119",
				image_address:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72K1o6yF59nvppJMFnsFLYEdD1nq7lTN-Ag&usqp=CAU",
			},
			{
				title: "Event 3 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 9, 25),
				location: "HS1 119",
				image_address:
					"https://images.freecreatives.com/wp-content/uploads/2016/07/Nightclub-Party-Flyer.jpg",
			},
		],
	},
	{
		tag: "Tag-1",
		posts: [
			{
				title: "Event 1 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 9, 25),
				location: "HS1 119",
				image_address:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSK2X69ipVyfmrE03FnK6x_Zm0y2Cvs1nxJA&usqp=CAU",
			},
			{
				title: "Event 2 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 9, 25),
				location: "HS1 119",
				image_address:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72K1o6yF59nvppJMFnsFLYEdD1nq7lTN-Ag&usqp=CAU",
			},
			{
				title: "Event 3 Title",
				description:
					"Here is some informatoin about the Event. The Event is hosted by a club and clubs are fun. You should come to this",
				date: new Date(2021, 9, 25),
				location: "HS1 119",
				image_address:
					"https://images.freecreatives.com/wp-content/uploads/2016/07/Nightclub-Party-Flyer.jpg",
			},
		],
	},
];



const HubPage = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [toDisplay, setDisplay] = useState({
		author: "",
		date: "",
		description: "",
		isVisible: "",
		image: "",
		title: "",
		location: "",
		tags: [],
	});

	const { jwt, storeJWT } = useContext(GlobalContext);

	const getPosts = async () => {
		const JWT = localStorage.JWT.replace(/"/g, "");
		const url = "http://localhost:3001/api/posts/";
		let response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"x-auth-token": JWT,
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
		});
		let res = await response.json();
		if (res.error !== "") {
			console.log(res);
			console.log(`Something went wrong \n error: ${res.error}`);
			setErrorMsg(res.error);
		} else {
			console.log("hooray!");
			// Store the jwt inside of memory
			console.log(`res.token: ${res.token}`);
			storeJWT(res.token);
			console.log(jwt);
			return res;
		}
	};
	const queryClient = useQueryClient();

	const query = useQuery("posts", getPosts);

	return (
		<div className="">
			<Navbar />
			{/* <ReactQueryDevTools /> */}
			<Modual
				isVisible={isVisible}
				setIsVisible={setIsVisible}
				toDisplay={toDisplay}
			/>

      <div className="flex flex-row flex-nowrap items-start justify-start mx-12 my-8 gap-x-4 overflow-x-auto p-12">
        {query.isSuccess &&
          query.data.postsByInterests.map((data) => (
            <div className="flex flex-col items-center gap-2 justify-center">
              <div className="flex flex-row items-center justify-center gap-2 ">
                {console.log(data)}
                <svg
                  className=""
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12.3104V2.34375C0 1.04932 1.04932 0 2.34375 0H12.3104C12.932 3.25037e-06 13.5282 0.246935 13.9677 0.686475L24.3135 11.0323C25.2288 11.9476 25.2288 13.4315 24.3135 14.3468L14.3468 24.3135C13.4315 25.2288 11.9476 25.2288 11.0323 24.3135L0.686475 13.9677C0.246935 13.5282 3.25037e-06 12.932 0 12.3104H0ZM5.46875 3.125C4.17432 3.125 3.125 4.17432 3.125 5.46875C3.125 6.76318 4.17432 7.8125 5.46875 7.8125C6.76318 7.8125 7.8125 6.76318 7.8125 5.46875C7.8125 4.17432 6.76318 3.125 5.46875 3.125Z"
                    fill="#FCD34D"
                  />
                </svg>
                <div className="font-bold text-yellow-300"> {data.tag} </div>
              </div>
              {data.posts.map((post) => (
                <div
                  className="shadow-lg group container max-w-sm flex justify-center items-center  mx-auto  content-div w-52 h-autorounded-xl hover:opacity-30 rounded-xl gap-0"
                  style={post.styles}
                  onClick={() => {
                    console.log(post);
                    setDisplay(post);
                    setIsVisible(!isVisible);
                  }}
                >
                  <img className="object-contain w-52 h-52" src={post.image_address}/>
                  <div>
                    <div
                      id="image-hover"
                      className="w-full image-cover rounded-t-md"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};
export default HubPage;
