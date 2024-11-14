/* eslint-disable @next/next/no-img-element */
// src/components/ImpactoNuevasTecnologiasGPU.tsx

import DocumentButton from '../DocumentButton';
import React from 'react';

export default function ImpactoNuevasTecnologiasGPU() {
    return (
        <div className="p-8 bg-white text-gray-800 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">GPU - Impacto de las Nuevas Tecnologías</h1>

            <p className="text-lg mb-6">
                La evolución de las tecnologías en GPUs ha transformado la manera en que procesamos gráficos y ejecutamos aplicaciones de alto rendimiento.
                Estas innovaciones han mejorado la velocidad, eficiencia energética, y la calidad visual en videojuegos, edición de video, simulaciones
                científicas y aprendizaje automático. Nuevas tecnologías como el Ray Tracing, DLSS, FSR y la computación en paralelo han redefinido los límites
                del procesamiento gráfico, permitiendo experiencias visuales más realistas y un procesamiento más eficiente.
            </p>

            {/* Principales Nuevas Tecnologías en GPUs y su Impacto */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Principales Nuevas Tecnologías en GPUs y su Impacto:</h2>

                {/* Ray Tracing */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Ray Tracing</h3>
                    <p className="mb-2">
                        <strong>Descripción:</strong> Ray Tracing es una técnica de renderizado que simula el comportamiento realista de la luz, logrando
                        reflejos, sombras y efectos de iluminación más naturales.
                    </p>
                    <p>
                        <strong>Impacto:</strong> Esta tecnología permite una experiencia visual altamente inmersiva en videojuegos y aplicaciones de diseño.
                        Sin embargo, requiere un gran poder de procesamiento, por lo que solo GPUs modernas con hardware dedicado (como las series RTX de
                        NVIDIA) pueden manejar Ray Tracing en tiempo real sin sacrificar el rendimiento.
                    </p>
                    <img
                        src="https://preview.redd.it/azp7mfau83j91.png?auto=webp&s=d7977034ec06de38109516e6d4767d78a1054284"
                        alt="Comparación visual de una escena con y sin Ray Tracing"
                        className="w-full h-auto max-w-md mx-auto mt-4"
                    />
                </div>

                {/* DLSS (Deep Learning Super Sampling) */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">DLSS (Deep Learning Super Sampling)</h3>
                    <p className="mb-2">
                        <strong>Descripción:</strong> DLSS es una tecnología de NVIDIA que utiliza inteligencia artificial para renderizar imágenes en
                        resoluciones más bajas y luego escalarlas, obteniendo una calidad cercana a 4K sin el impacto de rendimiento asociado.
                    </p>
                    <p>
                        <strong>Impacto:</strong> DLSS permite a los usuarios disfrutar de gráficos de alta resolución y FPS altos en videojuegos, incluso en
                        GPUs de gama media. Esta tecnología también es eficiente en el consumo energético, lo cual es beneficioso para dispositivos portátiles y
                        aplicaciones de realidad virtual.
                    </p>
                </div>

                {/* FSR (FidelityFX Super Resolution) */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">FSR (FidelityFX Super Resolution)</h3>
                    <p className="mb-2">
                        <strong>Descripción:</strong> FSR es una tecnología de AMD similar a DLSS, que permite escalar resoluciones de manera inteligente para
                        mejorar el rendimiento sin comprometer la calidad visual.
                    </p>
                    <p>
                        <strong>Impacto:</strong> FSR es compatible con una gama más amplia de GPUs, no solo las de AMD, lo que la hace accesible para un mayor
                        número de usuarios. Esta tecnología beneficia especialmente a quienes buscan rendimiento en juegos sin sacrificar la calidad de imagen.
                    </p>
                </div>

                {/* Computación en Paralelo y CUDA */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Computación en Paralelo y CUDA (Compute Unified Device Architecture)</h3>
                    <p className="mb-2">
                        <strong>Descripción:</strong> CUDA es una plataforma de computación paralela de NVIDIA que permite a los desarrolladores aprovechar la
                        GPU para tareas que van más allá del procesamiento gráfico, como el aprendizaje automático, la simulación científica y el análisis de
                        grandes volúmenes de datos.
                    </p>
                    <p>
                        <strong>Impacto:</strong> La computación en paralelo ha ampliado el uso de GPUs en campos como la inteligencia artificial y el Big Data,
                        mejorando la velocidad de procesamiento y permitiendo cálculos complejos en menos tiempo. Esto ha hecho que las GPUs sean una opción
                        popular para aplicaciones más allá de los gráficos.
                    </p>
                    <img
                        src="https://hardzone.es/app/uploads-hardzone.es/2022/06/Nucleos-CUDA-Distribucion-Tareas.jpg?x=480&quality=80"
                        alt="Diagrama de procesamiento en paralelo utilizando núcleos CUDA"
                        className="w-full h-auto max-w-md mx-auto mt-4"
                    />
                </div>

                {/* Memoria GDDR6 y GDDR6X */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Memoria GDDR6 y GDDR6X</h3>
                    <p className="mb-2">
                        <strong>Descripción:</strong> La memoria GDDR6 y su versión mejorada GDDR6X ofrecen mayores velocidades de transferencia de datos,
                        mejorando el rendimiento de las GPUs en tareas de alta demanda.
                    </p>
                    <p>
                        <strong>Impacto:</strong> Estas versiones de memoria permiten que las GPUs manejen cargas de trabajo más pesadas, como gráficos en 4K y
                        videojuegos de alta demanda, sin experimentar retrasos. La velocidad de la memoria también es crucial para aplicaciones de inteligencia
                        artificial y simulaciones complejas.
                    </p>
                </div>

                {/* Soporte para Codec H.265/HEVC y AV1 */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Soporte para Codec H.265/HEVC y AV1</h3>
                    <p className="mb-2">
                        <strong>Descripción:</strong> Los codecs H.265 y AV1 son estándares modernos de compresión de video que permiten una calidad de imagen
                        superior con menor tamaño de archivo.
                    </p>
                    <p>
                        <strong>Impacto:</strong> La compatibilidad con estos codecs permite una reproducción y transmisión de video en 4K y 8K de manera
                        eficiente, reduciendo la demanda de ancho de banda y mejorando la experiencia de streaming.
                    </p>
                    <img
                        src="https://hardzone.es/app/uploads-hardzone.es/2020/02/h265vsh264.jpg?x=480&quality=80" // Asegúrate de que esta imagen exista en la ruta indicada
                        alt="Comparación de compresión de video con H.264 vs H.265 en términos de calidad y tamaño de archivo"
                        className="w-full h-auto max-w-md mx-auto mt-4"
                    />
                </div>
            </section>

            {/* Ventajas de las Nuevas Tecnologías en GPUs */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Ventajas de las Nuevas Tecnologías en GPUs:</h2>

                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Mayor Realismo en Gráficos:</strong> Tecnologías como Ray Tracing y DLSS mejoran la calidad visual y hacen que los videojuegos y
                        las aplicaciones gráficas sean más inmersivas.
                    </li>
                    <li>
                        <strong>Eficiencia en Aplicaciones No Gráficas:</strong> La computación en paralelo y CUDA han expandido el uso de GPUs a áreas como el
                        aprendizaje automático y la simulación científica, optimizando el tiempo de procesamiento.
                    </li>
                    <li>
                        <strong>Mejor Uso de Recursos Energéticos:</strong> Tecnologías de escalado inteligente como DLSS y FSR reducen la carga de trabajo de
                        la GPU, consumiendo menos energía y generando menos calor, ideal para dispositivos portátiles.
                    </li>
                </ul>
            </section>

            {/* Desafíos y Limitaciones */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Desafíos y Limitaciones:</h2>

                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Requerimiento de Hardware Avanzado:</strong> Muchas de estas tecnologías solo están disponibles en GPUs de última generación, lo
                        que limita su accesibilidad para quienes tienen dispositivos más antiguos.
                    </li>
                    <li>
                        <strong>Costo Elevado:</strong> Las GPUs que incluyen tecnologías avanzadas suelen tener precios más altos, lo cual puede ser una
                        barrera para algunos usuarios.
                    </li>
                    <li>
                        <strong>Optimización de Software:</strong> La implementación de estas tecnologías depende de optimizaciones por parte de los
                        desarrolladores, afectando la experiencia en títulos o programas no optimizados.
                    </li>
                </ul>
            </section>

            {/* Importancia del Impacto de las Nuevas Tecnologías en GPUs */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Importancia del Impacto de las Nuevas Tecnologías en GPUs</h2>
                <p>
                    Las nuevas tecnologías en GPUs han revolucionado el procesamiento gráfico y ampliado su aplicación a campos que van más allá de los gráficos
                    convencionales, como la inteligencia artificial y el análisis de datos. Estas innovaciones han mejorado la eficiencia energética, la calidad
                    visual y el rendimiento general de las GPUs, permitiendo experiencias de usuario más fluidas y realistas.
                </p>
                <p className="mt-4 mb-10">
                    A medida que la demanda de contenido visual de alta calidad y aplicaciones de cómputo intensivo sigue creciendo, el desarrollo de nuevas
                    tecnologías en GPUs es esencial para satisfacer las expectativas de rendimiento y expandir el alcance de su uso en diversas industrias.
                    Estas tecnologías no solo benefician a los jugadores y diseñadores, sino también a investigadores y profesionales en áreas como la
                    simulación científica y el aprendizaje automático, donde el procesamiento paralelo es crucial.
                </p>
            </section>
            <DocumentButton url="https://mailudesedu-my.sharepoint.com/:w:/g/personal/01220371022_mail_udes_edu_co/EZ1bUg8aBDtAmcn5pEccAtABm-6BKQi9tQT6eThNTGdzzw?e=QcsZzF" />
        </div>
    );
}
