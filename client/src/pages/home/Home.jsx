import Featured from "../../components/featuredmovie/Featured"
import Navbar from "../../components/navbar/Navbar"
import List from "../../components/list/List"
import "./Home.scss"
import { useState, useEffect } from "react"
import axios from "axios";

/*
The useEffect gets our movies/series from the DB using axios get method and puts them inside 'lists'.
The useEffect gets called automatically whenever the 2nd paramater changes between renders, in this case, type & genre
At the end we use the 'map' function to iterate over that list and transform each list grabbed from
the DB into a React List component.
*/

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjZlODNiZWFiMmYxOGExZjFiOTRlYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTQyMTI0NywiZXhwIjoxNjc2MDI2MDQ3fQ._8vTcW4rkdHhnbnytBNzw8U7mPLSsP1yr4XBLmGuNQM"
          }});
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className='home'>
      <Navbar></Navbar>
      <Featured type={type}></Featured>
      {lists.map(list=>(
        <List list={list}></List>
      ))};
    </div>
  )
}

export default Home
