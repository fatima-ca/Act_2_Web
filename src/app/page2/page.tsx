'use client';
import Link from "next/link";
import Barra from "../componentes/navegador";
import { useState } from 'react';



export default function Colores() {
    const [color, setColor]=useState("bg-gray-700") //arreglo con nom de variable y una funcion, parentesis el valor inical de esa variable

    const Azul=(e: React.FormEvent) =>{
        e.preventDefault();
        setColor("bg-blue-700");
        }

    const Rosa=(e: React.FormEvent) =>{
        e.preventDefault();
        setColor("bg-pink-700");
        }
    
        const Verde=(e: React.FormEvent) =>{
            e.preventDefault();
            setColor("bg-green-700");
            }
    
        const Amarillo=(e: React.FormEvent) =>{
            e.preventDefault();
            setColor("bg-yellow-700");
            }


  return (
    <main>
        <Barra/> 
        
        <form className="fixed justify-center top-20 w-full p-100 flex gap-5 grid">
            <div className={`w-40 h-40 ${color}`}></div>     
            
            <div className="grid grid-cols-2 gap-0">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={Azul}
                    type="submit">Azul</button>

                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={Rosa}
                    type="submit">Pink</button>

                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={Verde}
                    type="submit">Green</button>

                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={Amarillo}
                    type="submit">Yellow</button>
            
            </div>

        </form>
    </main>
   


  );
}