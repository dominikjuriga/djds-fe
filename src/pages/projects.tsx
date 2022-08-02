import React from 'react'
import Animated from '../components/Animated'
import Seo from '../components/Seo'
import WorkList from '../components/WorkList'

const projects = () => {
  return (
    <>
      <Seo seo={{ siteName: "Projekty" }} />
      <section className="container">
        <Animated>
          <h1>Prehľad projektov, na ktorých sme sa účastnili</h1>
        </Animated>
      </section>
      <section className="container">
        <Animated animationDelay={0.5}>
          <WorkList />
        </Animated>
      </section>
    </>
  )
}
export default projects