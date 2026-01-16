export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
    // Allows to automatically instantiate createClient with right options
    // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
    __InternalSupabase: {
        PostgrestVersion: "12.2.3 (519615d)"
    }
    public: {
        Tables: {
            adjuntos_notas: {
                Row: {
                    cloudinary_public_id: string | null
                    created_at: string
                    id: number
                    nombre_archivo: string | null
                    nota_id: number | null
                    tipo_archivo: string | null
                    url: string | null
                }
                Insert: {
                    cloudinary_public_id?: string | null
                    created_at?: string
                    id?: number
                    nombre_archivo?: string | null
                    nota_id?: number | null
                    tipo_archivo?: string | null
                    url?: string | null
                }
                Update: {
                    cloudinary_public_id?: string | null
                    created_at?: string
                    id?: number
                    nombre_archivo?: string | null
                    nota_id?: number | null
                    tipo_archivo?: string | null
                    url?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "adjuntos_notas_nota_id_fkey"
                        columns: ["nota_id"]
                        isOneToOne: false
                        referencedRelation: "notas_orden"
                        referencedColumns: ["id"]
                    }
                ]
            }
            agenda: {
                Row: {
                    block_duration: unknown
                    capacity: number
                    created_at: string | null
                    deleted_at: string | null
                    dias_laborables: number[]
                    hora_fin: string
                    hora_inicio: string
                    id: number
                    is_active: boolean
                    lunch_fin: string | null
                    lunch_inicio: string | null
                    nombre: string | null
                    sucursal_id: string
                    updated_at: string | null
                }
                Insert: {
                    block_duration: unknown
                    capacity: number
                    created_at?: string | null
                    deleted_at?: string | null
                    dias_laborables: number[]
                    hora_fin: string
                    hora_inicio: string
                    id?: never
                    is_active?: boolean
                    lunch_fin?: string | null
                    lunch_inicio?: string | null
                    nombre?: string | null
                    sucursal_id: string
                    updated_at?: string | null
                }
                Update: {
                    block_duration?: unknown
                    capacity?: number
                    created_at?: string | null
                    deleted_at?: string | null
                    dias_laborables?: number[]
                    hora_fin?: string
                    hora_inicio?: string
                    id?: never
                    is_active?: boolean
                    lunch_fin?: string | null
                    lunch_inicio?: string | null
                    nombre?: string | null
                    sucursal_id?: string
                    updated_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "agenda_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "agenda_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "agenda_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "agenda_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "agenda_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "agenda_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "agenda_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "agenda_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "agenda_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "agenda_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "agenda_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "agenda_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    }
                ]
            }
            agenda_bloques: {
                Row: {
                    agenda_id: number
                    block_date: string
                    capacity: number
                    capacity_left: number
                    created_at: string | null
                    deleted_at: string | null
                    end_time: string
                    id: number
                    is_feriado: boolean
                    start_time: string
                }
                Insert: {
                    agenda_id: number
                    block_date: string
                    capacity?: number
                    capacity_left: number
                    created_at?: string | null
                    deleted_at?: string | null
                    end_time: string
                    id?: never
                    is_feriado?: boolean
                    start_time: string
                }
                Update: {
                    agenda_id?: number
                    block_date?: string
                    capacity?: number
                    capacity_left?: number
                    created_at?: string | null
                    deleted_at?: string | null
                    end_time?: string
                    id?: never
                    is_feriado?: boolean
                    start_time?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "agenda_bloques_agenda_id_fkey"
                        columns: ["agenda_id"]
                        isOneToOne: false
                        referencedRelation: "agenda"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "agenda_bloques_agenda_id_fkey"
                        columns: ["agenda_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["agenda_id"]
                    }
                ]
            }
            ai_interaction_files: {
                Row: {
                    bytes: number | null
                    created_at: string
                    format: string | null
                    height: number | null
                    id: string
                    interaction_id: string
                    public_id: string
                    resource_type: string
                    secure_url: string
                    url: string
                    version: string | null
                    width: number | null
                }
                Insert: {
                    bytes?: number | null
                    created_at?: string
                    format?: string | null
                    height?: number | null
                    id?: string
                    interaction_id: string
                    public_id: string
                    resource_type: string
                    secure_url: string
                    url: string
                    version?: string | null
                    width?: number | null
                }
                Update: {
                    bytes?: number | null
                    created_at?: string
                    format?: string | null
                    height?: number | null
                    id?: string
                    interaction_id?: string
                    public_id?: string
                    resource_type?: string
                    secure_url?: string
                    url?: string
                    version?: string | null
                    width?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "ai_interaction_files_interaction_id_fkey"
                        columns: ["interaction_id"]
                        isOneToOne: false
                        referencedRelation: "ai_interactions"
                        referencedColumns: ["id"]
                    }
                ]
            }
            ai_interactions: {
                Row: {
                    action: string
                    correlation_id: string | null
                    created_at: string
                    entity_id: string | null
                    entity_type: string
                    error: string | null
                    files: Json
                    id: string
                    latency_ms: number | null
                    model: string
                    raw_trace: Json | null
                    request: Json
                    response: Json | null
                    status: Database["public"]["Enums"]["ai_interaction_status"]
                    sucursal_id: string
                    user_id: string | null
                }
                Insert: {
                    action: string
                    correlation_id?: string | null
                    created_at?: string
                    entity_id?: string | null
                    entity_type: string
                    error?: string | null
                    files?: Json
                    id?: string
                    latency_ms?: number | null
                    model?: string
                    raw_trace?: Json | null
                    request?: Json
                    response?: Json | null
                    status?: Database["public"]["Enums"]["ai_interaction_status"]
                    sucursal_id: string
                    user_id?: string | null
                }
                Update: {
                    action?: string
                    correlation_id?: string | null
                    created_at?: string
                    entity_id?: string | null
                    entity_type?: string
                    error?: string | null
                    files?: Json
                    id?: string
                    latency_ms?: number | null
                    model?: string
                    raw_trace?: Json | null
                    request?: Json
                    response?: Json | null
                    status?: Database["public"]["Enums"]["ai_interaction_status"]
                    sucursal_id?: string
                    user_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "ai_interactions_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ai_interactions_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "ai_interactions_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ai_interactions_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ai_interactions_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ai_interactions_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ai_interactions_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ai_interactions_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ai_interactions_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ai_interactions_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ai_interactions_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ai_interactions_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ai_interactions_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "ai_interactions_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "ai_interactions_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["usuario_id"]
                    }
                ]
            }
            app_catalogo: {
                Row: {
                    created_at: string
                    id: number
                    nombre: string | null
                    orientacion: string | null
                    tipo: string | null
                    url: string | null
                }
                Insert: {
                    created_at?: string
                    id?: number
                    nombre?: string | null
                    orientacion?: string | null
                    tipo?: string | null
                    url?: string | null
                }
                Update: {
                    created_at?: string
                    id?: number
                    nombre?: string | null
                    orientacion?: string | null
                    tipo?: string | null
                    url?: string | null
                }
                Relationships: []
            }
            bancarios: {
                Row: {
                    banco: string
                    correo: string
                    created_at: string | null
                    deleted_at: string | null
                    id: string
                    nombre_cuenta: string
                    numero_cuenta: string
                    rut: string
                    tipo: string
                }
                Insert: {
                    banco: string
                    correo: string
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: string
                    nombre_cuenta: string
                    numero_cuenta: string
                    rut: string
                    tipo: string
                }
                Update: {
                    banco?: string
                    correo?: string
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: string
                    nombre_cuenta?: string
                    numero_cuenta?: string
                    rut?: string
                    tipo?: string
                }
                Relationships: []
            }
            categoria_producto: {
                Row: {
                    created_at: string | null
                    deleted_at: string | null
                    descripcion: string | null
                    id: string
                    nombre: string
                }
                Insert: {
                    created_at?: string | null
                    deleted_at?: string | null
                    descripcion?: string | null
                    id?: string
                    nombre: string
                }
                Update: {
                    created_at?: string | null
                    deleted_at?: string | null
                    descripcion?: string | null
                    id?: string
                    nombre?: string
                }
                Relationships: []
            }
            categoria_servicio: {
                Row: {
                    created_at: string | null
                    deleted_at: string | null
                    iconografia: string | null
                    id: string
                    id_cor: number
                    idPromocion: string | null
                    isDomicilio: boolean | null
                    isPromocion: boolean | null
                    nombre: string
                }
                Insert: {
                    created_at?: string | null
                    deleted_at?: string | null
                    iconografia?: string | null
                    id?: string
                    id_cor?: number
                    idPromocion?: string | null
                    isDomicilio?: boolean | null
                    isPromocion?: boolean | null
                    nombre: string
                }
                Update: {
                    created_at?: string | null
                    deleted_at?: string | null
                    iconografia?: string | null
                    id?: string
                    id_cor?: number
                    idPromocion?: string | null
                    isDomicilio?: boolean | null
                    isPromocion?: boolean | null
                    nombre?: string
                }
                Relationships: []
            }
            cita: {
                Row: {
                    agenda_id: number | null
                    cita_correlativo: number | null
                    cliente_id: string | null
                    created_at: string | null
                    deleted_at: string | null
                    estado: string | null
                    estado_id: number | null
                    fecha: string | null
                    fin: string | null
                    id: string
                    idCreador: string | null
                    inicio: string | null
                    nota: string | null
                    orden_id: string | null
                    sucursal_id: string | null
                    vehiculo_id: string | null
                }
                Insert: {
                    agenda_id?: number | null
                    cita_correlativo?: number | null
                    cliente_id?: string | null
                    created_at?: string | null
                    deleted_at?: string | null
                    estado?: string | null
                    estado_id?: number | null
                    fecha?: string | null
                    fin?: string | null
                    id?: string
                    idCreador?: string | null
                    inicio?: string | null
                    nota?: string | null
                    orden_id?: string | null
                    sucursal_id?: string | null
                    vehiculo_id?: string | null
                }
                Update: {
                    agenda_id?: number | null
                    cita_correlativo?: number | null
                    cliente_id?: string | null
                    created_at?: string | null
                    deleted_at?: string | null
                    estado?: string | null
                    estado_id?: number | null
                    fecha?: string | null
                    fin?: string | null
                    id?: string
                    idCreador?: string | null
                    inicio?: string | null
                    nota?: string | null
                    orden_id?: string | null
                    sucursal_id?: string | null
                    vehiculo_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "cita_agenda_id_fkey"
                        columns: ["agenda_id"]
                        isOneToOne: false
                        referencedRelation: "agenda"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cita_agenda_id_fkey"
                        columns: ["agenda_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["agenda_id"]
                    },
                    {
                        foreignKeyName: "cita_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cita_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cita_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cita_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cita_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cita_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cita_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cita_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cita_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cita_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cita_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cita_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cita_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cita_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cita_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cita_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cita_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cita_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_cita_estado"
                        columns: ["estado_id"]
                        isOneToOne: false
                        referencedRelation: "estados_cita"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_cliente_id"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "clientes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_cliente_id"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "fk_cliente_id"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "fk_cliente_id"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "fk_cliente_id"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "fk_vehiculo_id"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vehiculo"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_vehiculo_id"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "fk_vehiculo_id"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "fk_vehiculo_id"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "fk_vehiculo_id"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["vehiculo_id"]
                    }
                ]
            }
            cita_bloques: {
                Row: {
                    bloque_id: number
                    cita_id: string
                    created_at: string | null
                    deleted_at: string | null
                    id: number
                }
                Insert: {
                    bloque_id: number
                    cita_id: string
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: never
                }
                Update: {
                    bloque_id?: number
                    cita_id?: string
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: never
                }
                Relationships: [
                    {
                        foreignKeyName: "cita_bloques_bloque_id_fkey"
                        columns: ["bloque_id"]
                        isOneToOne: false
                        referencedRelation: "agenda_bloques"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cita_bloques_bloque_id_fkey"
                        columns: ["bloque_id"]
                        isOneToOne: false
                        referencedRelation: "bloques_disponibles"
                        referencedColumns: ["bloque_id"]
                    },
                    {
                        foreignKeyName: "cita_bloques_cita_id_fkey"
                        columns: ["cita_id"]
                        isOneToOne: false
                        referencedRelation: "cita"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cita_bloques_cita_id_fkey"
                        columns: ["cita_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["cita_id"]
                    }
                ]
            }
            cita_historial_estados: {
                Row: {
                    cita_id: string
                    estado_anterior_id: number | null
                    estado_nuevo_id: number
                    fecha_cambio: string
                    id: number
                    motivo: string | null
                    usuario_id: string | null
                }
                Insert: {
                    cita_id: string
                    estado_anterior_id?: number | null
                    estado_nuevo_id: number
                    fecha_cambio?: string
                    id?: never
                    motivo?: string | null
                    usuario_id?: string | null
                }
                Update: {
                    cita_id?: string
                    estado_anterior_id?: number | null
                    estado_nuevo_id?: number
                    fecha_cambio?: string
                    id?: never
                    motivo?: string | null
                    usuario_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "cita_historial_estados_cita_id_fkey"
                        columns: ["cita_id"]
                        isOneToOne: false
                        referencedRelation: "cita"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cita_historial_estados_cita_id_fkey"
                        columns: ["cita_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["cita_id"]
                    },
                    {
                        foreignKeyName: "cita_historial_estados_estado_anterior_id_fkey"
                        columns: ["estado_anterior_id"]
                        isOneToOne: false
                        referencedRelation: "estados_cita"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cita_historial_estados_estado_nuevo_id_fkey"
                        columns: ["estado_nuevo_id"]
                        isOneToOne: false
                        referencedRelation: "estados_cita"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cita_historial_estados_usuario_id_fkey"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cita_historial_estados_usuario_id_fkey"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "cita_historial_estados_usuario_id_fkey"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["usuario_id"]
                    }
                ]
            }
            cliente_sucursal: {
                Row: {
                    cliente_id: string
                    created_at: string
                    deleted_At: string | null
                    id: number
                    sucursal_id: string
                }
                Insert: {
                    cliente_id: string
                    created_at?: string
                    deleted_At?: string | null
                    id?: number
                    sucursal_id: string
                }
                Update: {
                    cliente_id?: string
                    created_at?: string
                    deleted_At?: string | null
                    id?: number
                    sucursal_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "cliente_sucursal_cliente_id_fkey"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "clientes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cliente_sucursal_cliente_id_fkey"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "cliente_sucursal_cliente_id_fkey"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "cliente_sucursal_cliente_id_fkey"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "cliente_sucursal_cliente_id_fkey"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "cliente_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cliente_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cliente_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cliente_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cliente_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cliente_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cliente_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cliente_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cliente_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cliente_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cliente_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cliente_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    }
                ]
            }
            cliente_vehiculo: {
                Row: {
                    cliente_id: string | null
                    deleted_at: string | null
                    fecha_creacion: string | null
                    id: string
                    vehiculo: string | null
                }
                Insert: {
                    cliente_id?: string | null
                    deleted_at?: string | null
                    fecha_creacion?: string | null
                    id?: string
                    vehiculo?: string | null
                }
                Update: {
                    cliente_id?: string | null
                    deleted_at?: string | null
                    fecha_creacion?: string | null
                    id?: string
                    vehiculo?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "cliente_vehiculo_cliente_id_fkey"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "clientes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cliente_vehiculo_cliente_id_fkey"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "cliente_vehiculo_cliente_id_fkey"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "cliente_vehiculo_cliente_id_fkey"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "cliente_vehiculo_cliente_id_fkey"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "cliente_vehiculo_vehiculo_fkey"
                        columns: ["vehiculo"]
                        isOneToOne: false
                        referencedRelation: "vehiculo"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cliente_vehiculo_vehiculo_fkey"
                        columns: ["vehiculo"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "cliente_vehiculo_vehiculo_fkey"
                        columns: ["vehiculo"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "cliente_vehiculo_vehiculo_fkey"
                        columns: ["vehiculo"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "cliente_vehiculo_vehiculo_fkey"
                        columns: ["vehiculo"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["vehiculo_id"]
                    }
                ]
            }
            clientes: {
                Row: {
                    apellido: string | null
                    cliente_correlativo: number | null
                    correo: string | null
                    created_at: string | null
                    deleted_at: string | null
                    direccion: string | null
                    id: string
                    instagram: string | null
                    is_empresa: boolean | null
                    nombre: string | null
                    rut: string | null
                    stytch_created: boolean | null
                    stytch_user_id: string | null
                    telefono: string | null
                }
                Insert: {
                    apellido?: string | null
                    cliente_correlativo?: number | null
                    correo?: string | null
                    created_at?: string | null
                    deleted_at?: string | null
                    direccion?: string | null
                    id?: string
                    instagram?: string | null
                    is_empresa?: boolean | null
                    nombre?: string | null
                    rut?: string | null
                    stytch_created?: boolean | null
                    stytch_user_id?: string | null
                    telefono?: string | null
                }
                Update: {
                    apellido?: string | null
                    cliente_correlativo?: number | null
                    correo?: string | null
                    created_at?: string | null
                    deleted_at?: string | null
                    direccion?: string | null
                    id?: string
                    instagram?: string | null
                    is_empresa?: boolean | null
                    nombre?: string | null
                    rut?: string | null
                    stytch_created?: boolean | null
                    stytch_user_id?: string | null
                    telefono?: string | null
                }
                Relationships: []
            }
            compras: {
                Row: {
                    condiciones_pago: string | null
                    created_at: string | null
                    deleted_at: string | null
                    estado: string
                    fecha_entrega_esperada: string | null
                    fecha_orden: string
                    id: string
                    items: Json[] | null
                    numero_orden_compra: string | null
                    observaciones: string | null
                    proveedor_id: string
                    sucursal_id: string
                    total_ordenado: number
                    total_recibido: number | null
                    user_id: string
                }
                Insert: {
                    condiciones_pago?: string | null
                    created_at?: string | null
                    deleted_at?: string | null
                    estado?: string
                    fecha_entrega_esperada?: string | null
                    fecha_orden: string
                    id?: string
                    items?: Json[] | null
                    numero_orden_compra?: string | null
                    observaciones?: string | null
                    proveedor_id: string
                    sucursal_id: string
                    total_ordenado: number
                    total_recibido?: number | null
                    user_id: string
                }
                Update: {
                    condiciones_pago?: string | null
                    created_at?: string | null
                    deleted_at?: string | null
                    estado?: string
                    fecha_entrega_esperada?: string | null
                    fecha_orden?: string
                    id?: string
                    items?: Json[] | null
                    numero_orden_compra?: string | null
                    observaciones?: string | null
                    proveedor_id?: string
                    sucursal_id?: string
                    total_ordenado?: number
                    total_recibido?: number | null
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "compras_proveedor_id_fkey"
                        columns: ["proveedor_id"]
                        isOneToOne: false
                        referencedRelation: "proveedores"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "compras_proveedor_id_fkey"
                        columns: ["proveedor_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sesiones_full"
                        referencedColumns: ["proveedor_id"]
                    },
                    {
                        foreignKeyName: "compras_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "compras_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "compras_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "compras_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "compras_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "compras_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "compras_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "compras_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "compras_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "compras_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "compras_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "compras_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "compras_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "compras_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "compras_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["usuario_id"]
                    }
                ]
            }
            compras_adjuntos: {
                Row: {
                    cloudinary_public_id: string | null
                    compra_id: string
                    created_at: string | null
                    deleted_at: string | null
                    id: string
                    isPago: boolean | null
                    nombre_archivo: string
                    tipo_archivo: string | null
                    tipo_documento: string | null
                    url: string
                }
                Insert: {
                    cloudinary_public_id?: string | null
                    compra_id: string
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: string
                    isPago?: boolean | null
                    nombre_archivo: string
                    tipo_archivo?: string | null
                    tipo_documento?: string | null
                    url: string
                }
                Update: {
                    cloudinary_public_id?: string | null
                    compra_id?: string
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: string
                    isPago?: boolean | null
                    nombre_archivo?: string
                    tipo_archivo?: string | null
                    tipo_documento?: string | null
                    url?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "compras_adjuntos_compra_id_fkey"
                        columns: ["compra_id"]
                        isOneToOne: false
                        referencedRelation: "compras"
                        referencedColumns: ["id"]
                    }
                ]
            }
            compras_pagos: {
                Row: {
                    compra_id: string
                    created_at: string | null
                    deleted_at: string | null
                    fecha_pago: string
                    id: string
                    metodo_pago: string | null
                    monto_pagado: number
                    numero_documento: string | null
                    observaciones: string | null
                }
                Insert: {
                    compra_id: string
                    created_at?: string | null
                    deleted_at?: string | null
                    fecha_pago: string
                    id?: string
                    metodo_pago?: string | null
                    monto_pagado: number
                    numero_documento?: string | null
                    observaciones?: string | null
                }
                Update: {
                    compra_id?: string
                    created_at?: string | null
                    deleted_at?: string | null
                    fecha_pago?: string
                    id?: string
                    metodo_pago?: string | null
                    monto_pagado?: number
                    numero_documento?: string | null
                    observaciones?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "compras_pagos_compra_id_fkey"
                        columns: ["compra_id"]
                        isOneToOne: false
                        referencedRelation: "compras"
                        referencedColumns: ["id"]
                    }
                ]
            }
            comprobantes_pago_repuestos: {
                Row: {
                    created_at: string | null
                    deleted_at: string | null
                    id: string
                    nombre_archivo: string | null
                    public_id: string | null
                    secure_url: string | null
                    sesion_id: string
                    tipo_archivo: string | null
                    url: string
                }
                Insert: {
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: string
                    nombre_archivo?: string | null
                    public_id?: string | null
                    secure_url?: string | null
                    sesion_id: string
                    tipo_archivo?: string | null
                    url: string
                }
                Update: {
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: string
                    nombre_archivo?: string | null
                    public_id?: string | null
                    secure_url?: string | null
                    sesion_id?: string
                    tipo_archivo?: string | null
                    url?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "comprobantes_pago_repuestos_sesion_id_fkey"
                        columns: ["sesion_id"]
                        isOneToOne: false
                        referencedRelation: "sesiones_repuestero"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "comprobantes_pago_repuestos_sesion_id_fkey"
                        columns: ["sesion_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sesiones_full"
                        referencedColumns: ["sesion_id"]
                    }
                ]
            }
            comuna: {
                Row: {
                    created_at: string | null
                    deleted_at: string | null
                    id: number
                    latitud: number | null
                    longitud: number | null
                    nombre: string
                    region_id: number | null
                }
                Insert: {
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: never
                    latitud?: number | null
                    longitud?: number | null
                    nombre: string
                    region_id?: number | null
                }
                Update: {
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: never
                    latitud?: number | null
                    longitud?: number | null
                    nombre?: string
                    region_id?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "fk_comuna_region"
                        columns: ["region_id"]
                        isOneToOne: false
                        referencedRelation: "region"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_comuna_region"
                        columns: ["region_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["region_id"]
                    }
                ]
            }
            comunas_servicio: {
                Row: {
                    comuna_id: number | null
                    created_at: string | null
                    deleted_at: string | null
                    id: string
                    servicio_id: string | null
                }
                Insert: {
                    comuna_id?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: string
                    servicio_id?: string | null
                }
                Update: {
                    comuna_id?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: string
                    servicio_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "comunas_servicio_comuna_id_fkey"
                        columns: ["comuna_id"]
                        isOneToOne: false
                        referencedRelation: "comuna"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "comunas_servicio_comuna_id_fkey"
                        columns: ["comuna_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["comuna_id"]
                    },
                    {
                        foreignKeyName: "comunas_servicio_servicio_id_fkey"
                        columns: ["servicio_id"]
                        isOneToOne: false
                        referencedRelation: "servicios"
                        referencedColumns: ["id"]
                    }
                ]
            }
            control: {
                Row: {
                    deleted_at: string | null
                    documento_url: string | null
                    fecha_creacion: string | null
                    id: string
                    kilometraje: string | null
                    observaciones: string | null
                    orden_id: string | null
                    plantilla_form_id: string | null
                    tipo_control_id: string | null
                }
                Insert: {
                    deleted_at?: string | null
                    documento_url?: string | null
                    fecha_creacion?: string | null
                    id?: string
                    kilometraje?: string | null
                    observaciones?: string | null
                    orden_id?: string | null
                    plantilla_form_id?: string | null
                    tipo_control_id?: string | null
                }
                Update: {
                    deleted_at?: string | null
                    documento_url?: string | null
                    fecha_creacion?: string | null
                    id?: string
                    kilometraje?: string | null
                    observaciones?: string | null
                    orden_id?: string | null
                    plantilla_form_id?: string | null
                    tipo_control_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "control_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "control_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "control_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "control_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "control_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "control_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "control_plantilla_form_id_fkey"
                        columns: ["plantilla_form_id"]
                        isOneToOne: false
                        referencedRelation: "plantillas"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "control_tipo_control_id_fkey"
                        columns: ["tipo_control_id"]
                        isOneToOne: false
                        referencedRelation: "tipo_control"
                        referencedColumns: ["id"]
                    }
                ]
            }
            control_img: {
                Row: {
                    control_id: string | null
                    deleted_at: string | null
                    fecha_creacion: string | null
                    id: string
                    url: string | null
                }
                Insert: {
                    control_id?: string | null
                    deleted_at?: string | null
                    fecha_creacion?: string | null
                    id?: string
                    url?: string | null
                }
                Update: {
                    control_id?: string | null
                    deleted_at?: string | null
                    fecha_creacion?: string | null
                    id?: string
                    url?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "control_img_control_id_fkey"
                        columns: ["control_id"]
                        isOneToOne: false
                        referencedRelation: "control"
                        referencedColumns: ["id"]
                    }
                ]
            }
            cotizaciones: {
                Row: {
                    approved_at: string | null
                    approved_code: string | null
                    approver_id: string | null
                    approver_type: string | null
                    cotizacion_correlativo: number | null
                    created_at: string | null
                    deleted_at: string | null
                    descuento: number | null
                    estado_id: number | null
                    id: string
                    incluye_iva: boolean | null
                    is_origen_online: boolean | null
                    isFavorite: boolean
                    isVista: boolean
                    motivo_cancelacion: string | null
                    notas_cotizacion: string | null
                    orden_id: string
                    sucursal_id: string | null
                    tags: Json | null
                    updated_at: string | null
                    valida_hasta: string | null
                }
                Insert: {
                    approved_at?: string | null
                    approved_code?: string | null
                    approver_id?: string | null
                    approver_type?: string | null
                    cotizacion_correlativo?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    descuento?: number | null
                    estado_id?: number | null
                    id?: string
                    incluye_iva?: boolean | null
                    is_origen_online?: boolean | null
                    isFavorite?: boolean
                    isVista?: boolean
                    motivo_cancelacion?: string | null
                    notas_cotizacion?: string | null
                    orden_id: string
                    sucursal_id?: string | null
                    tags?: Json | null
                    updated_at?: string | null
                    valida_hasta?: string | null
                }
                Update: {
                    approved_at?: string | null
                    approved_code?: string | null
                    approver_id?: string | null
                    approver_type?: string | null
                    cotizacion_correlativo?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    descuento?: number | null
                    estado_id?: number | null
                    id?: string
                    incluye_iva?: boolean | null
                    is_origen_online?: boolean | null
                    isFavorite?: boolean
                    isVista?: boolean
                    motivo_cancelacion?: string | null
                    notas_cotizacion?: string | null
                    orden_id?: string
                    sucursal_id?: string | null
                    tags?: Json | null
                    updated_at?: string | null
                    valida_hasta?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "cotizaciones_estado_id_fkey"
                        columns: ["estado_id"]
                        isOneToOne: false
                        referencedRelation: "cotizaciones_estados"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_estado_id_fkey"
                        columns: ["estado_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["cotizacion_estado_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    }
                ]
            }
            cotizaciones_adjuntos: {
                Row: {
                    bytes: number | null
                    cotizacion_id: string
                    created_at: string | null
                    deleted_at: string | null
                    format: string | null
                    id: string
                    nombre_archivo: string | null
                    public_id: string
                    resource_type: string | null
                    secure_url: string
                    url: string
                }
                Insert: {
                    bytes?: number | null
                    cotizacion_id: string
                    created_at?: string | null
                    deleted_at?: string | null
                    format?: string | null
                    id?: string
                    nombre_archivo?: string | null
                    public_id: string
                    resource_type?: string | null
                    secure_url: string
                    url: string
                }
                Update: {
                    bytes?: number | null
                    cotizacion_id?: string
                    created_at?: string | null
                    deleted_at?: string | null
                    format?: string | null
                    id?: string
                    nombre_archivo?: string | null
                    public_id?: string
                    resource_type?: string | null
                    secure_url?: string
                    url?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "cotizaciones_adjuntos_cotizacion_id_fkey"
                        columns: ["cotizacion_id"]
                        isOneToOne: false
                        referencedRelation: "cotizaciones"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_adjuntos_cotizacion_id_fkey"
                        columns: ["cotizacion_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["cotizacion_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_adjuntos_cotizacion_id_fkey"
                        columns: ["cotizacion_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["cotizacion_id"]
                    }
                ]
            }
            cotizaciones_estados: {
                Row: {
                    created_at: string
                    deleted_at: string | null
                    description: string | null
                    id: number
                    nombre: string
                }
                Insert: {
                    created_at?: string
                    deleted_at?: string | null
                    description?: string | null
                    id?: number
                    nombre: string
                }
                Update: {
                    created_at?: string
                    deleted_at?: string | null
                    description?: string | null
                    id?: number
                    nombre?: string
                }
                Relationships: []
            }
            cotizaciones_historial_estados: {
                Row: {
                    cotizacion_id: string
                    estado_anterior_id: number | null
                    estado_nuevo_id: number
                    fecha_cambio: string
                    id: string
                    motivo: string | null
                    usuario_id: string | null
                }
                Insert: {
                    cotizacion_id: string
                    estado_anterior_id?: number | null
                    estado_nuevo_id: number
                    fecha_cambio?: string
                    id?: string
                    motivo?: string | null
                    usuario_id?: string | null
                }
                Update: {
                    cotizacion_id?: string
                    estado_anterior_id?: number | null
                    estado_nuevo_id?: number
                    fecha_cambio?: string
                    id?: string
                    motivo?: string | null
                    usuario_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "cotizaciones_historial_estados_cotizacion_id_fkey"
                        columns: ["cotizacion_id"]
                        isOneToOne: false
                        referencedRelation: "cotizaciones"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_historial_estados_cotizacion_id_fkey"
                        columns: ["cotizacion_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["cotizacion_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_historial_estados_cotizacion_id_fkey"
                        columns: ["cotizacion_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["cotizacion_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_historial_estados_estado_anterior_id_fkey"
                        columns: ["estado_anterior_id"]
                        isOneToOne: false
                        referencedRelation: "cotizaciones_estados"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_historial_estados_estado_anterior_id_fkey"
                        columns: ["estado_anterior_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["cotizacion_estado_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_historial_estados_estado_nuevo_id_fkey"
                        columns: ["estado_nuevo_id"]
                        isOneToOne: false
                        referencedRelation: "cotizaciones_estados"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_historial_estados_estado_nuevo_id_fkey"
                        columns: ["estado_nuevo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["cotizacion_estado_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_historial_estados_usuario_id_fkey"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_historial_estados_usuario_id_fkey"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_historial_estados_usuario_id_fkey"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["usuario_id"]
                    }
                ]
            }
            device_notification_tokens: {
                Row: {
                    created_at: string
                    device_id: string | null
                    expo_push_token: string
                    id: string
                    is_active: boolean
                    platform: string | null
                    sucursal_id: string
                    updated_at: string
                    user_id: string
                }
                Insert: {
                    created_at?: string
                    device_id?: string | null
                    expo_push_token: string
                    id?: string
                    is_active?: boolean
                    platform?: string | null
                    sucursal_id: string
                    updated_at?: string
                    user_id: string
                }
                Update: {
                    created_at?: string
                    device_id?: string | null
                    expo_push_token?: string
                    id?: string
                    is_active?: boolean
                    platform?: string | null
                    sucursal_id?: string
                    updated_at?: string
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "device_notification_tokens_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "device_notification_tokens_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "device_notification_tokens_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "device_notification_tokens_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "device_notification_tokens_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "device_notification_tokens_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "device_notification_tokens_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "device_notification_tokens_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "device_notification_tokens_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "device_notification_tokens_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "device_notification_tokens_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "device_notification_tokens_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "device_notification_tokens_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "device_notification_tokens_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "device_notification_tokens_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["usuario_id"]
                    }
                ]
            }
            documentos_adjuntos: {
                Row: {
                    cloudinary_public_id: string
                    created_at: string | null
                    id: string
                    movimiento_id: string
                    nombre_archivo: string | null
                    tipo_archivo: string | null
                    url: string
                }
                Insert: {
                    cloudinary_public_id: string
                    created_at?: string | null
                    id?: string
                    movimiento_id: string
                    nombre_archivo?: string | null
                    tipo_archivo?: string | null
                    url: string
                }
                Update: {
                    cloudinary_public_id?: string
                    created_at?: string | null
                    id?: string
                    movimiento_id?: string
                    nombre_archivo?: string | null
                    tipo_archivo?: string | null
                    url?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "fk_movimiento_adjunto"
                        columns: ["movimiento_id"]
                        isOneToOne: false
                        referencedRelation: "movimientos_financieros"
                        referencedColumns: ["id"]
                    }
                ]
            }
            documentos_sii: {
                Row: {
                    created_at: string | null
                    fecha_emision: string
                    folio: number
                    id: string
                    monto_exento: number | null
                    monto_iva: number | null
                    monto_neto: number | null
                    monto_total: number
                    movimiento_id: string
                    nombre_tercero: string
                    rut_tercero: string
                    tipo_documento: string
                }
                Insert: {
                    created_at?: string | null
                    fecha_emision: string
                    folio: number
                    id?: string
                    monto_exento?: number | null
                    monto_iva?: number | null
                    monto_neto?: number | null
                    monto_total: number
                    movimiento_id: string
                    nombre_tercero: string
                    rut_tercero: string
                    tipo_documento: string
                }
                Update: {
                    created_at?: string | null
                    fecha_emision?: string
                    folio?: number
                    id?: string
                    monto_exento?: number | null
                    monto_iva?: number | null
                    monto_neto?: number | null
                    monto_total?: number
                    movimiento_id?: string
                    nombre_tercero?: string
                    rut_tercero?: string
                    tipo_documento?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "fk_movimiento"
                        columns: ["movimiento_id"]
                        isOneToOne: true
                        referencedRelation: "movimientos_financieros"
                        referencedColumns: ["id"]
                    }
                ]
            }
            empresa: {
                Row: {
                    casa_matriz: string | null
                    contacto: string | null
                    contacto_cobranza: string | null
                    correo_cobranza: string | null
                    created_at: string | null
                    deleted_at: string | null
                    domicilio_empresa: string | null
                    fecha_ult_pago: string | null
                    id: string
                    identificacion: string
                    nombre: string
                    nombre_representante_legal: string | null
                    pais_id: string | null
                    razon_social: string | null
                }
                Insert: {
                    casa_matriz?: string | null
                    contacto?: string | null
                    contacto_cobranza?: string | null
                    correo_cobranza?: string | null
                    created_at?: string | null
                    deleted_at?: string | null
                    domicilio_empresa?: string | null
                    fecha_ult_pago?: string | null
                    id?: string
                    identificacion: string
                    nombre: string
                    nombre_representante_legal?: string | null
                    pais_id?: string | null
                    razon_social?: string | null
                }
                Update: {
                    casa_matriz?: string | null
                    contacto?: string | null
                    contacto_cobranza?: string | null
                    correo_cobranza?: string | null
                    created_at?: string | null
                    deleted_at?: string | null
                    domicilio_empresa?: string | null
                    fecha_ult_pago?: string | null
                    id?: string
                    identificacion?: string
                    nombre?: string
                    nombre_representante_legal?: string | null
                    pais_id?: string | null
                    razon_social?: string | null
                }
                Relationships: []
            }
            estados_cita: {
                Row: {
                    created_at: string
                    descripcion: string | null
                    id: number
                    nombre: string
                }
                Insert: {
                    created_at?: string
                    descripcion?: string | null
                    id?: number
                    nombre: string
                }
                Update: {
                    created_at?: string
                    descripcion?: string | null
                    id?: number
                    nombre?: string
                }
                Relationships: []
            }
            evaluacion: {
                Row: {
                    calificacion: number
                    cliente_id: string | null
                    comentarios: string | null
                    deleted_at: string | null
                    etiquetas: Json[] | null
                    fecha_creacion: string | null
                    id: string
                    orden_id: string
                }
                Insert: {
                    calificacion: number
                    cliente_id?: string | null
                    comentarios?: string | null
                    deleted_at?: string | null
                    etiquetas?: Json[] | null
                    fecha_creacion?: string | null
                    id?: string
                    orden_id: string
                }
                Update: {
                    calificacion?: number
                    cliente_id?: string | null
                    comentarios?: string | null
                    deleted_at?: string | null
                    etiquetas?: Json[] | null
                    fecha_creacion?: string | null
                    id?: string
                    orden_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "evaluacion_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "evaluacion_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "evaluacion_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "evaluacion_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "evaluacion_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "evaluacion_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    }
                ]
            }
            flota: {
                Row: {
                    deleted_at: string | null
                    fecha_adquisicion: string | null
                    id: string
                    nombre: string
                    numero_serie: string | null
                }
                Insert: {
                    deleted_at?: string | null
                    fecha_adquisicion?: string | null
                    id?: string
                    nombre: string
                    numero_serie?: string | null
                }
                Update: {
                    deleted_at?: string | null
                    fecha_adquisicion?: string | null
                    id?: string
                    nombre?: string
                    numero_serie?: string | null
                }
                Relationships: []
            }
            form_valores: {
                Row: {
                    check_in: string | null
                    deleted_at: string | null
                    description: string | null
                    id: string
                    nivel: string | null
                    status: boolean | null
                    tipo_control_id: string | null
                }
                Insert: {
                    check_in?: string | null
                    deleted_at?: string | null
                    description?: string | null
                    id?: string
                    nivel?: string | null
                    status?: boolean | null
                    tipo_control_id?: string | null
                }
                Update: {
                    check_in?: string | null
                    deleted_at?: string | null
                    description?: string | null
                    id?: string
                    nivel?: string | null
                    status?: boolean | null
                    tipo_control_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "form_valores_check_in_fkey"
                        columns: ["check_in"]
                        isOneToOne: false
                        referencedRelation: "control"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "form_valores_tipo_control_id_fkey"
                        columns: ["tipo_control_id"]
                        isOneToOne: false
                        referencedRelation: "tipo_chequeo"
                        referencedColumns: ["id"]
                    }
                ]
            }
            funciones: {
                Row: {
                    created_at: string | null
                    deleted_at: string | null
                    id: string
                    nombre: string
                }
                Insert: {
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: string
                    nombre: string
                }
                Update: {
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: string
                    nombre?: string
                }
                Relationships: []
            }
            funciones_suscripcion: {
                Row: {
                    created_at: string | null
                    deleted_at: string | null
                    funcion_id: string | null
                    id: string
                    suscripcion_id: string | null
                }
                Insert: {
                    created_at?: string | null
                    deleted_at?: string | null
                    funcion_id?: string | null
                    id?: string
                    suscripcion_id?: string | null
                }
                Update: {
                    created_at?: string | null
                    deleted_at?: string | null
                    funcion_id?: string | null
                    id?: string
                    suscripcion_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "funciones_suscripcion_funcion_id_fkey"
                        columns: ["funcion_id"]
                        isOneToOne: false
                        referencedRelation: "funciones"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "funciones_suscripcion_suscripcion_id_fkey"
                        columns: ["suscripcion_id"]
                        isOneToOne: false
                        referencedRelation: "suscripcion"
                        referencedColumns: ["id"]
                    }
                ]
            }
            horario_sucursal_servicios: {
                Row: {
                    created_at: string | null
                    deleted_at: string | null
                    horario_sucursal_id: string | null
                    id: string
                    servicio_id: string | null
                }
                Insert: {
                    created_at?: string | null
                    deleted_at?: string | null
                    horario_sucursal_id?: string | null
                    id?: string
                    servicio_id?: string | null
                }
                Update: {
                    created_at?: string | null
                    deleted_at?: string | null
                    horario_sucursal_id?: string | null
                    id?: string
                    servicio_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "horario_sucursal_servicios_servicio_id_fkey"
                        columns: ["servicio_id"]
                        isOneToOne: false
                        referencedRelation: "servicios"
                        referencedColumns: ["id"]
                    }
                ]
            }
            images_pagina_web: {
                Row: {
                    categoria: string
                    deleted_at: string | null
                    id: number
                    image_pagina_web_cat: string
                    pagina_web_id: string
                    url: string
                }
                Insert: {
                    categoria: string
                    deleted_at?: string | null
                    id?: never
                    image_pagina_web_cat: string
                    pagina_web_id: string
                    url: string
                }
                Update: {
                    categoria?: string
                    deleted_at?: string | null
                    id?: never
                    image_pagina_web_cat?: string
                    pagina_web_id?: string
                    url?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "fk_pagina_web"
                        columns: ["pagina_web_id"]
                        isOneToOne: false
                        referencedRelation: "pagina_web"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_pagina_web"
                        columns: ["pagina_web_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["pagina_web_id"]
                    }
                ]
            }
            inspeccion_adjuntos: {
                Row: {
                    cloudinary_public_id: string | null
                    created_at: string
                    id: string
                    registro_id: string
                    url: string
                }
                Insert: {
                    cloudinary_public_id?: string | null
                    created_at?: string
                    id?: string
                    registro_id: string
                    url: string
                }
                Update: {
                    cloudinary_public_id?: string | null
                    created_at?: string
                    id?: string
                    registro_id?: string
                    url?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "inspeccion_adjuntos_registro_id_fkey"
                        columns: ["registro_id"]
                        isOneToOne: false
                        referencedRelation: "inspeccion_registros"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "inspeccion_adjuntos_registro_id_fkey"
                        columns: ["registro_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["registro_id"]
                    }
                ]
            }
            inspeccion_catalogo_tipos_bloque: {
                Row: {
                    configuracion_render_base: Json | null
                    es_personalizable: boolean
                    id: number
                    key: string
                    nombre_display: string
                }
                Insert: {
                    configuracion_render_base?: Json | null
                    es_personalizable?: boolean
                    id: number
                    key: string
                    nombre_display: string
                }
                Update: {
                    configuracion_render_base?: Json | null
                    es_personalizable?: boolean
                    id?: number
                    key?: string
                    nombre_display?: string
                }
                Relationships: []
            }
            inspeccion_formulario_bloques_asociados: {
                Row: {
                    formulario_id: string
                    id: number
                    plantilla_bloque_cliente_id: string | null
                    posicion: number
                    tipo_bloque_catalogo_id: number | null
                }
                Insert: {
                    formulario_id: string
                    id?: number
                    plantilla_bloque_cliente_id?: string | null
                    posicion: number
                    tipo_bloque_catalogo_id?: number | null
                }
                Update: {
                    formulario_id?: string
                    id?: number
                    plantilla_bloque_cliente_id?: string | null
                    posicion?: number
                    tipo_bloque_catalogo_id?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "inspeccion_formulario_bloques__plantilla_bloque_cliente_id_fkey"
                        columns: ["plantilla_bloque_cliente_id"]
                        isOneToOne: false
                        referencedRelation: "inspeccion_plantillas_bloque_cliente"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "inspeccion_formulario_bloques_asoc_tipo_bloque_catalogo_id_fkey"
                        columns: ["tipo_bloque_catalogo_id"]
                        isOneToOne: false
                        referencedRelation: "inspeccion_catalogo_tipos_bloque"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "inspeccion_formulario_bloques_asociados_formulario_id_fkey"
                        columns: ["formulario_id"]
                        isOneToOne: false
                        referencedRelation: "inspeccion_formularios"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "inspeccion_formulario_bloques_asociados_formulario_id_fkey"
                        columns: ["formulario_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["formulario_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_formulario_bloques_asociados_formulario_id_fkey"
                        columns: ["formulario_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["formulario_id"]
                    }
                ]
            }
            inspeccion_formularios: {
                Row: {
                    created_at: string
                    id: string
                    is_active: boolean
                    nombre: string
                    sucursal_id: string
                }
                Insert: {
                    created_at?: string
                    id?: string
                    is_active?: boolean
                    nombre: string
                    sucursal_id: string
                }
                Update: {
                    created_at?: string
                    id?: string
                    is_active?: boolean
                    nombre?: string
                    sucursal_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "inspeccion_formularios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_formularios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "inspeccion_formularios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_formularios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_formularios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_formularios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_formularios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_formularios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_formularios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_formularios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_formularios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_formularios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    }
                ]
            }
            inspeccion_hallazgos: {
                Row: {
                    ai_interaction_id: string | null
                    categoria_sistema: string | null
                    comentario_revision: string | null
                    componente_afectado: string | null
                    created_at: string | null
                    criticidad: string | null
                    descripcion_detallada: string
                    estado: string
                    fecha_revision: string | null
                    id: string
                    id_hallazgo_ia: string | null
                    referencias_visuales: Json | null
                    registro_id: string
                    usuario_id_revision: string | null
                }
                Insert: {
                    ai_interaction_id?: string | null
                    categoria_sistema?: string | null
                    comentario_revision?: string | null
                    componente_afectado?: string | null
                    created_at?: string | null
                    criticidad?: string | null
                    descripcion_detallada: string
                    estado?: string
                    fecha_revision?: string | null
                    id?: string
                    id_hallazgo_ia?: string | null
                    referencias_visuales?: Json | null
                    registro_id: string
                    usuario_id_revision?: string | null
                }
                Update: {
                    ai_interaction_id?: string | null
                    categoria_sistema?: string | null
                    comentario_revision?: string | null
                    componente_afectado?: string | null
                    created_at?: string | null
                    criticidad?: string | null
                    descripcion_detallada?: string
                    estado?: string
                    fecha_revision?: string | null
                    id?: string
                    id_hallazgo_ia?: string | null
                    referencias_visuales?: Json | null
                    registro_id?: string
                    usuario_id_revision?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "inspeccion_hallazgos_ai_interaction_id_fkey"
                        columns: ["ai_interaction_id"]
                        isOneToOne: false
                        referencedRelation: "ai_interactions"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "inspeccion_hallazgos_registro_id_fkey"
                        columns: ["registro_id"]
                        isOneToOne: false
                        referencedRelation: "inspeccion_registros"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "inspeccion_hallazgos_registro_id_fkey"
                        columns: ["registro_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["registro_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_hallazgos_usuario_id_revision_fkey"
                        columns: ["usuario_id_revision"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "inspeccion_hallazgos_usuario_id_revision_fkey"
                        columns: ["usuario_id_revision"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_hallazgos_usuario_id_revision_fkey"
                        columns: ["usuario_id_revision"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["usuario_id"]
                    }
                ]
            }
            inspeccion_plantillas_bloque_cliente: {
                Row: {
                    configuracion_personalizada: Json
                    created_at: string
                    id: string
                    is_active: boolean
                    nombre_bloque: string
                    sucursal_id: string
                    tipo_bloque_id: number
                }
                Insert: {
                    configuracion_personalizada: Json
                    created_at?: string
                    id?: string
                    is_active?: boolean
                    nombre_bloque: string
                    sucursal_id: string
                    tipo_bloque_id: number
                }
                Update: {
                    configuracion_personalizada?: Json
                    created_at?: string
                    id?: string
                    is_active?: boolean
                    nombre_bloque?: string
                    sucursal_id?: string
                    tipo_bloque_id?: number
                }
                Relationships: [
                    {
                        foreignKeyName: "inspeccion_plantillas_bloque_cliente_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_plantillas_bloque_cliente_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "inspeccion_plantillas_bloque_cliente_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_plantillas_bloque_cliente_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_plantillas_bloque_cliente_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_plantillas_bloque_cliente_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_plantillas_bloque_cliente_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_plantillas_bloque_cliente_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_plantillas_bloque_cliente_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_plantillas_bloque_cliente_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_plantillas_bloque_cliente_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_plantillas_bloque_cliente_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_plantillas_bloque_cliente_tipo_bloque_id_fkey"
                        columns: ["tipo_bloque_id"]
                        isOneToOne: false
                        referencedRelation: "inspeccion_catalogo_tipos_bloque"
                        referencedColumns: ["id"]
                    }
                ]
            }
            inspeccion_registros: {
                Row: {
                    completed_at: string | null
                    correlativo: number | null
                    created_at: string
                    estado: string
                    formulario_id: string
                    id: string
                    orden_id: string
                    usuario_id: string
                }
                Insert: {
                    completed_at?: string | null
                    correlativo?: number | null
                    created_at?: string
                    estado?: string
                    formulario_id: string
                    id?: string
                    orden_id: string
                    usuario_id: string
                }
                Update: {
                    completed_at?: string | null
                    correlativo?: number | null
                    created_at?: string
                    estado?: string
                    formulario_id?: string
                    id?: string
                    orden_id?: string
                    usuario_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "inspeccion_registros_formulario_id_fkey"
                        columns: ["formulario_id"]
                        isOneToOne: false
                        referencedRelation: "inspeccion_formularios"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "inspeccion_registros_formulario_id_fkey"
                        columns: ["formulario_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["formulario_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_registros_formulario_id_fkey"
                        columns: ["formulario_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["formulario_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_registros_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_registros_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "inspeccion_registros_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_registros_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_registros_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_registros_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_registros_usuario_id_fkey"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "inspeccion_registros_usuario_id_fkey"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "inspeccion_registros_usuario_id_fkey"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["usuario_id"]
                    }
                ]
            }
            inspeccion_respuestas: {
                Row: {
                    bloque_asociado_id: number
                    created_at: string
                    id: number
                    registro_id: string
                    respuestas_json: Json
                    updated_at: string | null
                }
                Insert: {
                    bloque_asociado_id: number
                    created_at?: string
                    id?: number
                    registro_id: string
                    respuestas_json: Json
                    updated_at?: string | null
                }
                Update: {
                    bloque_asociado_id?: number
                    created_at?: string
                    id?: number
                    registro_id?: string
                    respuestas_json?: Json
                    updated_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "inspeccion_respuestas_bloque_asociado_id_fkey"
                        columns: ["bloque_asociado_id"]
                        isOneToOne: false
                        referencedRelation: "inspeccion_formulario_bloques_asociados"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "inspeccion_respuestas_registro_id_fkey"
                        columns: ["registro_id"]
                        isOneToOne: false
                        referencedRelation: "inspeccion_registros"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "inspeccion_respuestas_registro_id_fkey"
                        columns: ["registro_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["registro_id"]
                    }
                ]
            }
            items_cot: {
                Row: {
                    cantidad: number | null
                    codigo: string | null
                    cotizacion_id: string
                    deleted_at: string | null
                    id: string
                    nombre: string | null
                    precio_impuesto: number | null
                    precio_unitario: number | null
                    producto_id: string | null
                }
                Insert: {
                    cantidad?: number | null
                    codigo?: string | null
                    cotizacion_id: string
                    deleted_at?: string | null
                    id?: string
                    nombre?: string | null
                    precio_impuesto?: number | null
                    precio_unitario?: number | null
                    producto_id?: string | null
                }
                Update: {
                    cantidad?: number | null
                    codigo?: string | null
                    cotizacion_id?: string
                    deleted_at?: string | null
                    id?: string
                    nombre?: string | null
                    precio_impuesto?: number | null
                    precio_unitario?: number | null
                    producto_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "items_cot_cotizacion_id_fkey"
                        columns: ["cotizacion_id"]
                        isOneToOne: false
                        referencedRelation: "cotizaciones"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "items_cot_cotizacion_id_fkey"
                        columns: ["cotizacion_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["cotizacion_id"]
                    },
                    {
                        foreignKeyName: "items_cot_cotizacion_id_fkey"
                        columns: ["cotizacion_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["cotizacion_id"]
                    },
                    {
                        foreignKeyName: "items_cot_producto_id_fkey"
                        columns: ["producto_id"]
                        isOneToOne: false
                        referencedRelation: "productos"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "items_cot_producto_id_fkey"
                        columns: ["producto_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["producto_id"]
                    }
                ]
            }
            items_solicitud: {
                Row: {
                    cantidad: number | null
                    created_at: string | null
                    deleted_at: string | null
                    descripcion_adicional: string | null
                    estado_item: string | null
                    id: string
                    nombre_pieza: string
                    numero_oem_referencia: string | null
                    orden_id: string | null
                    solicitud_id: string
                    vehiculo_snapshot: Json
                }
                Insert: {
                    cantidad?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    descripcion_adicional?: string | null
                    estado_item?: string | null
                    id?: string
                    nombre_pieza: string
                    numero_oem_referencia?: string | null
                    orden_id?: string | null
                    solicitud_id: string
                    vehiculo_snapshot?: Json
                }
                Update: {
                    cantidad?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    descripcion_adicional?: string | null
                    estado_item?: string | null
                    id?: string
                    nombre_pieza?: string
                    numero_oem_referencia?: string | null
                    orden_id?: string | null
                    solicitud_id?: string
                    vehiculo_snapshot?: Json
                }
                Relationships: [
                    {
                        foreignKeyName: "fk_item_orden"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "fk_item_orden"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_item_orden"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "fk_item_orden"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "fk_item_orden"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "fk_item_orden"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "fk_item_solicitud"
                        columns: ["solicitud_id"]
                        isOneToOne: false
                        referencedRelation: "solicitudes_repuestos"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_item_solicitud"
                        columns: ["solicitud_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sesiones_full"
                        referencedColumns: ["solicitud_id"]
                    },
                    {
                        foreignKeyName: "fk_item_solicitud"
                        columns: ["solicitud_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["solicitud_id"]
                    }
                ]
            }
            marca_catalogo: {
                Row: {
                    id_orden: number | null
                    image: Json
                    name: string
                    slug: string
                }
                Insert: {
                    id_orden?: number | null
                    image: Json
                    name: string
                    slug: string
                }
                Update: {
                    id_orden?: number | null
                    image?: Json
                    name?: string
                    slug?: string
                }
                Relationships: []
            }
            mecanico_orden: {
                Row: {
                    created_at: string
                    deleted_at: string | null
                    id: number
                    orden_id: string
                    profile_id: string
                }
                Insert: {
                    created_at?: string
                    deleted_at?: string | null
                    id?: number
                    orden_id: string
                    profile_id: string
                }
                Update: {
                    created_at?: string
                    deleted_at?: string | null
                    id?: number
                    orden_id?: string
                    profile_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "mecanico_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "mecanico_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "mecanico_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "mecanico_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "mecanico_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "mecanico_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "mecanico_orden_profile_id_fkey"
                        columns: ["profile_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "mecanico_orden_profile_id_fkey"
                        columns: ["profile_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "mecanico_orden_profile_id_fkey"
                        columns: ["profile_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["usuario_id"]
                    }
                ]
            }
            mensajes_intercambio: {
                Row: {
                    contenido_texto: string | null
                    created_at: string | null
                    emisor: string
                    es_leido: boolean | null
                    id: string
                    message_sid_externo: string | null
                    payload_estructurado: Json | null
                    sesion_id: string
                    tipo_contenido: string
                }
                Insert: {
                    contenido_texto?: string | null
                    created_at?: string | null
                    emisor: string
                    es_leido?: boolean | null
                    id?: string
                    message_sid_externo?: string | null
                    payload_estructurado?: Json | null
                    sesion_id: string
                    tipo_contenido?: string
                }
                Update: {
                    contenido_texto?: string | null
                    created_at?: string | null
                    emisor?: string
                    es_leido?: boolean | null
                    id?: string
                    message_sid_externo?: string | null
                    payload_estructurado?: Json | null
                    sesion_id?: string
                    tipo_contenido?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "fk_mensaje_sesion"
                        columns: ["sesion_id"]
                        isOneToOne: false
                        referencedRelation: "sesiones_repuestero"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_mensaje_sesion"
                        columns: ["sesion_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sesiones_full"
                        referencedColumns: ["sesion_id"]
                    }
                ]
            }
            movimiento_documentos: {
                Row: {
                    bytes: number | null
                    created_at: string
                    deleted_at: string | null
                    documento_id: string | null
                    format: string
                    id: string
                    public_id: string
                    resource_type: string
                    secure_url: string
                    url: string
                }
                Insert: {
                    bytes?: number | null
                    created_at?: string
                    deleted_at?: string | null
                    documento_id?: string | null
                    format: string
                    id?: string
                    public_id: string
                    resource_type: string
                    secure_url: string
                    url: string
                }
                Update: {
                    bytes?: number | null
                    created_at?: string
                    deleted_at?: string | null
                    documento_id?: string | null
                    format?: string
                    id?: string
                    public_id?: string
                    resource_type?: string
                    secure_url?: string
                    url?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "movimiento_documentos_documento_id_fkey"
                        columns: ["documento_id"]
                        isOneToOne: false
                        referencedRelation: "movimientos_inventario_sucursal"
                        referencedColumns: ["id"]
                    }
                ]
            }
            movimientos_financieros: {
                Row: {
                    concepto: string
                    deleted_at: string | null
                    fecha: string | null
                    finanza_correlativo: number | null
                    fuente_dinero: string | null
                    fuente_id: string | null
                    fuente_tipo: Database["public"]["Enums"]["tipo_fuente_movimiento"] | null
                    id: string
                    metodo_pago: string | null
                    monto: number | null
                    notas: string | null
                    sucursal_id: string
                    tipo: string | null
                }
                Insert: {
                    concepto: string
                    deleted_at?: string | null
                    fecha?: string | null
                    finanza_correlativo?: number | null
                    fuente_dinero?: string | null
                    fuente_id?: string | null
                    fuente_tipo?: Database["public"]["Enums"]["tipo_fuente_movimiento"] | null
                    id?: string
                    metodo_pago?: string | null
                    monto?: number | null
                    notas?: string | null
                    sucursal_id: string
                    tipo?: string | null
                }
                Update: {
                    concepto?: string
                    deleted_at?: string | null
                    fecha?: string | null
                    finanza_correlativo?: number | null
                    fuente_dinero?: string | null
                    fuente_id?: string | null
                    fuente_tipo?: Database["public"]["Enums"]["tipo_fuente_movimiento"] | null
                    id?: string
                    metodo_pago?: string | null
                    monto?: number | null
                    notas?: string | null
                    sucursal_id?: string
                    tipo?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "movimientos_financieros_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "movimientos_financieros_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "movimientos_financieros_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "movimientos_financieros_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "movimientos_financieros_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "movimientos_financieros_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "movimientos_financieros_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "movimientos_financieros_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "movimientos_financieros_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "movimientos_financieros_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "movimientos_financieros_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "movimientos_financieros_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    }
                ]
            }
            movimientos_inventario: {
                Row: {
                    cantidad: number
                    created_at: string | null
                    deleted_at: string | null
                    fecha: string | null
                    id: string
                    movimiento_id: string | null
                    nota: string | null
                    producto_id: string
                    tipo_movimiento: Database["public"]["Enums"]["tipo_movimiento_inventario"]
                    ubicacion_destino_id: string | null
                    ubicacion_origen_id: string | null
                    usuario_id: string | null
                }
                Insert: {
                    cantidad: number
                    created_at?: string | null
                    deleted_at?: string | null
                    fecha?: string | null
                    id?: string
                    movimiento_id?: string | null
                    nota?: string | null
                    producto_id: string
                    tipo_movimiento: Database["public"]["Enums"]["tipo_movimiento_inventario"]
                    ubicacion_destino_id?: string | null
                    ubicacion_origen_id?: string | null
                    usuario_id?: string | null
                }
                Update: {
                    cantidad?: number
                    created_at?: string | null
                    deleted_at?: string | null
                    fecha?: string | null
                    id?: string
                    movimiento_id?: string | null
                    nota?: string | null
                    producto_id?: string
                    tipo_movimiento?: Database["public"]["Enums"]["tipo_movimiento_inventario"]
                    ubicacion_destino_id?: string | null
                    ubicacion_origen_id?: string | null
                    usuario_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "movimientos_inventario_movimiento_id_fkey"
                        columns: ["movimiento_id"]
                        isOneToOne: false
                        referencedRelation: "movimientos_inventario_sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "movimientos_inventario_producto_id_fkey"
                        columns: ["producto_id"]
                        isOneToOne: false
                        referencedRelation: "productos"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "movimientos_inventario_producto_id_fkey"
                        columns: ["producto_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["producto_id"]
                    },
                    {
                        foreignKeyName: "movimientos_inventario_ubicacion_destino_id_fkey"
                        columns: ["ubicacion_destino_id"]
                        isOneToOne: false
                        referencedRelation: "ubicaciones_inventario"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "movimientos_inventario_ubicacion_origen_id_fkey"
                        columns: ["ubicacion_origen_id"]
                        isOneToOne: false
                        referencedRelation: "ubicaciones_inventario"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "movimientos_inventario_usuario_id_fkey1"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "movimientos_inventario_usuario_id_fkey1"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "movimientos_inventario_usuario_id_fkey1"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["usuario_id"]
                    }
                ]
            }
            movimientos_inventario_sucursal: {
                Row: {
                    created_at: string
                    deleted_at: string | null
                    fecha: string
                    id: string
                    movimiento_correlativo: number | null
                    numero: string | null
                    observaciones: string | null
                    proveedor_id: string | null
                    sucursal_id: string
                    tipo_documento: string
                    total: number | null
                    user_id: string
                }
                Insert: {
                    created_at?: string
                    deleted_at?: string | null
                    fecha?: string
                    id?: string
                    movimiento_correlativo?: number | null
                    numero?: string | null
                    observaciones?: string | null
                    proveedor_id?: string | null
                    sucursal_id: string
                    tipo_documento: string
                    total?: number | null
                    user_id: string
                }
                Update: {
                    created_at?: string
                    deleted_at?: string | null
                    fecha?: string
                    id?: string
                    movimiento_correlativo?: number | null
                    numero?: string | null
                    observaciones?: string | null
                    proveedor_id?: string | null
                    sucursal_id?: string
                    tipo_documento?: string
                    total?: number | null
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "documentos_inventario_proveedor_id_fkey"
                        columns: ["proveedor_id"]
                        isOneToOne: false
                        referencedRelation: "proveedores"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "documentos_inventario_proveedor_id_fkey"
                        columns: ["proveedor_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sesiones_full"
                        referencedColumns: ["proveedor_id"]
                    },
                    {
                        foreignKeyName: "documentos_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "documentos_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "documentos_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "documentos_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "documentos_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "documentos_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "documentos_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "documentos_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "documentos_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "documentos_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "documentos_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "documentos_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "documentos_inventario_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "documentos_inventario_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "documentos_inventario_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["usuario_id"]
                    }
                ]
            }
            notas_orden: {
                Row: {
                    comentario: string | null
                    created_at: string
                    id: number
                    orden_id: string | null
                    profile_id: string | null
                    titulo: string | null
                }
                Insert: {
                    comentario?: string | null
                    created_at?: string
                    id?: number
                    orden_id?: string | null
                    profile_id?: string | null
                    titulo?: string | null
                }
                Update: {
                    comentario?: string | null
                    created_at?: string
                    id?: number
                    orden_id?: string | null
                    profile_id?: string | null
                    titulo?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "notas_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "notas_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "notas_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "notas_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "notas_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "notas_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "notas_orden_profile_id_fkey"
                        columns: ["profile_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "notas_orden_profile_id_fkey"
                        columns: ["profile_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "notas_orden_profile_id_fkey"
                        columns: ["profile_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["usuario_id"]
                    }
                ]
            }
            ofertas_repuestos: {
                Row: {
                    condicion: string | null
                    created_at: string | null
                    deleted_at: string | null
                    descripcion_oferta: string | null
                    id: string
                    imagen: Json[] | null
                    item_solicitud_id: string | null
                    marca: string | null
                    moneda: string | null
                    motivo_rechazo: string | null
                    origen: string | null
                    plazo_entrega: string | null
                    precio_unitario: number
                    seleccionada: boolean | null
                    sesion_id: string
                }
                Insert: {
                    condicion?: string | null
                    created_at?: string | null
                    deleted_at?: string | null
                    descripcion_oferta?: string | null
                    id?: string
                    imagen?: Json[] | null
                    item_solicitud_id?: string | null
                    marca?: string | null
                    moneda?: string | null
                    motivo_rechazo?: string | null
                    origen?: string | null
                    plazo_entrega?: string | null
                    precio_unitario: number
                    seleccionada?: boolean | null
                    sesion_id: string
                }
                Update: {
                    condicion?: string | null
                    created_at?: string | null
                    deleted_at?: string | null
                    descripcion_oferta?: string | null
                    id?: string
                    imagen?: Json[] | null
                    item_solicitud_id?: string | null
                    marca?: string | null
                    moneda?: string | null
                    motivo_rechazo?: string | null
                    origen?: string | null
                    plazo_entrega?: string | null
                    precio_unitario?: number
                    seleccionada?: boolean | null
                    sesion_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "fk_oferta_item"
                        columns: ["item_solicitud_id"]
                        isOneToOne: false
                        referencedRelation: "items_solicitud"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_oferta_sesion"
                        columns: ["sesion_id"]
                        isOneToOne: false
                        referencedRelation: "sesiones_repuestero"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_oferta_sesion"
                        columns: ["sesion_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sesiones_full"
                        referencedColumns: ["sesion_id"]
                    }
                ]
            }
            orden_domicilio_gps: {
                Row: {
                    created_at: string | null
                    id: string
                    latitud: number | null
                    longitud: number | null
                    moving_end: string | null
                    moving_start: string | null
                    orden_id: string
                    speed: number | null
                    updated_at: string | null
                }
                Insert: {
                    created_at?: string | null
                    id?: string
                    latitud?: number | null
                    longitud?: number | null
                    moving_end?: string | null
                    moving_start?: string | null
                    orden_id: string
                    speed?: number | null
                    updated_at?: string | null
                }
                Update: {
                    created_at?: string | null
                    id?: string
                    latitud?: number | null
                    longitud?: number | null
                    moving_end?: string | null
                    moving_start?: string | null
                    orden_id?: string
                    speed?: number | null
                    updated_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "orden_domicilio_gps_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: true
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "orden_domicilio_gps_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: true
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "orden_domicilio_gps_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: true
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "orden_domicilio_gps_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: true
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "orden_domicilio_gps_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: true
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "orden_domicilio_gps_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: true
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    }
                ]
            }
            orden_eventos_tracking: {
                Row: {
                    created_at: string
                    descripcion: string
                    evento_fuente: string
                    evento_uuid: string
                    id: number
                    metadata: Json | null
                    orden_id: string
                    referencia_id: string | null
                    referencia_tabla: string | null
                    sucursal_id: string
                    tipo_evento: Database["public"]["Enums"]["tipo_evento_tracking"]
                    usuario_id: string | null
                }
                Insert: {
                    created_at?: string
                    descripcion: string
                    evento_fuente?: string
                    evento_uuid?: string
                    id?: never
                    metadata?: Json | null
                    orden_id: string
                    referencia_id?: string | null
                    referencia_tabla?: string | null
                    sucursal_id: string
                    tipo_evento: Database["public"]["Enums"]["tipo_evento_tracking"]
                    usuario_id?: string | null
                }
                Update: {
                    created_at?: string
                    descripcion?: string
                    evento_fuente?: string
                    evento_uuid?: string
                    id?: never
                    metadata?: Json | null
                    orden_id?: string
                    referencia_id?: string | null
                    referencia_tabla?: string | null
                    sucursal_id?: string
                    tipo_evento?: Database["public"]["Enums"]["tipo_evento_tracking"]
                    usuario_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "orden_eventos_tracking_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_usuario_id_fkey"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_usuario_id_fkey"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "orden_eventos_tracking_usuario_id_fkey"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["usuario_id"]
                    }
                ]
            }
            orden_files: {
                Row: {
                    bytes: number | null
                    clienteUpload: boolean | null
                    custom_name: string | null
                    deleted_at: string | null
                    fecha_subida: string | null
                    format: string
                    id: string
                    orden_id: string | null
                    public_id: string
                    resource_type: string
                    secure_url: string
                    url: string
                }
                Insert: {
                    bytes?: number | null
                    clienteUpload?: boolean | null
                    custom_name?: string | null
                    deleted_at?: string | null
                    fecha_subida?: string | null
                    format: string
                    id?: string
                    orden_id?: string | null
                    public_id: string
                    resource_type: string
                    secure_url: string
                    url: string
                }
                Update: {
                    bytes?: number | null
                    clienteUpload?: boolean | null
                    custom_name?: string | null
                    deleted_at?: string | null
                    fecha_subida?: string | null
                    format?: string
                    id?: string
                    orden_id?: string | null
                    public_id?: string
                    resource_type?: string
                    secure_url?: string
                    url?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "orden_files_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "orden_files_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "orden_files_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "orden_files_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "orden_files_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "orden_files_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    }
                ]
            }
            ordenes: {
                Row: {
                    ciudad: string | null
                    cliente_id: string | null
                    comuna: string | null
                    deleted_at: string | null
                    direccion: string | null
                    estado_id: number | null
                    fecha_creacion: string | null
                    fecha_entrega: string | null
                    id: string
                    in_taller: boolean | null
                    is_domicilio: boolean
                    notas_direccion: string | null
                    notasInternas: string | null
                    numero: string | null
                    observaciones: string | null
                    orden_correlativo: number | null
                    progreso: number | null
                    sucursal_id: string | null
                    tags: Json | null
                    vehiculo_id: string | null
                }
                Insert: {
                    ciudad?: string | null
                    cliente_id?: string | null
                    comuna?: string | null
                    deleted_at?: string | null
                    direccion?: string | null
                    estado_id?: number | null
                    fecha_creacion?: string | null
                    fecha_entrega?: string | null
                    id?: string
                    in_taller?: boolean | null
                    is_domicilio?: boolean
                    notas_direccion?: string | null
                    notasInternas?: string | null
                    numero?: string | null
                    observaciones?: string | null
                    orden_correlativo?: number | null
                    progreso?: number | null
                    sucursal_id?: string | null
                    tags?: Json | null
                    vehiculo_id?: string | null
                }
                Update: {
                    ciudad?: string | null
                    cliente_id?: string | null
                    comuna?: string | null
                    deleted_at?: string | null
                    direccion?: string | null
                    estado_id?: number | null
                    fecha_creacion?: string | null
                    fecha_entrega?: string | null
                    id?: string
                    in_taller?: boolean | null
                    is_domicilio?: boolean
                    notas_direccion?: string | null
                    notasInternas?: string | null
                    numero?: string | null
                    observaciones?: string | null
                    orden_correlativo?: number | null
                    progreso?: number | null
                    sucursal_id?: string | null
                    tags?: Json | null
                    vehiculo_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "fk_cliente_id"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "clientes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_cliente_id"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "fk_cliente_id"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "fk_cliente_id"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "fk_cliente_id"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "fk_estado_id"
                        columns: ["estado_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes_estados"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_estado_id"
                        columns: ["estado_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_estado_id"]
                    },
                    {
                        foreignKeyName: "fk_estado_id"
                        columns: ["estado_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["estado_id"]
                    },
                    {
                        foreignKeyName: "orden_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vehiculo"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "orden_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "orden_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "orden_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "orden_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    }
                ]
            }
            ordenes_estados: {
                Row: {
                    created_at: string | null
                    deleted_at: string | null
                    id: number
                    macro_estado: string | null
                    nombre: string
                }
                Insert: {
                    created_at?: string | null
                    deleted_at?: string | null
                    id: number
                    macro_estado?: string | null
                    nombre: string
                }
                Update: {
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: number
                    macro_estado?: string | null
                    nombre?: string
                }
                Relationships: []
            }
            ordenes_historial_estados: {
                Row: {
                    estado_anterior_id: number | null
                    estado_nuevo_id: number
                    fecha_cambio: string
                    id: string
                    motivo: string | null
                    orden_id: string
                    usuario_id: string | null
                }
                Insert: {
                    estado_anterior_id?: number | null
                    estado_nuevo_id: number
                    fecha_cambio?: string
                    id?: string
                    motivo?: string | null
                    orden_id: string
                    usuario_id?: string | null
                }
                Update: {
                    estado_anterior_id?: number | null
                    estado_nuevo_id?: number
                    fecha_cambio?: string
                    id?: string
                    motivo?: string | null
                    orden_id?: string
                    usuario_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "ordenes_historial_estados_estado_anterior_id_fkey"
                        columns: ["estado_anterior_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes_estados"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "ordenes_historial_estados_estado_anterior_id_fkey"
                        columns: ["estado_anterior_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_estado_id"]
                    },
                    {
                        foreignKeyName: "ordenes_historial_estados_estado_anterior_id_fkey"
                        columns: ["estado_anterior_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["estado_id"]
                    },
                    {
                        foreignKeyName: "ordenes_historial_estados_estado_nuevo_id_fkey"
                        columns: ["estado_nuevo_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes_estados"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "ordenes_historial_estados_estado_nuevo_id_fkey"
                        columns: ["estado_nuevo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_estado_id"]
                    },
                    {
                        foreignKeyName: "ordenes_historial_estados_estado_nuevo_id_fkey"
                        columns: ["estado_nuevo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["estado_id"]
                    },
                    {
                        foreignKeyName: "ordenes_historial_estados_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "ordenes_historial_estados_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "ordenes_historial_estados_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "ordenes_historial_estados_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "ordenes_historial_estados_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "ordenes_historial_estados_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "ordenes_historial_estados_usuario_id_fkey"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "ordenes_historial_estados_usuario_id_fkey"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "ordenes_historial_estados_usuario_id_fkey"
                        columns: ["usuario_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["usuario_id"]
                    }
                ]
            }
            pagina_web: {
                Row: {
                    certificaciones: Json | null
                    color_primary: string | null
                    color_secundary: string | null
                    color_tertiary: string | null
                    created_at: string | null
                    deleted_at: string | null
                    descripcion: string | null
                    horarios_colacion: Json[] | null
                    horarios_operacion: Json | null
                    id: string
                    is_active: boolean | null
                    isVerified: boolean | null
                    links: Json[] | null
                    map_frame: string | null
                    marcas: Json[] | null
                    num_whatsapp: number | null
                    sobre_nosotros_caracteristicas: Json | null
                    sobre_nosotros_descripcion: string | null
                    sobre_nosotros_imagen_url: string | null
                    url_facebook: string | null
                    url_instagram: string | null
                    url_tiktok: string | null
                }
                Insert: {
                    certificaciones?: Json | null
                    color_primary?: string | null
                    color_secundary?: string | null
                    color_tertiary?: string | null
                    created_at?: string | null
                    deleted_at?: string | null
                    descripcion?: string | null
                    horarios_colacion?: Json[] | null
                    horarios_operacion?: Json | null
                    id?: string
                    is_active?: boolean | null
                    isVerified?: boolean | null
                    links?: Json[] | null
                    map_frame?: string | null
                    marcas?: Json[] | null
                    num_whatsapp?: number | null
                    sobre_nosotros_caracteristicas?: Json | null
                    sobre_nosotros_descripcion?: string | null
                    sobre_nosotros_imagen_url?: string | null
                    url_facebook?: string | null
                    url_instagram?: string | null
                    url_tiktok?: string | null
                }
                Update: {
                    certificaciones?: Json | null
                    color_primary?: string | null
                    color_secundary?: string | null
                    color_tertiary?: string | null
                    created_at?: string | null
                    deleted_at?: string | null
                    descripcion?: string | null
                    horarios_colacion?: Json[] | null
                    horarios_operacion?: Json | null
                    id?: string
                    is_active?: boolean | null
                    isVerified?: boolean | null
                    links?: Json[] | null
                    map_frame?: string | null
                    marcas?: Json[] | null
                    num_whatsapp?: number | null
                    sobre_nosotros_caracteristicas?: Json | null
                    sobre_nosotros_descripcion?: string | null
                    sobre_nosotros_imagen_url?: string | null
                    url_facebook?: string | null
                    url_instagram?: string | null
                    url_tiktok?: string | null
                }
                Relationships: []
            }
            pagos_orden: {
                Row: {
                    correlativo_sucursal_id: number | null
                    created_at: string | null
                    deleted_at: string | null
                    descuento: number | null
                    fecha_pago: string | null
                    id: string
                    metodo_pago: string | null
                    monto_total: number | null
                    observaciones: string | null
                    orden_id: string | null
                    pago_correlativo: number | null
                    recibo: string | null
                    tipo: string | null
                }
                Insert: {
                    correlativo_sucursal_id?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    descuento?: number | null
                    fecha_pago?: string | null
                    id?: string
                    metodo_pago?: string | null
                    monto_total?: number | null
                    observaciones?: string | null
                    orden_id?: string | null
                    pago_correlativo?: number | null
                    recibo?: string | null
                    tipo?: string | null
                }
                Update: {
                    correlativo_sucursal_id?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    descuento?: number | null
                    fecha_pago?: string | null
                    id?: string
                    metodo_pago?: string | null
                    monto_total?: number | null
                    observaciones?: string | null
                    orden_id?: string | null
                    pago_correlativo?: number | null
                    recibo?: string | null
                    tipo?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "pagos_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "pagos_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "pagos_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "pagos_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "pagos_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "pagos_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    }
                ]
            }
            plantillas: {
                Row: {
                    contenido: Json | null
                    deleted_at: string | null
                    id: string
                    nombre: string | null
                    plantilla_correlativo: number | null
                    tipo_control_id: string | null
                }
                Insert: {
                    contenido?: Json | null
                    deleted_at?: string | null
                    id?: string
                    nombre?: string | null
                    plantilla_correlativo?: number | null
                    tipo_control_id?: string | null
                }
                Update: {
                    contenido?: Json | null
                    deleted_at?: string | null
                    id?: string
                    nombre?: string | null
                    plantilla_correlativo?: number | null
                    tipo_control_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "plantilla_form_sucursal_tipo_control_id_fkey"
                        columns: ["tipo_control_id"]
                        isOneToOne: false
                        referencedRelation: "tipo_control"
                        referencedColumns: ["id"]
                    }
                ]
            }
            precio: {
                Row: {
                    bloque: number | null
                    created_at: string | null
                    deleted_at: string | null
                    horario_sucursal_id: string | null
                    id: string
                    is_active: boolean | null
                    precio: number | null
                    precio_cat: Json | null
                    tipo_precio_id: string | null
                }
                Insert: {
                    bloque?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    horario_sucursal_id?: string | null
                    id?: string
                    is_active?: boolean | null
                    precio?: number | null
                    precio_cat?: Json | null
                    tipo_precio_id?: string | null
                }
                Update: {
                    bloque?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    horario_sucursal_id?: string | null
                    id?: string
                    is_active?: boolean | null
                    precio?: number | null
                    precio_cat?: Json | null
                    tipo_precio_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "precio_tipo_precio_id_fkey"
                        columns: ["tipo_precio_id"]
                        isOneToOne: false
                        referencedRelation: "tipo_precios"
                        referencedColumns: ["id"]
                    }
                ]
            }
            producto_img: {
                Row: {
                    bytes: number | null
                    created_at: string
                    deleted_at: string | null
                    format: string | null
                    height: number | null
                    id: string
                    producto_id: string
                    public_id: string
                    resource_type: string | null
                    secure_url: string
                    signature: string | null
                    url: string
                    version: string | null
                    width: number | null
                }
                Insert: {
                    bytes?: number | null
                    created_at?: string
                    deleted_at?: string | null
                    format?: string | null
                    height?: number | null
                    id?: string
                    producto_id: string
                    public_id: string
                    resource_type?: string | null
                    secure_url: string
                    signature?: string | null
                    url: string
                    version?: string | null
                    width?: number | null
                }
                Update: {
                    bytes?: number | null
                    created_at?: string
                    deleted_at?: string | null
                    format?: string | null
                    height?: number | null
                    id?: string
                    producto_id?: string
                    public_id?: string
                    resource_type?: string | null
                    secure_url?: string
                    signature?: string | null
                    url?: string
                    version?: string | null
                    width?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "producto_img_producto_id_fkey"
                        columns: ["producto_id"]
                        isOneToOne: false
                        referencedRelation: "productos"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "producto_img_producto_id_fkey"
                        columns: ["producto_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["producto_id"]
                    }
                ]
            }
            productos: {
                Row: {
                    categoria_id: string | null
                    codigo: string
                    costo_unitario: number | null
                    created_at: string | null
                    deleted_at: string | null
                    descripcion: string | null
                    es_inactivo: boolean | null
                    id: string
                    marca_repuesto: string | null
                    nombre: string
                    oem_numeros: string[] | null
                    precio_venta: number | null
                    proveedor_id: string | null
                    sucursal_id: string
                    ultima_actualizacion_precio: string | null
                }
                Insert: {
                    categoria_id?: string | null
                    codigo: string
                    costo_unitario?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    descripcion?: string | null
                    es_inactivo?: boolean | null
                    id?: string
                    marca_repuesto?: string | null
                    nombre: string
                    oem_numeros?: string[] | null
                    precio_venta?: number | null
                    proveedor_id?: string | null
                    sucursal_id: string
                    ultima_actualizacion_precio?: string | null
                }
                Update: {
                    categoria_id?: string | null
                    codigo?: string
                    costo_unitario?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    descripcion?: string | null
                    es_inactivo?: boolean | null
                    id?: string
                    marca_repuesto?: string | null
                    nombre?: string
                    oem_numeros?: string[] | null
                    precio_venta?: number | null
                    proveedor_id?: string | null
                    sucursal_id?: string
                    ultima_actualizacion_precio?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "productos_categoria_id_fkey"
                        columns: ["categoria_id"]
                        isOneToOne: false
                        referencedRelation: "categoria_producto"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "productos_proveedor_id_fkey"
                        columns: ["proveedor_id"]
                        isOneToOne: false
                        referencedRelation: "proveedores"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "productos_proveedor_id_fkey"
                        columns: ["proveedor_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sesiones_full"
                        referencedColumns: ["proveedor_id"]
                    },
                    {
                        foreignKeyName: "productos_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "productos_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "productos_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "productos_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "productos_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "productos_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "productos_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "productos_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "productos_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "productos_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "productos_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "productos_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    }
                ]
            }
            profiles: {
                Row: {
                    avatar_url: string | null
                    deleted_at: string | null
                    email: string | null
                    first_name: string | null
                    id: string
                    last_name: string | null
                    telefono: string | null
                }
                Insert: {
                    avatar_url?: string | null
                    deleted_at?: string | null
                    email?: string | null
                    first_name?: string | null
                    id: string
                    last_name?: string | null
                    telefono?: string | null
                }
                Update: {
                    avatar_url?: string | null
                    deleted_at?: string | null
                    email?: string | null
                    first_name?: string | null
                    id?: string
                    last_name?: string | null
                    telefono?: string | null
                }
                Relationships: []
            }
            promociones: {
                Row: {
                    created_at: string
                    cupos_disponibles: number
                    cupos_totales: number
                    deleted_at: string | null
                    descripcion: string
                    estado: boolean
                    fecha_fin: string
                    fecha_inicio: string
                    id: string
                    imagen_url: string
                    is_porcentaje: boolean | null
                    porcentaje_descuento: number
                    precio_original: number | null
                    precio_promocional: number | null
                    servicio_id: string
                    sucursal_id: string
                    titulo: string
                    updated_at: string
                }
                Insert: {
                    created_at?: string
                    cupos_disponibles: number
                    cupos_totales: number
                    deleted_at?: string | null
                    descripcion: string
                    estado: boolean
                    fecha_fin: string
                    fecha_inicio: string
                    id?: string
                    imagen_url: string
                    is_porcentaje?: boolean | null
                    porcentaje_descuento: number
                    precio_original?: number | null
                    precio_promocional?: number | null
                    servicio_id: string
                    sucursal_id: string
                    titulo: string
                    updated_at?: string
                }
                Update: {
                    created_at?: string
                    cupos_disponibles?: number
                    cupos_totales?: number
                    deleted_at?: string | null
                    descripcion?: string
                    estado?: boolean
                    fecha_fin?: string
                    fecha_inicio?: string
                    id?: string
                    imagen_url?: string
                    is_porcentaje?: boolean | null
                    porcentaje_descuento?: number
                    precio_original?: number | null
                    precio_promocional?: number | null
                    servicio_id?: string
                    sucursal_id?: string
                    titulo?: string
                    updated_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "fk_servicio"
                        columns: ["servicio_id"]
                        isOneToOne: false
                        referencedRelation: "servicios"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    }
                ]
            }
            proveedores: {
                Row: {
                    bck_image: string | null
                    comuna: string | null
                    deleted_at: string | null
                    descripcion: string | null
                    direccion: string | null
                    email: string | null
                    id: string
                    logo: string | null
                    nombre_comercial: string | null
                    nombre_contacto: string | null
                    nombre_empresa: string | null
                    numero_telefonico: string | null
                    proveedor_correlativo: number | null
                    rut: string | null
                    sucursal_id: string | null
                }
                Insert: {
                    bck_image?: string | null
                    comuna?: string | null
                    deleted_at?: string | null
                    descripcion?: string | null
                    direccion?: string | null
                    email?: string | null
                    id?: string
                    logo?: string | null
                    nombre_comercial?: string | null
                    nombre_contacto?: string | null
                    nombre_empresa?: string | null
                    numero_telefonico?: string | null
                    proveedor_correlativo?: number | null
                    rut?: string | null
                    sucursal_id?: string | null
                }
                Update: {
                    bck_image?: string | null
                    comuna?: string | null
                    deleted_at?: string | null
                    descripcion?: string | null
                    direccion?: string | null
                    email?: string | null
                    id?: string
                    logo?: string | null
                    nombre_comercial?: string | null
                    nombre_contacto?: string | null
                    nombre_empresa?: string | null
                    numero_telefonico?: string | null
                    proveedor_correlativo?: number | null
                    rut?: string | null
                    sucursal_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "proveedores_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "proveedores_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "proveedores_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "proveedores_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "proveedores_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "proveedores_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "proveedores_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "proveedores_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "proveedores_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "proveedores_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "proveedores_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "proveedores_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    }
                ]
            }
            region: {
                Row: {
                    created_at: string | null
                    deleted_at: string | null
                    id: number
                    nombre: string
                }
                Insert: {
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: never
                    nombre: string
                }
                Update: {
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: never
                    nombre?: string
                }
                Relationships: []
            }
            registros_orden: {
                Row: {
                    deleted_at: string | null
                    descripcion: string | null
                    fechaAvance: string | null
                    id: string
                    orden_id: string | null
                    titulo: string | null
                }
                Insert: {
                    deleted_at?: string | null
                    descripcion?: string | null
                    fechaAvance?: string | null
                    id?: string
                    orden_id?: string | null
                    titulo?: string | null
                }
                Update: {
                    deleted_at?: string | null
                    descripcion?: string | null
                    fechaAvance?: string | null
                    id?: string
                    orden_id?: string | null
                    titulo?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "registros_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "registros_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "registros_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "registros_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "registros_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "registros_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    }
                ]
            }
            registros_orden_imgs: {
                Row: {
                    deleted_at: string | null
                    id: string
                    registros_orden_id: string | null
                    url: string | null
                }
                Insert: {
                    deleted_at?: string | null
                    id?: string
                    registros_orden_id?: string | null
                    url?: string | null
                }
                Update: {
                    deleted_at?: string | null
                    id?: string
                    registros_orden_id?: string | null
                    url?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "registros_orden_imgs_registros_orden_id_fkey"
                        columns: ["registros_orden_id"]
                        isOneToOne: false
                        referencedRelation: "registros_orden"
                        referencedColumns: ["id"]
                    }
                ]
            }
            repuestos_adjuntos: {
                Row: {
                    bytes: number | null
                    created_at: string | null
                    deleted_at: string | null
                    format: string | null
                    id: string
                    item_solicitud_id: string | null
                    mensaje_id: string | null
                    nombre_archivo: string | null
                    oferta_id: string | null
                    public_id: string | null
                    resource_type: string | null
                    secure_url: string
                    tipo_archivo: string | null
                    url: string
                }
                Insert: {
                    bytes?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    format?: string | null
                    id?: string
                    item_solicitud_id?: string | null
                    mensaje_id?: string | null
                    nombre_archivo?: string | null
                    oferta_id?: string | null
                    public_id?: string | null
                    resource_type?: string | null
                    secure_url: string
                    tipo_archivo?: string | null
                    url: string
                }
                Update: {
                    bytes?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    format?: string | null
                    id?: string
                    item_solicitud_id?: string | null
                    mensaje_id?: string | null
                    nombre_archivo?: string | null
                    oferta_id?: string | null
                    public_id?: string | null
                    resource_type?: string | null
                    secure_url?: string
                    tipo_archivo?: string | null
                    url?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "fk_adjunto_item"
                        columns: ["item_solicitud_id"]
                        isOneToOne: false
                        referencedRelation: "items_solicitud"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_adjunto_mensaje"
                        columns: ["mensaje_id"]
                        isOneToOne: false
                        referencedRelation: "mensajes_intercambio"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_adjunto_oferta"
                        columns: ["oferta_id"]
                        isOneToOne: false
                        referencedRelation: "ofertas_repuestos"
                        referencedColumns: ["id"]
                    }
                ]
            }
            roles: {
                Row: {
                    created_at: string
                    id: number
                    nombre: string | null
                }
                Insert: {
                    created_at?: string
                    id?: number
                    nombre?: string | null
                }
                Update: {
                    created_at?: string
                    id?: number
                    nombre?: string | null
                }
                Relationships: []
            }
            servicios: {
                Row: {
                    agenda_id: number | null
                    categoria_id: string | null
                    created_at: string | null
                    deleted_at: string | null
                    descripcion: string | null
                    duracion_servicio: unknown
                    espacio_bloque: unknown
                    estado: string | null
                    horario_id: string | null
                    id: string
                    imagen_url: string | null
                    is_domicilio: boolean | null
                    nombre: string
                    precio_id: string | null
                    promocion_id: string | null
                    servicio_correlativo: number | null
                    sucursal_id: string | null
                    tipo_precio_id: string | null
                    visibilidad: boolean | null
                }
                Insert: {
                    agenda_id?: number | null
                    categoria_id?: string | null
                    created_at?: string | null
                    deleted_at?: string | null
                    descripcion?: string | null
                    duracion_servicio?: unknown
                    espacio_bloque?: unknown
                    estado?: string | null
                    horario_id?: string | null
                    id?: string
                    imagen_url?: string | null
                    is_domicilio?: boolean | null
                    nombre: string
                    precio_id?: string | null
                    promocion_id?: string | null
                    servicio_correlativo?: number | null
                    sucursal_id?: string | null
                    tipo_precio_id?: string | null
                    visibilidad?: boolean | null
                }
                Update: {
                    agenda_id?: number | null
                    categoria_id?: string | null
                    created_at?: string | null
                    deleted_at?: string | null
                    descripcion?: string | null
                    duracion_servicio?: unknown
                    espacio_bloque?: unknown
                    estado?: string | null
                    horario_id?: string | null
                    id?: string
                    imagen_url?: string | null
                    is_domicilio?: boolean | null
                    nombre?: string
                    precio_id?: string | null
                    promocion_id?: string | null
                    servicio_correlativo?: number | null
                    sucursal_id?: string | null
                    tipo_precio_id?: string | null
                    visibilidad?: boolean | null
                }
                Relationships: [
                    {
                        foreignKeyName: "servicios_agenda_id_fkey"
                        columns: ["agenda_id"]
                        isOneToOne: false
                        referencedRelation: "agenda"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "servicios_agenda_id_fkey"
                        columns: ["agenda_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["agenda_id"]
                    },
                    {
                        foreignKeyName: "servicios_categoria_id_fkey"
                        columns: ["categoria_id"]
                        isOneToOne: false
                        referencedRelation: "categoria_servicio"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "servicios_precio_id_fkey"
                        columns: ["precio_id"]
                        isOneToOne: false
                        referencedRelation: "precio"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "servicios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "servicios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "servicios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "servicios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "servicios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "servicios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "servicios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "servicios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "servicios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "servicios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "servicios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "servicios_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "servicios_tipo_precio_id_fkey"
                        columns: ["tipo_precio_id"]
                        isOneToOne: false
                        referencedRelation: "tipo_precios"
                        referencedColumns: ["id"]
                    }
                ]
            }
            servicios_cot: {
                Row: {
                    cantidad: number | null
                    codigo: string | null
                    cotizacion_id: string
                    deleted_at: string | null
                    duracion: unknown
                    id: string
                    is_personalizado: boolean | null
                    is_promocion: boolean | null
                    modalidad: string | null
                    nombre: string
                    precio_impuesto: number | null
                    precio_unitario: number | null
                    servicio_id: string | null
                }
                Insert: {
                    cantidad?: number | null
                    codigo?: string | null
                    cotizacion_id: string
                    deleted_at?: string | null
                    duracion?: unknown
                    id?: string
                    is_personalizado?: boolean | null
                    is_promocion?: boolean | null
                    modalidad?: string | null
                    nombre: string
                    precio_impuesto?: number | null
                    precio_unitario?: number | null
                    servicio_id?: string | null
                }
                Update: {
                    cantidad?: number | null
                    codigo?: string | null
                    cotizacion_id?: string
                    deleted_at?: string | null
                    duracion?: unknown
                    id?: string
                    is_personalizado?: boolean | null
                    is_promocion?: boolean | null
                    modalidad?: string | null
                    nombre?: string
                    precio_impuesto?: number | null
                    precio_unitario?: number | null
                    servicio_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "servicios_cot_cotizacion_id_fkey"
                        columns: ["cotizacion_id"]
                        isOneToOne: false
                        referencedRelation: "cotizaciones"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "servicios_cot_cotizacion_id_fkey"
                        columns: ["cotizacion_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["cotizacion_id"]
                    },
                    {
                        foreignKeyName: "servicios_cot_cotizacion_id_fkey"
                        columns: ["cotizacion_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["cotizacion_id"]
                    },
                    {
                        foreignKeyName: "servicios_cot_servicio_id_fkey"
                        columns: ["servicio_id"]
                        isOneToOne: false
                        referencedRelation: "servicios"
                        referencedColumns: ["id"]
                    }
                ]
            }
            sesion_items_visibles: {
                Row: {
                    created_at: string | null
                    item_solicitud_id: string
                    sesion_id: string
                }
                Insert: {
                    created_at?: string | null
                    item_solicitud_id: string
                    sesion_id: string
                }
                Update: {
                    created_at?: string | null
                    item_solicitud_id?: string
                    sesion_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "fk_visible_item"
                        columns: ["item_solicitud_id"]
                        isOneToOne: false
                        referencedRelation: "items_solicitud"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_visible_sesion"
                        columns: ["sesion_id"]
                        isOneToOne: false
                        referencedRelation: "sesiones_repuestero"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_visible_sesion"
                        columns: ["sesion_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sesiones_full"
                        referencedColumns: ["sesion_id"]
                    }
                ]
            }
            sesiones_repuestero: {
                Row: {
                    accesos_contador: number | null
                    confianza_ia: number | null
                    created_at: string | null
                    deleted_at: string | null
                    estado_interaccion: string | null
                    estado_proceso: string | null
                    fecha_aceptacion: string | null
                    fecha_entrega: string | null
                    fecha_envio: string | null
                    fecha_expiracion_link: string | null
                    fecha_pago: string | null
                    id: string
                    nombre_contacto_temp: string | null
                    notas_mecanico: string | null
                    proveedor_id: string | null
                    solicitud_id: string
                    telefono_whatsapp: string | null
                    token_acceso_publico: string
                    updated_at: string | null
                }
                Insert: {
                    accesos_contador?: number | null
                    confianza_ia?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    estado_interaccion?: string | null
                    estado_proceso?: string | null
                    fecha_aceptacion?: string | null
                    fecha_entrega?: string | null
                    fecha_envio?: string | null
                    fecha_expiracion_link?: string | null
                    fecha_pago?: string | null
                    id?: string
                    nombre_contacto_temp?: string | null
                    notas_mecanico?: string | null
                    proveedor_id?: string | null
                    solicitud_id: string
                    telefono_whatsapp?: string | null
                    token_acceso_publico: string
                    updated_at?: string | null
                }
                Update: {
                    accesos_contador?: number | null
                    confianza_ia?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    estado_interaccion?: string | null
                    estado_proceso?: string | null
                    fecha_aceptacion?: string | null
                    fecha_entrega?: string | null
                    fecha_envio?: string | null
                    fecha_expiracion_link?: string | null
                    fecha_pago?: string | null
                    id?: string
                    nombre_contacto_temp?: string | null
                    notas_mecanico?: string | null
                    proveedor_id?: string | null
                    solicitud_id?: string
                    telefono_whatsapp?: string | null
                    token_acceso_publico?: string
                    updated_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "fk_sesion_proveedor"
                        columns: ["proveedor_id"]
                        isOneToOne: false
                        referencedRelation: "proveedores"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_sesion_proveedor"
                        columns: ["proveedor_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sesiones_full"
                        referencedColumns: ["proveedor_id"]
                    },
                    {
                        foreignKeyName: "fk_sesion_solicitud"
                        columns: ["solicitud_id"]
                        isOneToOne: false
                        referencedRelation: "solicitudes_repuestos"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_sesion_solicitud"
                        columns: ["solicitud_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sesiones_full"
                        referencedColumns: ["solicitud_id"]
                    },
                    {
                        foreignKeyName: "fk_sesion_solicitud"
                        columns: ["solicitud_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["solicitud_id"]
                    }
                ]
            }
            solicitudes_repuestos: {
                Row: {
                    correlativo_id: number | null
                    created_at: string | null
                    created_by: string | null
                    deleted_at: string | null
                    estado_id: number | null
                    id: string
                    notas_internas: string | null
                    prioridad: string | null
                    sucursal_id: string
                    titulo_referencia: string | null
                    updated_at: string | null
                }
                Insert: {
                    correlativo_id?: number | null
                    created_at?: string | null
                    created_by?: string | null
                    deleted_at?: string | null
                    estado_id?: number | null
                    id?: string
                    notas_internas?: string | null
                    prioridad?: string | null
                    sucursal_id: string
                    titulo_referencia?: string | null
                    updated_at?: string | null
                }
                Update: {
                    correlativo_id?: number | null
                    created_at?: string | null
                    created_by?: string | null
                    deleted_at?: string | null
                    estado_id?: number | null
                    id?: string
                    notas_internas?: string | null
                    prioridad?: string | null
                    sucursal_id?: string
                    titulo_referencia?: string | null
                    updated_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "fk_solicitud_creator"
                        columns: ["created_by"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_creator"
                        columns: ["created_by"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_creator"
                        columns: ["created_by"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "solicitudes_repuestos_estado_id_fkey"
                        columns: ["estado_id"]
                        isOneToOne: false
                        referencedRelation: "solicitudes_repuestos_estado"
                        referencedColumns: ["id"]
                    }
                ]
            }
            solicitudes_repuestos_estado: {
                Row: {
                    created_at: string
                    id: number
                    nombre: string
                }
                Insert: {
                    created_at?: string
                    id: number
                    nombre: string
                }
                Update: {
                    created_at?: string
                    id?: number
                    nombre?: string
                }
                Relationships: []
            }
            stock_inventario: {
                Row: {
                    cantidad: number
                    created_at: string | null
                    fecha_caducidad: string | null
                    id: string
                    lote: string | null
                    producto_id: string
                    ubicacion_id: string
                }
                Insert: {
                    cantidad?: number
                    created_at?: string | null
                    fecha_caducidad?: string | null
                    id?: string
                    lote?: string | null
                    producto_id: string
                    ubicacion_id: string
                }
                Update: {
                    cantidad?: number
                    created_at?: string | null
                    fecha_caducidad?: string | null
                    id?: string
                    lote?: string | null
                    producto_id?: string
                    ubicacion_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "stock_inventario_producto_id_fkey"
                        columns: ["producto_id"]
                        isOneToOne: false
                        referencedRelation: "productos"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "stock_inventario_producto_id_fkey"
                        columns: ["producto_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["producto_id"]
                    },
                    {
                        foreignKeyName: "stock_inventario_ubicacion_id_fkey"
                        columns: ["ubicacion_id"]
                        isOneToOne: false
                        referencedRelation: "ubicaciones_inventario"
                        referencedColumns: ["id"]
                    }
                ]
            }
            sucursal: {
                Row: {
                    bancario_id: string | null
                    comuna_id: number | null
                    contacto_cobranza: string | null
                    coordenadas: Json | null
                    correo_cobranza: string | null
                    correo_contacto: string | null
                    created_at: string | null
                    deleted_at: string | null
                    direccion: string | null
                    direccion_descripcion: string | null
                    email: string | null
                    empresa_id: string | null
                    fecha_ult_pago: string | null
                    id: string
                    logo_url: string | null
                    nombre: string
                    nombre_contacto: string | null
                    numero_contacto: string | null
                    numero_tel: string | null
                    pagina_web_id: string | null
                    razon_social: string | null
                    slug: string
                    suscripcion_id: string | null
                }
                Insert: {
                    bancario_id?: string | null
                    comuna_id?: number | null
                    contacto_cobranza?: string | null
                    coordenadas?: Json | null
                    correo_cobranza?: string | null
                    correo_contacto?: string | null
                    created_at?: string | null
                    deleted_at?: string | null
                    direccion?: string | null
                    direccion_descripcion?: string | null
                    email?: string | null
                    empresa_id?: string | null
                    fecha_ult_pago?: string | null
                    id?: string
                    logo_url?: string | null
                    nombre: string
                    nombre_contacto?: string | null
                    numero_contacto?: string | null
                    numero_tel?: string | null
                    pagina_web_id?: string | null
                    razon_social?: string | null
                    slug: string
                    suscripcion_id?: string | null
                }
                Update: {
                    bancario_id?: string | null
                    comuna_id?: number | null
                    contacto_cobranza?: string | null
                    coordenadas?: Json | null
                    correo_cobranza?: string | null
                    correo_contacto?: string | null
                    created_at?: string | null
                    deleted_at?: string | null
                    direccion?: string | null
                    direccion_descripcion?: string | null
                    email?: string | null
                    empresa_id?: string | null
                    fecha_ult_pago?: string | null
                    id?: string
                    logo_url?: string | null
                    nombre?: string
                    nombre_contacto?: string | null
                    numero_contacto?: string | null
                    numero_tel?: string | null
                    pagina_web_id?: string | null
                    razon_social?: string | null
                    slug?: string
                    suscripcion_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "sucursal_bancario_id_fkey"
                        columns: ["bancario_id"]
                        isOneToOne: false
                        referencedRelation: "bancarios"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "sucursal_comuna_id_fkey"
                        columns: ["comuna_id"]
                        isOneToOne: false
                        referencedRelation: "comuna"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "sucursal_comuna_id_fkey"
                        columns: ["comuna_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["comuna_id"]
                    },
                    {
                        foreignKeyName: "sucursal_empresa_id_fkey"
                        columns: ["empresa_id"]
                        isOneToOne: false
                        referencedRelation: "empresa"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "sucursal_pagina_web_id_fkey"
                        columns: ["pagina_web_id"]
                        isOneToOne: false
                        referencedRelation: "pagina_web"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "sucursal_pagina_web_id_fkey"
                        columns: ["pagina_web_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["pagina_web_id"]
                    },
                    {
                        foreignKeyName: "sucursal_suscripcion_id_fkey"
                        columns: ["suscripcion_id"]
                        isOneToOne: false
                        referencedRelation: "suscripcion"
                        referencedColumns: ["id"]
                    }
                ]
            }
            suscripcion: {
                Row: {
                    costo: number | null
                    created_at: string | null
                    deleted_at: string | null
                    descripcion: string | null
                    id: string
                    id_pais: string | null
                    isVisible: boolean | null
                    nombre: string
                }
                Insert: {
                    costo?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    descripcion?: string | null
                    id?: string
                    id_pais?: string | null
                    isVisible?: boolean | null
                    nombre: string
                }
                Update: {
                    costo?: number | null
                    created_at?: string | null
                    deleted_at?: string | null
                    descripcion?: string | null
                    id?: string
                    id_pais?: string | null
                    isVisible?: boolean | null
                    nombre?: string
                }
                Relationships: []
            }
            tareas_orden: {
                Row: {
                    deleted_at: string | null
                    id: string
                    isActive: boolean | null
                    nombre: string | null
                    orden_id: string
                }
                Insert: {
                    deleted_at?: string | null
                    id?: string
                    isActive?: boolean | null
                    nombre?: string | null
                    orden_id: string
                }
                Update: {
                    deleted_at?: string | null
                    id?: string
                    isActive?: boolean | null
                    nombre?: string | null
                    orden_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "tareas_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "tareas_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "tareas_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "tareas_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "tareas_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "tareas_orden_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    }
                ]
            }
            tipo_chequeo: {
                Row: {
                    deleted_at: string | null
                    id: string
                    is_nivel: boolean | null
                    nombre: string | null
                }
                Insert: {
                    deleted_at?: string | null
                    id?: string
                    is_nivel?: boolean | null
                    nombre?: string | null
                }
                Update: {
                    deleted_at?: string | null
                    id?: string
                    is_nivel?: boolean | null
                    nombre?: string | null
                }
                Relationships: []
            }
            tipo_control: {
                Row: {
                    deleted_at: string | null
                    fecha_creacion: string | null
                    id: string
                    nombre: string | null
                }
                Insert: {
                    deleted_at?: string | null
                    fecha_creacion?: string | null
                    id?: string
                    nombre?: string | null
                }
                Update: {
                    deleted_at?: string | null
                    fecha_creacion?: string | null
                    id?: string
                    nombre?: string | null
                }
                Relationships: []
            }
            tipo_precios: {
                Row: {
                    created_at: string | null
                    deleted_at: string | null
                    id: string
                    nombre: string | null
                    slug: string | null
                }
                Insert: {
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: string
                    nombre?: string | null
                    slug?: string | null
                }
                Update: {
                    created_at?: string | null
                    deleted_at?: string | null
                    id?: string
                    nombre?: string | null
                    slug?: string | null
                }
                Relationships: []
            }
            ubicaciones_inventario: {
                Row: {
                    created_at: string | null
                    deleted_at: string | null
                    descripcion: string | null
                    id: string
                    nombre: string
                    sucursal_id: string
                    tipo: string | null
                }
                Insert: {
                    created_at?: string | null
                    deleted_at?: string | null
                    descripcion?: string | null
                    id?: string
                    nombre: string
                    sucursal_id: string
                    tipo?: string | null
                }
                Update: {
                    created_at?: string | null
                    deleted_at?: string | null
                    descripcion?: string | null
                    id?: string
                    nombre?: string
                    sucursal_id?: string
                    tipo?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "ubicaciones_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ubicaciones_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "ubicaciones_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ubicaciones_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ubicaciones_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ubicaciones_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ubicaciones_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ubicaciones_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ubicaciones_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ubicaciones_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ubicaciones_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ubicaciones_inventario_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    }
                ]
            }
            usuarios_sucursal: {
                Row: {
                    created_at: string | null
                    deleted_at: string | null
                    fecha_ingreso: string | null
                    id: string
                    profile_id: string | null
                    rol_id: number | null
                    sucursal_id: string | null
                }
                Insert: {
                    created_at?: string | null
                    deleted_at?: string | null
                    fecha_ingreso?: string | null
                    id?: string
                    profile_id?: string | null
                    rol_id?: number | null
                    sucursal_id?: string | null
                }
                Update: {
                    created_at?: string | null
                    deleted_at?: string | null
                    fecha_ingreso?: string | null
                    id?: string
                    profile_id?: string | null
                    rol_id?: number | null
                    sucursal_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "usuarios_sucursal_profile_id_fkey"
                        columns: ["profile_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "usuarios_sucursal_profile_id_fkey"
                        columns: ["profile_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "usuarios_sucursal_profile_id_fkey"
                        columns: ["profile_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "usuarios_sucursal_rol_id_fkey"
                        columns: ["rol_id"]
                        isOneToOne: false
                        referencedRelation: "roles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "usuarios_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "usuarios_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "usuarios_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "usuarios_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "usuarios_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "usuarios_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "usuarios_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "usuarios_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "usuarios_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "usuarios_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "usuarios_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "usuarios_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    }
                ]
            }
            vehiculo: {
                Row: {
                    anio: number | null
                    color: string | null
                    combustible: string | null
                    deleted_at: string | null
                    id: string
                    kilometraje: number | null
                    marca: string
                    metadata: Json[] | null
                    modelo: string
                    n_motor: string | null
                    patente: string | null
                    tipo: string | null
                    vehiculo_correlativo: number | null
                    vin: string | null
                }
                Insert: {
                    anio?: number | null
                    color?: string | null
                    combustible?: string | null
                    deleted_at?: string | null
                    id?: string
                    kilometraje?: number | null
                    marca: string
                    metadata?: Json[] | null
                    modelo: string
                    n_motor?: string | null
                    patente?: string | null
                    tipo?: string | null
                    vehiculo_correlativo?: number | null
                    vin?: string | null
                }
                Update: {
                    anio?: number | null
                    color?: string | null
                    combustible?: string | null
                    deleted_at?: string | null
                    id?: string
                    kilometraje?: number | null
                    marca?: string
                    metadata?: Json[] | null
                    modelo?: string
                    n_motor?: string | null
                    patente?: string | null
                    tipo?: string | null
                    vehiculo_correlativo?: number | null
                    vin?: string | null
                }
                Relationships: []
            }
            vehiculo_documentos: {
                Row: {
                    cloudinary_public_id: string | null
                    created_at: string | null
                    id: string
                    nombre_archivo: string | null
                    tipo_archivo: string | null
                    url: string | null
                    vehiculo_id: string
                }
                Insert: {
                    cloudinary_public_id?: string | null
                    created_at?: string | null
                    id?: string
                    nombre_archivo?: string | null
                    tipo_archivo?: string | null
                    url?: string | null
                    vehiculo_id: string
                }
                Update: {
                    cloudinary_public_id?: string | null
                    created_at?: string | null
                    id?: string
                    nombre_archivo?: string | null
                    tipo_archivo?: string | null
                    url?: string | null
                    vehiculo_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "vehiculo_documentos_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vehiculo"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "vehiculo_documentos_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_documentos_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_documentos_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_documentos_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["vehiculo_id"]
                    }
                ]
            }
            vehiculo_sucursal: {
                Row: {
                    created_at: string
                    id: number
                    is_deleted: boolean | null
                    sucursal_id: string
                    vehiculo_id: string
                }
                Insert: {
                    created_at?: string
                    id?: number
                    is_deleted?: boolean | null
                    sucursal_id: string
                    vehiculo_id: string
                }
                Update: {
                    created_at?: string
                    id?: number
                    is_deleted?: boolean | null
                    sucursal_id?: string
                    vehiculo_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "vehiculo_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "vehiculo_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_sucursal_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_sucursal_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vehiculo"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "vehiculo_sucursal_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_sucursal_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_sucursal_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "vehiculo_sucursal_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["vehiculo_id"]
                    }
                ]
            }
        }
        Views: {
            admin_panel_talleres: {
                Row: {
                    clientes: number | null
                    comuna: string | null
                    email_contacto: string | null
                    estado_operativo: string | null
                    fecha_registro: string | null
                    fecha_ultima_orden: string | null
                    nombre_plan: string | null
                    nombre_taller: string | null
                    slug: string | null
                    staff: number | null
                    sucursal_id: string | null
                    total_ordenes: number | null
                    valor_plan: number | null
                    vehiculos: number | null
                }
                Relationships: []
            }
            bloques_disponibles: {
                Row: {
                    block_date: string | null
                    bloque_id: number | null
                    capacity_left: number | null
                    end_time: string | null
                    start_time: string | null
                }
                Insert: {
                    block_date?: string | null
                    bloque_id?: number | null
                    capacity_left?: number | null
                    end_time?: string | null
                    start_time?: string | null
                }
                Update: {
                    block_date?: string | null
                    bloque_id?: number | null
                    capacity_left?: number | null
                    end_time?: string | null
                    start_time?: string | null
                }
                Relationships: []
            }
            estado_financiero_ordenes: {
                Row: {
                    cliente_id: string | null
                    detalles_pagos: Json | null
                    fecha_creacion: string | null
                    orden_correlativo: number | null
                    orden_id: string | null
                    saldo_pendiente: number | null
                    sucursal_id: string | null
                    total_adeudado: number | null
                    total_pagado: number | null
                    vehiculo_id: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "fk_cliente_id"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "clientes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_cliente_id"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "fk_cliente_id"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "fk_cliente_id"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "fk_cliente_id"
                        columns: ["cliente_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["cliente_id"]
                    },
                    {
                        foreignKeyName: "orden_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vehiculo"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "orden_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "orden_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "orden_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "orden_vehiculo_id_fkey"
                        columns: ["vehiculo_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["vehiculo_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "ordenes_sucursal_id_fkey"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    }
                ]
            }
            total_cotizacion_por_estado_y_orden: {
                Row: {
                    cotizacion_estado_id: number | null
                    orden_id: string | null
                    total_cotizacion: number | null
                    total_productos: number | null
                    total_servicios: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "cotizaciones_estado_id_fkey"
                        columns: ["cotizacion_estado_id"]
                        isOneToOne: false
                        referencedRelation: "cotizaciones_estados"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_estado_id_fkey"
                        columns: ["cotizacion_estado_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["cotizacion_estado_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    }
                ]
            }
            view_admin_alertas_pagos: {
                Row: {
                    dias_desde_ultimo_pago_o_creacion: number | null
                    email: string | null
                    estado_deuda: string | null
                    fecha_ult_pago: string | null
                    nombre_contacto: string | null
                    nombre_taller: string | null
                    numero_tel: string | null
                    plan_actual: string | null
                    sucursal_id: string | null
                    valor_plan: number | null
                }
                Relationships: []
            }
            view_admin_saas_metrics: {
                Row: {
                    alertas_pago_vencido: number | null
                    cancelaciones_mes_actual: number | null
                    crecimiento_neto_mes: number | null
                    distribucion_planes_json: Json | null
                    fecha_reporte: string | null
                    mrr_estimado_actual: number | null
                    nuevos_talleres_mes_actual: number | null
                    talleres_activos_total: number | null
                }
                Relationships: []
            }
            vista_citas_agendadas: {
                Row: {
                    agenda_id: number | null
                    apellido_cliente: string | null
                    cita_correlativo: number | null
                    cita_eliminada_en: string | null
                    cita_id: string | null
                    estado_cita: string | null
                    estado_cita_id: number | null
                    fecha: string | null
                    hora_fin: string | null
                    hora_inicio: string | null
                    icono_marca: Json | null
                    marca_vehiculo: string | null
                    modelo_vehiculo: string | null
                    nombre_agenda: string | null
                    nombre_cliente: string | null
                    nombre_sucursal: string | null
                    nota: string | null
                    orden_correlativo: number | null
                    orden_estado_id: number | null
                    orden_estado_nombre: string | null
                    orden_id: string | null
                    patente_vehiculo: string | null
                    servicios_cotizacion: string | null
                    sucursal_id: string | null
                    telefono_cliente: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "cita_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "estado_financiero_ordenes"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cita_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cita_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cita_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cita_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "cita_orden_id_fkey"
                        columns: ["orden_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["orden_id"]
                    },
                    {
                        foreignKeyName: "fk_cita_estado"
                        columns: ["estado_cita_id"]
                        isOneToOne: false
                        referencedRelation: "estados_cita"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_estado_id"
                        columns: ["orden_estado_id"]
                        isOneToOne: false
                        referencedRelation: "ordenes_estados"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_estado_id"
                        columns: ["orden_estado_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["orden_estado_id"]
                    },
                    {
                        foreignKeyName: "fk_estado_id"
                        columns: ["orden_estado_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["estado_id"]
                    }
                ]
            }
            vista_cotizaciones_busqueda: {
                Row: {
                    anio: number | null
                    apellido_cliente: string | null
                    cliente_id: string | null
                    color: string | null
                    correo_cliente: string | null
                    cotizacion_correlativo: number | null
                    cotizacion_estado_id: number | null
                    cotizacion_id: string | null
                    descuento: number | null
                    estado_cotizacion: string | null
                    fecha_creacion_cotizacion: string | null
                    incluye_iva: boolean | null
                    is_domicilio: boolean | null
                    marca: string | null
                    modelo: string | null
                    nombre_cliente: string | null
                    nombre_sucursal: string | null
                    observaciones_orden: string | null
                    orden_correlativo: number | null
                    orden_id: string | null
                    patente: string | null
                    rut_cliente: string | null
                    servicio_ids: string[] | null
                    servicio_nombres: string[] | null
                    sucursal_id: string | null
                    telefono_cliente: string | null
                    total_cotizacion: number | null
                    total_items: number | null
                    total_servicios: number | null
                    valida_hasta: string | null
                    vehiculo_id: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "cotizaciones_estado_id_fkey"
                        columns: ["cotizacion_estado_id"]
                        isOneToOne: false
                        referencedRelation: "cotizaciones_estados"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "cotizaciones_estado_id_fkey"
                        columns: ["cotizacion_estado_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["cotizacion_estado_id"]
                    }
                ]
            }
            vista_cotizaciones_consolidadas: {
                Row: {
                    anio: number | null
                    apellido_cliente: string | null
                    cliente_id: string | null
                    color: string | null
                    correo_cliente: string | null
                    cotizacion_correlativo: number | null
                    cotizacion_estado_id: number | null
                    cotizacion_estado_nombre: string | null
                    cotizacion_id: string | null
                    descuento: number | null
                    detalles_cita: Json | null
                    fecha_creacion_cotizacion: string | null
                    fecha_creacion_orden: string | null
                    fecha_ultimo_avance_orden: string | null
                    fecha_ultimo_cambio_estado: string | null
                    icono_marca: Json | null
                    incluye_iva: boolean | null
                    is_domicilio: boolean | null
                    is_origen_online: boolean | null
                    isFavorite: boolean | null
                    isVista: boolean | null
                    items_agregados: Json | null
                    marca: string | null
                    modelo: string | null
                    nombre_cliente: string | null
                    nombre_sucursal: string | null
                    notas_internas_orden: string | null
                    observaciones_orden: string | null
                    orden_correlativo: number | null
                    orden_estado_id: number | null
                    orden_estado_nombre: string | null
                    orden_id: string | null
                    orden_macro_estado: string | null
                    patente: string | null
                    rut_cliente: string | null
                    servicios_agregados: Json | null
                    subtotal_con_iva: number | null
                    subtotal_iva: number | null
                    subtotal_neto: number | null
                    sucursal_id: string | null
                    tags_cotizacion: Json | null
                    telefono_cliente: string | null
                    tipo_vehiculo: string | null
                    total_con_iva: number | null
                    total_iva: number | null
                    total_neto: number | null
                    valida_hasta: string | null
                    vehiculo_id: string | null
                }
                Relationships: []
            }
            vista_formularios_inspeccion: {
                Row: {
                    bloques: Json | null
                    created_at: string | null
                    formulario_id: string | null
                    is_active: boolean | null
                    nombre_formulario: string | null
                    sucursal_id: string | null
                    sucursal_nombre: string | null
                }
                Relationships: []
            }
            vista_movimientos_inventario: {
                Row: {
                    cantidad: number | null
                    fecha: string | null
                    motivo_referencia: string | null
                    movimiento_correlativo: number | null
                    movimiento_id: string | null
                    producto_codigo: string | null
                    producto_id: string | null
                    producto_imagen_url: string | null
                    producto_nombre: string | null
                    stock_anterior: number | null
                    stock_nuevo: number | null
                    sucursal_id: string | null
                    sucursal_nombre: string | null
                    tipo_movimiento: Database["public"]["Enums"]["tipo_movimiento_inventario"] | null
                    ubicacion_destino: string | null
                    ubicacion_destino_id: string | null
                    ubicacion_origen: string | null
                    ubicacion_origen_id: string | null
                    usuario_avatar: string | null
                    usuario_id: string | null
                    usuario_nombre: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "movimientos_inventario_ubicacion_destino_id_fkey"
                        columns: ["ubicacion_destino_id"]
                        isOneToOne: false
                        referencedRelation: "ubicaciones_inventario"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "movimientos_inventario_ubicacion_origen_id_fkey"
                        columns: ["ubicacion_origen_id"]
                        isOneToOne: false
                        referencedRelation: "ubicaciones_inventario"
                        referencedColumns: ["id"]
                    }
                ]
            }
            vista_ordenes_consolidadas: {
                Row: {
                    anio: number | null
                    apellido_cliente: string | null
                    archivos_adjuntos: Json | null
                    avances: Json | null
                    cliente_id: string | null
                    color: string | null
                    combustible: string | null
                    correo_cliente: string | null
                    detalles_cita: Json | null
                    detalles_pagos: Json | null
                    direccion_cliente: string | null
                    direccion_domicilio: Json | null
                    estado_id: number | null
                    estado_orden: string | null
                    evaluacion: Json | null
                    fecha_creacion_orden: string | null
                    fecha_entrega: string | null
                    fecha_ultimo_cambio_estado: string | null
                    icono_marca: Json | null
                    in_taller: boolean | null
                    is_domicilio: boolean | null
                    kilometraje: number | null
                    macro_estado: string | null
                    marca: string | null
                    mecanicos_asignados: Json | null
                    modelo: string | null
                    nombre_cliente: string | null
                    nombre_sucursal: string | null
                    notasInternas: string | null
                    observaciones_orden: string | null
                    orden_correlativo: number | null
                    orden_eliminada_en: string | null
                    orden_id: string | null
                    patente: string | null
                    progreso: number | null
                    rut_cliente: string | null
                    saldo_pendiente: number | null
                    servicios_asignados: Json | null
                    slug_sucursal: string | null
                    sucursal_id: string | null
                    tags_orden: Json | null
                    tareas: Json | null
                    telefono_cliente: string | null
                    tipo_vehiculo: string | null
                    total_aprobado: number | null
                    total_pagado: number | null
                    total_por_aprobar: number | null
                    vehiculo_id: string | null
                    vin: string | null
                }
                Relationships: []
            }
            vista_registros_inspeccion_consolidados: {
                Row: {
                    adjuntos: Json | null
                    apellido_cliente: string | null
                    cliente_id: string | null
                    correlativo_inspeccion: number | null
                    estado_registro: string | null
                    fecha_completado_inspeccion: string | null
                    fecha_inicio_inspeccion: string | null
                    formulario_id: string | null
                    hallazgos: Json | null
                    marca: string | null
                    modelo: string | null
                    nombre_cliente: string | null
                    nombre_formulario: string | null
                    orden_correlativo: number | null
                    orden_id: string | null
                    patente: string | null
                    registro_id: string | null
                    respuestas: Json | null
                    sucursal_id: string | null
                    sucursal_nombre: string | null
                    usuario_id: string | null
                    usuario_nombre: string | null
                    vehiculo_id: string | null
                }
                Relationships: []
            }
            vista_saldos: {
                Row: {
                    fuente_dinero: string | null
                    saldo_actual: number | null
                    total_egresos: number | null
                    total_ingresos: number | null
                }
                Relationships: []
            }
            vista_sesiones_full: {
                Row: {
                    accesos_contador: number | null
                    comprobantes_pago: Json | null
                    estado_interaccion: string | null
                    estado_proceso: string | null
                    fecha_aceptacion: string | null
                    fecha_entrega: string | null
                    fecha_envio: string | null
                    fecha_expiracion_link: string | null
                    fecha_inicio_sesion: string | null
                    fecha_pago: string | null
                    historial_chat: Json | null
                    items_a_cotizar: Json | null
                    nombre_contacto: string | null
                    nombre_empresa: string | null
                    notas_mecanico: string | null
                    numero_solicitud: number | null
                    ofertas_realizadas: Json | null
                    prioridad: string | null
                    proveedor_email: string | null
                    proveedor_id: string | null
                    proveedor_telefono: string | null
                    sesion_id: string | null
                    solicitud_id: string | null
                    sucursal_id: string | null
                    telefono_whatsapp: string | null
                    titulo_referencia: string | null
                    token_acceso_publico: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "admin_panel_talleres"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "sucursal"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "view_admin_alertas_pagos"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_citas_agendadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_busqueda"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_cotizaciones_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_formularios_inspeccion"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_ordenes_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_solicitudes_repuestos_full"
                        referencedColumns: ["sucursal_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_sucursal"
                        columns: ["sucursal_id"]
                        isOneToOne: false
                        referencedRelation: "vista_sucursales_consolidadas"
                        referencedColumns: ["sucursal_id"]
                    }
                ]
            }
            vista_solicitudes_repuestos_full: {
                Row: {
                    correlativo_id: number | null
                    creador_avatar: string | null
                    creador_id: string | null
                    creador_nombre: string | null
                    estado_id: number | null
                    estado_nombre: string | null
                    fecha_actualizacion: string | null
                    fecha_creacion: string | null
                    items: Json | null
                    notas_internas: string | null
                    prioridad: string | null
                    sesiones_proveedores: Json | null
                    solicitud_id: string | null
                    sucursal_id: string | null
                    sucursal_nombre: string | null
                    titulo_referencia: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "fk_solicitud_creator"
                        columns: ["creador_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_creator"
                        columns: ["creador_id"]
                        isOneToOne: false
                        referencedRelation: "vista_movimientos_inventario"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "fk_solicitud_creator"
                        columns: ["creador_id"]
                        isOneToOne: false
                        referencedRelation: "vista_registros_inspeccion_consolidados"
                        referencedColumns: ["usuario_id"]
                    },
                    {
                        foreignKeyName: "solicitudes_repuestos_estado_id_fkey"
                        columns: ["estado_id"]
                        isOneToOne: false
                        referencedRelation: "solicitudes_repuestos_estado"
                        referencedColumns: ["id"]
                    }
                ]
            }
            vista_sucursales_consolidadas: {
                Row: {
                    agendas: Json | null
                    certificaciones: Json | null
                    color_primary: string | null
                    color_secundary: string | null
                    color_tertiary: string | null
                    comuna_id: number | null
                    coordenadas: Json | null
                    descripcion_web: string | null
                    direccion: string | null
                    direccion_descripcion: string | null
                    email_sucursal: string | null
                    evaluaciones: Json | null
                    horarios_operacion: Json | null
                    imagenes_web: Json | null
                    links: Json[] | null
                    logo_url: string | null
                    map_frame: string | null
                    marcas_trabajadas: Json[] | null
                    nombre_comuna: string | null
                    nombre_region: string | null
                    nombre_sucursal: string | null
                    num_whatsapp: number | null
                    pagina_verificada: boolean | null
                    pagina_web_id: string | null
                    promociones: Json | null
                    region_id: number | null
                    servicios: Json | null
                    slug: string | null
                    sobre_nosotros_caracteristicas: Json | null
                    sobre_nosotros_descripcion: string | null
                    sobre_nosotros_imagen_url: string | null
                    sucursal_id: string | null
                    telefono_sucursal: string | null
                    url_facebook: string | null
                    url_instagram: string | null
                    url_tiktok: string | null
                }
                Relationships: []
            }
        }
        Functions: {
            cancelar_cita: { Args: { p_cita_id: string }; Returns: Json }
            consultar_bloques_disponibles_por_servicio: {
                Args: { fecha_fin: string; fecha_inicio: string; servicio_id: string }
                Returns: {
                    block_date: string
                    bloque_id: number
                    capacity_left: number
                    end_time: string
                    start_time: string
                }[]
            }
            crear_cita: {
                Args: {
                    p_agenda_id?: number
                    p_bloque_id?: number
                    p_cliente_id: string
                    p_estado_id?: number
                    p_fecha: string
                    p_fin: string
                    p_id_creador?: string
                    p_inicio: string
                    p_nota?: string
                    p_orden_id?: string
                    p_sucursal_id: string
                    p_vehiculo_id: string
                }
                Returns: Json
            }
            crear_pago_con_movimiento: {
                Args: {
                    p_documento_sii_data?: Json
                    p_documentos_adjuntos_data?: Json
                    p_orden_id: string
                    p_pago_data: Json
                }
                Returns: string
            }
            crear_reserva_precio_fijo: {
                Args: {
                    p_agenda_id: number
                    p_bloque_id: number
                    p_email_cliente: string
                    p_nombre_cliente: string
                    p_notas_cliente?: string
                    p_precio?: number
                    p_servicio_id: string
                    p_sucursal_id: string
                    p_telefono_cliente: string
                    p_usuario_id?: string
                    p_vehiculo_anio: number
                    p_vehiculo_color?: string
                    p_vehiculo_combustible?: string
                    p_vehiculo_marca: string
                    p_vehiculo_metadata?: Json
                    p_vehiculo_modelo: string
                    p_vehiculo_n_motor?: string
                    p_vehiculo_patente: string
                    p_vehiculo_tipo?: string
                    p_vehiculo_vin?: string
                }
                Returns: Json
            }
            generar_bloques_agenda: {
                Args: { p_agenda_id: string; p_weeks: number }
                Returns: undefined
            }
            generar_bloques_agenda_ok: {
                Args: { p_agenda_id: number; p_weeks: number }
                Returns: undefined
            }
            get_blocks_by_service: {
                Args: { service_id: string }
                Returns: {
                    agenda_id: string
                    block_date: string
                    block_id: string
                    capacity_left: number
                    end_time: string
                    is_feriado: boolean
                    start_time: string
                }[]
            }
            get_cars_brands: {
                Args: never
                Returns: {
                    id: number
                    name: string
                    slug: string
                }[]
            }
            get_cars_models: {
                Args: { brand_id_param: number }
                Returns: {
                    brand_id: number
                    id: number
                    name: string
                    slug: string
                }[]
            }
            get_cars_versions: {
                Args: { model_id_param: number; year_param: number }
                Returns: {
                    id: number
                    model_id: number
                    version_name: string
                    year: number
                }[]
            }
            get_cars_years: {
                Args: { model_id_param: number }
                Returns: {
                    year: number
                }[]
            }
            get_server_time: { Args: never; Returns: string }
            get_services_by_sucursal: {
                Args: { p_sucursal_id: string }
                Returns: Json
            }
            get_shop_details_with_operating_hours: {
                Args: { p_shop_id: string }
                Returns: Json
            }
            get_sucursales: {
                Args: never
                Returns: {
                    contacto_cobranza: string
                    correo_cobranza: string
                    correo_contacto: string
                    created_at: string
                    direccion: string
                    direccion_descripcion: string
                    email: string
                    empresa_id: string
                    fecha_ult_pago: string
                    id: string
                    id_bancarios: string
                    id_pagina_web: string
                    logo_url: string
                    nombre: string
                    nombre_contacto: string
                    numero_contacto: string
                    numero_tel: string
                    slug: string
                    suscripcion_id: string
                }[]
            }
            get_sucursales_with_categories: {
                Args: never
                Returns: {
                    categories: Json
                    sucursal_address: string
                    sucursal_id: string
                    sucursal_name: string
                }[]
            }
            get_taller_completo: { Args: { taller_id: string }; Returns: Json }
            get_talleres_destacados: {
                Args: never
                Returns: {
                    categorias: Json
                    correo: string
                    direccion: string
                    distancia: number
                    estado: boolean
                    horario_apertura: string
                    horario_cierre: string
                    id: string
                    imagen_url: string
                    nombre: string
                    rating: number
                    servicios: Json
                    telefono: string
                    total_resenas: number
                }[]
            }
            get_workshops_with_services: {
                Args: { limit_param?: number; offset_param?: number }
                Returns: {
                    comuna_id: string
                    coordenadas: Json
                    correo_contacto: string
                    created_at: string
                    direccion: string
                    email: string
                    id: string
                    logo_url: string
                    nombre: string
                    nombre_contacto: string
                    numero_contacto: string
                    numero_tel: string
                    servicios: Json
                    slug: string
                }[]
            }
            liberar_bloque: {
                Args: { p_bloque_id: number; p_cita_id: string }
                Returns: Json
            }
            liberar_bloques_cita: { Args: { p_cita_id: string }; Returns: Json }
            list_testigos_vehiculo_images: {
                Args: { limit_count?: number; prefix?: string }
                Returns: {
                    bucket_id: string
                    created_at: string
                    id: string
                    metadata: Json
                    name: string
                    public_url: string
                }[]
            }
            post_reserva_precio_fijo:
                | {
                      Args: {
                          p_agenda_id: number
                          p_bloque_id: number
                          p_cliente_id?: string
                          p_email_cliente: string
                          p_nombre_cliente: string
                          p_notas_cliente?: string
                          p_precio: number
                          p_servicio_id: string
                          p_sucursal_id: string
                          p_telefono_cliente: string
                          p_usuario_id?: string
                          p_vehiculo_anio: number
                          p_vehiculo_color?: string
                          p_vehiculo_combustible?: string
                          p_vehiculo_id?: string
                          p_vehiculo_marca: string
                          p_vehiculo_metadata?: Json
                          p_vehiculo_modelo: string
                          p_vehiculo_n_motor?: string
                          p_vehiculo_patente: string
                          p_vehiculo_tipo?: string
                          p_vehiculo_vin?: string
                      }
                      Returns: Json
                  }
                | {
                      Args: {
                          p_agenda_id: number
                          p_bloque_id: number
                          p_cliente_id: string
                          p_email_cliente: string
                          p_nombre_cliente: string
                          p_notas_cliente: string
                          p_precio: number
                          p_servicio_id: string
                          p_sucursal_id: string
                          p_telefono_cliente: string
                          p_usuario_id: string
                          p_vehiculo_anio: number
                          p_vehiculo_color: string
                          p_vehiculo_combustible: string
                          p_vehiculo_id: string
                          p_vehiculo_marca: string
                          p_vehiculo_metadata: Json
                          p_vehiculo_modelo: string
                          p_vehiculo_n_motor: string
                          p_vehiculo_patente: string
                          p_vehiculo_tipo: string
                          p_vehiculo_vin: string
                      }
                      Returns: Json
                  }
            post_reserva_precio_fijo_simple: {
                Args: {
                    p_agenda_id: number
                    p_bloque_id: number
                    p_email_cliente: string
                    p_nombre_cliente: string
                    p_precio: number
                    p_servicio_id: string
                    p_sucursal_id: string
                    p_telefono_cliente: string
                    p_vehiculo_anio: number
                    p_vehiculo_marca: string
                    p_vehiculo_modelo: string
                    p_vehiculo_patente: string
                }
                Returns: Json
            }
            precio_fijo: {
                Args: {
                    p_agenda_id: number
                    p_bloques_ids: number[]
                    p_cliente_apellido: string
                    p_cliente_email: string
                    p_cliente_nombre: string
                    p_cliente_telefono: string
                    p_descuento?: number
                    p_duracion_minutos?: number
                    p_fecha_cita: string
                    p_items: Json
                    p_precio: number
                    p_servicio_id: string
                    p_taller_id: string
                    p_vehiculo_ano: number
                    p_vehiculo_marca: string
                    p_vehiculo_metadata: Json
                    p_vehiculo_modelo: string
                    p_vehiculo_patente: string
                }
                Returns: Json
            }
            reagendar_cita: {
                Args: {
                    p_agenda_id?: number
                    p_bloque_id?: number
                    p_cita_id_original: string
                    p_cliente_id: string
                    p_estado_id?: number
                    p_fecha: string
                    p_fin: string
                    p_id_creador?: string
                    p_inicio: string
                    p_nota?: string
                    p_orden_id?: string
                    p_sucursal_id: string
                    p_vehiculo_id: string
                }
                Returns: Json
            }
            recalc_block_capacity: {
                Args: { p_block_id: number }
                Returns: undefined
            }
            restaurar_movimiento_inventario: {
                Args: { movement_id: number }
                Returns: undefined
            }
            show_limit: { Args: never; Returns: number }
            show_trgm: { Args: { "": string }; Returns: string[] }
            soft_delete_movimiento_inventario: {
                Args: { movement_id: number }
                Returns: undefined
            }
        }
        Enums: {
            ai_interaction_status: "queued" | "processing" | "completed" | "failed"
            ai_interaction_status_old: "queued" | "processing" | "completed" | "failed"
            tipo_evento_tracking:
                | "ORDEN_CREADA"
                | "ORDEN_ACTUALIZADA"
                | "ORDEN_ESTADO_CAMBIADO"
                | "MECANICO_ASIGNADO"
                | "MECANICO_DESASIGNADO"
                | "TAREA_CREADA"
                | "TAREA_ACTUALIZADA"
                | "NOTA_INTERNA_CREADA"
                | "REGISTRO_AVANCE_CREADO"
                | "CITA_AGENDADA"
                | "CITA_REAGENDADA"
                | "CITA_ESTADO_CAMBIADO"
                | "CITA_CANCELADA"
                | "COTIZACION_CREADA"
                | "COTIZACION_ESTADO_CAMBIADO"
                | "COTIZACION_ITEM_MODIFICADO"
                | "COTIZACION_ENVIADA"
                | "COTIZACION_APROBADA"
                | "COTIZACION_RECHAZADA"
                | "DOCUMENTO_ADJUNTADO"
                | "INSPECCION_INICIADA"
                | "INSPECCION_COMPLETADA"
                | "INSPECCION_HALLAZGO_CREADO"
                | "PAGO_REGISTRADO"
                | "PAGO_ANULADO"
                | "EVALUACION_RECIBIDA"
                | "COMUNICACION_CLIENTE_REGISTRADA"
                | "ORDEN_FECHA_ENTREGA_ACTUALIZADA"
            tipo_fuente_movimiento: "PAGO_ORDEN" | "VENTA_MESON" | "AJUSTE_CAJA" | "COMPRA_PROVEEDOR" | "SALIDA_PAGO_PROVEEDOR"
            tipo_movimiento_inventario: "ENTRADA" | "SALIDA" | "TRANSFERENCIA" | "AJUSTE"
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
    DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"]) | { schema: keyof DatabaseWithoutInternals },
    TableName extends DefaultSchemaTableNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals
    }
        ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
              DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
        : never = never
> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
}
    ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
          DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
          Row: infer R
      }
        ? R
        : never
    : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
          Row: infer R
      }
        ? R
        : never
    : never

export type TablesInsert<
    DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
    TableName extends DefaultSchemaTableNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals
    }
        ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
        : never = never
> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
}
    ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
          Insert: infer I
      }
        ? I
        : never
    : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
          Insert: infer I
      }
        ? I
        : never
    : never

export type TablesUpdate<
    DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
    TableName extends DefaultSchemaTableNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals
    }
        ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
        : never = never
> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
}
    ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
          Update: infer U
      }
        ? U
        : never
    : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
          Update: infer U
      }
        ? U
        : never
    : never

