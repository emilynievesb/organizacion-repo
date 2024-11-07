/* eslint-disable @next/next/no-img-element */
// src/components/ComparacionRISCvsCISC.tsx
import React from 'react';

export default function ComparacionRISCvsCISC() {
    return (
        <div className="p-8 bg-white text-gray-800 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Comparación de Generaciones RISC y CISC</h1>

            <p className="text-lg mb-6">
                Las arquitecturas RISC (Reduced Instruction Set Computer) y CISC (Complex Instruction Set Computer) representan dos enfoques distintos en el
                diseño de procesadores. La principal diferencia radica en el conjunto de instrucciones: RISC utiliza un conjunto reducido y simplificado,
                mientras que CISC tiene un conjunto extenso y más complejo. Ambos modelos han evolucionado a lo largo de los años, adaptándose a las necesidades
                cambiantes del mercado y las tecnologías.
            </p>

            {/* Características Principales de RISC */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Características Principales de RISC:</h2>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                        <strong>Instrucciones Simples y Uniformes:</strong> RISC se basa en instrucciones de tamaño y formato uniforme, lo que facilita su
                        procesamiento.
                    </li>
                    <li>
                        <strong>Ejecuta Instrucciones en un Ciclo de Reloj:</strong> La mayoría de las instrucciones en un procesador RISC se completan en un
                        solo ciclo, lo cual mejora la velocidad.
                    </li>
                    <li>
                        <strong>Uso Extensivo de Pipelining:</strong> RISC aprovecha el pipelining para ejecutar múltiples instrucciones de manera simultánea,
                        optimizando el rendimiento.
                    </li>
                </ul>

                <img
                    src="https://www.researchgate.net/publication/287409519/figure/fig1/AS:401495620112385@1472735423741/ARQUITECTURA-DE-PROCESADOR-SOC-TIPO-RISC-TOMADO-DE-1.png" // Asegúrate de que esta imagen exista en la ruta indicada
                    alt="Diagrama de pipelining en arquitectura RISC"
                    className="w-full h-auto max-w-md mx-auto mt-4"
                />
            </section>

            {/* Características Principales de CISC */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Características Principales de CISC:</h2>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                        <strong>Instrucciones Complejas:</strong> CISC cuenta con un amplio conjunto de instrucciones complejas que permiten realizar
                        operaciones multifuncionales en una sola instrucción.
                    </li>
                    <li>
                        <strong>Ejecuta Instrucciones en Varios Ciclos de Reloj:</strong> Debido a la complejidad de sus instrucciones, CISC puede requerir
                        varios ciclos para completar una operación, lo que lo hace más adecuado para ciertas tareas complejas.
                    </li>
                    <li>
                        <strong>Uso de Microcódigo:</strong> Muchas instrucciones de CISC están implementadas en microcódigo, lo que permite que el hardware
                        interprete instrucciones de alto nivel.
                    </li>
                </ul>

                <img
                    src="/images/cisc_instruction.png" // Asegúrate de que esta imagen exista en la ruta indicada
                    alt="Ejemplo visual de una instrucción compleja en CISC"
                    className="w-full h-auto max-w-md mx-auto mt-4"
                />
            </section>

            {/* Comparación de Generaciones RISC y CISC */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Comparación de Generaciones RISC y CISC</h2>

                <table className="w-full text-left border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b font-semibold bg-gray-100">Característica</th>
                            <th className="px-4 py-2 border-b font-semibold bg-gray-100">RISC</th>
                            <th className="px-4 py-2 border-b font-semibold bg-gray-100">CISC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border-b">Conjunto de Instrucciones</td>
                            <td className="px-4 py-2 border-b">Reducido y simple</td>
                            <td className="px-4 py-2 border-b">Extenso y complejo</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b">Tiempo de Ejecución</td>
                            <td className="px-4 py-2 border-b">Generalmente en un ciclo de reloj</td>
                            <td className="px-4 py-2 border-b">Requiere varios ciclos para instrucciones complejas</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b">Pipelining</td>
                            <td className="px-4 py-2 border-b">Altamente optimizado</td>
                            <td className="px-4 py-2 border-b">Menos eficiente debido a instrucciones variables</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b">Eficiencia Energética</td>
                            <td className="px-4 py-2 border-b">Mejor, ideal para dispositivos móviles</td>
                            <td className="px-4 py-2 border-b">Menor, adecuado para sistemas complejos</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b">Aplicaciones Comunes</td>
                            <td className="px-4 py-2 border-b">Dispositivos móviles, embebidos</td>
                            <td className="px-4 py-2 border-b">Computadoras de escritorio, servidores</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b">Costo</td>
                            <td className="px-4 py-2 border-b">Menor debido a diseño simplificado</td>
                            <td className="px-4 py-2 border-b">Mayor, debido a mayor complejidad en el diseño</td>
                        </tr>
                    </tbody>
                </table>

                <img
                    src="https://arquitecturacomputadoreshoy.wordpress.com/wp-content/uploads/2014/10/risc-vs-cisc.png" // Asegúrate de que esta imagen exista en la ruta indicada
                    alt="Tabla comparativa entre RISC y CISC en términos de arquitectura y rendimiento"
                    className="w-full h-auto max-w-md mx-auto mt-4"
                />
            </section>

            {/* Ventajas de RISC frente a CISC */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Ventajas de RISC frente a CISC:</h2>

                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Rendimiento:</strong> RISC suele tener mejor rendimiento en operaciones sencillas, gracias a su capacidad de ejecutar
                        instrucciones en un solo ciclo de reloj.
                    </li>
                    <li>
                        <strong>Eficiencia Energética:</strong> Al requerir menos recursos, los procesadores RISC suelen consumir menos energía, lo cual es
                        ideal para dispositivos móviles.
                    </li>
                    <li>
                        <strong>Facilidad de Escalabilidad:</strong> La arquitectura simplificada permite la mejora y el aumento de núcleos de manera eficiente.
                    </li>
                </ul>
            </section>

            {/* Ventajas de CISC frente a RISC */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Ventajas de CISC frente a RISC:</h2>

                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Instrucciones Complejas:</strong> CISC puede realizar tareas complejas en una sola instrucción, lo cual es ventajoso para
                        aplicaciones que requieren procesamiento intenso.
                    </li>
                    <li>
                        <strong>Compatibilidad hacia Atrás:</strong> CISC mantiene compatibilidad con generaciones anteriores de procesadores, facilitando la
                        actualización de sistemas sin necesidad de cambios drásticos en software.
                    </li>
                    <li>
                        <strong>Flexibilidad para Tareas Complejas:</strong> La arquitectura de CISC está mejor equipada para ejecutar aplicaciones de alto
                        rendimiento en sistemas de escritorio y servidores.
                    </li>
                </ul>
            </section>

            {/* Importancia de la Comparación entre RISC y CISC */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Importancia de la Comparación entre RISC y CISC</h2>
                <p>
                    La comparación entre RISC y CISC es crucial para comprender cómo se adaptan estos enfoques a diferentes necesidades tecnológicas. A medida
                    que la tecnología ha evolucionado, las líneas entre RISC y CISC se han difuminado, ya que ambos tipos de procesadores han adoptado
                    características del otro para optimizar rendimiento y eficiencia.
                </p>
                <p className="mt-4 mb-10">
                    La elección entre estas arquitecturas depende en gran medida de la aplicación final; RISC es preferido en dispositivos móviles y sistemas
                    embebidos por su bajo consumo de energía, mientras que CISC es más común en computadoras de escritorio y servidores que requieren capacidad
                    de procesamiento avanzado. La combinación de ambos enfoques permite que el usuario final disfrute de dispositivos con alto rendimiento y
                    eficiencia.
                </p>
            </section>
        </div>
    );
}
