import type { VercelRequest, VercelResponse } from "@vercel/node"
import { emailService } from "../src/EmailService"
import { TemplateEjemplo, EjemploData } from "../templates/Ejemplo"

/**
 * EJEMPLO DE WEBHOOK PARA NOTIFICACIONES
 *
 * Este es un ejemplo de cómo crear un webhook que recibe datos
 * y envía notificaciones por email usando el sistema de templates.
 *
 * Estructura del request esperado:
 * {
 *   destinatarios: string[],
 *   titulo: string,
 *   mensaje: string,
 *   tipo?: 'info' | 'success' | 'warning' | 'error',
 *   datosAdicionales?: Array<{ etiqueta: string, valor: string }>,
 *   urlAccion?: string,
 *   textoAccion?: string
 * }
 */

export default async (req: VercelRequest, res: VercelResponse) => {
    try {
        // Validar método HTTP
        if (req.method !== "POST") {
            return res.status(405).json({
                success: false,
                error: "Método no permitido. Use POST.",
            })
        }

        const body = req.body

        // Validar datos requeridos
        if (!body.destinatarios || !Array.isArray(body.destinatarios) || body.destinatarios.length === 0) {
            return res.status(400).json({
                success: false,
                error: "El campo 'destinatarios' es requerido y debe ser un array no vacío",
            })
        }

        if (!body.titulo || typeof body.titulo !== "string") {
            return res.status(400).json({
                success: false,
                error: "El campo 'titulo' es requerido y debe ser un string",
            })
        }

        if (!body.mensaje || typeof body.mensaje !== "string") {
            return res.status(400).json({
                success: false,
                error: "El campo 'mensaje' es requerido y debe ser un string",
            })
        }

        // Construir datos para el template
        const datosEjemplo: EjemploData = {
            titulo: body.titulo,
            mensaje: body.mensaje,
            tipo: body.tipo || "info",
            datosAdicionales: body.datosAdicionales || [],
            urlAccion: body.urlAccion,
            textoAccion: body.textoAccion,
        }

        // Validar tipo si se proporciona
        const tiposValidos = ["info", "success", "warning", "error"]
        if (datosEjemplo.tipo && !tiposValidos.includes(datosEjemplo.tipo)) {
            return res.status(400).json({
                success: false,
                error: `El tipo debe ser uno de: ${tiposValidos.join(", ")}`,
            })
        }

        // Obtener URL web desde variables de entorno
        const urlWeb = process.env.URL_WEB

        // Generar el HTML usando el template
        const emailHtml = TemplateEjemplo(datosEjemplo, urlWeb)

        // Enviar el email usando EmailService
        const emailResult = await emailService.sendEmail({
            to: body.destinatarios,
            subject: datosEjemplo.titulo,
            html: emailHtml,
        })

        if (!emailResult.success) {
            console.error("Error enviando email:", emailResult.error)
            return res.status(500).json({
                success: false,
                error: emailResult.error || "Error al enviar el email",
                destinatarios: body.destinatarios,
                cantidad_destinatarios: body.destinatarios.length,
            })
        }

        console.log(`Email enviado exitosamente a ${body.destinatarios.length} destinatarios`)

        return res.status(200).json({
            success: true,
            data: {
                messageId: emailResult.messageId,
                destinatarios: body.destinatarios,
                cantidad_destinatarios: body.destinatarios.length,
                titulo: datosEjemplo.titulo,
            },
        })
    } catch (error) {
        console.error("Error en hello.ts:", error)
        return res.status(500).json({
            success: false,
            error: error instanceof Error ? error.message : "Error desconocido",
        })
    }
}
