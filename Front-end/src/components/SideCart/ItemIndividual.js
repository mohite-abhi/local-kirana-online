import React from 'react';

//Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from "@material-ui/core/Button";
import { ButtonGroup } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
//Ingredients needed

library.add(faMinus, faPlus);

const ItemIndividual = (props) => {
  return(
    <li className="list-group-item d-flex justify-content-between lh-condensed choseOption">
      <div className="descriptionContainer">
        <h6 className="my-0">{props.name}</h6>
        <small className="text-muted">₹ {props.price * props.quantity}</small>
      </div>
      <div className="center">
        <p>
          </p><div className="input-group">
              <span className="input-group-btn">
                <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
               onClick={props.clickHandler.bind(this, props.type, false)} 
              >
                <Remove />
              </Button>
              <Button disabled>{props.quantity}</Button>
              <Button
               onClick={() => {props.clickHandler(props.type, true)}}
              >
                <Add />
              </Button>
            </ButtonGroup>
                  {/* <button onClick={props.clickHandler.bind(this, props.type, false)} type="button" className="btn btn-outline-primary btn-number" data-type="minus">
                    <FontAwesomeIcon icon="minus" />
                  </button>
              </span>
              <input readOnly={true} type="text" className="form-control input-number quantitySelector" value={props.quantity} min="0" max="100"/>
              <span className="input-group-btn">
                  <button onClick={() => {props.clickHandler(props.type, true)}}type="button" className="btn btn-outline-primary btn-number" data-type="plus">
                      <FontAwesomeIcon icon="plus" />
                  </button> */}
              </span>
          </div>
      <p></p>
    </div>
    </li>
  );
};

export default ItemIndividual;
