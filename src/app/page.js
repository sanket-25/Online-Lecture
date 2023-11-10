import Image from 'next/image'
import styles from './page.module.css'
export default function Home() {
  return (
    <>
      <section className='home'>
        <video autoPlay loop muted className="">
          <source
            src="start.mp4"
            type="video/mp4"
          />
        </video>
        <div className='quote'>BE THE CHANGE YOU WANT TO SEE</div>
      </section>
    </>
  )
}
