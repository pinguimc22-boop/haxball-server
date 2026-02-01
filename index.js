const HaxBallJS = require("haxball.js");

/* Mapa 1v1 / 2v2 */
function getOneMap() {
    var map = `{"name":"Futsal 1v1 by Luchooo from HaxMaps","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":50,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":50,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":-50,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":50,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":-50,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":176,"trait":"kickOffBarrier"},{"x":0,"y":50,"trait":"kickOffBarrier"},{"x":0,"y":-50,"trait":"line"},{"x":0,"y":-176,"trait":"kickOffBarrier"},{"x":-384,"y":-50,"bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"x":384,"y":-50,"bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"x":-384,"y":50,"bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"x":384,"y":50,"bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"x":-368,"y":-127,"trait":"line"},{"x":368,"y":-127,"trait":"line"},{"x":-368,"y":127,"trait":"line"},{"x":368,"y":127,"trait":"line"},{"x":-350,"y":-171,"bCoef":0,"trait":"line"},{"x":-368,"y":-163,"bCoef":0,"trait":"line"},{"x":350,"y":-171,"bCoef":0,"trait":"line"},{"x":368,"y":-163,"bCoef":0,"trait":"line"},{"x":-350,"y":171,"bCoef":0,"trait":"line"},{"x":-368,"y":163,"bCoef":0,"trait":"line"},{"x":350,"y":171,"bCoef":0,"trait":"line"},{"x":368,"y":163,"bCoef":0,"trait":"line"},{"x":368,"y":171,"bCoef":1,"trait":"ballArea"},{"x":368,"y":-171,"bCoef":1,"trait":"ballArea"},{"x":0,"y":171,"bCoef":0,"trait":"line"},{"x":0,"y":-171,"bCoef":0,"trait":"line"},{"x":0,"y":50,"trait":"kickOffBarrier"},{"x":0,"y":-50,"trait":"kickOffBarrier"},{"x":377,"y":-50,"bCoef":1,"cMask":["red"],"trait":"line"},{"x":377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":-50,"bCoef":1,"cMask":["blue"],"trait":"line"},{"x":-377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":50,"bCoef":1,"cMask":["blue"],"trait":"line"},{"x":-377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":377,"y":50,"bCoef":1,"cMask":["red"],"trait":"line"},{"x":377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"v0":12,"v1":14,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet","x":-585},{"v0":13,"v1":15,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet","x":585},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-368},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":368},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-368},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":368},{"v0":0,"v1":28,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":171},{"v0":3,"v1":29,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-171},{"v0":30,"v1":31,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":33,"v1":32,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":38,"v1":39,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":40,"v1":41,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":34,"v1":40,"curve":60,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["red"],"trait":"line"},{"v0":38,"v1":36,"curve":60,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["blue"],"trait":"line"}],"goals":[{"p0":[-372,-52],"p1":[-372,48],"team":"red"},{"p0":[372,50],"p1":[372,-50],"team":"blue"}],"discs":[{"radius":5,"pos":[-368,50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-368,-50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[368,50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[368,-50],"color":"FFFFFF","trait":"goalPost"},{"radius":3,"invMass":0,"pos":[383,51],"color":"FFFFFF","bCoef":0,"trait":"line"},{"radius":3,"invMass":0,"pos":[-383,51],"color":"FFFFFF","bCoef":0,"trait":"line"},{"radius":3,"invMass":0,"pos":[383,-51],"color":"FFFFFF","bCoef":0,"trait":"line"},{"radius":3,"invMass":0,"pos":[-383,-51],"color":"FFFFFF","bCoef":0,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":6.5},"ballPhysics":{"radius":6.4,"color":"EAFF00"}}`
    return map;
}

const HaxBallJS = require("haxball.js");

