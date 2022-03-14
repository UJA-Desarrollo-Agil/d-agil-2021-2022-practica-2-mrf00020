// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */


/* A variable that changes the options fade out speed. */


/* A variable that changes the slide up speed after clicking on an
 * option. */


jQuery.fx.off=false

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
	start: new undum.SimpleSituation(
		"<h1></h1>\
        <p></p>",
        {
            enter: function(character, system, from) {
                system.doLink('inicio');
            }

        }
	),
    inicio: new undum.SimpleSituation(
        "<p><h1>26 de Diciembre, Vacaciones de Navidad</h1></p>\
		<p class = transient><img src='media/games/tutorial/invierno.jpg' class='float_right'></p>\
        <p> Despiertas en tu cama el día 26 de Diciembre, ha pasado ya el día de navidad, te llamas Gus, tienes 22 años.\
        Te levantas de la cama y buscas por tu casa, solo está tu perro Puck, <a href='./mejora-carisma'>puedes jugar con él.</a></p> \
        <p><a href='desayuno'> O puedes irte a  desayunar</a></p>",
		{
			actions: {
                'mejora-carisma': function(character, system, action) {
                    system.setQuality("carisma", character.qualities.carisma+1);
                }
            }
			
		}
    ),
	desayuno: new undum.SimpleSituation(
	"<p>Decides irte a desayunar y te llenas un tazón de leche.\
	Tienes 2 tipos de cereales distintos, <a href='./mejora-suerte'>Chocopocks</a>\
	Y <a href='./mejora-destreza'>Chocofleks</a>, cada uno con un sabor distinto pero a la vez parecido.\
	Como hay bastantes puedes echarte lo que quieras de cada uno</p>\
	<p>Cuando estás a punto de terminarte el desayuno llaman al teléfono de tu casa. <a href='llamada'>Decides contestar.</a></p>\
	",
		{
			actions: {
                'mejora-suerte': function(character, system, action) {
                    system.setQuality("suerte", character.qualities.suerte+1);
                },
				'mejora-destreza': function(character, system, action) {
                    system.setQuality("destreza", character.qualities.destreza+1);
                }
            }
			
		}
	),
	llamada: new undum.SimpleSituation(
	"<p>-'¿Quién es?' </p>\
	<p>-'Hey bro, soy Jc, te apetece hacer algo esta tarde? Tengo ganas de cine o algo así'</p>\
	\
	<p>Te lo piensas por un momento y <a href='hub'>contestas:</a></p>\
	",
	),
	
	cine: new undum.SimpleSituation(
	"<p>-'Venga me apunto, que la nueva de batman tiene buena pinta.' </p>\
	<p>-'Vale, a las 18:30 en el centro comercial.'</p>\
	<p>-'Perfecto, allí nos veremos.'</p>\
	<p>	Cuelgas el teléfono y te pones a jugar un poco a la consola, a la media hora de estar jugando llega tu madre con la compra\
	Cuando llega la ayudas a subir y guardar la compra y te pide que subas al trastero una caja algo pesada. <a href= 'trastero'>Subes al trastero a dejar la caja</a></p>\
	",
	{
	tags: ["topic"],
        optionText: "Venga vale, vamos al cine.",
        displayOrder: 1,
		exit: function(character, system, to) {
                system.setQuality("cine", character.qualities.cine+1);
            }
	}
	),
	teatro: new undum.SimpleSituation(
	"<p>-'Venga me vale el teatro aunque no es algo que me suela terminar de gustar.' </p>\
	<p>-'Vale, a las 17:00 en el teatro.'</p>\
	<p>-'Perfecto, allí nos veremos.'</p>\
	<p>	Cuelgas el teléfono y te pones a jugar un poco a la consola, a la media hora de estar jugando llega tu madre con la compra\
	Cuando llega la ayudas a subir y guardar la compra y te pide que subas al trastero una caja algo pesada. <a href= 'trastero'>Subes al trastero a dejar la caja</a></p>\
	",
	{
	tags: ["topic"],
        optionText: "¿Qué te parece ir al teatro a ver la obra que está en cartelera?",
        displayOrder: 2,
		exit: function(character, system, to) {
                system.setQuality("teatro", character.qualities.teatro+1);
            }
	}
	),
	espectaculohielo: new undum.SimpleSituation(
	"<p>-'Vale, siempre me han dado curiosidad ese tipo de cosas.' </p>\
	<p>-'Vale, a las 19:00 al lado del ayuntamiento.'</p>\
	<p>-'Perfecto, allí nos veremos.'</p>\
	<p>	Cuelgas el teléfono y te pones a jugar un poco a la consola, a la media hora de estar jugando llega tu madre con la compra\
	Cuando llega la ayudas a subir y guardar la compra y te pide que subas al trastero una caja algo pesada. <a href= 'trastero'>Subes al trastero a dejar la caja</a></p>\
	",
	{
	tags: ["topic"],
        optionText: "He oído que hay un espectaculo de patinaje sobre el hielo ¿Te apetece?",
        displayOrder: 3,
		exit: function(character, system, to) {
                system.setQuality("hielo", character.qualities.hielo+1);
            }
	}
	),
	casa: new undum.SimpleSituation(
	"<p>-'Tío vamos a aprovechar las vacaciones de navidad que luego igual no nos vemos en unas semanas.' </p>\
	<p>-'Uff es que no me encuentro muy allá hoy, nos vemos mañana mejor si quieres.'</p>\
	<p>Cancelaste la quedada con tus amigos y te quedaste toda la tarde jugando a la consola, este es el final de esta aventura.</p>\
	",{
	tags: ["topic"],
        optionText: "Prefiero quedarme en casa hoy bro",
        displayOrder: 4,
	}
	),
	trastero: new undum.SimpleSituation(
	"<p>Al llegar al trastero ves que vas a tener que revolver las cosas para poder dejar la caja donde quiere tu madre.\
	Te pones a remover las cosas para poder dejar la caja en su sitio y cuando consigues dejarla en su lugar ves una caja abierta con varios objetos dentro.</p>\
	<p>La espada laser te trae recuerdos de cuando viste las películas de la guerra de las galaxias con tu padre.</p>\
	<p>El sombrero de vaquero te trae recuerdos de cuando fuiste al desierto de tabernas con tu abuelo y montaste a caballo con él.</p>\
	<p>El cinturón de karate te recuerda a cuando estuviste en un dojo dos años y fuiste a un torneo.</p>\
	<p class = transient><img src='media/games/tutorial/espada.jpg' class='float_right'></p>\
	<p class = transient><img src='media/games/tutorial/sombrero.jpg' class='float_left'></p>\
	<p class = transient><img src='media/games/tutorial/cinturon.jpg' class='float_right'></p>\
	<p><a href=hub2>Dudas entre cual de ellos antes de decidir.</a>\
	</p>\
	"
	),
	espada: new undum.SimpleSituation(
	"<p>Escoges la espada láser.</p>",
	{
	tags: ["objetos"],
        optionText: "Eliges la espada láser.",
        displayOrder: 1,
		exit: function(character, system, to) {
                system.setQuality("espada", character.qualities.espada+1);
            }
	}
	),
	sombrero: new undum.SimpleSituation(
	"<p>Escoges el sombrero vaquero.</p>",
	{
	tags: ["objetos"],
        optionText: "Eliges el sombrero vaquero.",
        displayOrder: 2,
		exit: function(character, system, to) {
                system.setQuality("sombrero", character.qualities.sombrero+1);
            }
	}
	),
	cinturon: new undum.SimpleSituation(
	"<p>Escoges el cinturón naranja de karate.</p>",
	{
	tags: ["objetos"],
        optionText: "Eliges el cinturón de karate.",
        displayOrder: 3,
		exit: function(character, system, to) {
                system.setQuality("cinturon", character.qualities.cinturon+1);
            }
	}
	),
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    destreza: new undum.IntegerQuality(
        "Destreza", {priority:"0001", group:'stats'}
    ),
    carisma: new undum.NumericQuality(
        "Carisma", {priority:"0002", group:'stats'}
    ),
    suerte: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Destreza, Carisma and Suerte are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing suerte are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Suerte</span>",
        {priority:"0003", group:'stats'}
    ),
	/*cine: new undum.OnOffQuality(
        "cine", {priority:"0004", group:'stats', onDisplay:"&#10003;"}
    )*/
	cine: new undum.NonZeroIntegerQuality(
        "Cine", {priority:"0001", group:'quedada'}
    ),
	teatro:new undum.NonZeroIntegerQuality(
        "Teatro", {priority:"0002", group:'quedada'}
    ),
	hielo:new undum.NonZeroIntegerQuality(
        "Espectaculo en el hielo", {priority:"0003", group:'quedada'}
    ),
	espada:new undum.NonZeroIntegerQuality(
        "Espada láser", {priority:"0001", group:'sueno'}
    ),
	sombrero:new undum.NonZeroIntegerQuality(
        "Sombrero de vaquero", {priority:"0002", group:'sueno'}
    ),
	cinturon:new undum.NonZeroIntegerQuality(
        "Cinturón de karate", {priority:"0003", group:'sueno'}
    )
	
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup('Stats', {priority:"0001"}),
	quedada: new undum.QualityGroup('Quedada',{priority:"0002"}),
	sueno: new undum.QualityGroup('Sueño',{priority:"0003"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.destreza = 0;
    character.qualities.carisma = 0;
    character.qualities.suerte = 0;
	character.qualities.cine=0;
	character.qualities.hielo=0;
	character.qualities.teatro=0;
	character.qualities.espada=0;
	character.qualities.sombrero=0;
	character.qualities.cinturon=0;
	//system.OnOffQuality("cine",false);
	
    system.setCharacterText("<p></p>");
};
