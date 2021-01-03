import React, {useState, useEffect} from 'react'
import '../styles/category.css'
import { navigate } from '@reach/router'
import axios from 'axios'

//img
import arts from '../img/arts.png'
import Business from '../img/Business.png'
import brain from '../img/brain.png'
import culture from '../img/Culture.png'
import design from '../img/Design.png'
import technology from '../img/technology.png'



const Category = props => {
    const[numArts, setArts] = useState(0)
    const[numBusiness, setBusiness] = useState(0)
    const[numbrain, setbrain] = useState(0)
    const[numculture, setculture] = useState(0)
    const[numdesign, setdesign] = useState(0)
    const[numtechnology, settechnology] = useState(0)

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/articles")
        .then((res) => {
            console.log(res.data.title)
            setArts(res.data.filter(article => article.category === "arts").length);
            setBusiness(res.data.filter(article => article.category === "business").length);
            setbrain(res.data.filter(article => article.category === "brain").length);
            setculture(res.data.filter(article => article.category === "culture").length);
            setdesign(res.data.filter(article => article.category === "design").length);
            settechnology(res.data.filter(article => article.category === "technology").length);
        })
    });

    const redirect = (category) => {
        navigate('/'+category)
    }
    return(
    <div id="buttons">
        <button className="categories" onClick={()=>{redirect('arts')}}><img className="icons" src={arts}/><p className="list">Arts <span> ({numArts} articles)</span>  </p></button>
        <button className="categories" onClick={()=>{redirect('business')}}><img className="icons" src={Business} /><p className="list">Business  <span>({numBusiness} articles)</span> </p> </button>
        <button className="categories" onClick={()=>{redirect('culture')}}><img className="icons" src={culture} /><p className="list">Culture   <span>({numbrain} articles)</span> </p> </button>
        <button className="categories" onClick={()=>{redirect('brain')}}><img className="icons" src={brain} /><p className="list">Brain   <span>({numculture} articles)</span>  </p> </button>
        <button className="categories" onClick={()=>{redirect('design')}}><img className="icons" src={design} /><p className="list">Design <span>({numdesign} articles)</span> </p> </button>
        <button className="categories" onClick={()=>{redirect('technology')}}><img className="icons" src={technology}/><p className="list">Technology <span>({numtechnology} articles)</span>  </p> </button>
    </div>
    )
}

export default Category;