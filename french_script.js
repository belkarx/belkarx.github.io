console.log("JS LOADED")

const data = {
    "15": {
        "Entendre dire que": "to hear that",
        "S'entendre bien/mal": "to get along well/badly",
        "Essayer de (+verbe)": "to try to do something",
        "Faire face à": "to face up to",
        "En panne": "out of order",
        "Faire semblant de": "to make believe",
        "N'importe (qui) (quand) (où)...": "anyone, anytime, anywhere, etc.",
        "Du jour au lendemain": "overnight",
        "Être mort de fatigue": "to be dead tired",
        "Oser": "to dare"
    },
    "14": {
        "Avoir le cafard": "to be down in the dumps",
        "D'un certain age": "middle-aged",
        "À mi-chemin": "half-way",
        "Côte à côte": "side by side",
        "Coûter les yeux de la tête": "to cost an arm and a leg",
        "Crever de faim": "to starve",
        "Passer une nuit blanche": "to have a sleepless night",
        "Donner un coup de main": "to help",
        "Donner un coup de fil": "to give a call",
        "Faire des économies": "to put money aside"
    },
    "13": {
        "Une bonne fois pour toutes": "once and for all",
        "Tant pis": "too bad",
        "Un succès fou": "a great success",
        "Profiter": "to take advantage of",
        "Au lieu de": "instead of",
        "Avoir pitié de quelqu'un": "to pity someone",
        "S'attendre à": "to expect",
        "À peine": "hardly",
        "Brûler un feu rouge": "to run a red light",
        "Brûler d'envie de (+ verbe)": "to be dying to do"
    },
    "12": {
        "Faire partie de": "to belong to",
        "De bonne heure": "early",
        "De plus en plus": "more and more",
        "Avoir chaud": "to be hot (person)",
        "Faire la grasse matinée": "to sleep late",
        "Être en vacances": "to be on vacation",
        "Il y a trois jours": "three days ago",
        "Avoir froid": "to be cold (person)",
        "Se porter bien": "to be well",
        "À propos de": "about; concerning"
    },
    "11": {
        "Boire un coup": "to have a drink",
        "Rien du tout": "nothing at all",
        "Entendre parler de": "to hear about",
        "Réussir à un examen": "to pass a test",
        "Avoir de bonnes intentions": "to mean well",
        "Avoir l'intention de (+ verbe)": "to intend",
        "Dormir sur ses deux oreilles": "to sleep soundly",
        "Changer d'avis": "to change one's mind",
        "Faire plaisir à": "to please someone",
        "Avoir bonne minne": "to look well"
    },
    "10": {
        "Arriver à (+verbe)": "to succeed in",
        "Faute de (+ nom)": "for lack of",
        "Se méfier de quelqu'un": "to mistrust",
        "Encore une fois": "again",
        "Se passer de": "to do without",
        "Au sujet de (+ nom)": "about; concerning",
        "Dépenser 50 francs": "to spend fifty francs",
        "Malgré/en dépit de": "in spite of",
        "Dormir à la belle étoile": "to sleep outdoors",
        "En avoir assez de faire": "to be fed up"
    },
    "9": {
        "D'une part... d'autre part": "on one hand... on the other hand",
        "À peu près": "about, nearly",
        "Rendre visite à (quelqu'un)": "to visit a person",
        "Vouloir dire": "to mean",
        "Être fier de (+ personne/verbe)": "to be proud",
        "Avoir mal à": "to have an ache",
        "Se sauver de": "to run away",
        "Faire peur à": "to frighten",
        "Se demander si": "to wonder if",
        "À fond": "thoroughly"
    },
    "8": {
        "En tout cas": "at any rate",
        "Faire de l'auto-stop": "to hitch-hike",
        "De temps en temps": "from time to time",
        "En vouloir à": "to hold a grudge against",
        "Grace à": "thanks to",
        "Avant tout": "above all",
        "Se fier à (quelqu'un)": "to trust",
        "Tenir à (+ verbe)": "to insist upon",
        "Nulle part": "nowhere",
        "Pas du tout": "not at all"
    },
    "7": {
        "Se mettre à (+ verbe)": "to begin",
        "Quelque part": "somewhere",
        "Envoyer chercher": "to send for",
        "Denouveau": "again",
        "Se passer": "to happen",
        "À plusieurs reprises": "repeatedly",
        "Faire de son mieux": "to do one's best",
        "Se mêler de": "to interfere",
        "Au fond de": "at the bottom of",
        "Être reconaissant que": "to be grateful to"
    },
    "6": {
        "Avoir lieu": "to take place",
        "Faire semblant de (+ verbe)": "to pretend",
        "Aujourd'hui en huit": "a week from today",
        "Venir de (+infinitif)": "to have just",
        "Tomber amoureux de": "to fall in love with",
        "Remercier de (+ verbe)": "to thank for",
        "Faire un tour": "to take a small walk",
        "De bon cœur": "willingly",
        "Se tirer d'affaire": "to get along; manage",
        "Faire (+ infinitive)": "to have something done"
    },
    "5": {
        "Ne pas être dans son assiette": "to be under the weather",
        "Tu me manques": "I miss you",
        "Se débarrasser de": "to get rid of",
        "À partir de ce jour": "from this day on",
        "Aller bien": "to be well",
        "Avoir envie de": "to feel like",
        "Se moquer de": "to make fun of",
        "Se tromper": "to be mistaken",
        "Avoir de la peine à(+ verbe)": "to have difficulty with",
        "S'assurer que": "to make sure that"
    },
    "4": {
        "Se plaindre de": "to complain",
        "Quant à": "as for",
        "Se garder de": "to keep oneself from",
        "Avoir l'air de": "to seem",
        "Avoir beau (+verbe)": "to do something in vain",
        "Avoir tort": "to be wrong",
        "Vouloir dire": "to mean",
        "Avoir raison": "to be right",
        "Passer une heure (à lire)": "to spend an hour reading",
        "Tout de suite": "right away"
    },
    "3": {
        "Ne faire que": "to do nothing but",
        "Faire la sourde oreille": "to turn a deaf ear",
        "Jouir de": "to enjoy",
        "Se douter que": "to suspect",
        "Gaspiller son argent": "to waste one's money",
        "S'intéresser à": "to be interested in",
        "Se marier avec": "to marry",
        "Se mettre en colère": "to get angry",
        "Mettre quelqu'un au courant que": "to inform someone",
        "Faire venir": "to send for"
    },
    "2": {
        "Se fâcher contre": "to get mad at",
        "Tout à fait": "entirely",
        "Perdre son temps": "to waste one's time",
        "Faillir (+verbe) [avoir failli + infinitif]": "to almost do something",
        "Sauter sur l'occasion": "to jump at the opportunity",
        "Avoir besoin de": "to need",
        "Être en train de (+infinitive)": "to be in the act/process of...",
        "Faire la queue": "to stand in line",
        "S'appuyer sur": "to lean on",
        "Assister à": "to attend; to be present"
    },
    "1": {
        "Il s'agit de": "it is about",
        "Tout à coup": "suddenly",
        "Suivre un cours": "to take a class",
        "Au premier abord": "at first sight",
        "Être de retour": "to be back",
        "En plein air": "outdoors",
        "Être d'accord avec": "to agree with",
        "Être au courant": "to be informed",
        "Avoir de la chance": "to be lucky",
        "Se servir de": "to use"
    }
};


