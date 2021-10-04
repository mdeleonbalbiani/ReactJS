import React, {useState} from "react";
import { Modal, Button } from "react-bootstrap";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Ver detalle
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <ItemDetail props={props.props}/>
      </Modal>
    </>
  );
}

export default ItemDetailContainer;