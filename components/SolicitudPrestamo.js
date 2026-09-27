export default function Prestamos(){
    return(
        <section id="solicitar" className="flex bg-blue-50">
        <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* TARJETA CONTENEDORA */}
      <div className="bg-white rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 relative">
        {/* ENCABEZADO */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[#3b52f6] border border-blue-200/60 font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-[15px]"></span>
                MÓDULO DE AUTOSERVICIO DOCENTE
              </span>

              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80 font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                PERIODO ACADÉMICO ACTIVO
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl text-slate-900 font-bold tracking-tight">
              Solicitud de Préstamo
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-normal">
              Aparta proyector o accesorios para tus clases con entrega inmediata en Módulo B.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-[#eff4ff] px-4 py-3 rounded-2xl flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-blue-200/60 text-[#3b52f6] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[22px]">⏱</span>
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 block font-semibold">
                TIEMPO ESTIMADO
              </span>
              <span className="text-sm text-[#2539c4] font-bold">
                Menos de 1 minuto
              </span>
            </div>
          </div>
        </div>

        {/* CAMPOS Y VISTA PREVIA */}
        <div className="space-y-6">
          
          {/* DATOS DEL DOCENTE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#f8faff] p-4 rounded-2xl border border-blue-100/60">
              <label className="text-slate-700 flex items-center gap-2 mb-2 font-bold text-sm">
                <span className="material-symbols-outlined text-[25px] text-[#3b52f6]">𖠋</span>
                Nombre del docente
              </label>
              <input
                type="text"
                className="w-full bg-white px-4 py-3 rounded-xl text-slate-800 font-semibold text-sm outline-none border border-slate-200/80 shadow-sm"
              />
            </div>

            <div className="bg-[#f8faff] p-4 rounded-2xl border border-blue-100/60">
              <label className="text-slate-700 flex items-center gap-2 mb-2 font-bold text-sm">
                <span className="material-symbols-outlined text-[25px] text-[#3b52f6]">𖡌</span>
                Clave del docente
              </label>
              <input
                type="text"
                className="w-full bg-white px-4 py-3 rounded-xl text-slate-800 font-semibold text-sm outline-none border border-slate-200/80 shadow-sm"
              />
            </div>

            <div className="bg-[#fff9f5] p-4 rounded-2xl border border-orange-100/60">
              <label className="text-slate-700 flex items-center gap-2 mb-2 font-bold text-sm">
                <span className="material-symbols-outlined text-[30px] text-[#ea6e25]">✉</span>
                Correo institucional
              </label>
              <input
                type="email"
                className="w-full bg-white px-4 py-3 rounded-xl text-slate-800 font-semibold text-sm outline-none border border-slate-200/80 shadow-sm"
              />
            </div>
          </div>

          {/* HORARIOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#f8faff] p-4 rounded-2xl border border-blue-100/60">
            <div>
              <label className="text-slate-700 flex items-center gap-2 mb-2 font-bold text-sm">
                <span className="material-symbols-outlined text-[25px] text-[#3b52f6]">⏲</span>
                Horario de recogida
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-white px-4 py-3 rounded-xl text-slate-800 font-semibold text-sm outline-none border border-slate-200/80 shadow-sm pr-10"
                />
                <span className="material-symbols-outlined text-slate-400 text-[18px] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  ◴
                </span>
              </div>
            </div>

            <div>
              <label className="text-slate-700 flex items-center gap-2 mb-2 font-bold text-sm">
                <span className="material-symbols-outlined text-[25px] text-[#ea6e25]">◴</span>
                Horario de entrega
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-white px-4 py-3 rounded-xl text-slate-800 font-semibold text-sm outline-none border border-slate-200/80 shadow-sm pr-10"
                />
                <span className="material-symbols-outlined text-slate-400 text-[18px] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  ◴
                </span>
              </div>
            </div>
          </div>

          {/* MATERIAL A SOLICITAR */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <label className="text-slate-900 font-bold text-base flex items-center gap-2">
                <span className="material-symbols-outlined text-[#3b52f6] text-[25px]">모</span>
                Material a solicitar
              </label>
              <span className="text-xs text-[#ea6e25] font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ea6e25] inline-block animate-pulse"></span>
                Selección de material disponible
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

              {/*boton 1*/}
              <button 
              type="button"
              className="flex flex-col justify-between p-4 rounded-2xl bg-white border-2 border-[#1d4ed8] hover:bg-slate-100 hover:border-[#1e40af] shadow-md cursor-pointer">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1d4ed8] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[25px]">▣</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[10px] uppercase">
                    DISPONIBLE
                  </span>
                </div>
                <span className="text-slate-900 font-bold text-sm">Proyector Epson / BenQ</span>
                <span className="text-slate-400 text-[11px] mt-0.5">HDMI / VGA • Alta luminosidad</span>
              </button>
              
              {/* boton 2 */}
              <button
              type="button"
              className="flex flex-col justify-between p-4 rounded-2xl bg-white border-2 border-[#ea6e25] hover:bg-slate-100 hover:border-[#ff8234] shadow-md cursor-pointer">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ea6e25] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[25px]">⏚</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[10px] uppercase">
                    DISPONIBLE
                  </span>
                </div>
                <span className="text-slate-900 font-bold text-sm">Extensión 15m Uso Rudo</span>
                <span className="text-slate-400 text-[11px] mt-0.5">3 tomas aterrizadas calibre 14</span>
              </button>
             

              {/* boton 3 */}
              <button
              type="button"
              className="flex flex-col justify-between p-4 rounded-2xl bg-white border-2 border-[#747576] hover:bg-slate-100 cursor-pointer">
                 <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#becbdb] text-slate-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[25px]">⌁</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[10px] uppercase">
                    DISPONIBLE
                  </span>
                </div>
                <span className="text-slate-900 font-bold text-sm">Cable HDMI 4K (3m)</span>
                <span className="text-slate-400 text-[11px] mt-0.5">Alta velocidad blindado</span>
              </button>
             

              {/* boton 4 */}
              <button
              type="button"
              className="flex flex-col justify-between p-4 rounded-2xl bg-white border-2 border-[#747576] hover:bg-slate-100 cursor-pointer">
                 <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#becbdb] text-slate-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[30px]">∿</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[10px] uppercase">
                    DISPONIBLE
                  </span>
                </div>
                <span className="text-slate-900 font-bold text-sm">Adaptador USB-C a HDMI</span>
                <span className="text-slate-400 text-[11px] mt-0.5">Compatible Mac / Windows 4K</span>
              </button>
            </div>
          </div>

          {/* PIE Y BOTÓN */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-500 text-xs sm:text-sm">
              <span className="material-symbols-outlined text-[25px] text-[#ea6e25]">☑</span>
              <span>Préstamo validado con credencial institucional y correo @toluca.tecnm.mx</span>
            </div>

            <button
              type="button"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#102be8] text-white font-bold text-sm rounded-2xl shadow-[0_10px_25px_rgba(16,43,232,0.35)] flex items-center justify-center gap-2.5 hover:bg-[#00258a]"
            >
              <span className="material-symbols-outlined text-[25px]">✓✓</span>
              <span>Generar Folio</span>
            </button>
          </div>

        </div>
      </div>
    </div> 
     </section>
    )
}