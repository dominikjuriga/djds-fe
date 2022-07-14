import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Seo from '../components/Seo'
import s from "../styles/Home.module.css"
import { MdOutlineDevicesOther, MdCamera, MdLibraryBooks, MdTipsAndUpdates } from "react-icons/md"
import { FaLaravel, FaVuejs } from "react-icons/fa"
import { SiWebrtc, SiMariadb, SiCsharp, SiBlazor } from "react-icons/si"
import Tooltip from '../components/Tooltip'
import Carousel from '../components/Carousel'
import { useRef } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import Animated from '../components/Animated'
import AnimatedInView from "../components/AnimatedInView"

const Home: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const executeScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <>
      <Seo seo={{ siteName: "Domov" }} />
      <section className={`container ${s.hero}`}>
        <div>
          <Animated>
            <h1 className='pageTitle'>{t.main_title}</h1>
          </Animated>
          <Animated animationDelay={0.25}>
            <p>{t.main_subtitle}</p>
          </Animated>
          <Animated
            animationDelay={0.5}
          >
            <button className="cta onlyBig" onClick={executeScroll}>
              {t.cta_title}
            </button>
          </Animated>
        </div>
        <Animated
          animationDelay={0.5}>
          <div className="center">
            <Image alt='Stretnutie troch ľudí pri káve' src="/illustrations/meeting.svg" width="300px" height="300px" />
          </div>
        </Animated>
        <Animated animationDelay={0.75}>
          <div className="center onlySmall">
            <button className="cta " onClick={executeScroll}>
              {t.cta_title}
            </button>
          </div>
        </Animated>
      </section>

      <Animated animationDelay={.25}>
        <section className={`container ${s.scrollMargin}`} ref={scrollRef}>
          <h2>{t.services_title}</h2>
          <p>{t.services_subtitle}</p>
          <ul className={s.services}>
            {t.services_list.map((service) => (
              <li key={service.title}>
                <div className={s.serviceTitle}>
                  {service.icon}
                  <h3>{service.title}</h3>
                </div>
                <p className="justify">{service.subtitle}</p>
              </li>
            ))}
          </ul>
        </section>
      </Animated>
      <Animated animationDelay={.5}>
        <section className="container">
          <h2>{t.work_title}</h2>
          <p>{t.work_subtitle}</p>
          <ul className={s.work_list}>
            {t.work_list.map((work) => (
              <li key={work.title}>
                <div className={s.workItem}>
                  <h3>{work.title}</h3>
                  <span>{work.duration}</span>
                </div>
                <p className='justify'>{work.description}</p>
                <ul className={s.technology_list}>
                  {work.technologies.map((technology) => (
                    <li key={technology.title} >
                      <Tooltip title={technology.title}>
                        {technology.icon}
                      </Tooltip>
                    </li>
                  ))}
                </ul>

              </li>
            ))}
            <li className={s.spanTwo}>
              <div className="center">
                <div className={s.workItem}>
                  <h3>{t.work_you_could_be_here}</h3>
                  <span></span>
                </div>
              </div>
              <div className="center">
                <Link href="/contact">
                  <a className="cta">
                    {t.work_cta}
                  </a>
                </Link>
              </div>
            </li>
          </ul>
        </section>
      </Animated>
      <Animated animationDelay={.75}>
        <section className='container'>
          <h2>Ako prebieha spolupráca?</h2>
          <Carousel items={t.cooperation} />
        </section>
      </Animated>
      <Animated animationDelay={1}>
        <section className='container'>
          <h2>Máte pre nás projekt?</h2>
          <p className='justify'>
            Radi si Vás vypočujeme. Konštruktívnym dialógom vytvoríme návrh a nakoniec privedieme Váš projekt na svet. Zvyšok už je len na Vás.
          </p>
          <div className="center">
            <Link href="/contact">
              <a className="cta">
                Chcem spoluprácu
              </a>
            </Link>
          </div>
        </section>
      </Animated>
    </>
  )
}

export default Home

