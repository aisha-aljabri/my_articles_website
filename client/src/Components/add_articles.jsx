import React, {useState} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import '../styles/add_article.css'

const Addarticle = props => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [category, setCategory] = useState("arts")
    

    const submithandle = e => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/articles/new', {
            title,
            text,
            category
        })
        navigate('/')
    }
    return(
        <form onSubmit={submithandle} >
            <p>
                <label>Title</label> <br />
                <input type="text" onChange={e => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Article</label><br />
                <textarea  rows="50" onChange={e => setText(e.target.value)} />
            </p>
            <p>
                <label>Category</label><br />
                <select name="category" value="arts" onChange={e=> setCategory(e.target.value)}>
                    <option value="arts">Arts</option>
                    <option value="business">Business</option>
                    <option value="culture">Culture</option>
                    <option value="brain">Brain</option>
                    <option value="design">Design</option>
                    <option value="technology">Technology</option>
                </select>
            </p>

            <input type="Submit" value="Add" />
        </form>
    )
}

export default Addarticle;