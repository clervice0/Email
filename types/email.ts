/**
 * Tipos relacionados con el servicio de correo electrónico
 */

/**
 * Configuración del servicio de correo electrónico
 */
export interface EmailConfig {
    host?: string
    port?: number
    secure?: boolean
    service?: string
}

/**
 * Opciones para enviar un correo electrónico
 */
export interface EmailOptions {
    to: string | string[]
    subject: string
    text?: string
    html?: string
    from?: string
    cc?: string | string[]
    bcc?: string | string[]
    attachments?: Array<{
        filename: string
        content: string | Buffer
        contentType?: string
    }>
}

/**
 * Respuesta del envío de correo
 */
export interface EmailResponse {
    success: boolean
    messageId?: string
    error?: string
}

/**
 * Plantillas de correo predefinidas
 */
export interface EmailTemplate {
    name: string
    subject: string
    html: string
    variables?: string[]
}

/**
 * Configuración de notificaciones por tipo
 */
export interface NotificationConfig {
    enabled: boolean
    recipients: string[]
    template?: string
    subject?: string
}
