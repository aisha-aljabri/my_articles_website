import React, {useState, useEffect} from 'react'
import '../styles/articledetail.css'
import axios from 'axios'

const ArticlesDetail = props => {
    const[article, setArticle] = useState({})

    useEffect(()=> {
        axios.get('http://127.0.0.1:8000/api/articles/'+props.id)
        .then(res => setArticle(res.data))
        .catch(err => console.log(err)
        )}, {})


    return(
        <div id="content">
            {console.log(article.id)}
            <p id="article">
            <h2>{article.title}</h2>
            {article.text}
            </p>
        </div>
    )
}

export default ArticlesDetail;