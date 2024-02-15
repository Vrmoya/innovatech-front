import style from './Detail.module.css'


const Detail = () => {
    return(
        <>
         <style>
        {`
        .columna{
          color: white;
          font-size: 25px;
          background-color: #05077b;
          border: 5px solid white
        }
        .row{
          background-color: orange;
          border: 3px solid rgb(110,73,5);
          padding: 5px;
          margin: 10px
        }
        .image{
          background-color: #b82e2e;
        }
        `}
      </style>
        <div className='container'>
            <div className='row'>
                <div className='col'>

                </div>
            </div>
            
        </div>
        </>
    )
}

export default Detail;