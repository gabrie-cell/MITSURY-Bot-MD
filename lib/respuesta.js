// --- VALORES NECESARIOS PARA LA NUEVA FUNCIONALIDAD ---

const newsletterJid = '120363424677971125@newsletter';
const newsletterName = '⏤͟͞ू⃪፝͜⁞⟡ MITSURY';
const packname = '🍁MITSURY BOT🍁';
// Definimos la URL de la imagen que proporcionaste
const imagenError = 'https://files.catbox.moe/4nqbz6.png';

/**
 * Plugin centralizado para manejar todos los mensajes de error de permisos.
 */
const handler = (type, conn, m, comando) => {

    const msg = {
        rowner: `🔥 *¡𝚂𝙴𝙼𝙿𝙰𝙸𝙸 𝙷𝙴𝙸𝙸... ALTO!* 🔥 Solo el *CREADOR DEL BOT* puede usar *${comando}*. ¡No eres el 𝙼𝙸 𝙾𝚆𝙽𝙴𝚁! 👑✋️`,
        owner: `😠 *¡HEYY!* Solo los *𝚕𝚘𝚜 𝚐𝚞𝚎𝚛𝚛𝚎𝚛𝚘𝚜 * (Owners) pueden ejecutar *${comando}*. ¡Tú no tienes esa recompensa! 💰👊`,
        mods: `📢 ¡Alto ahí, 𝚜𝚎𝚖𝚙𝚊𝚒𝚒! *${comando}* es solo para los *𝚙𝚊𝚛𝚊 𝚖𝚒𝚜 𝚊𝚖𝚒𝚐𝚘𝚜* (Mods). ¡Sigue entrenando para subir de rango! ⚔️😒`,
        premium: `💎 *¡SHISHISHI!* ¿Quieres **${comando}**? ¡Ese comando es *oro puro*! Solo para los *VIP Premium* de 𝚎𝚕 𝚌𝚊𝚖𝚙𝚘. ¡Consigue tu membresía, baka! 💸😂`,
        group: `🏝️ ¡Este comando es para la **𝚙𝚊𝚛𝚊 𝚖𝚒 𝚍𝚎𝚕𝚎𝚐𝚊𝚌𝚒𝚘́𝚗**! (Grupos). ¡No uses *${comando}* en privado, baka! ¡Necesito a toda la tripulación! 👫👀`,
        private: `🤫 *¡OYE!* ¿Qué haces? Este comando es para misiones *secretas* y *privadas*. ¡No puedes usar *${comando}* aquí, se lo diré a Zoro! 🤐👀`,
        admin: `🛡️ *¡Escudo de Goma!* *${comando}* es solo para los *Administradores* que cuidan la 𝚋𝚘𝚝. ¡Pide que te hagan Admin, o no podrás usarlo! 😏👊`,
        botAdmin: `🤖 *¡Necesito ser ADMIN!* ¡No puedo ejecutar *${comando}* si me atas las manos! ¡Hazme administrador primero, o este barco se hundirá! ⛵️😂`,
        unreg: `📚 *¡𝚂𝙴𝙼𝙿𝙰𝙸𝙸𝙸!* ¿Usar *${comando}* sin registrarte? ¡Eres un 𝚋𝚊𝚋𝚘𝚜@ sin nombre! ¡Regístrate ya para 𝚗𝚊𝚟𝚎𝚐𝚊𝚛! Usa: *#reg ${m.name || 'TuNombre'}.${Math.floor(Math.random() * 31 + 10)}* ¡O vete a buscar un tesoro en otra parte! 🧭👀`,
        restrict: `🚫 *¡DETENIDO POR LA MARINA!* Ooops~! Esta función está *desactivada* temporalmente. ¡No puedes usar *${comando}* ahora mismo! 😔⚓️`
    }[type];

    if (msg) {
        const contextInfo = {
            mentionedJid: [m.sender],
            isForwarded: true,
            forwardingScore: 999,
            forwardedNewsletterMessageInfo: {
                newsletterJid,
                newsletterName,
                serverMessageId: -1
            },
            externalAdReply: {
                title: packname,
                body: '🚨 ¡ACCESO DENEGADO!',
                // Aquí es donde agregamos tu foto de Catbox
                thumbnailUrl: imagenError, 
                sourceUrl: global.redes || 'https://whatsapp.com', 
                mediaType: 1,
                renderLargerThumbnail: false // Mantiene la foto pequeña como pediste
            }
        };
        return conn.reply(m.chat, msg, m, { contextInfo }).then(_ => m.react('✖️'));
    }
    return true;
};

export default handler;