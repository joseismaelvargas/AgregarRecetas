import { useState } from "react";
import Header from "../components/Header"
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form"


export const Administrar=()=>{
    let local=JSON.parse(localStorage.getItem("Receta"))||[]
    const { register, handleSubmit ,formState:{errors},reset} = useForm();
     const[platos,setplatos]=useState(local)
     const [show, setShow] = useState(false);
     
     const [ID,setId]=useState(null)
       
  const handleClose = () => {
    setShow(false) 
   
  };
  
  const edit=(data) => {
        let id=ID
        // alert(id)
          let edit=platos.findIndex((element)=>element.id===id)
             console.log(ID)
             console.log(edit)
        
        if(edit!==-1){
          platos[edit].plato=data.plato
          platos[edit].img=data.img
          platos[edit].receta=data.receta
  
        setplatos([...platos])
        localStorage.setItem("Receta",JSON.stringify(platos))
        reset()
        setShow(false)
        }
        
        
   }
     
    
     const editar=(id)=>{
      
        setId(id)
       setShow(true) 
    
     }
     const borrar=(id)=>{
        let filter=platos.filter((element)=>element.id!==id)
        setplatos(filter)
        localStorage.setItem("Receta",JSON.stringify(filter))
     }

    return(
        <>
        <Header></Header>
        <h1 className="text-center my-3">Administrar Recetas</h1>
        <hr />
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edita Este Plato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
       

        
        <Form className="container" onSubmit={handleSubmit(edit)} >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre del Plato</Form.Label>
        <Form.Control type="text" name="plato"{...register("plato")} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Imagen del palto</Form.Label>
        <Form.Control type="text" {...register("img")}></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Receta</Form.Label>
        <Form.Control as="textarea" rows={3} {...register("receta")}/>
      </Form.Group>
      <button className="btn btn-primary" type="submit">Editar</button>
    </Form>
        
     




        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>


    
    <Table striped bordered hover className="container">
         
      <thead>
        <tr>
          <th>id</th>
          <th>Plato</th>
       
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {
            platos.map((element)=>(
                <tr key={element.id}>
                   <td colSpan={1}>{element.id}</td>
                   <td>{element.plato}</td>
                   <td>
                    <button className=" btn btn-danger" onClick={()=>borrar(element.id)}>Borrar</button>
                    <Button variant="primary" onClick={()=>editar(element.id)} >
                   Editar
              </Button>
                    </td>
                </tr>
            ))
        }
       
      </tbody>
    </Table>
        
        </>
    )
}