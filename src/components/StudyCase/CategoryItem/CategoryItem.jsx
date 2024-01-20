import './CategoryItem.css';

const CategoryItem = ({title, type, supplier,image}) => {
  return (
    <div className='card-studycase'>
        <div className='card-image'>
            <img src={image} alt='card category' />
            <span className='card-title'>
                {title}
            </span>
        </div>

        <div className='card-info'>
            <span className='card-type'>
                {type}
            </span>

            <span className='card-supplir'>
                {supplier}
            </span>

        </div>
      
    </div>
  )
}

export default CategoryItem
