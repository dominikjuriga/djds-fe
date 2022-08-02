import React from 'react'
import ProjectPage from '../../components/ProjectPage'

const elearning = () => {

  const p = {
    id: 2,
    attributes: {
      title: "E-Learning",
      slug: "elearning",
      content: "Cieľom tohto projektu bol návrh a implementácia systému slúžiaceho na online vzdelávanie.\n\n## K čomu slúži\nSystém slúži na čo najjednoduchší prechod študentov do online prostredia. Veľká časť sveta bola posledné roky ovplyvnená pandémiou, čo malo za následok transformáciu osobného života do online priestoru. Medzi najviac zasiahnutú časť patria bezpochyby študenti, ktorí sa nemohli plnohodnotne vzdelávať. E-Learning poskytuje možnosť tvorby tried, správy študentov a najmä organizovanie hodín alebo prednášok. \n\n### Pre učiteľov\nUčiteľ je v rámci systému hlavnou entitou. Každý učiteľ si môže tvoriť skupiny ľudí (triedy), ku ktorým má možnosť priradenia jednotlivých používateľov. Taktiež majú možnosť tvorby prednášok, či už jednorázových alebo opakovaných. Na každú takúto udalosť môže pozvať existujúcu skupinu, individuálnych používateľov alebo neregistrovaných používateľov pomocou e-mailovej adresy. Prednášky prebiehajú formou real-time vysielania doplnenej chatom. Každý pozvaný používateľ dostáva e-mailové notifikácie pred konaním udalosti.\n\n## Technické riešenie\nProjekt bol implementovaný pomocou technológie Laravel, ktorá vďaka jednoduchej intergrácii s frameworkom Vue.js umožňuje tvoriť dynamické aplikácie. Real-time komunikácia je zaistená pomocou WebRTC servera, ktorý je prevádzkovaný na privátnej infraštruktúre.\n",
      createdAt: "2022-07-30T10:19:20.988Z",
      updatedAt: "2022-07-30T10:19:21.651Z",
      publishedAt: "2022-07-30T10:19:21.649Z"
    }
  }
  return (
    <ProjectPage project={p} />
  )
}

export default elearning