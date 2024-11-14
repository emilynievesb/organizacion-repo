import React from 'react';

// Definimos la interfaz de las props
interface DocumentButtonProps {
    url: string;
}

// Usamos la interfaz para tipar las props del componente
export default function DocumentButton({ url }: DocumentButtonProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-opacity-80 transition duration-200"
        >
            Ver archivo de la actividad del tema
        </a>
    );
}
