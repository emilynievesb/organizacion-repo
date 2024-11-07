/* eslint-disable @next/next/no-img-element */
// src/components/DispositivosES.tsx
import React from 'react';

export default function DispositivosES() {
    return (
        <div className="p-8 bg-white text-gray-800 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Dispositivos de Entrada/Salida (E/S)</h1>

            <p className="text-lg mb-6">
                Los dispositivos de entrada/salida (E/S) son componentes de hardware que permiten la comunicación entre la computadora y el usuario o con otros
                sistemas externos. Los dispositivos de entrada capturan información externa y la envían al sistema para su procesamiento, mientras que los
                dispositivos de salida presentan el resultado procesado al usuario.
            </p>

            {/* Tipos de Dispositivos de E/S */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Tipos de Dispositivos de E/S:</h2>

                {/* Dispositivos de Entrada */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Dispositivos de Entrada:</h3>
                    <p className="mb-2">
                        <strong>Definición:</strong> Permiten introducir datos o comandos en el sistema.
                    </p>
                    <p>
                        <strong>Ejemplos Comunes:</strong>
                    </p>
                    <ul className="list-disc list-inside mb-2">
                        <li>
                            <strong>Teclado:</strong> Permite la entrada de texto y comandos.
                        </li>
                        <li>
                            <strong>Mouse:</strong> Dispositivo apuntador que permite interactuar con la interfaz gráfica.
                        </li>
                        <li>
                            <strong>Escáner:</strong> Convierte documentos físicos en imágenes digitales.
                        </li>
                        <li>
                            <strong>Micrófono:</strong> Captura audio y lo convierte en datos digitales.
                        </li>
                    </ul>
                    <img
                        src="https://us.123rf.com/450wm/markolpakov/markolpakov1908/markolpakov190800281/128901673-icono-de-color-de-teclado-y-mouse-en-estilo-plano.jpg?ver=6"
                        alt="Ejemplo de un teclado y un mouse con etiquetas"
                        className="w-full h-auto max-w-md mx-auto mt-4"
                    />
                </div>

                {/* Dispositivos de Salida */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Dispositivos de Salida:</h3>
                    <p className="mb-2">
                        <strong>Definición:</strong> Permiten presentar la información procesada al usuario.
                    </p>
                    <p>
                        <strong>Ejemplos Comunes:</strong>
                    </p>
                    <ul className="list-disc list-inside mb-2">
                        <li>
                            <strong>Monitor:</strong> Muestra visualmente la interfaz gráfica y el resultado de las operaciones.
                        </li>
                        <li>
                            <strong>Impresora:</strong> Produce una copia física de documentos digitales.
                        </li>
                        <li>
                            <strong>Altavoces:</strong> Reproducen el audio generado por el sistema.
                        </li>
                    </ul>
                    <img
                        src="https://cards.algoreducation.com/_next/image?url=https%3A%2F%2Ffiles.algoreducation.com%2Fproduction-ts%2F__S3__62ea80d0-b5c8-40cf-b73a-df1ca1cdb955&w=3840&q=75"
                        alt="Comparación entre un monitor y una impresora en funcionamiento"
                        className="w-full h-auto max-w-md mx-auto mt-4"
                    />
                </div>

                {/* Dispositivos de Entrada/Salida (mixtos) */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Dispositivos de Entrada/Salida (mixtos):</h3>
                    <p className="mb-2">
                        <strong>Definición:</strong> Pueden funcionar como dispositivos de entrada y salida.
                    </p>
                    <p>
                        <strong>Ejemplos Comunes:</strong>
                    </p>
                    <ul className="list-disc list-inside mb-2">
                        <li>
                            <strong>Pantalla Táctil:</strong> Actúa como dispositivo de entrada al recibir toques y como salida al mostrar imágenes.
                        </li>
                        <li>
                            <strong>Memoria USB:</strong> Permite leer y escribir datos en el dispositivo.
                        </li>
                    </ul>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSCWNyjpdqhHxmWQxAizccwmoui7UhzWqlg&s"
                        alt="Ejemplo de una pantalla táctil interactiva"
                        className="w-full h-auto max-w-md mx-auto mt-4"
                    />
                </div>
            </section>

            {/* Función de los Dispositivos de E/S */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Función de los Dispositivos de E/S</h2>
                <p className="mb-2">
                    Facilitan la interacción entre el usuario y la computadora, permitiendo tanto la inserción de datos como la recepción de información
                    procesada.
                </p>
                <p>Son esenciales para la comunicación con periféricos externos y permiten el flujo de datos hacia y desde el sistema.</p>
            </section>

            {/* Características Clave de los Dispositivos de E/S */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Características Clave de los Dispositivos de E/S</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <strong>Velocidad de Transferencia:</strong> Varía según el tipo de dispositivo; influye en la rapidez con la que se pueden enviar o
                        recibir datos.
                    </li>
                    <li>
                        <strong>Compatibilidad:</strong> Algunos dispositivos requieren software específico o controladores para funcionar.
                    </li>
                    <li>
                        <strong>Conectividad:</strong> Pueden ser conectados mediante cables (USB, HDMI, VGA) o de forma inalámbrica (Bluetooth, Wi-Fi).
                    </li>
                </ul>
            </section>

            {/* Importancia de los Dispositivos de E/S en el Sistema */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Importancia de los Dispositivos de E/S en el Sistema</h2>
                <p className="pb-10">
                    Los dispositivos de E/S son esenciales para la funcionalidad de cualquier sistema informático, ya que permiten la interacción directa entre
                    el usuario y la computadora. Sin ellos, sería imposible introducir datos ni obtener resultados de manera accesible. Además, la selección de
                    dispositivos de E/S puede mejorar la eficiencia y experiencia del usuario; por ejemplo, un monitor de alta resolución ofrece mejor calidad
                    de visualización, mientras que una impresora rápida optimiza la producción de documentos físicos. La tecnología avanza continuamente para
                    ofrecer dispositivos de E/S más rápidos, intuitivos y eficientes, adaptándose a las necesidades cambiantes de los usuarios.
                </p>
            </section>
        </div>
    );
}
