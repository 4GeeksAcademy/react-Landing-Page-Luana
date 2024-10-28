import React from "react"

const NavBar = () => {
    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white">Start Bootstrap</a>
                <form className="d-flex" role="search">
                    <p className="text-white m-2">Home</p>
                    <p className="text-white m-2">About</p>
                    <p className="text-white m-2">Services</p>
                    <p className="text-white m-2">Contact</p>
                </form>
            </div>
        </nav>
    )
}
export default NavBar