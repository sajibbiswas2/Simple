import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import'../Revewitem/Revewitem.css'
const Revewitem = ({product,handleRemoveLtem}) => {
    const {id,name,price,quantity,shipping,img}=product;
    return (
        <div className='review-item'>
            <div>
                 <img src={img} alt="" />
            </div>
              <div className="review-Detilas-container">
                 <div className="review-Detilas">
                     <p>name:{name}</p>
                     <p> <small>price:{price}</small></p>
                     <p><small>shipping:{shipping}</small></p>
                     <p><small>quantity:{quantity}</small></p>
                 </div>
                 <div className="remove-button">
                    <button onClick={()=>handleRemoveLtem(id)}
                    className='delet-btn'>
                        <FontAwesomeIcon className='btn-icons' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                 </div>
             </div>
        </div>
    );
};

export default Revewitem;