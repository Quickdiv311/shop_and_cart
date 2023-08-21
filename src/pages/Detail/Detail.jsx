import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Detail.module.css';
import { itemsSelector, update, add } from '../../store/Reducers/CartReducer';
import Header from '../../components/shared/Header/Header';

const Detail = () => {
  
  const navigate = useNavigate();
  let items = useSelector(itemsSelector);
  let dispatch = useDispatch();
  let {itemId} = useParams();
  let item = items.find(i => i.id === Number(itemId));
  let stars = new Array(Math.floor(item.rating.rate)).fill(1);
  let half = item.rating.rate%1;
  half = half >= 0.5 ? true : false;
  let options = new Array(99);
  for(let i=1;i<=10;i++)
  {
    options[i-1] = i; 
  }

  return (
   <div className={styles.page}>
    <Header/>
     <div className={styles.container}>
        <div className={styles.left}>
            <img src={item.image} alt={item.title} />
        </div>
        <div className={styles.right}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div className={styles.stars}>
            <span>
            {
                stars.map(i => (
              <i class="bi bi-star-fill" style={{fontSize: "25px", color:"gold"}}></i>               
                ))
            }
            </span>
            <span>
            {
               half && <i class="bi bi-star-half" style={{fontSize: "25px",color:"gold"}}></i>
            }
            </span>
            </div>
            <h3>Price: &#8377;{item.price}</h3>
            <div className={styles.add}>
                <span className={styles.quantity}>
                    <h5 style={{marginRight: '10px'}}>Quantity:</h5>
                    <select className='form-select' style={{width: '80px'}} value={item.quantity} onInput={e => {
                     let obj = {...item};
                     obj.quantity = Number(e.target.value);
                     dispatch(update(obj))}}>
                        {
                            options.map((i) => (
                                <option value={i.quantity}>{i}</option>
                            ))
                        }
                    </select>
                </span>
                { item.added ? 
                <button className="btn btn-primary" onClick={() => {navigate('/cart')}}>update Item</button>
                :
                <button className="btn btn-primary" onClick={() => {dispatch(add(item));navigate('/cart')}}>Add to Cart</button>
                }
            </div>
        </div>
    </div>
   </div>
  );
}

export default Detail;
