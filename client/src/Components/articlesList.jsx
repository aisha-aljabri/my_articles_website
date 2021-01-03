import React, {useState, useEffect} from 'react'
import '../styles/articleList.css'
import { Link } from '@reach/router';
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios'


const ArticlesList = props => {
    const [articles, setAllArticles] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/articles")
        .then((res) => {
            console.log(res.data.title)
            setAllArticles(res.data.filter(article => article.category === props.category));
        })
        

    }, []);

    return(
        <div id="articles">
            {articles.map((article, id)=>{
                return(
                    <div className="cards">
                    <Link className="articlelink" to={`/articles/${article.id}`}>{article.title}</Link>
                    <br />
                    <h6>{article.created_at}</h6> <br />
                    <div className="likes"><FavoriteIcon /> 15</div>
                    </div>
                )
            })}
            {/* <div className="cards">
            <Link className="articlelink" to="/articleDetail">Article Title Article TitleArticle Title</Link>
            <br />
            <span>article author <br />22-02-2020</span>
            <br /> <br />
            <div className="likes"><FavoriteIcon /> 15</div>
            </div>

            <div className="cards">
            <Link className="articlelink" to="/articleDetail">Article Title Article TitleArticle Title</Link>
            <br />
            <span>article author <br />22-02-2020</span>
            <br /> <br />
            <div className="likes"><FavoriteIcon /> 15</div>
            </div>

            <div className="cards">
            <Link className="articlelink" to="/articleDetail">Article Title Article TitleArticle Title</Link>
            <br />
            <span>article author <br />22-02-2020</span>
            <br /> <br />
            <div className="likes"><FavoriteIcon /> 15</div>
            </div>

            <div className="cards">
            <Link className="articlelink" to="/articleDetail">Article Title Article TitleArticle Title</Link>
            <br />
            <span>article author <br />22-02-2020</span>
            <br /> <br />
            <div className="likes"><FavoriteIcon /> 15</div>
            </div> */}


{/* 
            <p><Link className="articlelink" to="/articleDetail">Article Title Article Title</Link> <br /> <span>article author <br />22-02-2020</span></p>
            <p><Link className="articlelink" to="/articleDetail">Article Title Article Title</Link> <br /> <span>article author <br />22-02-2020</span></p>
            <p><Link className="articlelink" to="/articleDetail">Article TitleArticle TitleArticle Title</Link> <br /> <span>article author <br />22-02-2020</span></p>
            <p><Link className="articlelink" to="/articleDetail">Article TitleArticle Title</Link> <br /> <span>article author <br />22-02-2020</span></p>
            <p><Link className="articlelink" to="/articleDetail">Article TitleArticle Title</Link> <br /> <span>article author <br />22-02-2020</span></p>
            <p><Link className="articlelink" to="/articleDetail">Article TitleArticle TitleArticle Title</Link> <br /> <span>article author <br />22-02-2020</span></p> */}

        </div>
    )
}

export default ArticlesList;