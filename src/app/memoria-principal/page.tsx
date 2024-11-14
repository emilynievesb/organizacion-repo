/* eslint-disable @next/next/no-img-element */

import DocumentButton from '../DocumentButton';
import React from 'react';

export default function MemoriaPrincipal() {
    return (
        <div className="p-8  bg-white text-gray-800 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Memoria Principal</h1>

            <p className="text-lg mb-6">
                La memoria principal, también conocida como memoria RAM (Random Access Memory), es el componente de almacenamiento temporal donde el procesador
                guarda los datos y programas que está utilizando en tiempo real. La memoria principal es volátil, lo que significa que pierde toda su
                información al apagar la computadora.
            </p>

            {/* Tipos de Memoria Principal */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Tipos de Memoria Principal:</h2>

                {/* RAM Section */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">RAM (Random Access Memory):</h3>
                    <p className="mb-2">
                        <strong>Características:</strong> Almacena datos de forma temporal y permite el acceso rápido por parte de la CPU.
                    </p>
                    <p>
                        <strong>Tipos:</strong>
                    </p>
                    <ul className="list-disc list-inside mb-2">
                        <li>
                            <strong>DRAM (Dynamic RAM):</strong> Requiere refrescos constantes de carga para mantener los datos.
                        </li>
                        <li>
                            <strong>SRAM (Static RAM):</strong> No necesita refresco, es más rápida y costosa.
                        </li>
                    </ul>
                    <img
                        src="https://electronicaonline.net/wp-content/uploads/2024/02/ram-estatica-y-dinamica-diferencias.webp" // Asegúrate de que esta imagen exista en la ruta indicada
                        alt="Diagrama comparativo entre DRAM y SRAM"
                        className="w-full h-auto max-w-md mx-auto mt-4"
                    />
                </div>

                {/* ROM Section */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">ROM (Read-Only Memory):</h3>
                    <p className="mb-2">
                        <strong>Características:</strong> Memoria de solo lectura que contiene instrucciones permanentes, como el firmware del sistema.
                    </p>
                    <p>
                        <strong>Tipos:</strong>
                    </p>
                    <ul className="list-disc list-inside mb-2">
                        <li>
                            <strong>PROM (Programmable ROM):</strong> Se programa una vez y no se puede modificar.
                        </li>
                        <li>
                            <strong>EPROM (Erasable Programmable ROM):</strong> Se puede borrar mediante luz ultravioleta y reprogramar.
                        </li>
                        <li>
                            <strong>EEPROM (Electrically Erasable Programmable ROM):</strong> Se puede borrar y reprogramar eléctricamente.
                        </li>
                    </ul>
                    <img
                        src="https://images.wondershare.com/recoverit/article/difference_between_rom_and_ram.jpg" // Asegúrate de que esta imagen exista en la ruta indicada
                        alt="Ejemplo visual de chips ROM y sus aplicaciones"
                        className="w-full h-auto max-w-md mx-auto mt-4"
                    />
                </div>
            </section>

            {/* Función de la Memoria Principal */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Función de la Memoria Principal</h2>
                <p className="mb-2">
                    Almacena temporalmente los datos y programas en uso para que la CPU pueda acceder a ellos rápidamente. Sirve como un espacio de trabajo
                    donde la CPU puede cargar y procesar datos de manera eficiente.
                </p>
            </section>

            {/* Características Clave */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Características Clave de la Memoria Principal</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <strong>Volatilidad:</strong> Pierde los datos al apagarse el sistema.
                    </li>
                    <li>
                        <strong>Capacidad de Almacenamiento:</strong> Mide la cantidad de datos que puede contener, normalmente en GB.
                    </li>
                    <li>
                        <strong>Velocidad:</strong> Se mide en términos de frecuencia (MHz o GHz), y afecta la rapidez con la que los datos se pueden leer y
                        escribir.
                    </li>
                    <li>
                        <strong>Latencia:</strong> El tiempo que tarda en responder a una solicitud de datos.
                    </li>
                </ul>
            </section>

            {/* Ejemplos de Uso */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Ejemplos de Uso</h2>
                <ul className="list-disc list-inside">
                    <li>
                        Cuando ejecutas un programa, los datos se cargan desde el almacenamiento secundario (como un disco duro o SSD) a la memoria RAM para su
                        procesamiento.
                    </li>
                    <li>La memoria principal permite la multitarea, ya que mantiene múltiples programas activos en la RAM al mismo tiempo.</li>
                </ul>
            </section>

            {/* Evolución de la Memoria Principal */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Evolución de la Memoria Principal</h2>
                <ul className="list-disc list-inside">
                    <li>
                        <strong>SDRAM (Synchronous DRAM):</strong> Sincronizada con el reloj del sistema, mejorando el rendimiento.
                    </li>
                    <li>
                        <strong>DDR SDRAM (Double Data Rate SDRAM):</strong> Duplica la tasa de transferencia al realizar operaciones en ambos flancos del
                        reloj.
                    </li>
                    <li>
                        <strong>DDR2, DDR3, DDR4, DDR5:</strong> Versiones mejoradas que aumentan la velocidad y eficiencia energética de la RAM.
                    </li>
                </ul>
                <img
                    src="https://i.blogs.es/d3638a/ram/450_1000.jpg" // Asegúrate de que esta imagen exista en la ruta indicada
                    alt="Ejemplos de módulos de memoria RAM DDR"
                    className="w-full h-auto max-w-md mx-auto mt-4"
                />
            </section>

            {/* Importancia en el Rendimiento del Sistema */}
            <section className="pb-10">
                <h2 className="text-2xl font-semibold mb-4 ">Importancia de la Memoria Principal en el Rendimiento del Sistema</h2>
                <p>
                    La memoria principal es esencial para el rendimiento general de un sistema, ya que actúa como el espacio de trabajo inmediato del
                    procesador, permitiéndole acceder rápidamente a los datos y aplicaciones en uso. Cuando se ejecutan programas, la CPU carga temporalmente
                    los datos en la RAM, lo que permite que el sistema procese información con mayor rapidez en comparación con acceder directamente desde un
                    almacenamiento secundario, como un disco duro o SSD. Una mayor capacidad de memoria RAM permite ejecutar múltiples aplicaciones a la vez y
                    facilita la multitarea sin ralentizar el rendimiento. Además, la velocidad y latencia de la memoria principal determinan cuán eficientemente
                    la CPU puede obtener y procesar datos, lo que es crucial para tareas que requieren alto rendimiento, como edición de video, juegos y
                    aplicaciones científicas. Por tanto, la cantidad y velocidad de la memoria RAM instalada impactan directamente en la fluidez y capacidad de
                    respuesta del sistema, siendo uno de los factores principales para evitar cuellos de botella en la ejecución de aplicaciones intensivas en
                    recursos.
                </p>
            </section>
            <DocumentButton url="https://mailudesedu-my.sharepoint.com/:u:/g/personal/01220371022_mail_udes_edu_co/Ef95a3tGRrhEqczCAYWHPygB1ClysgfhS40We-5X96zDkQ?e=0a01Z8" />
        </div>
    );
}
