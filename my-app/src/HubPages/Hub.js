import React from "react";
import "./Hub.css";

var sampleData = [
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
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSK2X69ipVyfmrE03FnK6x_Zm0y2Cvs1nxJA&usqp=CAU',
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
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSK2X69ipVyfmrE03FnK6x_Zm0y2Cvs1nxJA&usqp=CAU",
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
        date: new Date(2021, 9, 25),
        location: "HS1 119",
        image_address:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSK2X69ipVyfmrE03FnK6x_Zm0y2Cvs1nxJA&usqp=CAU",
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
];

function createTaggedColumns(data) {
  var columns = [];
  for (var i = 0; i < data.length; i++) {
	columns.push(<div className="flex flex-col items-center gap-4 justify-center">
		{createPosts(data[i].posts)}
	</div>)
  }

  return columns;
}
function createPosts(data) {
  var posts = [];
  for (var i = 0; i < data.length; i++) {
	var current = document.createElement('div');
	current.style.backgroundImage = 'url("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/kids-sports-club-flyer-template-design-76d8f54da3d628f583379f64f0ff3619_screen.jpg?ts=1566583843")';
	current.className = "shadow-lg group container max-w-sm flex justify-center items-center  mx-auto content-div w-52 h-auto bg-white rounded-xl";
    posts.push(current);
  }

  return posts;
}
const HubPage = () => {
  return (
    <div className="">
      <div className="flex flex-row flex-nowrap items-center justify-center mx-12 my-8 gap-x-4">
		  {sampleData.map((data) => 
		  
			<div className="flex flex-col items-center gap-4 justify-center">
				{data.posts.map((post) => 
				<div className="shadow-lg group container max-w-sm flex justify-center items-center  mx-auto  content-div w-52 h-auto bg-white rounded-xl hover:bg-" style={{'backgroundImage': 'url(' + post.image_address + ')'}, {'backgroundRepeat' : 'no-repeat'}, {'backgroundSize': 'cover'}, {'backgroundPosition': 'center'}}> 
				<div>
                <div id="image-hover" className="w-full image-cover rounded-t-md"></div>
              </div>
              <div class="absolute  opacity-0 fd-sh group-hover:opacity-100 w-52 h-auto p-2 flex flex-col">
                <span class="text-xl font-black text-white tracking-wider font-sans">
                  {post.title}
                </span>
                <span class="text-lg font-bold text-white tracking-wider font-sans">
                  {post.date.toLocaleDateString("en-US")}
                </span>
              </div>
				</div>
				)
				}
			</div>
		  )
		}
       </div>
    </div>
  );
};
export default HubPage;
