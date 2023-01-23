import { Icon } from "@iconify/react"
import "./featured.scss"

function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="history">History</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="drama">Drama</option>
                </select>
            </div>
        )}

        <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

        <div className="info">
            <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />
            <span className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quia odio
                magnam corporis eveniet? Labore odio expedita magni dolores tempore. Vel
                dolore illo, vero consectetur cupiditate natus est quod incidunt.
            </span>
            <div className="buttons">
                <button className="play">
                    <Icon icon="material-symbols:play-arrow" className="icon"></Icon>
                    <span>Play</span>
                </button>
                <button className="more">
                    <Icon icon="material-symbols:info-outline" className="icon"></Icon>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured
