// src/components/Sidebar.tsx
'use client';

import * as ScrollArea from '@radix-ui/react-scroll-area';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const temas = [
    { title: 'Memoria Principal', href: '/memoria-principal' },
    { title: 'Memoria Secundaria', href: '/memoria-secundaria' },
    { title: 'Dispositivos E/S', href: '/dispositivos-es' },
    { title: 'Diferencias Risc y Cisc', href: '/risc-vs-cisc' },
    { title: 'GPU - Presupuesto', href: '/gpu-presupuesto' },
    { title: 'GPU - Características', href: '/seleccion-gpu' },
    { title: 'GPU - Impacto', href: '/gpu-impacto' },
    { title: 'Unidades Flip Flop', href: '/unidades-flipflop' },
    { title: 'Operaciones Basicas', href: '/operaciones-basicas' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-gray-900 text-gray-100 p-4 flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-center">Conceptos</h2>
            <ScrollArea.Root className="flex-1">
                <ScrollArea.Viewport className="space-y-2">
                    <ul className="space-y-1">
                        {temas.map((tema) => {
                            const isActive = pathname === tema.href;

                            return (
                                <li key={tema.href}>
                                    <Link href={tema.href}>
                                        <span
                                            className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                                isActive ? 'bg-blue-600 text-white' : 'text-gray-200 hover:bg-gray-800'
                                            }`}
                                        >
                                            {tema.title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="vertical" className="w-2 bg-gray-700 hover:bg-gray-600 transition-colors">
                    <ScrollArea.Thumb className="bg-gray-500 rounded-full" />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
        </aside>
    );
}
