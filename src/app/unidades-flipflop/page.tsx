/* eslint-disable @next/next/no-img-element */
// src/components/UnidadesFlipFlop.tsx
import React from 'react';

export default function UnidadesFlipFlop() {
    return (
        <div className="p-8 bg-white text-gray-800 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Unidades Flip-Flop</h1>

            <p className="text-lg mb-6">
                Las unidades Flip-Flop son circuitos electrónicos fundamentales en la lógica digital y el diseño de sistemas electrónicos. Un Flip-Flop es un
                tipo de biestable, lo que significa que puede mantener dos estados estables (0 o 1) y se utiliza para almacenar un bit de información. Los
                Flip-Flops son elementos básicos en la construcción de registros, contadores y diversas aplicaciones de almacenamiento temporal en circuitos
                digitales.
            </p>

            {/* Tipos Principales de Flip-Flops */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Tipos Principales de Flip-Flops:</h2>

                {/* Flip-Flop Tipo SR */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Flip-Flop Tipo SR (Set-Reset)</h3>
                    <p>
                        <strong>Descripción:</strong> El Flip-Flop SR tiene dos entradas, S (Set) y R (Reset). La entrada S coloca el Flip-Flop en estado 1,
                        mientras que la entrada R lo coloca en estado 0.
                    </p>
                    <p>
                        <strong>Aplicaciones:</strong> Se usa en aplicaciones donde es importante establecer o resetear el estado de manera manual o programada.
                    </p>
                    <p>
                        <strong>Limitación:</strong> Cuando ambas entradas S y R están en 1, el estado del Flip-Flop se vuelve indefinido, lo cual es una
                        condición indeseable.
                    </p>
                    <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhV-kBpOnmvXED7njtKOLR1Pg4htC5p5tPYyPdZR1soxylomnsh-fDn3DzkmA99gK2-mUpYss4lXzcGHNMe4raD2dRmCIDGS7TAoQz9ybpVUwm7Fi0AHzXkjDB5j_5OrP9r97S-TB315xPD/s1600/img3.png"
                        alt="Tabla de verdad y circuito lógico del Flip-Flop SR"
                        className="w-full h-auto max-w-md mx-auto mt-4"
                    />
                </div>

                {/* Flip-Flop Tipo D */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Flip-Flop Tipo D (Data o Delay)</h3>
                    <p>
                        <strong>Descripción:</strong> El Flip-Flop D resuelve la condición indefinida del Flip-Flop SR. Tiene una sola entrada de datos (D) y
                        una entrada de reloj (Clock). Cuando el reloj está activo, el estado de la entrada D se almacena en la salida.
                    </p>
                    <p>
                        <strong>Aplicaciones:</strong> Se utiliza ampliamente en registros de desplazamiento y almacenamiento de datos, ya que sincroniza el
                        cambio de estado con el reloj.
                    </p>
                    <img
                        src="https://www.ingmecafenix.com/wp-content/uploads/2017/04/Flip-flop.webp"
                        alt="Diagrama del Flip-Flop D mostrando su entrada de datos y el reloj"
                        className="w-full h-auto max-w-md mx-auto mt-4"
                    />
                </div>

                {/* Flip-Flop Tipo JK */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Flip-Flop Tipo JK</h3>
                    <p>
                        <strong>Descripción:</strong> Este Flip-Flop es una versión mejorada del SR, que permite que ambas entradas estén en 1 sin problemas.
                        Cuenta con dos entradas, J y K, y una entrada de reloj. Cuando ambas entradas están en 1, el estado cambia (toggle).
                    </p>
                    <p>
                        <strong>Aplicaciones:</strong> Es muy usado en contadores y aplicaciones donde el cambio de estado es necesario en intervalos regulares.
                    </p>
                    <img
                        src="https://circuitossecuenciales.weebly.com/uploads/2/3/7/6/23768053/3447000_orig.png"
                        alt="Tabla de verdad y circuito del Flip-Flop JK"
                        className="w-full h-auto max-w-md mx-auto mt-4"
                    />
                </div>

                {/* Flip-Flop Tipo T */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Flip-Flop Tipo T (Toggle)</h3>
                    <p>
                        <strong>Descripción:</strong> Este Flip-Flop es una simplificación del JK, donde solo tiene una entrada. Cuando la entrada está en 1 y
                        el reloj está activo, el estado cambia entre 0 y 1 (toggle).
                    </p>
                    <p>
                        <strong>Aplicaciones:</strong> Es ideal para contadores binarios y circuitos donde es necesario un cambio continuo de estado.
                    </p>
                    <img
                        src="https://unicrom.com/wp-content/uploads/Contador-asincrono-con-Flip-Flop-T.png" // Asegúrate de que esta imagen exista en la ruta indicada
                        alt="Ejemplo de un Flip-Flop T en un circuito contador"
                        className="w-full h-auto max-w-md mx-auto mt-4"
                    />
                </div>
            </section>

            {/* Funcionamiento de los Flip-Flops */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Funcionamiento de los Flip-Flops</h2>
                <p>
                    Los Flip-Flops operan en sincronía con una señal de reloj, permitiendo que los cambios de estado ocurran solo en ciertos intervalos, lo cual
                    asegura una ejecución controlada de operaciones. Almacenando un bit por unidad, múltiples Flip-Flops se combinan para formar registros que
                    almacenan cadenas de bits, lo cual es esencial en la construcción de registros de memoria y otros sistemas de almacenamiento digital.
                </p>
            </section>

            {/* Aplicaciones de los Flip-Flops en Sistemas Digitales */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Aplicaciones de los Flip-Flops en Sistemas Digitales</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Contadores Binarios:</strong> Flip-Flops tipo T y JK son componentes clave en la construcción de contadores, los cuales son
                        fundamentales en sistemas digitales para contar eventos o ciclos de reloj.
                    </li>
                    <li>
                        <strong>Registros de Desplazamiento:</strong> Los Flip-Flops tipo D se utilizan para desplazar bits de datos de un lugar a otro, común
                        en procesadores y sistemas de comunicación.
                    </li>
                    <li>
                        <strong>Memoria Temporal:</strong> Los Flip-Flops se utilizan en la memoria temporal de sistemas digitales, guardando bits durante
                        operaciones específicas en una variedad de circuitos.
                    </li>
                    <li>
                        <strong>Sincronización de Señales:</strong> Ayudan a sincronizar señales en sistemas digitales, alineando la entrada y salida de datos
                        en función de la señal del reloj.
                    </li>
                </ul>
            </section>

            {/* Ventajas de los Flip-Flops en Circuitos Digitales */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Ventajas de los Flip-Flops en Circuitos Digitales</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Estabilidad:</strong> Los Flip-Flops mantienen un estado constante, siendo ideales para aplicaciones de almacenamiento de datos.
                    </li>
                    <li>
                        <strong>Sincronización con el Reloj:</strong> Permiten que los cambios de estado ocurran solo cuando el reloj está activo, evitando
                        cambios abruptos en el sistema.
                    </li>
                    <li>
                        <strong>Flexibilidad en el Diseño de Circuitos:</strong> Cada tipo de Flip-Flop tiene propiedades únicas que los hacen útiles en
                        diferentes configuraciones de circuito.
                    </li>
                </ul>
            </section>

            {/* Limitaciones de los Flip-Flops */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Limitaciones de los Flip-Flops</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Consumo de Energía:</strong> Cada Flip-Flop consume energía constantemente, incluso cuando mantiene el mismo estado.
                    </li>
                    <li>
                        <strong>Tiempo de Propagación:</strong> Existe un retardo en el cambio de estado debido al tiempo de propagación interno, lo que puede
                        afectar circuitos de alta velocidad.
                    </li>
                    <li>
                        <strong>Condiciones Indefinidas:</strong> En algunos tipos de Flip-Flops, como el SR, ciertas combinaciones de entradas generan estados
                        no definidos.
                    </li>
                </ul>
            </section>

            {/* Importancia de las Unidades Flip-Flop en la Electrónica Digital */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Importancia de las Unidades Flip-Flop en la Electrónica Digital</h2>
                <p>
                    Las unidades Flip-Flop son esenciales en la electrónica digital, ya que permiten el almacenamiento y control de datos a nivel binario. Su
                    capacidad para mantener y cambiar estados en sincronía con un reloj los hace indispensables en sistemas de memoria, contadores y en la
                    arquitectura de procesadores.
                </p>
                <p className="mt-4">
                    Además, son la base para construir sistemas de mayor complejidad, como registros, que a su vez son componentes fundamentales en el
                    procesamiento de datos digitales. Comprender los diferentes tipos de Flip-Flops y sus aplicaciones permite diseñar circuitos digitales más
                    eficientes y precisos.
                </p>
            </section>
        </div>
    );
}
