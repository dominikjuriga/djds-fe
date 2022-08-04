import React from 'react'
import ProjectPage from '../../components/ProjectPage'

const elearning = () => {
  const p = {
    id: 2,
    attributes: {
      title: "E-Learning",
      slug: "elearning",
      content: `
E-learning je online vzdelávacia platforma slúžiaca na čo najjednoduchší prechod do online vzdelávacieho prostredia. Hlavnou funkciou je real-time konferenčný hovor s chatom. Okrem toho zjednodušuje život učiteľom vďaka organizačným schoponostiam, ako je tvorba tried, opakovaných prednášiek a podobne.

## Stručný prehľad funkcií systému:
-  Udalosti
    - Kalendár udalostí
    - Rôzne typy (prednáška, diskusia)
    - Notifikácie (vytvorenie udalosti, udalosť o chvíľu začne)
        - SSO cez jednorázový link v maile
    - Knižnica dokumentov
        - Ku predmetom je možné nahrať dokumenty, ktoré sú viditeľné u udalostí daného predmetu
    
- Konferečný hovor
    - Real-time hovor využívajúci protokol WebRTC
        - Audio / Video, Zdieľanie obrazovky
    - Administračný panel pre učiteľa
        - (Za/Vy)pnutie kamery a mikrofónu účastníkov (individuálne alebo skupinovo), 
    - Chat
    - Rozloženie účastníkov podľa typu udalosti (Koláž, fokus na rozprávajúceho)
    - Automatická tvorba záznamov
    - Prihlásenie sa o slovo pri prednáškach
        - Učiteľ musí potvrdiť
        - Umožňuje účastníkovi zdieľať obrazovku

## Technológie
Systém je implementovaný vo frameworku Laravel. Interaktívna časť systému je implementovaná pomocou nástrojou Blade a Vue.js. WebRTC komunikácia je zaistená pomocou servera Janus, nad ktorým bolo vybudované API na komunikáciu medzi účastníkmi.`,
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