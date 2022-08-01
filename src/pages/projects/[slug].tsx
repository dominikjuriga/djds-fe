import React, { useState } from 'react'
import Seo from '../../components/Seo'
import ReactMarkdown from 'react-markdown'
import Image from "next/image"
import SimpleCarousel from "../../components/SimpleCarousel"
import EmblaCarousel from '../../components/EmblaCarousel'

interface IProps {
  project: {
    attributes: {
      title: string,
      content: string
    },
    images: {
      folder: string,
      names: string[]
    }
  }
}
const Project = ({ project }: IProps) => {
  return (
    <>
      <Seo seo={{ siteName: project.attributes.title }}></Seo>

      <section className="container">
        <h1>{project.attributes.title}</h1>
        {project.images && (
          <EmblaCarousel slides={Array.from(Array(project.images.length).keys())} media={project.images}>
            {/* {project.images && (
            project.images.names.map((image) => (
              <div className="embla__slide">
                <Image width={"450px"} height={"250px"} src={`/images/${project.images.folder}/${image}`} />
              </div>
            ))
          )} */}
          </EmblaCarousel>
        )}
        <ReactMarkdown>
          {project.attributes.content}
        </ReactMarkdown>
      </section>
    </>
  )
}

export async function getStaticPaths() {
  const idList = ["vet", "srk", "elearning", "varastro"];
  const paths: string[] = [];
  idList.forEach((id) => { paths.push(`/projects/${id}`) })
  return { paths, fallback: true };
}

interface IParams {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: IParams) {
  const { slug } = params;
  const tokens = slug.split("/")
  const projectId = tokens[tokens.length - 1]
  const found: IProject = projects[projectId]

  return {
    props: {
      project: found
    }
  }
}

interface IProject {
  id: number,
  attributes: {
    title: string,
    slug: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string
  },
  images?: string[]
}

interface IProjects {
  [key: string]: IProject
}

const projects: IProjects = {
  // vet: {
  //   id: 1,
  //   attributes: {
  //     title: "Veterinárna klinika",
  //     slug: "vet",
  //     content: "Toto je stranka pre projekt veterinárna klinika",
  //     createdAt: "2022-07-30T10:19:20.988Z",
  //     updatedAt: "2022-07-30T10:19:21.651Z",
  //     publishedAt: "2022-07-30T10:19:21.649Z"
  //   }
  // },
  elearning: {
    id: 2,
    attributes: {
      title: "E-Learning",
      slug: "elearning",
      content: "Cieľom tohto projektu bol návrh a implementácia systému slúžiaceho na online vzdelávanie.\n\n## K čomu slúži\nSystém slúži na čo najjednoduchší prechod študentov do online prostredia. Veľká časť sveta bola posledné roky ovplyvnená pandémiou, čo malo za následok transformáciu osobného života do online priestoru. Medzi najviac zasiahnutú časť patria bezpochyby študenti, ktorí sa nemohli plnohodnotne vzdelávať. E-Learning poskytuje možnosť tvorby tried, správy študentov a najmä organizovanie hodín alebo prednášok. \n\n### Pre učiteľov\nUčiteľ je v rámci systému hlavnou entitou. Každý učiteľ si môže tvoriť skupiny ľudí (triedy), ku ktorým má možnosť priradenia jednotlivých používateľov. Taktiež majú možnosť tvorby prednášok, či už jednorázových alebo opakovaných. Na každú takúto udalosť môže pozvať existujúcu skupinu, individuálnych používateľov alebo neregistrovaných používateľov pomocou e-mailovej adresy. Prednášky prebiehajú formou real-time vysielania doplnenej chatom. Každý pozvaný používateľ dostáva e-mailové notifikácie pred konaním udalosti.\n\n## Technické riešenie\nProjekt bol implementovaný pomocou technológie Laravel, ktorá vďaka jednoduchej intergrácii s frameworkom Vue.js umožňuje tvoriť dynamické aplikácie. Real-time komunikácia je zaistená pomocou WebRTC servera, ktorý je prevádzkovaný na privátnej infraštruktúre.\n",
      createdAt: "2022-07-30T10:19:20.988Z",
      updatedAt: "2022-07-30T10:19:21.651Z",
      publishedAt: "2022-07-30T10:19:21.649Z"
    }
  },
  srk: {
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
  },
  varastro: {
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
}



export default Project