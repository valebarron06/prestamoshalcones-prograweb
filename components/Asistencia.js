export default function Asistencia() {
    return (
        /* 1. EL PADRE: Toca las orillas de la pantalla y pone el fondo gris claro */
        <section className="w-full bg-slate-50 py-12 font-sans">
            
            <div className="max-w-7xl mx-auto px-8">    
                
                <div className="bg-gradient-to-br from-[#f4f7ff] to-[#fff0e6] rounded-[2rem] p-10 grid lg:grid-cols-2 gap-12 items-center shadow-sm border border-orange-50">

                    {/* --- COLUMNA IZQUIERDA --- */}
                    <div className="flex flex-col gap-6">
                        
                        {/* Encabezado */}
                        <div>
                            <span className="inline-block text-orange-600 font-bold text-xs bg-orange-100/50 border border-orange-200 px-3 py-1 rounded-full mb-4">
                                🎧 MESA DE ASISTENCIA TÉCNICA ITTOL
                            </span>
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
                                ¿Problemas de Proyección en el Aula?
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Nuestro equipo técnico realiza recorridos continuos en los edificios del campus y cuenta con una brigada de respuesta rápida para ajustes de señal, reemplazo emergente de cables y solución inmediata.
                            </p>
                        </div>

                        {/* Fila de Tarjetas Internas */}
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            
                            {/* Tarjeta Extensión */}
                            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-orange-500 text-lg">📞</span>
                                    <span className="text-xs font-bold text-slate-700">Extensión Telefónica Interna</span>
                                </div>
                                <p className="text-xl font-extrabold text-slate-900">Ext. 2140 / 2145</p>
                                <p className="text-[10px] text-gray-400 mt-1">Conmutador central TecNM Toluca</p>
                            </div>

                            {/* Tarjeta Horario */}
                            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-orange-500 text-lg">🕒</span>
                                    <span className="text-xs font-bold text-slate-700">Horario de Atención</span>
                                </div>
                                <p className="text-xl font-extrabold text-slate-900">07:00 a 20:00 hrs</p>
                                <p className="text-[10px] text-gray-400 mt-1">Lunes a Viernes continuo</p>
                            </div>

                        </div>
                    </div>

                    {/* --- COLUMNA DERECHA: Formulario Flotante --- */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative">
                        
                        {/* Título de la Tarjeta */}
                        <div className="flex items-start gap-3 mb-6">
                            <div className="text-blue-600 mt-0.5 text-xl">❓</div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Solicitar Apoyo Urgente a Salón</h3>
                                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                                    Envía un aviso directo al técnico en turno si un proyector no enciende o el audio no responde en tu clase actual.
                                </p>
                            </div>
                        </div>

                        {/* Formulario */}
                        <form className="flex flex-col gap-4">
                            
                            <div className="flex flex-col gap-1.5">
                                <label className="font-bold text-xs text-slate-700">Tu Aula / Edificio</label>
                                <input 
                                    type="text" 
                                    placeholder="Ej: Edificio D - Aula D-12" 
                                    className="text-slate-900 border border-gray-200 bg-gray-50 rounded-lg p-3 text-sm outline-none focus:border-orange-500 transition-all placeholder-gray-400"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="font-bold text-xs text-slate-700">Problema detectado</label>
                                <input 
                                    type="text" 
                                    placeholder="Ej: Proyector parpadea luz roja de lámpara" 
                                    className="text-slate-900 border border-gray-200 bg-gray-50 rounded-lg p-3 text-sm outline-none focus:border-orange-500 transition-all placeholder-gray-400"
                                />
                            </div>

                            <button 
                                type="button" 
                                className="w-full mt-3 bg-[#f26522] hover:bg-orange-600 text-white font-bold text-sm py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md shadow-orange-200"
                            >
                                ▷ Enviar Técnico de Inmediato
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}