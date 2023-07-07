/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;
let playAudio: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

//Tout le code pour afficher les Popup de la carte

    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })

    WA.room.area.onLeave('clock').subscribe(closePopup)

    WA.room.area.onEnter('PanneauBrasserie').subscribe(() => {
        currentPopup = WA.ui.openPopup("PanneauBrasseriePopup", "Brasserie vers le haut", []);
    })
    
    WA.room.area.onLeave('PanneauBrasserie').subscribe(closePopup)

        WA.room.area.onEnter('PanneauBrasserieArrive').subscribe(() => {
        currentPopup = WA.ui.openPopup("PanneauBrasserieArrivePopup", "Tu es à la Brasserie", []);
    })
    
    WA.room.area.onLeave('PanneauBrasserieArrive').subscribe(closePopup)

    
    WA.room.area.onEnter('PanneauPetitesAnnonces').subscribe(() => {
        currentPopup = WA.ui.openPopup("PanneauPetitesAnnoncesPopup", "Suit ce chemin pour voir les petites annonces", []);
    })
    
    WA.room.area.onLeave('PanneauPetitesAnnonces').subscribe(closePopup)

        WA.room.area.onEnter('PanneauPetitesAnnoncesArrive').subscribe(() => {
        currentPopup = WA.ui.openPopup("PanneauPetitesAnnoncesArrivePopup", "Tu arrives devant le panneau des petites annonces", []);
    })
    
    WA.room.area.onLeave('PanneauPetitesAnnoncesArrive').subscribe(closePopup)

    WA.room.area.onEnter('PanneauQuartierDesRessources').subscribe(() => {
        currentPopup = WA.ui.openPopup("PanneauQuartierDesRessourcesPopup", "Par la c'est le quartier des ressources", []);
    })
    
    WA.room.area.onLeave('PanneauQuartierDesRessources').subscribe(closePopup)

        WA.room.area.onEnter('PanneauQuartierDesRessourcesArrive').subscribe(() => {
        currentPopup = WA.ui.openPopup("PanneauQuartierDesRessourcesArrivePopup", "Tu arrives dans le quartier des ressources", []);
    })
    
    WA.room.area.onLeave('PanneauQuartierDesRessourcesArrive').subscribe(closePopup)

    WA.room.area.onEnter('PanneauParc').subscribe(() => {
        currentPopup = WA.ui.openPopup("PanneauParcPopup", "Va par la c'est le Parc", []);
    })
    
    WA.room.area.onLeave('PanneauParc').subscribe(closePopup)

        WA.room.area.onEnter('PanneauParcArrive').subscribe(() => {
        currentPopup = WA.ui.openPopup("PanneauParcArrivePopup", "Tu es dans le Parc , bonne balade !", []);
    })
    
    WA.room.area.onLeave('PanneauParcArrive').subscribe(closePopup)

    WA.room.area.onEnter('PanneauWebRadio').subscribe(() => {
        currentPopup = WA.ui.openPopup("PanneauWebRadioPopup", "Continue par la pour aller voir la WebRadio", []);
    })
    
    WA.room.area.onLeave('PanneauWebRadio').subscribe(closePopup)

        WA.room.area.onEnter('PanneauWebRadioArrive').subscribe(() => {
        currentPopup = WA.ui.openPopup("PanneauWebRadioArrivePopup", "C'est la WebWebWeb WebRadio du Chemin Rouge !", []);
    })
    
    WA.room.area.onLeave('PanneauWebRadioArrive').subscribe(closePopup)

    WA.room.area.onEnter('PanneauGare').subscribe(() => {
        currentPopup = WA.ui.openPopup("PanneauGarePopup", "Suit ce chemin pour aller à la Gare", []);
    })
    
    WA.room.area.onLeave('PanneauGare').subscribe(closePopup)

        WA.room.area.onEnter('PanneauGareArrive').subscribe(() => {
        currentPopup = WA.ui.openPopup("PanneauGareArrivePopup", "Tututulu bienvenu dans la gare", []);
    })
    
    WA.room.area.onLeave('PanneauGareArrive').subscribe(closePopup)




    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
