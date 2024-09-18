import { useEffect, useState } from "react";
import Header from "../components/Header"
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form"
import { Footer } from "../components/Footer";
import{ v4 as uuidv4}from'uuid'
export const Agregar=()=>{
    const { register, handleSubmit ,formState:{errors},reset} = useForm();
    let leer=JSON.parse(localStorage.getItem("Receta"))||[]
    const [recetas,setrecetas]=useState(leer)
    const Agregar=(data)=>{
  
         let receta={
            plato:data.plato,
            img:data.img,
            receta:data.receta,
            id:uuidv4()

         }
         setrecetas([receta,...recetas])
         console.log(recetas)
         reset()
         
    }
    useEffect(()=>{
         localStorage.setItem("Receta",JSON.stringify(recetas))
    },[recetas])
   
    return(
        <>
        <Header></Header>
        <h1 className="text-center my-3">Agrege La Receta</h1>
        <hr />
        <Form className="container" onSubmit={handleSubmit(Agregar)} >
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
      <button className="btn btn-primary" type="submit">Agregar Receta</button>
    </Form>
    <Footer></Footer>

        </>
    )
}