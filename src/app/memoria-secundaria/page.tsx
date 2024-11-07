/* eslint-disable @next/next/no-img-element */
// src/components/MemoriasSecundarias.tsx
import React from 'react';

export default function MemoriasSecundarias() {
    return (
        <div className="p-8 bg-white text-gray-800 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Memorias Secundarias</h1>

            <p className="text-lg mb-6">
                Las memorias secundarias son dispositivos de almacenamiento no volátil que se utilizan para guardar grandes cantidades de datos de forma
                permanente o a largo plazo. A diferencia de la memoria principal (RAM), las memorias secundarias retienen los datos incluso cuando el sistema se
                apaga, permitiendo el almacenamiento de archivos, aplicaciones y sistemas operativos.
            </p>

            {/* Tipos de Memoria Secundaria */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Tipos de Memoria Secundaria:</h2>

                {/* Disco Duro */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Disco Duro (HDD - Hard Disk Drive):</h3>
                    <p className="mb-2">
                        <strong>Características:</strong> Utiliza platos magnéticos para almacenar datos. Ofrece gran capacidad a un menor costo, pero es más
                        lento que otros tipos de almacenamiento.
                    </p>
                    <p>
                        <strong>Aplicaciones:</strong> Ideal para almacenar grandes cantidades de información como documentos, aplicaciones y archivos
                        multimedia.
                    </p>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Hard_drive-es.svg" // Asegúrate de que esta imagen exista en la ruta indicada
                        alt="Diagrama de un disco duro mostrando los platos magnéticos y el brazo lector"
                        className="w-full h-auto max-w-md mx-auto mt-4"
                    />
                </div>

                {/* Unidad de Estado Sólido */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Unidad de Estado Sólido (SSD - Solid State Drive):</h3>
                    <p className="mb-2">
                        <strong>Características:</strong> Almacenamiento basado en memoria flash que ofrece velocidades de lectura/escritura significativamente
                        superiores a los discos duros.
                    </p>
                    <p>
                        <strong>Aplicaciones:</strong> Popular en dispositivos modernos por su rapidez, usado para mejorar tiempos de carga de sistemas
                        operativos y aplicaciones.
                    </p>
                    <img
                        src="https://4650993.fs1.hubspotusercontent-na1.net/hub/4650993/hubfs/New_Avast_Academy/ssd_vs_hdd_which_should_you_buy_academy_2nd_refresh/Avast-SSD-vs-HDD-EN.png?width=550&height=396&name=Avast-SSD-vs-HDD-EN.png" // Asegúrate de que esta imagen exista en la ruta indicada
                        alt="Comparación de velocidad entre HDD y SSD"
                        className="w-full h-auto max-w-md mx-auto mt-4"
                    />
                </div>

                {/* Memoria Flash */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Memoria Flash (USB y Tarjetas de Memoria):</h3>
                    <p className="mb-2">
                        <strong>Características:</strong> Almacenamiento compacto y portátil basado en tecnología flash. Ideal para transportar y transferir
                        datos entre dispositivos.
                    </p>
                    <p>
                        <strong>Aplicaciones:</strong> Muy común en memorias USB y tarjetas SD para cámaras, teléfonos y otros dispositivos.
                    </p>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzl3j8OuckwbYqiOukr4vr2XGMjb41eRg57w&s" // Asegúrate de que esta imagen exista en la ruta indicada
                        alt="Ejemplo de memoria USB y tarjeta de memoria"
                        className="w-full h-auto max-w-md mx-auto mt-4"
                    />
                </div>

                {/* Discos Ópticos */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Discos Ópticos (CD, DVD, Blu-ray):</h3>
                    <p className="mb-2">
                        <strong>Características:</strong> Utilizan láseres para leer y escribir datos en discos de policarbonato. Aunque han perdido
                        popularidad, aún se usan para almacenamiento de medios y respaldo de datos.
                    </p>
                    <p>
                        <strong>Aplicaciones:</strong> Archivos multimedia, software y copias de seguridad de datos.
                    </p>
                    <img
                        src="https://e97817d9aa.cbaul-cdnwnd.com/3f8dadb8554eece00e2ee2119d295a03/200000073-b5665b6624/unidades.jpg" // Asegúrate de que esta imagen exista en la ruta indicada
                        alt="Ejemplo de un disco óptico y su estructura"
                        className="w-full h-auto max-w-md mx-auto mt-4"
                    />
                </div>
            </section>

            {/* Función de las Memorias Secundarias */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Función de las Memorias Secundarias</h2>
                <p className="mb-2">
                    Almacenan de manera permanente datos que no están en uso inmediato por la CPU, sirviendo como un repositorio de largo plazo. Esto incluye
                    desde el sistema operativo hasta archivos de usuario y aplicaciones.
                </p>
                <p>
                    Cuando se requiere un archivo o programa, la memoria secundaria transfiere los datos a la memoria principal, permitiendo que la CPU los
                    procese.
                </p>
            </section>

            {/* Características Clave */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Características Clave de las Memorias Secundarias</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <strong>No Volatilidad:</strong> Retienen la información cuando el sistema se apaga.
                    </li>
                    <li>
                        <strong>Capacidad de Almacenamiento:</strong> Generalmente, tienen una capacidad mucho mayor que la memoria principal.
                    </li>
                    <li>
                        <strong>Durabilidad:</strong> Su vida útil depende del tipo de tecnología (por ejemplo, SSDs tienen ciclos limitados de escritura).
                    </li>
                    <li>
                        <strong>Velocidad:</strong> Varía según el tipo; los SSD son mucho más rápidos que los HDD, pero generalmente más caros.
                    </li>
                </ul>
            </section>

            {/* Importancia en el Sistema */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Importancia de las Memorias Secundarias en el Sistema</h2>
                <p>
                    Las memorias secundarias son fundamentales para cualquier sistema, ya que permiten almacenar y recuperar grandes volúmenes de datos
                    necesarios para la operación diaria y a largo plazo. A diferencia de la memoria RAM, su permanencia permite que el usuario conserve archivos
                    y programas sin riesgo de pérdida al apagar el sistema. La elección entre tipos de memoria secundaria (HDD, SSD, flash, óptica) depende de
                    la necesidad de velocidad, capacidad, portabilidad y costo, impactando directamente en el rendimiento general y en la experiencia de
                    usuario. Un sistema con almacenamiento SSD, por ejemplo, mejora notablemente los tiempos de carga y respuesta de las aplicaciones, lo cual
                    es clave para sistemas que requieren rapidez y eficiencia.
                </p>
            </section>
        </div>
    );
}
