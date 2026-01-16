/**
 * Template genérico de ejemplo para notificaciones por email
 * 
 * Este template muestra cómo estructurar un email HTML compatible con Outlook
 * y puede ser usado como base para otros proyectos.
 */

export interface EjemploData {
    titulo: string;
    mensaje: string;
    tipo?: 'info' | 'success' | 'warning' | 'error';
    datosAdicionales?: Array<{
        etiqueta: string;
        valor: string;
    }>;
    urlAccion?: string;
    textoAccion?: string;
}

const TemplateEjemplo = (data: EjemploData, urlWeb?: string) => {
    // Configuración de colores según el tipo
    const configTipo = {
        info: {
            color: "#2563eb",
            backgroundColor: "#dbeafe",
            icon: "ℹ️"
        },
        success: {
            color: "#059669",
            backgroundColor: "#d1fae5",
            icon: "✅"
        },
        warning: {
            color: "#d97706",
            backgroundColor: "#fef3c7",
            icon: "⚠️"
        },
        error: {
            color: "#dc2626",
            backgroundColor: "#fee2e2",
            icon: "❌"
        }
    };

    const tipoConfig = configTipo[data.tipo || 'info'];

    // Banner principal
    const banner = `
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
            <tr>
                <td style="background-color: ${tipoConfig.backgroundColor}; padding: 15px; border-radius: 12px; border: 2px solid ${tipoConfig.color}40;">
                    <table cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="background-color: ${tipoConfig.color}; color: #fff; padding: 8px; border-radius: 8px; text-align: center; vertical-align: middle; width: 35px; height: 25px; border: 1px solid ${tipoConfig.color};">
                                ${tipoConfig.icon}
                            </td>
                            <td style="padding-left: 10px; vertical-align: middle;">
                                <div style="font-weight: bold; font-size: 16px; margin-bottom: 4px;">
                                    ${data.titulo}
                                </div>
                                <div style="font-size: 14px; color: #6b7280;">
                                    ${data.mensaje}
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    `;

    // Información adicional
    const datosAdicionales = data.datosAdicionales && data.datosAdicionales.length > 0
        ? `
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
            <tr>
                <td style="padding: 15px; background-color: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0;">
                    <h3 style="margin: 0 0 10px 0; color: #374151; font-size: 16px;">Información Adicional</h3>
                    ${data.datosAdicionales
                        .map(
                            (item) => `
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 8px;">
                        <tr>
                            <td style="padding: 12px; background-color: #ffffff; border-radius: 8px; border-left: 4px solid ${tipoConfig.color}; border-top: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
                                <p style="margin: 0; color: #374151;">
                                    <strong>${item.etiqueta}:</strong> ${item.valor}
                                </p>
                            </td>
                        </tr>
                    </table>
                    `
                        )
                        .join("")}
                </td>
            </tr>
        </table>
        `
        : "";

    // Botón de acción
    const botonAccion = data.urlAccion
        ? `
        <table width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0;">
            <tr>
                <td align="center">
                    <table cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                        <tr>
                            <td style="
                                background-color: ${tipoConfig.color};
                                border-radius: 12px;
                                border: 2px solid ${tipoConfig.color};
                            ">
                                <!--[if mso]>
                                <table cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td style="padding: 15px 30px; background-color: ${tipoConfig.color};">
                                <![endif]-->
                                <a href="${data.urlAccion}"
                                   style="
                                       display: inline-block;
                                       padding: 15px 30px;
                                       color: #ffffff;
                                       text-decoration: none;
                                       font-weight: bold;
                                       font-size: 16px;
                                       border-radius: 12px;
                                   ">
                                    ${data.textoAccion || "Ver más detalles"}
                                </a>
                                <!--[if mso]>
                                        </td>
                                    </tr>
                                </table>
                                <![endif]-->
                            </td>
                        </tr>
                    </table>
                    ${urlWeb ? `<p style="margin: 10px 0 0 0; font-size: 12px; color: #6b7280; text-align: center;">
                        Haz clic para acceder al sistema
                    </p>` : ""}
                </td>
            </tr>
        </table>
        `
        : "";

    // Template HTML completo optimizado para correo y Outlook
    return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.titulo}</title>
    <!--[if mso]>
    <style type="text/css">
        table {border-collapse: collapse;}
        .outlook-padding {padding: 0 !important;}
    </style>
    <![endif]-->
</head>
<body style="font-family: Arial, sans-serif; background-color: #f3f4f6; margin: 0; padding: 20px; color: #374151; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <!-- Contenedor principal como tabla para máxima compatibilidad -->
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6;">
        <tr>
            <td align="center" style="padding: 20px;">
                <!-- Contenedor del email -->
                <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 2px solid #f3f4f6;" border="0">
                    <tr>
                        <td style="padding: 20px;">
                            <!-- Contenido del email -->
                            ${banner}
                            ${datosAdicionales}
                            ${botonAccion}
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
};

export { TemplateEjemplo };
