'use client';
import Link from "next/link";
import Barra from "./componentes/navegador";



import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter]=useState(0); //arreglo con nom de variable y una funcion, parentesis el valor inical de esa variable
  const [mensaje, setMensaje]=useState("");

  const Add=(e: React.FormEvent) =>{
    e.preventDefault();
    setCounter(counter+1);
    setMensaje("");
      }
    
  const Restar=(e: React.FormEvent) =>{
    e.preventDefault();

    if(counter<1){
      setCounter(0);
      setMensaje("Ya no se peude seguir restando");
    }else{
      setCounter(counter-1);
      setMensaje("");
    }
    }
  

      

    return (

    <main>
        <Barra/> 
        <div className="fixed justify-center top-20 left-0 w-full p-4 flex gap-5 items-center">
            <form>
                <h1 className="text-center text-gray-700">Contador</h1>
                <h1 className="text-center text-gray-700">{counter}</h1>

                <div className="grid gap-2">
                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit" onClick={Add}>Incrementar</button>
                
                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit" onClick={Restar}>Restar</button>
                </div>
                <div className="w-40 h-40  text-red-700"> {mensaje} </div>
            </form>
           

        </div>
        
    </main>
   


  );
}
