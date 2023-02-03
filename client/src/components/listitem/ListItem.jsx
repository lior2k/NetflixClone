import { Icon } from "@iconify/react"
import { useEffect } from "react";
import { useState } from "react"
import "./listItem.scss"
import axios from "axios"
import { Link } from "react-router-dom";

export default function ListItem(item) {

  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`movies/find/${item.item}`,
          {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjZlODNiZWFiMmYxOGExZjFiOTRlYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTQyMTI0NywiZXhwIjoxNjc2MDI2MDQ3fQ._8vTcW4rkdHhnbnytBNzw8U7mPLSsP1yr4XBLmGuNQM"
            }
          });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getMovie();
  }, [item]);

  return (
    <Link to="/watch" state={{ movie: movie }}>
      <div
        className="listItem"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}

      >
        <img src={movie.img} alt="" />

        {isHovered && (
          <>
            <video src={movie.trailer} muted autoPlay={true} loop></video>

            <div className="itemInfo">

              <div className="icons">
                <Icon icon="material-symbols:play-arrow" className="icon"></Icon>
                <Icon icon="material-symbols:add" className="icon"></Icon>
                <Icon icon="material-symbols:thumb-up" className="icon"></Icon>
                <Icon icon="material-symbols:thumb-down" className="icon"></Icon>
              </div>

              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>

              <div className="description">
                {movie.description}
              </div>

              <div className="genre">{movie.genre}</div>
            </div>

          </>)}
      </div>
    </Link>
  )
}
