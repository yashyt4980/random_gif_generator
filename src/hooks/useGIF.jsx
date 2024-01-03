import { useState, useEffect } from 'react';
import axios from 'axios';
function useGIF() {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    
    let randomURL = `https://api.giphy.com/v1/gifs/random?api_key=NEvtQl8yJkvDXIThBXqq1Yfx3f0LQi4n`;
    async function fetchGIF(tag) {
        setLoading(true);
        let tag_updated = tag.split(' ');
        let new_tag = '';
        if(tag_updated.length > 1) {
            for(let i = 0 ; i < tag_updated.length; i++) new_tag = new_tag + tag_updated[i] + '+'; 
        }
        else new_tag = tag;
        let memeURL = `https://api.giphy.com/v1/gifs/random?api_key=NEvtQl8yJkvDXIThBXqq1Yfx3f0LQi4n&tag=${new_tag}&rating=pg`;
        let data = await axios(tag ? memeURL : randomURL);
        setUrl(data.data.data.images.original.url);
        setLoading(false);
    }

    useEffect(() => {
        fetchGIF('car');
    }, []);
    return [url, loading, fetchGIF];
    
}
export default useGIF;