import React from 'react'
import ProjectPage from '../../components/ProjectPage'

const varastro = () => {
  const p = {
    id: 4,
    attributes: {
      title: "Var Astro",
      slug: "varastro",
      content: "Var Astro je systém na archiváciu a publikáciu pozorovaní premenných hviezd a exoplanét. Na tomto projekte kolaborujeme so sekciou premenných hviezd a exoplanét Českej astronomickej spoločnosti. \n\n## Motivácia\nV dobe zadania existoval už systém, ktorý spomínané možnosti používateľom umožňoval. Tento systém bol však implementovaný pred vyše desiatimi rokmi. Jeho autor v dnešnej dobe nemá motiváciu ho naďalej udržiavať, v dôsledku čoho má niekoľko problémov.\n\n### Nedostatky pôdovného systému\nPôvodný systém nepostačuje požiadavkám moderných používateľov na viacerých frontoch. \n\nPrvým problémom je, že prístup k nemu nie je zabezpečený pomocou šifrovacieho protokolu. Funguje teda na protokole HTTP, čo znamená, že útočník ktorý by zachytil komunikáciu bude schopný ju celú prečítať.\n\nĎalším problémom je používateľské rozhranie, ktorému bola venovaná minimálna snaha. Niet sa však čomu čudovať, keďže hlavným cieľom bola funkcionalita.\n\nTu sa však dostávame k ďalšiemu problému. Vnútorný návrh systému postráda akúkoľvek logiku. Celý sa skladá z jednej tabuľky, kde sa ukladá mnoho redundantných dát, ako napríklad objekt patriaci ku pozorovaniu. Tieto údaje je taktiež nutné manuálne vypĺňať vo formulári.\n\n## Technológie\nVoľba technológií bola pomerne priamočiará. Česká astronomická spoločnosť požadovala, aby systém bol udržateľný a nevyžadoval si veľké zásahy na údržbu. Na tento účel sú vhodné tzv. enterprise technológie, napríklad Java alebo C#. Ďalšou požiadavkou bola kompatibilita s operačným systémom Linux, nakoľko ho využíva celá infraštruktúra ČAS.\n\nPo vzájomnej diskusii sme sa rozhodli implementovať systém v prostredí .NET. Serverová aplikácia je implementovaná pomocou ASP.NET Core, zatiaľ čo klientská aplikácia využíva Blazor. \n\n## Čo sme zlepšili?\nNový sa nerovná lepší, a preto uvádzame zoznam vecí, ktoré sme zlepšili.\n- Zabezpečená komunikácia cez HTTPS\n- Databáza reflektuje doménové modely systému\n- Optimálne dotazy do databáze\n- Mobil? Tablet? iMac? Responzivita!\n",
      createdAt: "2022-07-30T13:27:30.450Z",
      updatedAt: "2022-07-30T13:27:39.271Z",
      publishedAt: "2022-07-30T13:27:39.270Z"
    },
    images: [
      "/images/varastro/varastro1.png",
      "/images/varastro/varastro2.png",
      "/images/varastro/varastro3.png"
    ]
  }

  return (
    <ProjectPage project={p} />
  )
}

export default varastro