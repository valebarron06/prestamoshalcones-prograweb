export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 font-sans">
            {/* Contenedor principal con max-w para alinear con los componentes superiores */}
            <div className="max-w-7xl mx-auto px-8 pt-12 pb-8">
                
                {/* Cuadrícula de 3 columnas para la información */}
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    
                    {/* COLUMNA 1: Logos e Identidad */}
                    <div className="flex flex-col gap-4">
                        {/* Contenedor de los logos reales (esta en amarillo hasta poner alguna iamgen.) */}
                    <div className="flex items-center gap-6 mb-4">
                       <img 
                          src="/logo-tecnm.png" 
                          alt="Logo TecNM" 
                          className="h-14 w-auto object-contain" 
                        />
                        <img 
                         src="/logo-ittoluca.png" 
                        alt="Logo IT Toluca" 
                         className="h-14 w-auto object-contain" 
                         />
                        </div>
                        
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-700"></span>
                                <h4 className="font-bold text-slate-900 text-sm">TecNM Toluca</h4>
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mt-1">Instituto Tecnológico de Toluca</h3>
                        </div>

                        <p className="text-xs text-slate-500 leading-relaxed max-w-sm mt-2">
                            Sistema Institucional de Préstamos y Control de Recursos Audiovisuales para la comunidad académica y de investigación.
                        </p>
                    </div>

                    {/* COLUMNA 2: Departamento Operativo */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-xs text-slate-900 tracking-wide">
                            DEPARTAMENTO OPERATIVO
                        </h4>
                        <div className="flex flex-col gap-3 text-sm text-slate-600">
                            <p>Recursos Materiales y Servicios</p>
                            <p>Edificio de Recursos Audiovisuales, Planta Baja</p>
                            <a href="mailto:soporte.audiovisual@toluca.tecnm.mx" className="text-blue-700 font-medium hover:underline">
                                Contacto: soporte.audiovisual@toluca.tecnm.mx
                            </a>
                        </div>
                    </div>

                    {/* COLUMNA 3: Horarios */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-xs text-slate-900 tracking-wide">
                            HORARIO DE ENTREGA Y RECEPCIÓN
                        </h4>
                        <div className="flex flex-col gap-3 text-sm text-slate-600">
                            <p>Lunes a Viernes: 07:00 - 20:00 hrs</p>
                            <p>Sábados (Grupos Ejecutivos): 08:00 - 14:00 hrs</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                <p className="text-[10px] font-bold text-orange-600 tracking-wide">
                                    DEVOLUCIÓN MÁXIMA: 15 MINUTOS ANTES DE LA HORA LÍMITE
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Fila inferior: Copyright */}
                <div className="border-t border-gray-100 mt-12 pt-6 flex justify-center">
                    <p className="text-xs text-slate-400">
                        © 2026 Instituto Tecnológico de Toluca - Tecnológico Nacional de México. Todos los derechos reservados.
                    </p>
                </div>

            </div>
        </footer>
    );
}