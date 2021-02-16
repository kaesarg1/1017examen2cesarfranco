const TRASLATIONS = {
    en: {



        accueil: "Home",
        projets: "Projects",
        contact: "Contact",


   
        nom: "Firstname",
        prenom: "Lastname",
        email: "Email",
        categorie: "Categories",
        Détails: "Details",
        Soumission: "Submission",
        Rendezvous: "Appoinment",


        Projets: "Projects"
    },
    fr: {
       


        accueil: "Accueil",
        projets: "Projets",
        contact: "Contact",


        nom: "Prénom",
        prenom: "Nom",
        name: "Nom",
        email: "Courriel",
        categorie: "Catégories",
        Détails: "Details",
        Soumission: "Soumission",
        Rendezvous: "Rendezvous",

        Projets: "Projets"
    }

}


export const MixinTranslate = {

        filters: {
            translate: function (value) {
              if (!value) return '';
              let data = TRASLATIONS;
            
              let locale = 'fr';
              value = value.toString();
              
              if (data[locale][value]) {
                  return data[locale][value];
              }
              else {
                  return value;
              }
            }
        }
        
    }

