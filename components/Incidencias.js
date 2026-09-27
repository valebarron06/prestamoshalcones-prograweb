function CardInfo({ titulo, descripcion, icono }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
            <div className="bg-orange-50 text-orange-500 w-8 h-8 flex items-center justify-center rounded-lg text-lg">
                {icono}
            </div>
            <h4 className="font-bold text-slate-800 text-sm">{titulo}</h4>
            <p className="text-xs text-gray-500 leading-relaxed">{descripcion}</p>
        </div>
    );
}

function CampoFormulario({ label, placeholder, tipo = "text" }) {
    return (
        <div className="flex flex-col gap-1">
            <label className="font-bold text-xs text-slate-700">{label}</label>
            <input 
                type={tipo} 
                placeholder={placeholder} 
                className=" text-black border border-gray-300 bg-gray-50 rounded-lg p-2.5 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder-gray-400"
            />
        </div>
    );
}

export default function Incidencias() {
    return (
        /* 1. EL PADRE: Fondo completo de lado a lado. Le puse bg-white pero puedes cambiarlo a bg-slate-50 */
        <section className="w-full bg-white py-12 font-sans">
            
            <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-start">

                {/* --- COLUMNA IZQUIERDA CREACION CARD EN EL DIV--- */}
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col gap-6"> 
                    <div>
                        <span className="inline-block text-orange-600 font-bold text-xs bg-orange-100 px-3 py-1 rounded-full mb-4">
                             MÓDULO DE INCIDENCIAS DOCENTE
                        </span>
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
                            ¿Quieres reportar un material dañado?
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Notifica cualquier falla en proyectores, cables o accesorios para mantenimiento inmediato y sustitución sin cargo durante tu actividad académica.
                        </p>
                    </div>

                    {/* Formulario Grid */}
                    <form className="flex flex-col gap-5">
                        
                        {/* Fila 1: Dos columnas */}
                        <div className="grid grid-cols-2 gap-4">
                            <CampoFormulario label="Código de Inventario" placeholder="Ej: AV-PRY-104 o EXT-09" />
                            
                            <div className="flex flex-col gap-1">
                                <label className="font-bold text-xs text-slate-800">Tipo de Equipo</label>
                                <select className="border border-gray-300 bg-gray-50 rounded-lg p-2.5 text-sm outline-none focus:border-orange-500 text-gray-400">
                                    <option className="text-slate-900">Proyector Epson / BenQ</option>
                                    <option className="text-slate-900">Cable HDMI / VGA</option>
                                    <option className="text-slate-900">Bocinas</option>
                                </select>
                            </div>
                        </div>

                        {/* Fila 2: Dos columnas */}
                        <div className="grid grid-cols-2 gap-4">
                            <CampoFormulario label="Asunto o Tipo de Avería" placeholder="Lámpara fundida / parpadeo" />
                            <CampoFormulario label="RFC o No. Tarjeta Docente" placeholder="ITT-7842" />
                        </div>

                        {/* Fila 3: Textarea completo */}
                        <div className="flex flex-col gap-1">
                            <label className="font-bold text-xs text-slate-700">Descripción del problema o aula</label>
                            <textarea 
                                placeholder="Describe brevemente la anomalía detectada y en qué salón se encuentra..." 
                                rows={3}
                                className="text-black placeholder-gray-400 border border-gray-200 bg-gray-50 rounded-lg p-3 text-sm outline-none focus:border-orange-500 resize-none"
                            ></textarea>
                        </div>

                        {/* Aviso de protección y Botón */}
                        <div className="mt-2">
                            <p className="text-orange-500 text-xs font-bold flex items-center gap-2 mb-3">
                                Protección docente contra cargos
                            </p>
                            <button 
                                type="button" 
                                className="w-1/2 bg-[#f26522] hover:bg-orange-600 text-white font-bold text-sm py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md shadow-orange-200"
                            >
                                Enviar Reporte de Avería
                            </button>
                        </div>
                    </form>
                </div>


                {/* --- COLUMNA DERECHA: TARJETAS DE INFORMACIÓN --- */}
                <div className="bg-[#f8faff] rounded-3xl p-8 border border-blue-50 shadow-xl relative overflow-hidden">
                    
                    {/* Encabezado Derecho */}
                    <span className="inline-block text-blue-700 font-bold text-xs bg-white border border-blue-100 px-3 py-1 rounded-full shadow-sm mb-5">
                         PROTOCOLO DE MANTENIMIENTO ITTOL
                    </span>
                    
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                        Sustitución Express en Aula
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        Al enviar tu reporte de avería, el sistema alerta automáticamente a la brigada móvil de audiovisuales para que un técnico acuda a tu aula con equipo de reemplazo listo para conectar.
                    </p>

                    {/* Grid de Moldes (Tarjetas) */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <CardInfo 
                            titulo="Cambio en < 10 min" 
                            descripcion="Reemplazo inmediato en salón para evitar interrupción de tu cátedra." 
                            icono="⇄"
                        />
                        <CardInfo 
                            titulo="Bitácora Transparente" 
                            descripcion="El equipo pasa a taller de calibración sin cobros indebidos al docente." 
                            icono="📋"
                        />
                    </div>

                    {/* Caja de Contacto Urgente */}
                    <div className="bg-white border border-blue-100 rounded-xl p-5 flex items-center justify-between shadow-sm">
                        <div className="flex gap-4 items-center">
                            <div className="text-blue-600 text-2xl">🎧</div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-sm">¿Caso urgente en plena clase?</h4>
                                <p className="text-xs text-gray-500 mt-0.5">Llama directo a Ext. 2140 o 2145 para envío de brigada.</p>
                            </div>
                        </div>
                        <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold text-sm py-2 px-5 rounded-lg transition-colors">
                            Contactar
                        </button>
                    </div>

                </div>
                
            </div>
        </section>
    );
}