export type Enums<
    DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
    EnumName extends DefaultSchemaEnumNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals
    }
        ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
        : never = never
> = DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
}
    ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
    PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"] | { schema: keyof DatabaseWithoutInternals },
    CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals
    }
        ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
        : never = never
> = PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
}
    ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
    : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
    public: {
        Enums: {
            ai_interaction_status: ["queued", "processing", "completed", "failed"],
            ai_interaction_status_old: ["queued", "processing", "completed", "failed"],
            tipo_evento_tracking: [
                "ORDEN_CREADA",
                "ORDEN_ACTUALIZADA",
                "ORDEN_ESTADO_CAMBIADO",
                "MECANICO_ASIGNADO",
                "MECANICO_DESASIGNADO",
                "TAREA_CREADA",
                "TAREA_ACTUALIZADA",
                "NOTA_INTERNA_CREADA",
                "REGISTRO_AVANCE_CREADO",
                "CITA_AGENDADA",
                "CITA_REAGENDADA",
                "CITA_ESTADO_CAMBIADO",
                "CITA_CANCELADA",
                "COTIZACION_CREADA",
                "COTIZACION_ESTADO_CAMBIADO",
                "COTIZACION_ITEM_MODIFICADO",
                "COTIZACION_ENVIADA",
                "COTIZACION_APROBADA",
                "COTIZACION_RECHAZADA",
                "DOCUMENTO_ADJUNTADO",
                "INSPECCION_INICIADA",
                "INSPECCION_COMPLETADA",
                "INSPECCION_HALLAZGO_CREADO",
                "PAGO_REGISTRADO",
                "PAGO_ANULADO",
                "EVALUACION_RECIBIDA",
                "COMUNICACION_CLIENTE_REGISTRADA",
                "ORDEN_FECHA_ENTREGA_ACTUALIZADA",
            ],
            tipo_fuente_movimiento: ["PAGO_ORDEN", "VENTA_MESON", "AJUSTE_CAJA", "COMPRA_PROVEEDOR", "SALIDA_PAGO_PROVEEDOR"],
            tipo_movimiento_inventario: ["ENTRADA", "SALIDA", "TRANSFERENCIA", "AJUSTE"],
        },
    },
} as const
