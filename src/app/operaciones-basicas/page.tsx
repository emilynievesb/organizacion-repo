/* eslint-disable @next/next/no-img-element */
// src/components/SumaYDesplazamiento.tsx
import React from 'react';

export default function SumaYDesplazamiento() {
    return (
        <div className="p-8 bg-white text-gray-800 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Suma Binaria y Desplazamiento con Compuertas Lógicas</h1>

            {/* Definición de Suma Binaria */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Definición de Suma Binaria</h2>
                <p className="mb-4">
                    La suma binaria es una operación matemática básica en la que se suman números en base 2. En esta operación, solo existen dos valores (0 y
                    1), y se siguen reglas específicas que determinan el resultado y, en algunos casos, generan un \acarreo\
                </p>
                {/* Reglas Básicas de la Suma Binaria */}
                <h3 className="text-xl font-semibold mb-2">Reglas Básicas de la Suma Binaria:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>0 + 0 = 0</li>
                    <li>0 + 1 = 1</li>
                    <li>1 + 0 = 1</li>
                    <li>1 + 1 = 10 (resultado 0 y acarreo 1)</li>
                </ul>

                <img
                    src="https://image.slidesharecdn.com/sumadorde2bits-140908101842-phpapp01/85/Sumador-de-2bits-2-320.jpg"
                    alt="Tabla de verdad para la suma binaria simple de dos bits"
                    className="w-full h-auto max-w-md mx-auto"
                />
            </section>

            {/* Ejercicio 1: Suma Binaria de Dos Bits usando Compuertas Lógicas */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Ejercicio 1: Suma Binaria de Dos Bits usando Compuertas Lógicas</h2>
                <p>
                    Para realizar una suma binaria de dos bits <strong>A</strong> y <strong>B</strong>, se emplean compuertas lógicas como XOR y AND para
                    obtener el resultado (SUMA) y el acarreo (CARRY):
                </p>
                <ul className="list-disc list-inside my-4">
                    <li>
                        <strong>Suma (SUMA):</strong> Usamos una compuerta XOR para sumar los bits <strong>A</strong> y <strong>B</strong>.
                    </li>
                    <li>
                        <strong>Acarreo (CARRY):</strong> Usamos una compuerta AND para detectar si ambos bits son 1, lo cual genera un acarreo.
                    </li>
                </ul>

                <p className="mb-4">
                    <strong>SUMA = A XOR B</strong>
                    <br />
                    <strong>CARRY = A AND B</strong>
                </p>

                <img
                    src="https://ielectel.com/wp-content/uploads/2024/01/Diagrama_sumador_completo_de_1-bit.webp"
                    alt="Diagrama de circuito de un sumador de un bit mostrando las compuertas XOR y AND"
                    className="w-full h-auto max-w-md mx-auto"
                />
            </section>

            {/* Definición de Desplazamiento Binario */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Definición de Desplazamiento Binario</h2>
                <p>
                    El desplazamiento binario es una operación que mueve los bits de un número binario hacia la izquierda o hacia la derecha. Este
                    desplazamiento se utiliza en operaciones aritméticas y de lógica digital y puede realizarse mediante compuertas lógicas.
                </p>

                <h3 className="text-xl font-semibold mt-4">Tipos de Desplazamiento:</h3>
                <ul className="list-disc list-inside my-4">
                    <li>
                        <strong>Desplazamiento a la Izquierda (Shift Left):</strong> Mueve todos los bits una posición hacia la izquierda y añade un 0 al final.
                        Es equivalente a multiplicar el número binario por 2.
                    </li>
                    <li>
                        <strong>Desplazamiento a la Derecha (Shift Right):</strong> Mueve todos los bits una posición hacia la derecha y añade un 0 al inicio.
                        Es equivalente a dividir el número binario entre 2.
                    </li>
                </ul>
            </section>

            {/* Ejercicio 2: Desplazamiento a la Izquierda y a la Derecha usando Compuertas Lógicas */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Ejercicio 2: Desplazamiento a la Izquierda y a la Derecha usando Compuertas Lógicas</h2>
                <p>
                    Supongamos un número binario de 4 bits, representado por{' '}
                    <strong>
                        A<sub>3</sub>, A<sub>2</sub>, A<sub>1</sub>, A<sub>0</sub>
                    </strong>
                    :
                </p>

                <h3 className="text-xl font-semibold mt-4">Desplazamiento a la Izquierda (Shift Left):</h3>
                <p className="mb-4">
                    Mueve cada bit una posición hacia la izquierda, de modo que{' '}
                    <strong>
                        A<sub>2</sub>
                    </strong>{' '}
                    se convierte en{' '}
                    <strong>
                        A<sub>3</sub>
                    </strong>
                    ,{' '}
                    <strong>
                        A<sub>1</sub>
                    </strong>{' '}
                    en{' '}
                    <strong>
                        A<sub>2</sub>
                    </strong>
                    , y así sucesivamente. La nueva posición más baja{' '}
                    <strong>
                        A<sub>0</sub>
                    </strong>{' '}
                    se rellena con un 0.
                </p>
                <p className="mb-4">
                    <strong>Resultado:</strong> Si el número inicial es 1011, el desplazamiento a la izquierda produce 0110.
                </p>

                <h3 className="text-xl font-semibold mt-4">Desplazamiento a la Derecha (Shift Right):</h3>
                <p className="mb-4">Mueve cada bit una posición hacia la derecha. La posición más alta se rellena con un 0.</p>
                <p>
                    <strong>Resultado:</strong> Si el número inicial es 1011, el desplazamiento a la derecha produce 0101.
                </p>

                <img
                    src="https://i.ytimg.com/vi/hBy0u8wqYO0/maxresdefault.jpg"
                    alt="Ejemplo visual de un desplazamiento a la izquierda y a la derecha en un registro de 4 bits"
                    className="w-full h-auto max-w-md mx-auto"
                />
            </section>

            {/* Aplicación de las Compuertas Lógicas en Desplazamiento */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Aplicación de las Compuertas Lógicas en Desplazamiento</h2>
                <p>
                    Para realizar estos desplazamientos mediante compuertas lógicas, podemos usar compuertas AND y OR para manipular y colocar los bits en las
                    posiciones deseadas según el tipo de desplazamiento requerido.
                </p>
            </section>

            {/* Importancia de la Suma Binaria y el Desplazamiento en la Electrónica Digital */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Importancia de la Suma Binaria y el Desplazamiento en la Electrónica Digital</h2>
                <p>
                    La suma binaria y el desplazamiento son operaciones fundamentales en los sistemas digitales, ya que son la base de operaciones aritméticas y
                    de lógica en circuitos como los procesadores. Estas operaciones permiten realizar cálculos, manipular datos y optimizar la ejecución de
                    tareas en aplicaciones de hardware.
                </p>
                <p className="mt-4">
                    Además, el uso de compuertas lógicas facilita la implementación de estos procesos de manera eficiente en dispositivos digitales,
                    contribuyendo a un diseño más preciso y funcional de sistemas electrónicos.
                </p>
            </section>
        </div>
    );
}
