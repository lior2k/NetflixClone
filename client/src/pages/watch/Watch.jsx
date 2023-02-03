import "./watch.scss"
import { Icon } from "@iconify/react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

/*
Using Location hook to access the movie passed in the location's state attribute
*/

export default function Watch() {
  const location = useLocation();
  const { movie } = location.state;
  console.log(location);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
            <Icon icon="material-symbols:arrow-back" className="icon"></Icon>
            Home
        </div>
      </Link>
        
        <video className="video"
        progress = "true"
        controls
        src={movie.video}></video>
    </div>
  )
}
