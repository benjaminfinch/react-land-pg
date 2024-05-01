import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cardgroup from "./cardgroup.jsx";
import Footer from "./footer.jsx";

const Home = () => {

	let cards = [
		{ imgSrc: "https://source.unsplash.com/random/300×300", imgAlt: "photo from Unplash", title: "Photo number one", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
		{ imgSrc: "https://source.unsplash.com/random/300×300", imgAlt: "photo from Unplash", title: "Photo number two", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
		{ imgSrc: "https://source.unsplash.com/random/300×300", imgAlt: "photo from Unplash", title: "Photo number three", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
		{ imgSrc: "https://source.unsplash.com/random/300×300", imgAlt: "photo from Unplash", title: "Photo number four", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
	];

	return (
		<>
			<Navbar title={"React Landing Page"} firstitem={"Home"} seconditem={"About"} thirditem={"Services"} fourthitem={"Contact"} textcolor="white" bgcolor="black" />
			<div className="container-fluid p-4">
				<Jumbotron title={"A Warm Welcome!"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate felis porttitor dui euismod elementum. Nullam dictum viverra sapien, sit."} buttonUrl={"https://mail.google.com/mail/u/0/#inbox?compose=new"} buttonContent={"feel free to send me an email"} />
				<Cardgroup cards={cards} />
			</div>
			<Footer content={"© B. Finch 2024"} />
		</>
	);
};

export default Home;