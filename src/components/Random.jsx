import './Random.css'
import  useGIF  from '../hooks/useGIF';
import Spinner from './Spinner';
function Random() {
    let [url, loading, fetchGIF] = useGIF();
    function fetchData() {
        fetchGIF('');
    }
    return (
        <div>
            <div className='random-container'>
                <h1>RANDOM GIF</h1>
                {loading ? <Spinner/> : <img src = {url} alt = "loading soon..."></img>} 
                <button onClick={fetchData}>Generate</button>
            </div>
        </div>
    );
}
export default Random;