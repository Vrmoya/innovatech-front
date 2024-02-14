import style from './Detail.module.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data'

const Detail = () => {
  const { id } = useParams()
  console.log(id)
  let products;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(data); // Ahora data es el array de objetos
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

    return(
        <>
       <section>
        <div>
          <img src='' alt="" />
        </div>
       </section>
        </>
    )
}

export default Detail;