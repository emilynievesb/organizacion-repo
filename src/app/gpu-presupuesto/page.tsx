/* eslint-disable @next/next/no-img-element */
// src/components/GPUPresupuesto4K.tsx

import DocumentButton from '../DocumentButton';
import React from 'react';

export default function GPUPresupuesto4K() {
    return (
        <div className="p-8 bg-white text-gray-800 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">GPU - Procesamiento de Video 4K Óptimo y con la Mitad del Presupuesto</h1>

            <p className="text-lg mb-6">
                Una GPU (Graphics Processing Unit) es un procesador especializado en el procesamiento de gráficos y tareas de cómputo paralelo. Las GPUs
                modernas permiten la reproducción y edición de contenido de alta resolución, como video en 4K, y son esenciales para tareas de diseño gráfico,
                modelado 3D, y videojuegos. Sin embargo, debido a la variedad de opciones en el mercado, es posible encontrar GPUs que ofrecen un rendimiento
                adecuado para 4K sin necesidad de gastar en los modelos más costosos.
            </p>

            {/* Conceptos Clave para el Procesamiento de Video 4K */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Conceptos Clave para el Procesamiento de Video 4K:</h2>

                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                        <strong>Resolución 4K:</strong> Representa una resolución de 3840 x 2160 píxeles, cuatro veces la resolución Full HD. Procesar esta
                        cantidad de píxeles requiere una GPU con gran capacidad de procesamiento y memoria.
                    </li>
                    <li>
                        <strong>Memoria de Video (VRAM):</strong> La VRAM es esencial para la gestión de texturas y gráficos de alta resolución. Para 4K, una
                        GPU con al menos 6-8 GB de VRAM es recomendada para asegurar fluidez en el procesamiento.
                    </li>
                    <li>
                        <strong>Rendimiento en Tareas Paralelas:</strong> Las GPUs están diseñadas para manejar miles de operaciones en paralelo, lo cual es
                        ventajoso para la edición de video 4K y el renderizado en tiempo real.
                    </li>
                    <li>
                        <strong>Compatibilidad con Codec de Video (H.264, H.265/HEVC):</strong> Los codecs de video son formatos de compresión que ayudan a
                        reducir el tamaño de los archivos de video sin pérdida significativa de calidad. GPUs modernas incluyen soporte para codecs H.265,
                        optimizados para video 4K.
                    </li>
                </ul>

                <img
                    src="https://www.hugorodriguez.com/blog/wp-content/uploads/2018/12/Framerate-4K-vs-FullHD-500x344.jpg" // Asegúrate de que esta imagen exista en la ruta indicada
                    alt="Diagrama de resolución 4K comparada con Full HD y HD"
                    className="w-full h-auto max-w-md mx-auto mt-4"
                />
            </section>

            {/* Características a Considerar para una GPU de Presupuesto para 4K */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Características a Considerar para una GPU de Presupuesto para 4K:</h2>

                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                        <strong>Relación Costo-Rendimiento:</strong> Algunas GPUs de gama media ofrecen un rendimiento adecuado para video 4K sin el costo de
                        los modelos de gama alta.
                    </li>
                    <li>
                        <strong>Soporte para Tecnología de Escalado (DLSS, FSR):</strong> Tecnologías como DLSS de NVIDIA o FSR de AMD permiten la reproducción
                        en resoluciones altas utilizando técnicas de escalado inteligente, que reducen la carga en la GPU.
                    </li>
                    <li>
                        <strong>Rendimiento en Edición de Video:</strong> Si la GPU se usará principalmente para edición de video, es preferible una optimizada
                        para software de edición como Adobe Premiere o DaVinci Resolve.
                    </li>
                    <li>
                        <strong>Consumo Energético y Requerimientos de Energía:</strong> Las GPUs de gama media y baja generalmente consumen menos energía, lo
                        cual ayuda a reducir costos de consumo y de enfriamiento.
                    </li>
                </ul>

                <img
                    src="https://www.hd-tecnologia.com/imagenes/articulos/2023/06/Mucha-Potencia-y-rendimiento-las-NVIDIA-RTX-40-SUPER-con-mas-VRAM-llegaran-en-2024.jpg" // Asegúrate de que esta imagen exista en la ruta indicada
                    alt="Comparación de modelos de GPU con especificaciones de VRAM y rendimiento"
                    className="w-full h-auto max-w-md mx-auto mt-4"
                />
            </section>

            {/* Ejemplos de GPUs de Presupuesto para Video 4K */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Ejemplos de GPUs de Presupuesto para Video 4K:</h2>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold">NVIDIA GeForce GTX 1660 Super / GTX 1660 Ti:</h3>
                    <p>
                        Ofrecen buen rendimiento para video 4K en tareas de edición básica y reproducción multimedia. Sin embargo, no son las mejores opciones
                        para gaming en 4K, ya que su rendimiento en juegos es limitado a resoluciones más bajas.
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold">AMD Radeon RX 5700:</h3>
                    <p>
                        Con 8 GB de VRAM y buena compatibilidad con codecs de video modernos, esta GPU permite un procesamiento fluido de contenido 4K. Es una
                        opción popular para quienes buscan un equilibrio entre costo y rendimiento.
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold">NVIDIA RTX 2060 / RTX 3050:</h3>
                    <p>
                        Modelos de gama media que ofrecen soporte para DLSS en el caso de la serie RTX, permitiendo escalado de resolución sin pérdida
                        significativa de calidad. Esto es ideal para quienes necesitan edición y visualización de 4K sin gastar en modelos de gama alta.
                    </p>
                </div>
            </section>

            {/* Ventajas de Optar por una GPU de Presupuesto para 4K */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Ventajas de Optar por una GPU de Presupuesto para 4K:</h2>

                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Ahorro de Costos:</strong> Permite acceder a capacidades de 4K sin necesidad de invertir en GPUs de gama alta, manteniendo un
                        rendimiento aceptable en la mayoría de las tareas.
                    </li>
                    <li>
                        <strong>Eficiencia Energética:</strong> Las GPUs de gama media suelen ser más eficientes en términos de consumo energético y requieren
                        menos enfriamiento.
                    </li>
                    <li>
                        <strong>Disponibilidad y Actualización:</strong> Al tener un menor costo, es más factible actualizar la GPU con cada generación sin un
                        gasto excesivo, manteniendo el sistema al día con las demandas de software.
                    </li>
                </ul>
            </section>

            {/* Limitaciones de una GPU de Presupuesto en 4K */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Limitaciones de una GPU de Presupuesto en 4K:</h2>

                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Rendimiento Limitado en Gaming:</strong> Estas GPUs pueden reproducir contenido 4K de forma aceptable, pero no están diseñadas
                        para videojuegos en 4K a configuraciones gráficas altas.
                    </li>
                    <li>
                        <strong>Menor Potencia para Renderizado Extremo:</strong> Para trabajos de renderizado intensivo o en tiempo real, es posible que estas
                        GPUs no alcancen el rendimiento de las opciones de gama alta.
                    </li>
                </ul>
            </section>

            {/* Importancia del Procesamiento de Video 4K en Presupuesto */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Importancia del Procesamiento de Video 4K en Presupuesto</h2>
                <p>
                    A medida que la resolución 4K se vuelve más común, tanto en contenido de entretenimiento como en aplicaciones profesionales, la posibilidad
                    de procesar video 4K sin invertir en una GPU costosa abre oportunidades para un mayor número de usuarios. Tanto creadores de contenido como
                    entusiastas pueden beneficiarse de una GPU de presupuesto optimizada para 4K, logrando resultados de alta calidad sin comprometer su
                    inversión.
                </p>
                <p className="mt-4 pb-10">
                    Este tipo de dispositivos permite manejar proyectos audiovisuales, edición y reproducción de contenido 4K con fluidez, haciendo que la
                    tecnología sea más accesible y alcanzable para una mayor audiencia.
                </p>
            </section>
            <DocumentButton url="https://mailudesedu-my.sharepoint.com/:w:/g/personal/01220371022_mail_udes_edu_co/ERcBzMkw5DNBtlPaw95v6yoBVs7_hqXPYhSd3hfE1bIGuA?e=H3DTIF" />
        </div>
    );
}
