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
	), //ESCENA 0
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
	), //DECISION ESCENA 0
	trastero: new undum.SimpleSituation(
	"<p>Al llegar al trastero ves que vas a tener que revolver las cosas para poder dejar la caja donde quiere tu madre.\
	Te pones a remover las cosas para poder dejar la caja en su sitio y cuando consigues dejarla en su lugar ves una caja abierta con varios objetos dentro.</p>\
	<p>La espada laser te trae recuerdos de cuando viste las películas de la guerra de las galaxias con tu padre.</p>\
	<p>El sombrero de vaquero te trae recuerdos de cuando fuiste al desierto de tabernas con tu abuelo y montaste a caballo con él.</p>\
	<p class = transient><img src='media/games/tutorial/espada.jpg' class='float_right'></p>\
	<p class = transient><img src='media/games/tutorial/sombrero.jpg' class='float_left'></p>\
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
	<p class = transient><img src='media/games/tutorial/cansancio.jpg' class='float_right'></p>\
	<p><a href='hub4'>Empiezas a soñar profundamente.</a></p>\
	"
	), //INICIOS ESCENA 1
	guerragalaxias: new undum.SimpleSituation(
	"<p> Te despiertas por el movimiento brusco de la nave en la que estás embarcado, por el altavoz suena una voz.</p>\
	<p>- Luke aquí Ban Ned, acabamos de salir del hiperespacio, detecto en el radar varias naves cercanas, ve al puesto de la torreta, creo que son imperiales o piratas.</p>\
	<p>Tardas un poco en recomponerte y levantarte cuando te das cuenta que eres Luke Skywalker y que te hablaba a ti, registras tu cinturón y ves la misma espada láser que tenías en tu trastero.</p>\
	<p>Te diriges al puesto de la torreta casi que por intuición, te sientas en los mandos y te pones los cascos para la comunicación con el piloto. Al poco tu compañero dice:</p>\
	<p>- Confirmado, son piratas, prepárate para el combate, quieren asaltarnos.</p>\
	<p>- Oído Ban Ned, aquí Luke, en cuanto los tenga a tiro disparo. </p>\
	<p>En cuanto terminas de hablar te pones a activar la torreta y apuntarla hacia el exterior.</p>\
	<p class = transient><img src='media/games/tutorial/nave.jpg' class='float_right'></p>\
	<p>Los piratas empieza a atacar la nave y saltan las alarmas de daños por toda la nave. Ban Ned intenta esquivar como puede pero son demasiados. Por tu parte, te dispones a disparar. <a href='hub7'>¿Usas el ordenador de abordo o usas tu intuición y la fuerza?</a></p>\
	",
	{
		tags: ["dormido"],
        optionText: "Elegí la espada láser.",
        displayOrder: 1,
		canChoose: function(character, system, host) {
                return character.qualities.espada > 0;
            },
			//heading: "Escena 1"
	}
	),
	cowboy: new undum.SimpleSituation(
	"<p> Te despiertas por el chirrido de una puerta cercana, abres los ojos y estas sentado en una mecedora con tu sombrero sobre los ojos para poder dormir.\
	Te recolocas un poco, te levantas y ves que estás en una pequeña habitación con una mecedora y una cama, te miras en un pequeño espejo en la pared.</p>\
	<p> Tienes una placa de Sheriff, un bigote bien cuidado y una barba incipiente, tu sombrero y un par de pistolas en el cinturón. Al poco de escuchar el chirrido escuchas al otro lado de la puerta:</p>\
	<p>- Jefe Morgan ya he vuelto, el problema con los Mcalister y esos indios Lakota sigue en pie.</p>\
	<p>Sales de la habitación y recuerdas sobre ese problema entre granjeros y nativos.\
	Los Lakotas tienen el derecho legal sobre esas tierras garantizado por el gobierno federal y los Mcalister quieren parte de sus campos para cultivar aunque sea ilegalmente.</p>\
	<p>- Bill, Bill, Bill creía que con azuzarles al gobierno federal calmarías a esos granjeros, pero veo que esos granjeros son más persistentes de la cuenta, tendremos que ir a darles una visita.</p>\
	<p>- Bueno, espero que no tengamos que volver más veces, hace una semana que están apunto de dispararse con los nativos.</p>\
	<p>Te montas en el caballo y <a href='reunion'>te diriges al territorio en disputa</a> junto a tu ayudante.</p>\
	<p class = transient><img src='media/games/tutorial/acaballo.jpg' class='float_right'></p>\
	",
	{
		tags: ["dormido"],
        optionText: "Elegí el sombrero de vaquero.",
        displayOrder: 2,
		canChoose: function(character, system, host) {
                return character.qualities.sombrero > 0;
            },
			//heading: "Escena 1"
	}
	),
	//ESCENAS 0 CONCIERTO
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
			optionText: "Te caes al suelo y te haces daño.",
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
			optionText: "Tienes mucha suerte y alguien te agarra. Necesitas Suerte 4.",
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
			optionText: "Sientes que eres capaz de sujetarlo, lo agarras como puedes. Necesitas destreza 5.",
			displayOrder: 2,
			canChoose: function(character, system, host) {
                return character.qualities.destreza >4;
            },
			heading: "Final 4, Good Ending: Te vuelves a casa con una foto de cada uno de los grupos, esta noche ha sido inolvidable, te prometes a ti mismo ir de concierto siempre que puedas."
	}
	), //ESCENA 1 SW
	fuerza: new undum.SimpleSituation(
	"<p>Al usar la fuerza para poder sentir mejor la presencia de las naves aciertas a casi todas las naves con la torreta y solo un par de naves escapan sin ser destruídas.</p>\
	<p>Aún así, notas como la nave ha recibido muchos disparos y que algo va mal. A los pocos segundos de parar de disparar Ban Ned te habla por el comunicador:</p>\
	<p>- Luke, aquí Ban Ned, muy buenos disparos, aunque la nave está hecha chatarra por todos esos piratas, vamos a tener que hacer un aterrizaje de emergencia en el planeta más cercano, esto se puede despresurizar en cualquier momento.</p>\
	<p>- Oído Ban Ned, yo estoy bien, haz lo que puedas compañero.</p>\
	<p>La nave da un giro hacia un planeta muy cercano, desde lejos se nota que es un planeta arenoso.</p>\
	<p class = transient><img src='media/games/tutorial/planeta.png' class='float_right'></p>\
	<p>La nave cada vez va más rápido hacia el planeta y al entrar en la atmósfera se ve como entró en una tormenta de arena.\
	La visibilidad es nula pero Ban Ned intenta mantener la navelo más horizontal posible y reducir la velocidad para poder aterrizar de la forma más leve posible.\
	<a href='aterrizaje'>Te pones los enganches del cinturón del asiento como puedes.</a></p>\
	",
		{
		tags: ["nave"],
        optionText: "Elegí usar mi intuición y la fuerza para destruir las naves. Necesitas Suerte 4.",
        displayOrder: 1,
		canChoose: function(character, system, host) {
                return character.qualities.suerte > 3;
            },
		}
	),
	ordenador: new undum.SimpleSituation(
	"<p>Al usar el ordenador de abordo para disparar a las naves no aciertas tanto como para asustarlas o destruirlas a todas. Aún así, Ban Ned, hace una treta para desviarse entre varios asteroides y perderlas de vista.</p>\
	<p>Notas como la nave ha recibido muchos disparos y que algo va mal. A los pocos segundos Ban Ned te habla por el comunicador:</p>\
	<p>- Luke, aquí Ban Ned, los hemos despistado, aunque la nave está hecha chatarra por todos esos piratas, vamos a tener que hacer un aterrizaje de emergencia en el planeta más cercano, esto se puede despresurizar en cualquier momento.</p>\
	<p>- Oído Ban Ned, yo estoy bien, haz lo que puedas compañero.</p>\
	<p>La nave da un giro hacia un planeta muy cercano, desde lejos se nota que es un planeta arenoso.</p>\
	<p class = transient><img src='media/games/tutorial/planeta.png' class='float_right'></p>\
	<p>La nave cada vez va más rápido hacia el planeta y al entrar en la atmósfera se ve como entró en una tormenta de arena.\
	La visibilidad es nula pero Ban Ned intenta mantener la navelo más horizontal posible y reducir la velocidad para poder aterrizar de la forma más leve posible.\
	<a href='aterrizaje'>Te pones los enganches del cinturón del asiento como puedes.</a></p>\
	",
		{
		tags: ["nave"],
        optionText: "Elegí usar el ordenador de abordo para destruir las naves.",
        displayOrder: 2,
		canChoose: function(character, system, host) {
                return character.qualities.suerte <= 3;
            },
		}
	),
	aterrizaje: new undum.SimpleSituation(
	"<p>Notas unas turbulencias enormes hasta que finalmente la nave se estampa contra la arena, gracias al asiento de la cabina que te sujeta no sales volando aunque notas la presión con el choque.\
	Sales de la cabina como puedes y escuchas a Ban Ned gritar:</p>\
	<p>- ¡¿Luke estás bien?! ¡¿Sigues vivo?!</p>\
	<p>- Sí, estoy bien. ¿Y tú? Contestas.</p>\
	<p>- Voy algo cojo pero vivo.</p>\
	<p>Vas a donde está Ban Ned y ves como cojea con dolor. La nave mientras se va hundiendo en la arena.Coges a Ban Ned como puedes del hombro y salís de la nave juntos.\
	Vais a tientas hasta una caverna cercana donde al fin podéis hablar con más tranquilidad.\
	Al poco de entrar, cierras la caverna con una roca para que no entre más arena aún.</p>\
	<p>En cuanto la tormenta de arena deja de escucharse tan fuertemente Ban ned enciende una bengala y te dice:</p>\
	<p>- Estoy bien, solo voy algo cojo, he dejado una baliza de emergencia activada para que vengan a rescatarnos, espero que haya podido llegarles el mensaje que envié antes de entrar en la atmósfera del planeta.</p>\
	<p>- Eso espero yo también, no me gustaría quedarme aquí mucho tiempo ni mucho menos morir aquí.</p>\
	<p>En cuanto terminas de hablar se escuchan extraños ruidos al final de la cueva, enciendes el sable láser para defenderte aunque nada te ataca. Ban Ned por su parte saca un blaster de su cinturón.</p>\
	<p>- Ban Ned, quédate aquí, yo iré a enfrentar a lo que sea eso, no quiero que te ataque a ti y llegar tarde a defenderte.</p>\
	<p>- Cómo quieras Luke, si vienen a rescatarnos gritaré y espero que el eco ayude, aunque no sé cuándo vendrán.</p> \
	<p>Te diriges hacia el lugar de donde vienen los ruidos con el sable láser encendido y notas una presencia del lado oscuro, algo familiar pero a la vez extraño.\
	Finalmente escuchas el sonido de un respirador bastante conocido en la galaxia. Vader, el asesino de tu maestro Obi wan. Aunque ¿cómo es posible que él esté aquí? ¿Acaso sabía dónde ibas a caer con la nave?\</p>\
	<p>Imposible, tiene que ser alguna proyección o algo similar. Conforme más te acercas más se escucha el respirador de el cyborg oscuro.\
	 Aunque solo se ve la luz de tu sable azul hasta que escuchas del fondo de la caverna un sable encenderse.</p>\
	 <p class = transient><img src='media/games/tutorial/vader.gif' class='float_right'></p>\
	 <p>Miras hacia donde viene el sonido y lo ves en pié con el sable encendido señalándote.</p>\
	 <p>- Vaya vaya, el piloto que destruyó la estrella de la muerte, al fin tendré mi venganza por esa jugarreta y acabaré contigo</p>\
	 <p>- Tú mataste a Obi wan y a mi padre, no voy a dejar que hagas lo mismo conmigo.</p>\
	 <p>- He matado a tantos padres hasta ahora que no importa ya quién fuera, solo sé que tú vas a ser el siguiente</p>\
	 <p>Vader se lanza hacia ti lanzando un espadazo horizontal que esquivas echándote hacia atrás, empezáis a luchar aunque notas como no es una presencia real, si no algo extraño, como una pesadilla o una proyección.</p>\
	 <p class = transient><img src='media/games/tutorial/luchavader.gif' class='float_right'></p>\
	 <p> La lucha está bastante igualada hasta que ves la oportunidad de atacarle en una apertura en sus movimientos. <a href='hub8'>¿Con qué movimiento tratas de atacarle?</a></p>\
	",
	),
	vertical: new undum.SimpleSituation(
	"<p>Lleno de tranquilidad y determinación lanzas un corte vertical contra vader que se ve entre tu espada y la pared y recibe de lleno el corte.\
	Esperabas que tu enemigo cayera ante ti pero solamente se desvaneció como la sombra que era.</p>\
	<p>A los segundos de desvanecerse tu enemigo notas como el aura de la cueva cambia totalmente y sientes que has liberado ese lugar de un mal del lado oscuro.\
	Vas hacia la salida guiado por tu intuición y la fuerza.\
	Llegas donde está Ban Ned quien de primeras te apunta con la pistola pero al reconocerte notas su alivio.</p>\
	<p>- Temía que te hubiera pasado algo, se oía un gran combate.</p>\
	<p>- Así era, aunque gané, espero que nos recojan pronto.</p>\
	<p>Te recuestas a su lado y él saca una tableta de chocolate que compartís. Al poco rato se la tormenta amaina y cesa el ruido, apartas la piedra de la entrada y ves la nave estrellada a los lejos.\
	Y a los segundos a lo lejos una nave acercarse hacia vuestra nave.\
	Esperas lo peor pero notas que es una nave de los Rebeldes que vienen a rescataros.</p>\
	<p>Sales afuera y haces señales, tu compañero sale tras de ti, os subís a la nave. Al poco de sentarte a descansar te duermes y <a href='susto'>despiertas otra vez.</a> </p>\
	",
	{
		tags: ["espadazo"],
        optionText: "Elegí usar un corte en vertical. Necesitas destreza 4.",
        displayOrder: 1,
		canChoose: function(character, system, host) {
                return character.qualities.destreza > 3;
            },
			exit: function(character, system, to) {
                system.setQuality("victoria", character.qualities.victoria+1);
            }
		}
	),
	horizontal: new undum.SimpleSituation(
	"<p>Llevado por tu ira y deseos de venganza lanzas un corte horizontal contra vader que él prevé y te contraataca antes de que puedas desviarlo o esquivarlo.\
	El golpe te da y te quedas en shock, todo se vuelve negro y <a href='susto'>despiertas otra vez.</a></p>",
		{
		tags: ["espadazo"],
        optionText: "Elegí usar un corte en horizontal.",
        displayOrder: 2,
		canChoose: function(character, system, host) {
                return character.qualities.destreza <= 3;
            },
		}
	),
	//ESCENA 1 COWBOY
	reunion: new undum.SimpleSituation(
	"<p>Llegas al terreno y ves a los indios y granjeros insultándose en un círculo con caras de pocos amigos. Mandas a tu ayudante a tranquilizar a los nativos mientras tú haces lo propio con los Mcalister. Te diriges a los hermanos mayores de la familia que al verte se dirigen hacia ti.</p>\
	<p>- Saludos Shean y Lucian Mcalister, nos conocemos desde hace más de 15 años cuando vine aquí tras la guerra como ayudante del sheriff, creo que ya hemos tenido más que suficientes años juntos como para tener respeto mutuamente. Ya sabéis a qué vengo.</p>\
	<p>- Sheriff Morgan, no vamos a dejar que esos indios se queden con las tierras de nuestro bisabuelo, por mucho que él renunciase a ellas hace 50 años, nosotros no lo haremos. Llevamos aquí ya varias generaciones y necesitamos de esas tierras, lo sabes.</p>\
	<p>- Por más que queráis tener esas tierras, a nivel federal les pertenecen a los Lakota, le fueron requisadas a vuestro abuelo a cambio de una cuantiosa suma con la que compró otras tierras, lo sabéis tan bien como yo.</p>\
	<p>- Aún así, las conseguiremos sea por la justicia terrenal o por la providencia de dios con nuestras armas. Esos indios son paganos. No merecen esas tierras.</p>\
	<p>- Por más que creáis eso, esas tierras les pertenecen. Si tratáis de luchar en los tribunales el gobierno les dará la razón y si les atacáis tendré que llamar a instancias superiores y seréis bandidos en vuestra propia tierra</p>\
	<p><a href='hub9'>¿Convencerán tus argumentos a los granjeros y podrás parar el conflicto?</a></p>\
	",
	),
	
	positivo: new undum.SimpleSituation(
	"<p>Los Mcalister se lo piensan un rato pero acaban cediendo al ver que están en una encrucijada que les podría costar bastante si se chocan contra el gobierno.</p>\
	<p>Vas con tu compañero y tranquilizáis a los Lakota, estos te creen pues te ven como un hombre de honor y alguien que cumple con la ley y con su palabra.\
	Tú y tu ayudante volvéis al poblado para encontrar que están asaltando el banco.</p>\
	<p class = transient><img src='media/games/tutorial/forajido.jpg' class='float_right'></p>\
	<p>Son una banda de forajidos de otro estado llamados Zorros del desierto y tienen de rehén al recepcionista del banco y han herido al guardia.</p>\
	<p>Son bastantes pero una parte de los habitantes del pueblo está a la ofensiva, el pueblo está apunto de convertirse en una batalla campal.</p>\
	<p>Su jefe Alexander el Rojo es conocido por hacer asaltos limpios sin matar a nadie y escapando a toda velocidad aunque parece que esta vez se le ha truncado la situación.</p>\
	<p>Cuando llegas al banco tratas de calmar la situación y hablar con el jefe de la banda.</p>\
	<p>- Aquí el jefe Morgan, entregaos, tenéis a todo el pueblo arma en mano, no va a ser algo limpio, aún estáis a tiempo de salir con vida de esta.</p>\
	<p>- Jefe Morgan, somos rápidos y buenos disparando, no pienso dejar que me atrapen sin al menos dar la cara, sé que no me ahorcarían pero iría preso bastante tiempo y ya estuve una vez en la cárcel, no pienso volver ahí.</p>\
	<p>- Te ofrezco un trato Alexander, un duelo, tú contra mí, si te gano te escapas con tus compañeros, si no, os entregaréis, depondréis las armas y yo no os trataré severamente.\
	Pondré en mi informe que os habéis entregado voluntariamente y que dado que el guardia del banco sigue vivo no os condenarán a perpetua ni a muerte.</p>\
	<p>Se oyen discusiones dentro del banco hasta que finalmente Alexander sale con dos pistolas en el cinturón dispuesto al duelo.</p>\
	<p>- Aceptamos el desafío Sheriff, espero que tanto tú como tu pueblo cumpláis con lo dicho y nos ahorremos la carnicería.</p>\
	<p>- Que así sea Rojo, Bill, cuenta hasta tres y no te entrometas, si este es mi final que así sea por mis vecinos y amigos.</p>\
	<p>Bill tiembla de rabia por la situación pero empieza a contar, mientras te llevas la mano a la pistola derecha del cinturón, a la vez Rojo hace lo mismo.</p>\
	<p>1</p>\
	<p>2</p>\
	<p>Antes de que llegue a 3 <a href='hub10'>disparas al forajido.</a></p>\
	",
	{
		tags: ["granjero"],
        optionText: "Tus argumentos convencen a los granjeros. Necesitas Carisma 4.",
        displayOrder: 1,
		canChoose: function(character, system, host) {
                return character.qualities.carisma > 3;
            },
		
	}
	),
	
	negativo: new undum.SimpleSituation(
	"<p>Los Mcalister se enfadan porque creen que los tomas por débiles, juran que acabarán con esos paganos y se marchan indignados.</p>\
	<p>Tú vas con tu compañero a tranquilizar a los Lakota pero estos al ver el resultado de las negociaciones prometen defenderse y desenterrar el hacha de guerra.\
	Ya perdieron mucha gente y tierras en el pasado, no permitiran que les vuelva a pasar sea como sea. Esto te hace perder un poco la fe en la diplomacia y ves que necesitarás ayuda federal.\
	Tú y tu ayudante volvéis al poblado para encontrar que están asaltando el banco.</p>\
	<p class = transient><img src='media/games/tutorial/forajido.jpg' class='float_right'></p>\
	<p>Son una banda de forajidos de otro estado llamados Zorros del desierto y tienen de rehén al recepcionista del banco y han herido al guardia.</p>\
	<p>Son bastantes pero una parte de los habitantes del pueblo está a la ofensiva, el pueblo está apunto de convertirse en una batalla campal.</p>\
	<p>Su jefe Alexander el Rojo es conocido por hacer asaltos limpios sin matar a nadie y escapando a toda velocidad aunque parece que esta vez se le ha truncado la situación.</p>\
	<p>Cuando llegas al banco tratas de calmar la situación y hablar con el jefe de la banda.</p>\
	<p>- Aquí el jefe Morgan, entregaos, tenéis a todo el pueblo arma en mano, no va a ser algo limpio, aún estáis a tiempo de salir con vida de esta.</p>\
	<p>- Jefe Morgan, somos rápidos y buenos disparando, no pienso dejar que me atrapen sin al menos dar la cara, sé que no me ahorcarían pero iría preso bastante tiempo y ya estuve una vez en la cárcel, no pienso volver ahí.</p>\
	<p>- Te ofrezco un trato Alexander, un duelo, tú contra mí, si te gano te escapas con tus compañeros, si no, os entregaréis, depondréis las armas y yo no os trataré severamente.\
	Pondré en mi informe que os habéis entregado voluntariamente y que dado que el guardia del banco sigue vivo no os condenarán a perpetua ni a muerte.</p>\
	<p>Se oyen discusiones dentro del banco hasta que finalmente Alexander sale con su pistola en el cinturón dispuesto al duelo.</p>\
	<p>- Aceptamos el desafío Sheriff, espero que tanto tú como tu pueblo cumpláis con lo dicho y nos ahorremos la carnicería.</p>\
	<p>- Que así sea Rojo, Bill, cuenta hasta tres y no te entrometas, si este es mi final que así sea por mis vecinos y amigos.</p>\
	<p>Bill tiembla de rabia por la situación pero empieza a contar, mientras te llevas la mano a la pistola derecha del cinturón, a la vez Rojo hace lo mismo.</p>\
	<p>1</p>\
	<p>2</p>\
	<p>Antes de que llegue a 3 <a href='hub10'>disparas al forajido.</a></p>\
	",
	{
		tags: ["granjero"],
        optionText: "Tus argumentos no convencen a los granjeros.",
        displayOrder: 2,
		canChoose: function(character, system, host) {
                return character.qualities.carisma <= 3;
            },
		
	}
	),
	pecho: new undum.SimpleSituation(
	"<p>Tu disparo le impacta en el pecho pero se oye un sonido metálico, todo era un truco, tenía una plancha metálica en el pecho para soportar el duelo y al poco él te dispara a ti antes de que puedas volver a dispararle.</p>\
	<p>Su disparo te impacta y antes de que puedas reaccionar todo se funde a negro sin dolor alguno, <a href='susto'>despiertas otra vez.</a></p>\
	",
	{	
		tags: ["duelo"],
        optionText: "Le disparas al pecho al forajido.",
        displayOrder: 1,
		canChoose: function(character, system, host) {
                return character.qualities.suerte <= 3;
            },	
	}
	),
	mano: new undum.SimpleSituation(
	"<p>Tu disparo le impacta en la mano con la que cogía su revolver, su revolver vuela un poco más lejos y le apuntas con la pistola. Él rápidamente con un juego de manos saca un cuchillo de su chaqueta y te lo lanza, impactándote en el brazo.</p>\
	<p>Simultáneamente tú le vuelves a disparar al ver que se mueve, dándole en una pierna para terminar de desarmarlo.</p>\
	<p>Rojo acaba en el suelo herido y sus compañeros al verse descabezados dejan las armas y se entregan.\
	Tus vecinos te llevan al médico del pueblo mientras tu ayudante encierra a los forajidos en las celdas y se lleva a buen recaudo las armas.</p>\
	<p>El médico os da unos analgésicos tanto a ti como a Rojo mientras os va tratando a cada uno. Las pastillas te hacen efecto en poco rato, te quedas dormido y <a href='susto'>despiertas otra vez.</a></p>\
	",
	{
		tags: ["duelo"],
        optionText: "Le disparas al forajido a la mano. Necesitas Suerte 4.",
        displayOrder: 2,
		canChoose: function(character, system, host) {
                return character.qualities.suerte > 3;
            },
			exit: function(character, system, to) {
                system.setQuality("victoria", character.qualities.victoria+1);
            },
	}
	),
	
	//Escena 2
	susto: new undum.SimpleSituation(
	"<p>Te despiertas sobresaltado por el extraño sueño, intentas disfrutar de la quedada aunque no puedes del todo.\
	En cuanto termina el evento te vas para casa con alguna excusa y te sientes bastante apesadumbrado. Te tumbas en la cama y <a href='hub11'>le das vueltas a lo que ha ocurrido.</a></p>",
	{
		heading: "Escena 2."
	}
	),
	
	finalbcowboy: new undum.SimpleSituation(
	"<p>Te decides a disfrutar otra vez de los westerns y rememorar recuerdos que tenías con tus abuelos de la forma más sana y compartirlos con tus amigos, volviéndolo un hobby para ti.</p>",
	{
		tags: ["finales"],
        optionText: "El sueño del oeste te trae muy buenos recuerdos.",
        displayOrder: 2,
		canChoose: function(character, system, host) {
                return (character.qualities.sombrero > 0&& character.qualities.victoria >0);
            },
			heading: "Final 6 Good Ending:"
		
	}
	),
	finalmcowboy: new undum.SimpleSituation(
	"<p>Aunque te ha gustado ese ambiente del western no te termina de gustar, lo dejas a un lado para centrarte en otros hobbys aunque siempre tendrá un bonito lugar en tus recuerdos.</p>",
	{
		tags: ["finales"],
        optionText: "El sueño del oeste te trae recuerdos agridulces.",
        displayOrder: 1,
		canChoose: function(character, system, host) {
                return (character.qualities.sombrero > 0&& character.qualities.victoria <=0);
            },
			heading: "Final 5:"
		
	}
	),
	finalbsw: new undum.SimpleSituation(
	"<p>Te ha gustado tanto que te decides a volver a verte las pelis y explorar en el universo expandido, además de compartirlo con amigos y volver a ver las películas con tus padres. </p>",
	{
		tags: ["finales"],
        optionText: "El sueño sobre Star wars te trae buenos recuerdos.",
        displayOrder: 4,
		canChoose: function(character, system, host) {
                return (character.qualities.espada > 0&& character.qualities.victoria >0);
            },
			heading: "Final 8 Good Ending:"
		
	}
	),
	finalmsw: new undum.SimpleSituation(
	"<p>Te das cuenta que la ciencia ficción blanda no es lo tuyo y no te termina de gustar, igual algo como la fantasía clásica te guste más o la ciencia ficción más seria. </p>",
	{
		tags: ["finales"],
        optionText: "El sueño sobre Star wars no te termina de convencer.",
        displayOrder: 3,
		canChoose: function(character, system, host) {
                return (character.qualities.espada > 0&& character.qualities.victoria <=0);
            },
			heading: "Final 7:"
		
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
	victoria:new undum.NonZeroIntegerQuality(
        "Victoria", {priority:"0004", group:'sueno'}
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
	character.qualities.victoria=0;
	//system.OnOffQuality("cine",false);
	
    system.setCharacterText("<p></p>");
};
