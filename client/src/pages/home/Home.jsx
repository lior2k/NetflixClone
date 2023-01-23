import Featured from "../../components/featuredmovie/Featured"
import Navbar from "../../components/navbar/Navbar"
import List from "../../components/list/List"
import "./Home.scss"
import { useState, useEffect } from "react"
import axios from "axios";

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjZlODNiZWFiMmYxOGExZjFiOTRlYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Mjk0ODI2MywiZXhwIjoxNjczNTUzMDYzfQ.Dd_hAOc54XaltntlB0Rt64qL8nEC7xJVguiRTpZIeI0"
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
