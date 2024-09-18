import Header from "../components/Header"
import { Footer } from "../components/Footer"
import { useState } from "react"
export const Index=()=>{
    let leerlocalstorage=JSON.parse(localStorage.getItem("Receta"))||[]
    const [receta,setreceta]=useState(leerlocalstorage)
    console.log(receta)
    return(
        <>
        <Header></Header>
        <main className="containerreceta">
             <h1 className="text-center title my-3"> Recetas de Cocina</h1>
             <div  className="container">
               
                <img src="https://editorialtelevisa.brightspotcdn.com/dims4/default/a25775b/2147483647/strip/true/crop/900x507+0+47/resize/1000x563!/format/webp/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F43%2F08%2F10f402924860928cec2b1ad0d733%2Frecetas.jpg" />
                <h1 className="title-receta">Cómo hacer huevos rancheros con queso fácilmente</h1>
                <p className="receta my-3">
                Para la salsa: En un comal caliente se ponen a tatemar los jitomates y los chiles. Una vez que todo esté cocido, en la licuadora coloca los chiles, el ajo y un chorrito de agua para licuarlo.
Luego agrega los jitomates y licúa, pero que no queden exactamente molidos, sino troceados para que la salsa tenga textura.
Luego en un sartén pon un chorrito de aceite y cocina la cebolla picada hasta que esté transparente y después agrega la salsa de la licuadora. Sazona con sal y deja que todo se cocine durante unos 5 minutos. Retira del fuego.
Luego en otro sartén por a calentar aceite y fríe ligeramente las tortillas por ambos lados, hasta que estén suaves y flexibles. Ponlas a escurrir en un plato con papel absorbente.
En otro sartén agrega aceite y vierte los huevos para que se cocinen estrellados.
Toma una tortilla y úntale frijoles refritos. Luego agrégale encima la deliciosa salsa ranchera y espolvorea los huevos rancheros con trozos de queso panela.
Huevos rancheros sobre pan árabeSi quieres un verdadero desayuno tradicional mexicano, entonces tienen que preparar estos huevos rancheros con queso; la salsa es la estelar del platillo</p>
              

            </div>
      {
        receta.map((element)=>(
            <div key={element.id} className="container">
                <h1 className="title-receta">{element.plato}</h1>
                <img src={element.img} alt="plato" className="img" />
                <p className="receta">{element.receta}</p>

            </div>
        ))
      }
        </main>
   
        <Footer></Footer>
        </>
    )
}