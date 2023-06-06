import { useState, useEffect } from 'react';
import { gifType } from '../types/interface';

const Gif = () => {
  const [gifs, setGifs] = useState<gifType[]>([])
    const getGif = async () => {
      const response = await fetch('http://localhost:3000/api/gifs')
      const data = await response.json()
      setGifs(data)
    }
  
    useEffect(() => {
      getGif()
    }, [])

  return ( 
    <div className='gifs'>
      {gifs.map((gif, index) => (
        <img src={gif.imgUrl} alt={gif.name} key={index} />
      ))}
    </div>
   );
}
 
export default Gif;



