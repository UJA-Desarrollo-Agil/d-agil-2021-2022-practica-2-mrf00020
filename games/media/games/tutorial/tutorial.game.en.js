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
	concer: new undum.SimpleSituation(
	"<p>-'Venga, de lujo, he oído un par de temas de su grupo los helter skelter y me molan, además la otra banda que toca también son bastante buenos, los exiler.' </p>\
	<p>-'Pues nos vemos a las 21:00 en la sala de conciertos, no te olvides la chupa de cuero.'</p>\
	<p>Cuelgas y buscas tus cascos en tu habitación, cuando llevas un rato escuchando música llega tu madre de la compra, la ayudas a colocar todo y al verte tan animado ella sube la caja al trastero </p>\
	<p>Te pasas el día con los cascos puestos escuchando la música de las dos bandas para aclimatar el cuerpo, antes de ir al concierto, le echas un vistazo al cartel.</p>\
	<p class = transient> <img src='media/games/tutorial/cartel.jpg' class='float_right'></p>\
	<p>Te pegas una buena ducha y <a href= 'helter'>te encaminas al concierto.</a><\p>\
	",{
	tags: ["topic"],
        optionText: "Mi colega Martin tienen un concierto hoy, ¿vamos?",
        displayOrder: 4,
	}
	),
	casa: new undum.SimpleSituation(
	"<p>-'Tío vamos a aprovechar las vacaciones de navidad que luego igual no nos vemos en unas semanas.' </p>\
	<p>-'Uff es que no me encuentro muy allá hoy, nos vemos mañana mejor si quieres.'</p>\
	<p>Cancelaste la quedada con tus amigos y te quedaste toda la tarde jugando a la consola, este es el final de esta aventura.</p>\
	",{
	tags: ["topic"],
        optionText: "Prefiero quedarme en casa hoy bro.",
        displayOrder: 5,
		heading: "Final 1: Te quedas en casa y perdiste la aventura."
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
	"<p>Coges la espada láser en tu mano y la enciendes ante ti, y conforme se enciende vienen recuerdos a tu mente de cuando jugabas con ella luchando contra tus amigos con otras espadas de juguete.\
	Haces un corte diagonal con ella al aire para probar el sonido y no suena por las pilas gastadas, decides llevártela a tu cuarto y arreglarlo por el recuerdo.\
	Luego vuelves a dejar todo colocado en el trasero y cuando te das cuenta ya es la hora de comer y la comida está lista. Pones la mesa y <a href='tarde'>comes con tu familia.</a>\
	</p>",
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
	"<p>Recoges el polvoriento sombrero y le quitas el polvo con la mano mientras lo admiras recordando las pelis de vaqueros que veías con tus abuelos y cuando fuisteis a un parque temático de vaqueros.\
	Te llevas el sombrero para limpiarlo y una vez lo limpias te lo pones y te queda bien dentro de lo que cabe y decides quedártelo en tu cuarto.\
	Luego vuelves a dejar todo colocado en el trasero y cuando te das cuenta ya es la hora de comer y la comida está lista. Pones la mesa y <a href='tarde'>comes con tu familia.</a>\
	</p>",
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
	"<p>Recoges el cinturón naranja mal recogido lo estiras y ves cómo tiene arrugas y está bastante polvoriento, te lo intentas enrollar alrededor de la cintura pero ya no te queda bien.\
	 Lavas el cinturón, lo doblas y lo dejas en tu cuarto admirándolo y recordando cuando entrenabas en el dojo hace tiempo.\
	Luego vuelves a dejar todo colocado en el trasero y cuando te das cuenta ya es la hora de comer y la comida está lista. Pones la mesa y <a href='tarde'>comes con tu familia.</a>\
	</p>",
	{
	tags: ["objetos"],
        optionText: "Eliges el cinturón de karate.",
        displayOrder: 3,
		exit: function(character, system, to) {
                system.setQuality("cinturon", character.qualities.cinturon+1);
            }
	}
	),
	
	tarde: new undum.SimpleSituation(
	"<p>Tras recoger la mesa y fregar los platos, te duchas, te vistes, recoges tus cosas y sales de casa hacia donde quedaste con tus amigos.\
	<a href='hub3'>Llegas a dónde quedastéis.</a>\
	</p>",
	),
	cinema: new undum.SimpleSituation(
	"<p class = transient><img src='media/games/tutorial/cine.jpg' class='float_right'></p>\
	<p>Entráis al cine decidís ver la película de Batman, tras esto te acercas al mostrador de comida y piensas en comprar <a class = once href='./mejora-destreza'>palomitas</a> o <a class = once href='./mejora-suerte'>nachos</a>, y de bebida <a class = once href='./mejora-carisma'>7up</a> o <a class = once href='./empeora-suerte'>cocacola.</a></p>\
	<p>Tú y tu amigo buscáis vuestras butacas y <a href='sueno'>os sentáis a disfrutar de la película.</a></p>\
	",
	{
		tags: ["parte3"],
        optionText: "Vas al cine",
        displayOrder: 1,
		canChoose: function(character, system, host) {
                return character.qualities.cine > 0;
            },
		actions: {
                'mejora-carisma': function(character, system, action) {
                    system.setQuality("carisma", character.qualities.carisma+1);
                },
				'mejora-suerte': function(character, system, action) {
                    system.setQuality("suerte", character.qualities.suerte+1);
                },
				'mejora-destreza': function(character, system, action) {
                    system.setQuality("destreza", character.qualities.destreza+1);
                },
				'empeora-suerte': function(character, system, action) {
                    system.setQuality("suerte", character.qualities.suerte-1);
                }
            }
	}
	),
	teatr: new undum.SimpleSituation(
	"<p class = transient><img src='media/games/tutorial/teatro.jpg' class='float_right'></p>\
	<p>Entráis al teatro y vais a ver Cats, tras esto te acercas al mostrador de comida y piensas en comprar <a class = once href='./mejora-destreza'>gominolas</a> o <a class = once href='./mejora-suerte'>dulces</a>, y de bebida <a class = once href='./mejora-carisma'>batido</a> o <a class = once href='./empeora-suerte'>cerveza sin.</a> </p>\
	<p>Tú y tu amigo buscáis vuestras butacas y <a href='sueno'>os sentáis a disfrutar de la obra de teatro.</a></p>\
	",
	{
		tags: ["parte3"],
        optionText: "Vas al teatro",
        displayOrder: 2,
		canChoose: function(character, system, host) {
                return character.qualities.teatro > 0;
            },
		actions: {
                'mejora-carisma': function(character, system, action) {
                    system.setQuality("carisma", character.qualities.carisma+1);
                },
				'mejora-suerte': function(character, system, action) {
                    system.setQuality("suerte", character.qualities.suerte+1);
                },
				'mejora-destreza': function(character, system, action) {
                    system.setQuality("destreza", character.qualities.destreza+1);
                },
				'empeora-suerte': function(character, system, action) {
                    system.setQuality("suerte", character.qualities.suerte-1);
                }
            }
	}
	),
	espec: new undum.SimpleSituation(
	"<p class = transient><img src='media/games/tutorial/patinaje.jpg' class='float_right'></p>\
	<p>Entráis al estadio y vais a ver el espectaculo de patinaje sobre hielo, tras esto te acercas al mostrador de comida y piensas en comprar <a class = once href='./mejora-destreza'>patatas fritas</a> y/o <a class = once href='./mejora-suerte'>chicles</a>, y de bebida <a class = once href='./mejora-carisma'>agua</a> y/o <a class = once href='./empeora-suerte'>tónica.</a> </p>\
	<p>Tú y tu amigo buscáis vuestras butacas y <a href='sueno'>os sentáis a disfrutar del espectáculo.</a></p>\
	",
	{
		tags: ["parte3"],
        optionText: "Vas al espectaculo de patinaje en el hielo",
        displayOrder: 3,
		canChoose: function(character, system, host) {
                return character.qualities.hielo > 0;
            },
		actions: {
                'mejora-carisma': function(character, system, action) {
                    system.setQuality("carisma", character.qualities.carisma+1);
                },
				'mejora-suerte': function(character, system, action) {
                    system.setQuality("suerte", character.qualities.suerte+1);
                },
				'mejora-destreza': function(character, system, action) {
                    system.setQuality("destreza", character.qualities.destreza+1);
                },
				'empeora-suerte': function(character, system, action) {
                    system.setQuality("suerte", character.qualities.suerte-1);
                }
            }
	}
	),
	sueno: new undum.SimpleSituation(
	"<p>Te sientas en tu asiento y el entrenimiento te estaba gustando hasta que empiezas a sentirte extremadamente cansado, además la luz no ayuda con tanta oscuridad, empiezas a pegar cabezadas mientras nadie te ve y acabas quedándote profundamente dormido.</p>\
	<p><a href='hub4'>Empiezas a soñar profundamente.</a></p>\
	"
	),
	guerragalaxias: new undum.SimpleSituation(
	{
		tags: ["dormido"],
        optionText: "Vas al espectaculo de patinaje en el hielo",
        displayOrder: 3,
		canChoose: function(character, system, host) {
                return character.qualities.hielo > 0;
            },
		actions: {
                'mejora-carisma': function(character, system, action) {
                    system.setQuality("carisma", character.qualities.carisma+1);
                },
				'mejora-suerte': function(character, system, action) {
                    system.setQuality("suerte", character.qualities.suerte+1);
                },
				'mejora-destreza': function(character, system, action) {
                    system.setQuality("destreza", character.qualities.destreza+1);
                },
				'empeora-suerte': function(character, system, action) {
                    system.setQuality("suerte", character.qualities.suerte-1);
                }
            }
	}
	),
	cowboy: new undum.SimpleSituation(),
	karate: new undum.SimpleSituation(),
	helter: new undum.SimpleSituation(
	"<p>Cuando llegas a la entrada de la sala de conciertos tu colega ya te está esperando, os saludáis y entráis.</p>\
	<p>Hay bastante gente que conocéis, aún no ha empezado el concierto, te acercas a la barra y te pides un <a class = once href='./mejora-destreza'>7up</a> y/o un <a class = once href='./mejora-suerte'>cocktail sin alcohol.</a>\</p>\
	<p>Te terminas la bebida y empieza el concierto de Helter Skelter, te gusta bastante el ritmo y el estilo del grupo, cuando te quieres das cuenta estás en el pogo moviendo la cabeza arriba y abajo junto a tu colega.</p>\
	<p class = transient><img src='media/games/tutorial/concierto.jpeg' class='float_left'></p>\
	<p class = transient><img src='media/games/tutorial/headbanging.gif' class='float_right'></p>\
	<p>Cuando llevas un rato en el concierto a alguien se le cae la bebida al suelo, estáis todos bailando y te resbalas con el charco. <a href='hub5'>¿Serás capaz de no caerte?</a></p>\
	",{
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
	caida: new undum.SimpleSituation(
	"<p>Cuando te quieres dar cuenta estás en el suelo, te haces daño en un codo por la caída, no es nada grave ni que requiera de atención médica, pero dejas de bailar y te enturbia un poco la noche.</p>\
		<p>Te decides irte a casa, tu colega se queda en el concierto con unos amigos mientras tú te vas a dormir.</p>\
	",
	{
		tags: ["concierto1"],
			optionText: "Te caes al suelo y te haces daño",
			displayOrder: 1,
			canChoose: function(character, system, host) {
                return character.qualities.suerte <=3;
            },
			heading: "Final 2: Te vuelves a casa dolorido y desganado, aunque te lo pasaste bien, te lo podrías haber pasado mejor."
	}
	),
	exiler: new undum.SimpleSituation(
	"<p>Tu amigo te agarra con los reflejos de un gato y la fuerza de un titán, vuelves al pogo como el que más y te lo pasas genial.</p>\
	<p>El concierto termina pero vosotros no habéis dejado de gritar otra otra otra.</p>\
	<p>En el descanso entre conciertos te acercas a la barra a pedir una <a class = once href='./mejora-destreza'>botella de agua</a> para descansar de el esfuerzo.</p>\
	<p>Una vez terminado el refrigerio, vuelves a tu lugar, frente a la tarima del concierto, te colocas junto a tu amigo y esperáis a que empiece el concierto de Exiler.</p>\
	<p class = transient><img src='media/games/tutorial/concierto2.jpg' class='float_right'></p>\
	<p>Cuando empiezas este concierto te unes como el que más a bailar y disfrutas de la música y el momento.</p>\
	<p>Pasa un rato y estás en mitad del pogo y un chaval bastante grande se cae sobre ti, tienes que actuar con determinación y fuerza. <a href='hub6'>¿Lo levantas o lo esquivas?</a></p>\
	",
	{
		tags: ["concierto1"],
			optionText: "Tienes mucha suerte y alguien te agarra",
			displayOrder: 2,
			canChoose: function(character, system, host) {
                return character.qualities.suerte >3;
            },
			actions: {
				'mejora-destreza': function(character, system, action) {
                    system.setQuality("destreza", character.qualities.destreza+1);
                }
		}
	}
	),
	empujon: new undum.SimpleSituation(
	"<p>El chaval se pega una buena caída contra el suelo aunque no se hace mucho daño, paráis un momento el concierto, él se va al baño, ve que no le ha pasado nada grave y se queda en una silla escuchando el concierto.</p>\
	<p>El concierto sigue tras ver que el chaval se encuentra bien, sigues bailando con tus amigos y cuando termina te encuentras algo cansado pero bastante alegre por haber disfrutado tanto de buena música en compañía de tus amigos.</p>\
	",
	{
		tags: ["concierto2"],
			optionText: "Sientes que no tienes tanta fuerza como para soportarlo y te apartas.",
			displayOrder: 1,
			canChoose: function(character, system, host) {
                return character.qualities.destreza <=4;
            },
			heading: "Final 3: Te vuelves a casa satisfecho, te lo has pasado bastante bien y esta noche quedará para el recuerdo, aunque tal vez podría haber sido algo mejor."
	}
	
	
	),
	despues: new undum.SimpleSituation(
	"<p>Un colega tuyo te ayuda y al final el chaval no se cae ni se hace nada, se alegra mucho y te da un abrazo por la ayuda, tú sonríes y los dos seguís bailando como si nada hubiera pasado.</p>\
	<p>Al terminar el concierto sales fuera a que te dé el aire porque hace mucha calor dentro y estas sudando, el chaval al que salvaste se te acerca te da la mano y os quedáis un rato hablando.</p>\
	<p>Pasa un rato y empiezan a salir los integrantes de ambas bandas, tú y tus amigos os tomáis una foto con ellos y habláis un rato, te lo pasas genial y vuelves a casa habíendotelo pasado mejor que en mucho tiempo. </p>\
	",
	{
		tags: ["concierto2"],
			optionText: "Sientes que eres capaz de sujetarlo, lo agarras como puedes.",
			displayOrder: 2,
			canChoose: function(character, system, host) {
                return character.qualities.destreza >4;
            },
			heading: "Final 4, Good Ending: Te vuelves a casa con una foto de cada uno de los grupos, esta noche ha sido inolvidable, te prometes a ti mismo ir de concierto siempre que puedas."
	}
	)
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
