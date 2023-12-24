import { useState, useRef } from "react";
import londres from '/public/cuidades/londres.png';
import dubai from '/public/cuidades/dubai.png';
import paris from '/public/cuidades/paris.png';
import newYork from '/public/cuidades/new-york.png';
import tokio from '/public/cuidades/tokio.png'
import logo from '/public/mi logo.svg';

function App() {
  const InputRef = useRef(null);

  // Indica si se ve la descripcion o no
  const [view, setView] = useState(false);

     function ver(){
       setView(preview => !preview);
     }

  const [carts, setCarts] = useState([
    {
      "imagen": <img src={paris} alt="paris" />,
      "descripcion": "¿Viste cual es la torre del fondo?"
    },
    {
      "imagen": <img src={newYork} alt="nueva york" />,
      "descripcion": "¿Conoces ese parque?"
    },
    {
      "imagen": <img src={dubai} alt="dubai" />,
      "descripcion": "¿Ese edificio es muy alto verdad?"
    },
    {
      "imagen": <img src={londres} alt="londres" />,
      "descripcion": "¿Conoces ese reloj?"
    },
    {
      "imagen": <img src={tokio} alt="tokio" />,
      "descripcion": "¿Ves toda la tegnologia y esa montaña tan iconica?"
    }

  ]);

  function deleteC(){
       if(carts.length > 3){
    setCarts((prevCarts) => prevCarts.slice(1))
       }else{
        setCarts((prevCarts) => [...prevCarts].reverse());
       }
  }   

  function comprobar(e) {
    e.preventDefault();
    if(carts.length == 1){
      setCarts((prevCarts) => prevCarts =  copy.slice())
    }
    if(InputRef.current.value.toLowerCase() == carts[0].imagen.props.alt.toLowerCase()){
      const updatedCarts = [...carts.slice(1), carts[0]]; 
      setCarts(updatedCarts);
    }
  
    InputRef.current.value = '';
  }

  return (
    <>
      <img src={logo} alt="logo" className="logo" />
      <h1>¿Qué ciudad es?</h1>
      <br /><br />

      {view ? ( 
          <>
             <h3>Da click para ver la imagen</h3>
        <div className="descripcion" onClick={ver}>
          <h1>{carts[0].descripcion}</h1>
        </div>
           </>
      ) : (
           <div className="imagen">
        <h3>Da click para ver una pista</h3>
        <span onClick={deleteC} className="tacha">X</span>
        <br />
        <img src={carts[0].imagen.props.src} onClick={ver} />
          </div>
      )}

      <form onSubmit={comprobar}>
        <input ref={InputRef} type="text" placeholder="¿Qué ciudad es?" />
        <input type="submit" />
      </form>
    </>
  );
 }

export default App;