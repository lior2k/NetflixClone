import { Icon } from "@iconify/react"
import "./featured.scss"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

function Featured({type}) {
    const [content, setContent] = useState({});
    useEffect(()=> {
        const getRandomContent = async () => {
            try {
                // const res = await axios.get(`/movie/random?type=${type}`);
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                      token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjZlODNiZWFiMmYxOGExZjFiOTRlYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTQyMTI0NywiZXhwIjoxNjc2MDI2MDQ3fQ._8vTcW4rkdHhnbnytBNzw8U7mPLSsP1yr4XBLmGuNQM"
                    }
                  });
                setContent(res.data[0]);
            } catch(err) {
                console.log(err);
            }
        };
        getRandomContent();
    }, [type]);
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

        <img src={content.img} alt="" />

        <div className="info">
            <img src={content.imgTitle} alt="" />
            <span className="description">
                {content.description};
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