const t = {
  main_title: "Tvoríme Vašu digitálnu identitu.",
  main_subtitle: "Potrebujete zviditeľniť seba, firmu alebo neziskovú organizáciu?",
  cta_title: "Chcem viac informácií",
  services_title: "Komplexná správa digitálnych produktov.",
  services_subtitle: "Poskytujeme širokú škálu služieb. Zatiaľ čo Vy budete pracovať na Vašom projekte, my sa postaráme o jeho rast.",
  services_list: [
    {
      icon: <MdOutlineDevicesOther />,
      title: "Webové stránky",
      subtitle: "Tvoríme komplexné webové stránky s vysokým výkonom. Šijeme ich na mieru podľa individuálnych potrieb."
    },
    {
      icon: <MdCamera />,
      title: "Produktová fotografia",
      subtitle: "Jeden obrázok povie viac ako tisíc slov. Preto by Váš produkt mal mať dobré fotografie. ",
    },
    {
      icon: <MdLibraryBooks />,
      title: "Tvorba obsahu",
      subtitle: "Potrebujete napísať článok na blog, vytvoriť obsahovú stratégiu alebo príspevok na sociálne siete?",
    },
    {
      icon: <MdTipsAndUpdates />,
      title: "Potrebujete viac?",
      subtitle: "Predstavivosti sa medze neklamú. Pokiaľ máte špecifickú potrebu, stačí sa nám ozvať.",
    },
  ],
  work_title: "Naše projekty.",
  work_subtitle: "Máme za klobúkom niekoľko veľkých projektov.",
  work_list: [
    {
      title: "PetPass",
      duration: "2021 - 2022",
      description: "Spolupráca na systéme slúžiacom na správu veterinárnych ambulancií, vyšetrení a skladov. Používateľom poskytuje prehľad svojich domácich maznáčikov, ich diagnóz a medikácií.",
      technologies: [
        {
          title: "Laravel",
          icon: <FaLaravel />
        },
        {
          title: "MariaDB",
          icon: <SiMariadb />
        },
        {
          title: "VueJS",
          icon: <FaVuejs />
        }
      ]
    },
    {
      title: "E-Learning",
      duration: "2021 - 2022",
      description: "Online vzdelávacia platforma pre súkromné školy. Umožňuje organizáciu tried, livestreaming a chat.",
      technologies: [
        {
          title: "Laravel",
          icon: <FaLaravel />
        },
        {
          title: "WebRTC",
          icon: <SiWebrtc />
        },
        {
          title: "MariaDB",
          icon: <SiMariadb />
        },
        {
          title: "VueJS",
          icon: <FaVuejs />
        }
      ]
    },
    {
      title: "Slovak Retriever Klub",
      duration: "2021 - 2022",
      description: "Webová stránka a administračný panel pre správu slovenského klubu retrieverov.",
      technologies: [
        {
          title: "Laravel",
          icon: <FaLaravel />
        },
        {
          title: "MariaDB",
          icon: <SiMariadb />
        }
      ]
    },
    {
      title: "Var Astro",
      duration: "2021 - 2022",
      description: "Systém pre správu a publikáciu pozorovaní hviezdnych objektov. Cieľom je zjednodušenie práce členov Sekcie premenných hviezd a exoplanét.",
      technologies: [
        {
          title: "ASP.NET",
          icon: <SiCsharp />
        },
        {
          title: "Blazor",
          icon: <SiBlazor />
        },
        {
          title: "MariaDB",
          icon: <SiMariadb />
        }
      ]
    }
  ],
  work_you_could_be_here: "Tu môže byť aj Váš projekt",
  work_cta: "Kontaktujte nás",
  cooperation: [
    {
      title: "Konzultácia",
      description: "Stretneme sa s Vami a porozprávame sa o Vašom projekte. Budeme od Vás potrebovať špecifikáciu a ciele projektu.",
    },
    {
      title: "Analýza a špecifikácia",
      description: "Na základe úvodného stretnutia pre Vás vypracujeme technickú analýzu, case study a cenovú ponuku. Zatiaľ nič neplatíte a rozhodnutie je na Vás."
    },
    {
      title: "Začíname s Vaším projektom.",
      description: "Pokiaľ ste prejavili záujem, začíname pracovať na Vašom projekte."
    },
    {
      title: "Pracujeme na projekte.",
      description: "Pilno pracujeme na dovedení Vášho projektu za cieľovú čiaru. Implementácia prebieha iteratívne, pričom Vás o priebehu projektu vždy informujeme."
    },
    {
      title: "Odovzdávame a testujeme.",
      description: "Projekt sme dokončili. Spojíme sa s Vami a spoločne ho otestujeme."
    },
  ]

}