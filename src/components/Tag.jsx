import './Tag.css';
import Spinner from './Spinner';
import {useState} from 'react';
import useGIF from '../hooks/useGIF';
function Tag() {
    const [tag, setTag] = useState('');
    let [url, loading, fetchGIF] = useGIF();
    function changeHandler(event) {
        setTag(event.target.value);
    }
    function fetchData() {
        fetchGIF(tag);
    }
    return (
        <div>
            <div className='a-random-container'>
                <h1>{tag ? `A random ${tag} GIF` : `A random GIF`}</h1>
                {loading ? <Spinner/> : <img src = {url} alt = "loading soon..."></img>}
                <input type = "text" onChange={changeHandler} placeholder='Type Something.....'></input>
                <button onClick={fetchData}>Generate</button>
            </div>
        </div>
    );
}

export default Tag;