let buttons = document.querySelectorAll("button");

let data_container = document.getElementById("cards");

let c, outerDiv, id;
let toggled = false;

let ids = [];
buttons.forEach(button => {
  button.addEventListener("click", event => {
    id = button.id;
    if (id == "toggle") {
      toggled = !(toggled);
      console.log(toggled);
      console.log(ids);
      populate(ids, toggled);
      return;
    }
    if (button.style.backgroundColor === "") {
         button.style.backgroundColor = "#f2f2f2";
         ids.push(id);
         populate(ids, toggled);
    } else {
        button.style.backgroundColor = "";
        let index = ids.indexOf(id);
        ids.splice(index, 1);
        populate(ids, toggled);
      }
  });
});

populate(ids, toggled);

function populate(ids, toggled) {
  data_container.innerHTML = "";
  for (let id of ids) {
        console.log(id);
        outerDiv = document.createElement("div");
        outerDiv.id = "c_" +  id;
      
        for (const [key, value] of Object.entries(data[id])) {
          c = document.createElement("div");
          c.className = "holding"

          let k = document.createElement("p");
          k.innerText = key;
          k.className = toggled && 'q' || !(toggled) && 'a'
          c.appendChild(k);

          let v = document.createElement("p");
          v.innerText = value;
          v.className = toggled && 'a' || !(toggled) && 'q'
          c.appendChild(v);
          
          outerDiv.appendChild(c);
        }
    
        data_container.append(outerDiv);
    }
}
