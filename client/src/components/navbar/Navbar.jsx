// import the useState hook from the react library
import { useState } from "react";
import { Icon } from "@iconify/react"
import "./navbar.scss"
import {Link} from "react-router-dom"

const Navbar = () => {

    // create a state variable called "isScrolled" and a function to update it called "setIsScrolled" using the useState hook
    const [isScrolled, setIsScrolled] = useState(false);

    // add an event listener to the window object that will be called whenever the window is scrolled
    window.onscroll = () => {
        // update the isScrolled state variable based on the current scroll position of the window
        setIsScrolled(window.scrollY === 0 ? false : true);
        // remove the listener
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />

                <Link to="/" className="navbarLink">
                    <span>HomePage</span>
                </Link>

                <Link to="/series" className="navbarLink">
                    <span>Series</span>
                </Link>

                <Link to="/movies" className="navbarLink">
                    <span>Movies</span>
                </Link>
                
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Icon icon="material-symbols:search" className="icon"></Icon>
                <span>KID</span>
                <Icon icon="material-symbols:notifications" className="icon"></Icon>
                <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>

                <div className="profile">
                    <Icon icon="material-symbols:arrow-drop-down" className="icon"></Icon>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar
