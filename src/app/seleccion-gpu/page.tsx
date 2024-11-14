/* eslint-disable @next/next/no-img-element */
// src/components/SeleccionGPU.tsx

import DocumentButton from '../DocumentButton';
import React from 'react';

export default function SeleccionGPU() {
    return (
        <div className="p-8 bg-white text-gray-800 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">GPU - Características Decisorias para Selección de GPU’s</h1>

            <p className="text-lg mb-6">
                Elegir una GPU adecuada depende de una serie de características técnicas y de los objetivos específicos del usuario. Las GPUs no solo varían en
                precio, sino también en rendimiento, consumo energético y capacidad de procesamiento gráfico. Para seleccionar una GPU que se ajuste a tus
                necesidades, es importante conocer y evaluar los factores decisivos que determinan su desempeño en tareas como videojuegos, edición de video,
                diseño gráfico, modelado 3D y otras aplicaciones intensivas en gráficos.
            </p>

            {/* Principales Características a Considerar para la Selección de una GPU */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Principales Características a Considerar para la Selección de una GPU:</h2>

                <ul className="list-disc list-inside space-y-4 mb-4">
                    <li>
                        <strong>Memoria de Video (VRAM):</strong> La VRAM es fundamental para el manejo de gráficos de alta resolución y texturas complejas. En
                        aplicaciones 4K, 8 GB de VRAM o más son recomendables, mientras que para resoluciones más bajas, 4-6 GB suelen ser suficientes.
                    </li>
                    <li>
                        <strong>Núcleos CUDA o Stream Processors:</strong> Los núcleos CUDA (en GPUs NVIDIA) o los Stream Processors (en GPUs AMD) determinan la
                        capacidad de procesamiento paralelo de la GPU. Cuantos más núcleos tenga una GPU, mayor será su capacidad para manejar tareas gráficas y
                        cálculos intensivos.
                    </li>
                    <li>
                        <strong>Frecuencia de Reloj:</strong> La velocidad de reloj de una GPU, medida en MHz, indica cuántas operaciones puede realizar por
                        segundo. Una mayor frecuencia generalmente mejora el rendimiento, especialmente en juegos y renderizados en tiempo real.
                    </li>
                    <li>
                        <strong>Tecnología de Escalado (DLSS, FSR):</strong> Tecnologías como DLSS de NVIDIA y FSR de AMD permiten renderizar en resoluciones
                        más bajas y luego escalar la imagen a resoluciones mayores sin pérdida significativa de calidad. Esto es especialmente útil para gaming
                        en 4K o aplicaciones de realidad virtual.
                    </li>
                    <li>
                        <strong>Compatibilidad de Software y Codec:</strong> Algunas GPUs están optimizadas para ciertos programas de edición y diseño y ofrecen
                        soporte de hardware para codecs de video modernos, lo que permite una edición de video más eficiente y reduce el tiempo de renderizado.
                    </li>
                    <li>
                        <strong>Consumo de Energía (TDP - Thermal Design Power):</strong> El TDP de una GPU indica la cantidad de energía que consume y el calor
                        que genera. GPUs de alto rendimiento suelen tener un TDP elevado, lo cual requiere una fuente de alimentación potente y un sistema de
                        enfriamiento adecuado.
                    </li>
                    <li>
                        <strong>Ray Tracing:</strong> El Ray Tracing es una tecnología de renderizado que simula el comportamiento realista de la luz, mejorando
                        la calidad gráfica en videojuegos y aplicaciones de diseño. Las GPUs con hardware dedicado para Ray Tracing ofrecen gráficos más
                        inmersivos y detallados.
                    </li>
                    <li>
                        <strong>Relación Costo-Beneficio:</strong> Comparar el rendimiento en benchmarks y el precio de varias GPUs permite encontrar una opción
                        que maximice el rendimiento por cada unidad monetaria invertida.
                    </li>
                </ul>

                <img
                    src="https://hardzone.es/app/uploads-hardzone.es/2019/11/que-es-vram-1000x376-1.jpg" // Asegúrate de que esta imagen exista en la ruta indicada
                    alt="Comparación de distintos tamaños de VRAM y sus aplicaciones recomendadas"
                    className="w-full h-auto max-w-md mx-auto mt-4"
                />
            </section>

            {/* Ventajas de Conocer las Características Decisorias de una GPU */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Ventajas de Conocer las Características Decisorias de una GPU:</h2>

                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Rendimiento Óptimo para Aplicaciones Específicas:</strong> Conocer las características permite seleccionar una GPU que ofrezca
                        el mejor rendimiento para tareas específicas, como gaming, edición de video o modelado 3D.
                    </li>
                    <li>
                        <strong>Ahorro de Costos:</strong> Al entender qué características son esenciales, puedes evitar pagar de más por especificaciones que
                        no necesitas, optimizando tu inversión.
                    </li>
                    <li>
                        <strong>Eficiencia Energética:</strong> Si el consumo energético es una preocupación, conocer el TDP y otras especificaciones ayuda a
                        elegir una GPU eficiente.
                    </li>
                </ul>
            </section>

            {/* Desventajas de No Considerar las Características Decisorias */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Desventajas de No Considerar las Características Decisorias:</h2>

                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Rendimiento Inadecuado:</strong> Escoger una GPU sin analizar estas características puede llevar a problemas de rendimiento,
                        como bajos FPS en videojuegos o tiempos de renderizado prolongados.
                    </li>
                    <li>
                        <strong>Desperdicio de Recursos:</strong> Comprar una GPU de alta gama sin requerir todo su potencial resulta en un gasto innecesario.
                    </li>
                    <li>
                        <strong>Problemas de Compatibilidad:</strong> No considerar aspectos como la compatibilidad con software o codecs puede afectar el flujo
                        de trabajo en aplicaciones profesionales.
                    </li>
                </ul>
            </section>

            {/* Importancia de Evaluar las Características Decisorias para la Selección de una GPU */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Importancia de Evaluar las Características Decisorias para la Selección de una GPU</h2>
                <p>
                    Seleccionar la GPU adecuada es crucial para el rendimiento general del sistema, especialmente en tareas que requieren procesamiento gráfico
                    intensivo. Al evaluar detenidamente cada característica, como la cantidad de VRAM, el soporte para Ray Tracing, la eficiencia energética y
                    las tecnologías de escalado, los usuarios pueden optimizar su inversión en hardware, asegurando un rendimiento acorde a sus necesidades sin
                    exceder el presupuesto.
                </p>
                <p className="mt-4 mb-10">
                    Además, el conocimiento de estas características permite adaptar el sistema a futuras demandas, considerando la escalabilidad y
                    actualización de componentes. La elección adecuada de una GPU impacta no solo en la experiencia del usuario, sino también en la longevidad y
                    eficiencia del sistema.
                </p>
            </section>
            <DocumentButton url="https://mailudesedu-my.sharepoint.com/:x:/g/personal/01220371022_mail_udes_edu_co/ERBqCmXhEUJMkd3IJgzxAtsB0r-Rs-rQTyt36BPLhqhosQ?e=qnc4kX" />
        </div>
    );
}