HaxBallJS.then((HBInit) => {
    const room = HBInit({
        roomName: "⚡ ARENA POWERSHOOT 24/7 ⚡",
        maxPlayers: 10,
        noPlayer: true,
        public: false,
        // REEMPLAZA ESTE TOKEN. Consíguelo en: https://www.haxball.com/headlesstoken
        token: "thr1.AAAAAGl_iNf9zubU6yOi2Q.T8s2ozKxChY"
    });

    // --- BASE DE DATOS DE UNIFORMES (Combinaciones Bi-Color) ---
    const UNIFORMES = [
        // --- DUELOS DE SELECCIONES ---
        {
            nombre: "Duelo de Titanes: Argentina vs Portugal",
            rojo: { colores: [0x74C0FC, 0xFFFFFF], texto: 0x003566 }, // Argentina (Celeste y Blanco)
            azul: { colores: [0xD00000, 0x008000], texto: 0xFFD700 }  // Portugal (Rojo y Verde)
        },
        {
            nombre: "Final del Mundo: Francia vs Brasil",
            rojo: { colores: [0x002395, 0xFFFFFF], texto: 0xED2939 }, // Francia (Blue/White/Red)
            azul: { colores: [0xFFDF00, 0x009B3A], texto: 0x002776 }  // Brasil (Amarillo y Verde)
        },

        // --- CLÁSICOS DE ESPAÑA ---
        {
            nombre: "El Clásico: Real Madrid vs Barcelona",
            rojo: { colores: [0xFFFFFF, 0xF0F0F0], texto: 0x1B1B1B }, // Madrid (Blanco Puro)
            azul: { colores: [0xA50044, 0x004D98], texto: 0xEDBB00 }  // Barça (Grana y Azul Real)
        },
        {
            nombre: "Derbi Madrileño: Atlético vs Real Madrid",
            rojo: { colores: [0xCB3524, 0xFFFFFF], texto: 0x1D2D50 }, // Atleti (Rojiblanco)
            azul: { colores: [0xFFFFFF, 0xCEADEB], texto: 0x1B1B1B }  // Madrid (Blanco/Plata)
        },

        // --- CLÁSICOS DE INGLATERRA ---
        {
            nombre: "Derbi de Manchester: City vs United",
            rojo: { colores: [0x6CABDD, 0xFFFFFF], texto: 0xFFFFFF }, // City (Sky Blue)
            azul: { colores: [0xDA291C, 0x1B1B1B], texto: 0xFFFFFF }  // United (Rojo y Negro)
        },
        {
            nombre: "Londres: Arsenal vs Chelsea",
            rojo: { colores: [0xEF0107, 0xFFFFFF], texto: 0xEF0107 }, // Arsenal (Rojo/Blanco)
            azul: { colores: [0x034694, 0x002D62], texto: 0xFFFFFF }  // Chelsea (Azul Royal)
        },

        // --- CLÁSICOS DE ITALIA ---
        {
            nombre: "Derby della Madonnina: Milan vs Inter",
            rojo: { colores: [0xFB090B, 0x000000], texto: 0xFFFFFF }, // Milan (Rojo y Negro)
            azul: { colores: [0x0053A0, 0x000000], texto: 0xFFFFFF }  // Inter (Azul y Negro)
        },
        {
            nombre: "Derby de Italia: Juventus vs Inter",
            rojo: { colores: [0x000000, 0xFFFFFF], texto: 0xE2BA12 }, // Juve (Blanco y Negro)
            azul: { colores: [0x0053A0, 0x1B1B1B], texto: 0xFFFFFF }  // Inter
        },

        // --- CLÁSICOS DE ALEMANIA ---
        {
            nombre: "Der Klassiker: Bayern Munich vs Dortmund",
            rojo: { colores: [0xDC052D, 0xFFFFFF], texto: 0xFFFFFF }, // Bayern (Rojo y Blanco limpio)
            azul: { colores: [0xFDE100, 0x000000], texto: 0x000000 }  // Dortmund (Amarillo y Negro)
        },

        // --- FRANCIA Y OTROS ---
        {
            nombre: "Le Classique: PSG vs Marsella",
            rojo: { colores: [0x002D5E, 0xE30613], texto: 0xFFFFFF }, // PSG (Azul Oscuro c/ franja roja)
            azul: { colores: [0x2FAEE0, 0xFFFFFF], texto: 0x004170 }  // Marsella (Celeste y Blanco)
        },
        {
            nombre: "Clásico Holandés: Ajax vs PSV",
            rojo: { colores: [0xFFFFFF, 0xD2122E], texto: 0xD2122E }, // Ajax
            azul: { colores: [0xED1C24, 0xFFFFFF], texto: 0x000000 }  // PSV
        },
        {
            nombre: "Portugal: Benfica vs Porto",
            rojo: { colores: [0xE8112D, 0x1B1B1B], texto: 0xFFFFFF }, // Benfica
            azul: { colores: [0x005CA9, 0xFFFFFF], texto: 0x005CA9 }  // Porto
        }
    ];

    // --- VARIABLES DE ESTADO ---
    var afkPlayers = new Set();
    var lastActivity = new Map();
    const MAX_AFK_TIME = 30000;

    var lastBallPos = { x: 0, y: 0 };
    var ballSpeed = { x: 0, y: 0 };
    var isBallCharged = false;
    var currentHolder = null;
    var holdStartTime = null;
    var powershootActive = true;

    const BALL_COLOR_NORMAL = 0xEAFF00;
    const BALL_COLOR_READY = 0xFF0000;

    // --- INICIALIZACIÓN DE MAPA (Debes tener la función getOneMap definida en tu archivo) ---
    room.setCustomStadium(getOneMap());
    room.setScoreLimit(5);
    room.setTimeLimit(5);

    // --- FUNCIONES ---

    function updateAdmins() {
        var players = room.getPlayerList();
        if (players.length > 0 && !players.some(p => p.admin)) {
            room.setPlayerAdmin(players[0].id, true);
        }
    }

    function setRandomUniforms() {
        const diseño = UNIFORMES[Math.floor(Math.random() * UNIFORMES.length)];
        // Aplicamos los dos colores al degradado del equipo
        room.setTeamColors(1, 45, diseño.rojo.texto, diseño.rojo.colores);
        room.setTeamColors(2, 45, diseño.azul.texto, diseño.azul.colores);
        room.sendAnnouncement("👕 Estilos: " + diseño.nombre, null, 0xFFFFFF, "italic");
    }

    function balanceTeams() {
        var spectators = room.getPlayerList().filter(p => p.team == 0 && !afkPlayers.has(p.id));
        var red = room.getPlayerList().filter(p => p.team == 1);
        var blue = room.getPlayerList().filter(p => p.team == 2);

        if (red.length <= blue.length && spectators.length > 0) {
            room.setPlayerTeam(spectators[0].id, 1);
        } else if (blue.length < red.length && spectators.length > 0) {
            room.setPlayerTeam(spectators[0].id, 2);
        }
    }

    // --- EVENTOS ---

    room.onPlayerJoin = function (player) {
        updateAdmins();
        lastActivity.set(player.id, { x: 0, y: 0, time: Date.now() });
        room.sendAnnouncement("👋 ¡Bienvenido " + player.name + "! Usa !afk para pausar.", player.id, 0x00FFCC, "bold");
    };

    room.onPlayerLeave = function (player) {
        afkPlayers.delete(player.id);
        lastActivity.delete(player.id);
        updateAdmins();
    };

    room.onPlayerChat = function (player, message) {
        message = message.toLowerCase();
        if (message === "!afk") {
            if (afkPlayers.has(player.id)) {
                afkPlayers.delete(player.id);
                room.sendChat("✅ Volviste, " + player.name);
                balanceTeams();
            } else {
                afkPlayers.add(player.id);
                room.setPlayerTeam(player.id, 0);
                room.sendChat("💤 " + player.name + " está AFK.");
            }
            return false;
        }
        if (message === "!reset" && player.admin) {
            room.stopGame();
            room.startGame();
            return false;
        }
    };

    room.onGameStart = function () {
        setRandomUniforms();
    };

    room.onPositionsReset = function () {
        room.setDiscProperties(0, { color: BALL_COLOR_NORMAL });
        isBallCharged = false;
        currentHolder = null;
    };

    room.onGameTick = function () {
        var now = Date.now();
        var ball = room.getBallPosition();
        var players = room.getPlayerList();

        // Anti-AFK
        for (let p of players) {
            if (p.team !== 0) {
                let lastPos = lastActivity.get(p.id);
                if (!lastPos || Math.hypot(p.position.x - lastPos.x, p.position.y - lastPos.y) > 2) {
                    lastActivity.set(p.id, { x: p.position.x, y: p.position.y, time: now });
                } else {
                    if (!afkPlayers.has(p.id) && (now - lastPos.time > MAX_AFK_TIME)) {
                        room.setPlayerTeam(p.id, 0);
                        room.sendAnnouncement("🚫 AFK: " + p.name + " a espectador.", null, 0xFF5555);
                    }
                }
            }
        }

        // Powershoot logic
        if (ball) {
            ballSpeed.x = ball.x - lastBallPos.x;
            ballSpeed.y = ball.y - lastBallPos.y;
            lastBallPos.x = ball.x;
            lastBallPos.y = ball.y;

            if (powershootActive) {
                let pList = players.filter(p => p.team != 0);
                let nearest = null;
                let minDist = 25;

                for (let p of pList) {
                    let dist = Math.hypot(p.position.x - ball.x, p.position.y - ball.y);
                    if (dist < minDist) { minDist = dist; nearest = p; }
                }

                if (nearest) {
                    if (currentHolder !== nearest.id) {
                        currentHolder = nearest.id;
                        holdStartTime = now;
                        isBallCharged = false;
                    } else {
                        if (now - holdStartTime >= 2000 && !isBallCharged) {
                            isBallCharged = true;
                            room.setDiscProperties(0, { color: BALL_COLOR_READY });
                            room.sendChat("🔥 ¡CARGADO! 🔥", nearest.id);
                        }
                    }
                } else {
                    if (isBallCharged) room.setDiscProperties(0, { color: BALL_COLOR_NORMAL });
                    isBallCharged = false;
                    currentHolder = null;
                }
            }
        }
    };

    room.onPlayerBallKick = function (player) {
        if (isBallCharged && player.id === currentHolder) {
            var ball = room.getBallPosition();
            var dx = ball.x - player.position.x;
            var dy = ball.y - player.position.y;
            var dist = Math.hypot(dx, dy);
            var power = 15.0;

            room.setDiscProperties(0, {
                xspeed: (dx / dist) * power,
                yspeed: (dy / dist) * power,
                color: BALL_COLOR_NORMAL
            });
            room.sendAnnouncement("🚀 ¡POWERSHOOT de " + player.name + "! 🚀", null, 0xFFD700, "bold");
            isBallCharged = false;
            currentHolder = null;
        }
    };

    room.onGameEnd = function () {
        setTimeout(() => {
            room.stopGame();
            balanceTeams();
            room.startGame();
        }, 3000);
    };

    room.onRoomLink = (link) => console.log("Sala abierta en: " + link);
});