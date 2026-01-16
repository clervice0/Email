import { createTransport, Transporter } from "nodemailer"

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
 * Clase para manejar el envío de correos electrónicos
 */
export class EmailService {
    private transporter: Transporter
    private defaultFrom: string

    constructor(config?: EmailConfig) {
        const email = process.env.Email
        const password = process.env.Password

        if (!email || !password) {
            throw new Error("Las variables de entorno Email y Password son requeridas")
        }

        this.defaultFrom = email

        // Configuración por defecto para Gmail
        const defaultConfig: EmailConfig = {
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            ...config,
        }

        this.transporter = createTransport({
            ...defaultConfig,
            auth: {
                user: email,
                pass: password,
            },
        })
    }

    /**
     * Verifica la conexión con el servidor de correo
     * @returns {Promise<boolean>} True si la conexión es exitosa
     */
    async verifyConnection(): Promise<boolean> {
        try {
            await this.transporter.verify()
            return true
        } catch (error) {
            console.error("Error verificando conexión de correo:", error)
            return false
        }
    }

    /**
     * Envía un correo electrónico
     * @param {EmailOptions} options - Opciones del correo a enviar
     * @returns {Promise<EmailResponse>} Respuesta del envío
     */
    async sendEmail(options: EmailOptions): Promise<EmailResponse> {
        try {
            const mailOptions = {
                from: options.from || this.defaultFrom,
                to: Array.isArray(options.to) ? options.to.join(", ") : options.to,
                subject: options.subject,
                text: options.text,
                html: options.html,
                cc: Array.isArray(options.cc) ? options.cc.join(", ") : options.cc,
                bcc: Array.isArray(options.bcc) ? options.bcc.join(", ") : options.bcc,
                attachments: options.attachments,
            }

            const info = await this.transporter.sendMail(mailOptions)

            return {
                success: true,
                messageId: info.messageId,
            }
        } catch (error) {
            console.error("Error enviando correo:", error)
            return {
                success: false,
                error: error instanceof Error ? error.message : "Error desconocido al enviar correo",
            }
        }
    }

    /**
     * Envía un correo de notificación simple
     * @param {string} to - Destinatario
     * @param {string} subject - Asunto
     * @param {string} message - Mensaje
     * @returns {Promise<EmailResponse>} Respuesta del envío
     */
    async sendNotification(to: string, subject: string, message: string): Promise<EmailResponse> {
        return this.sendEmail({
            to,
            subject,
            text: message,
            html: `<p>${message}</p>`,
        })
    }

    /**
     * Envía un correo con plantilla HTML
     * @param {string} to - Destinatario
     * @param {string} subject - Asunto
     * @param {string} htmlTemplate - Plantilla HTML
     * @param {Record<string, any>} variables - Variables para reemplazar en la plantilla
     * @returns {Promise<EmailResponse>} Respuesta del envío
     */
    async sendTemplateEmail(to: string, subject: string, htmlTemplate: string, variables: Record<string, any> = {}): Promise<EmailResponse> {
        let html = htmlTemplate

        // Reemplazar variables en la plantilla
        Object.keys(variables).forEach((key) => {
            const regex = new RegExp(`{{${key}}}`, "g")
            html = html.replace(regex, variables[key])
        })

        return this.sendEmail({
            to,
            subject,
            html,
        })
    }

    /**
     * Cierra la conexión del transporter
     */
    close(): void {
        this.transporter.close()
    }
}

// Instancia por defecto del servicio de correo
let emailServiceInstance: EmailService | null = null

/**
 * Obtiene la instancia del servicio de correo
 * @param {EmailConfig} config - Configuración opcional
 * @returns {EmailService} Instancia del servicio de correo
 */
export function getEmailService(config?: EmailConfig): EmailService {
    if (!emailServiceInstance) {
        emailServiceInstance = new EmailService(config)
    }
    return emailServiceInstance
}

// Exportar instancia por defecto
export const emailService = getEmailService()
