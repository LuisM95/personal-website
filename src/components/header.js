import React from 'react';
import ilustration from '../imgs/perfil.svg'

export default () => (
    <header className="bg-gray-500">
        <div className="container mx-auto p-12 max-w-4xl flex justify-center items-center">
            <div className="flex-1">
                <h1 className='font-bold text-6xl text-blue-700'>Hola Mi nombre es Luis Martel</h1>
                <p className='text-xl'>Hola soy una persona apasionada por la informatica, me gusta mucho el area de Desarrollo de software y actualmente estoy estudiando Desarrollo Web</p>
            </div>
            <img src={ilustration} alt="perfil picture" style={{ height:"200px"}}></img>
        </div>
    </header>
)