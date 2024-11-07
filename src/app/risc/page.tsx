/* eslint-disable @next/next/no-img-element */
// src/components/DispositivosRISC.tsx
import React from 'react';

export default function DispositivosRISC() {
    return (
        <div className="p-8 bg-white text-gray-800 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Dispositivos RISC de Última Tecnología</h1>

            <p className="text-lg mb-6">
                RISC, que significa Reduced Instruction Set Computer (Computadora de Conjunto de Instrucciones Reducido), es una arquitectura de procesador que
                utiliza un conjunto limitado de instrucciones para optimizar la velocidad de ejecución. Los dispositivos con arquitectura RISC están diseñados
                para ejecutar un número menor de instrucciones, lo que les permite ser más eficientes y rápidos en la realización de tareas específicas en
                comparación con otras arquitecturas como CISC (Complex Instruction Set Computer).
            </p>

            {/* Características de los Dispositivos RISC */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Características de los Dispositivos RISC:</h2>

                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                        <strong>Conjunto Reducido de Instrucciones:</strong> Utilizan un número limitado de instrucciones, lo que facilita su ejecución rápida y
                        eficiente. Al reducir la cantidad de instrucciones, el procesador puede operar a velocidades más altas.
                    </li>
                    <li>
                        <strong>Pipeline:</strong> Los procesadores RISC suelen utilizar técnicas de pipelining, que permiten que múltiples instrucciones se
                        procesen de manera simultánea en distintas etapas, aumentando la eficiencia y la velocidad del procesador.
                    </li>
                    <li>
                        <strong>Ciclos de Reloj Reducidos:</strong> Las instrucciones RISC generalmente se completan en un solo ciclo de reloj, lo cual es ideal
                        para aplicaciones que requieren alto rendimiento y respuesta rápida.
                    </li>
                    <li>
                        <strong>Uniformidad de Instrucciones:</strong> Todas las instrucciones suelen tener un tamaño fijo y un formato uniforme, lo cual
                        facilita el diseño y la optimización del hardware.
                    </li>
                </ul>

                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQmIcVs_06wnoMZXmSqkia_s2kt7o0RJgCg&s" // Asegúrate de que esta imagen exista en la ruta indicada
                    alt="Diagrama de un procesador RISC mostrando el flujo de pipelining"
                    className="w-full h-auto max-w-md mx-auto mt-4"
                />
            </section>

            {/* Ejemplos de Procesadores RISC de Última Tecnología */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Ejemplos de Procesadores RISC de Última Tecnología:</h2>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold">ARM (Advanced RISC Machine):</h3>
                    <p>
                        Utilizado ampliamente en dispositivos móviles y embebidos, como smartphones y tablets, debido a su eficiencia energética y rendimiento.
                        Ha evolucionado hacia versiones de alta potencia, como ARM Cortex y Apple Silicon (M1, M2), que ofrecen un rendimiento similar a
                        procesadores de computadoras de escritorio.
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold">MIPS (Microprocessor without Interlocked Pipeline Stages):</h3>
                    <p>Popular en sistemas embebidos y dispositivos de red por su arquitectura simplificada y capacidad de manejo de tareas paralelas.</p>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold">RISC-V:</h3>
                    <p>
                        Una arquitectura abierta que ha ganado popularidad en la industria de la tecnología, especialmente en proyectos de código abierto y
                        aplicaciones de IoT. Su flexibilidad permite personalizar la arquitectura para satisfacer necesidades específicas de hardware y
                        software.
                    </p>
                </div>

                <img
                    src="/images/arm_riscv_comparison.png" // Asegúrate de que esta imagen exista en la ruta indicada
                    alt="Comparación de dispositivos ARM y RISC-V en términos de rendimiento y consumo energético"
                    className="w-full h-auto max-w-md mx-auto mt-4"
                />
            </section>

            {/* Ventajas de los Dispositivos RISC */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Ventajas de los Dispositivos RISC:</h2>

                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Alta Velocidad de Procesamiento:</strong> Al tener un conjunto de instrucciones reducido y optimizado, los dispositivos RISC
                        pueden realizar tareas más rápidamente.
                    </li>
                    <li>
                        <strong>Eficiencia Energética:</strong> Ideal para dispositivos móviles y embebidos, ya que consumen menos energía, lo que prolonga la
                        duración de la batería.
                    </li>
                    <li>
                        <strong>Facilidad de Diseño y Escalabilidad:</strong> Las instrucciones uniformes y el conjunto limitado facilitan el diseño de hardware
                        y permiten agregar mejoras sin complicaciones.
                    </li>
                </ul>
            </section>

            {/* Desventajas de los Dispositivos RISC */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Desventajas de los Dispositivos RISC:</h2>

                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Limitaciones en Instrucciones Complejas:</strong> A diferencia de los procesadores CISC, los RISC pueden requerir múltiples
                        instrucciones para realizar tareas complejas, lo que puede resultar en un mayor número de operaciones.
                    </li>
                    <li>
                        <strong>Dependencia de Software:</strong> Necesitan software optimizado que pueda aprovechar la arquitectura RISC, lo cual puede
                        representar un reto en algunos entornos.
                    </li>
                </ul>
            </section>

            {/* Importancia de los Dispositivos RISC en la Tecnología Moderna */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Importancia de los Dispositivos RISC en la Tecnología Moderna</h2>
                <p>
                    La arquitectura RISC ha tenido un impacto significativo en el desarrollo de dispositivos modernos debido a su eficiencia y velocidad. En la
                    actualidad, los procesadores basados en RISC se utilizan en una amplia variedad de dispositivos, desde teléfonos inteligentes y tablets
                    hasta sistemas embebidos y servidores. La adopción de RISC en arquitecturas de última generación, como los procesadores ARM en dispositivos
                    Apple y otros móviles, ha demostrado que esta tecnología es una opción viable incluso para aplicaciones de alto rendimiento.
                </p>
                <p className="mt-4 pb-10">
                    Además, la arquitectura RISC-V ha abierto nuevas oportunidades en la industria, permitiendo personalización y accesibilidad en el desarrollo
                    de procesadores. En conjunto, estos dispositivos permiten un equilibrio entre potencia y eficiencia energética, impulsando la innovación en
                    tecnología portátil, Internet de las Cosas (IoT) y dispositivos de bajo consumo.
                </p>
            </section>
        </div>
    );
}
