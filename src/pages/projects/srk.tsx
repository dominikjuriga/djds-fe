import React from 'react'
import ProjectPage from '../../components/ProjectPage'

const srk = () => {
  const p = {
    id: 3,
    attributes: {
      title: "Slovak Retriever Klub",
      slug: "srk",
      content: "V rámci projektu Slovek Retriever Klub sme sa podieľali na tvorbe používateľského rozhrania pre databázovú sekciu a tvorbe používateľského prostredia.\n\n## Slovak Retriever Klub\nSRK je občianske združenie zastrešujúce chovateľov a priaznivcov retríverov na Slovensku. V súčasnosti ho tvorí vyše 200 platiacich členov. Okrem toho sa venuje organizácie prehliadok, výstav a ďalších druhov akcií za účelom šírenia povedomia o tomto plemene. Samotná stránka SRK sa delí na dve časti, informačnú a databázu.\n\n## Pôvodný stav databázy retríverov\nNaša práca bola na databázovej časti, ktorá poskytuje informácie nielen o členoch, ale aj o uchovených jednicoch. Pred realizáciou projektu boli zmeny v SRK zaznamenávané pomocou prístupu majiteľov na server pomocou FTP a manuálnych úprav HTML súborov. Tento prístup je vysoko neefektívny, limituje množstvo úprav ktoré je možné vykonať. Negatívom je taktiež možná kompromitácia a strata dát v prípade, že prístup získa útočník.\n\n## Prínos pre SRK\nPre SRK sme na základe dodaného dizajnového súboru vytvorili používateľské rozhranie a taktiež používateľské prostredie. Systém bol implementovaný pomocou frameworku Laravel s využítím šablónovacieho nástroja Blade. \n\nPoužívateľské prostredie umožňuje členom úpravu údajov alebo registrovanie nových jedincov. Každá takáto úprava musí prejsť schválením administrátora. Pôvodne museli byť takéto zmeny vykonané pomocou žiadostí vo forme listov. Vďaka tomu sa ušetrí nielen veľa papiera, ale aj času.",
      createdAt: "2022-07-30T10:19:20.988Z",
      updatedAt: "2022-07-30T10:19:21.651Z",
      publishedAt: "2022-07-30T10:19:21.649Z"
    },
    images: [
      "/images/srk/srk1.png",
      "/images/srk/srk2.png",
      "/images/srk/srk3.png",
    ]
  }

  return (
    <ProjectPage project={p} />
  )
}

export default srk