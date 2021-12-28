import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [count, setCount] = useState(0);

    const { data: images, loading } = useFetchGifs( category );
        

/*     const [images, setImages] = useState([]);

    useEffect(() => {
        // getGifs(category)
        //     .then( imgs => {
        //         setImages( imgs );
        //     })
        getGifs(category)
            .then( setImages);
    }, [category]) // video 77 minuto 6.30 */

    
    // const getGifs = async() => {
    
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=Ws1C9JmsjGmWYPo9NnvK1QpAu3kO8U0D`;
    //     const resp = await fetch( url );
    //     const {data} = await resp.json();

    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url,
    //         }

    //     })

    //     console.log('gifs: ', gifs);
    //     setImages( gifs );

    // }

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            {/* {loading? 'Cargando ...' : 'Data cargada'} */}

            { loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className='card-grid'>

                {
                    images.map( img => 
                        <GifGridItem 
                            key = { img.id }
                            { ...img } 
                        />
                    )
                }

                {/* <ol>
                    {
                        images.map( ({id, title}) => 
                            <li key={id}>{title}</li>
                        )
                    }
                </ol> */}



                {/* <h3> { count } </h3>
                <button onClick={ () => setCount( count +1 ) }></button> */}
            </div> 
        </>
    )
}
