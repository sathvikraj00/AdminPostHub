import { Link } from "react-router-dom"
import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-x-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
            <i className="topIcon fa-brands fa-meta"></i>
        </div>
        <div className='topCenter'>

            <ul className='topList'>
                <li className='topListItem'><Link to="/" style={{textDecoration:"none",color:"black"}}>HOME</Link></li>
                <li className='topListItem'><Link to="/about" style={{textDecoration:"none",color:"black"}}>ABOUT</Link></li>
            </ul>
        </div>
        <div className='topRight'>
            <img
            className='topImg' 
            src="https://www.shutterstock.com/shutterstock/photos/2071252046/display_1500/stock-photo-portrait-of-cheerful-male-international-indian-student-with-backpack-learning-accessories-standing-2071252046.jpg" 
            alt="Img" 
            />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
