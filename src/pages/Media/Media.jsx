import React from 'react'
import { Typography } from '@mui/material'
import './styles.css'
import L2 from '../../assets/Media/L2.jpg'
import L3 from '../../assets/Media/L3.jpg'
import L4 from '../../assets/Media/L4.jpg'
import L5 from '../../assets/Media/L5.jpg'
import L6 from '../../assets/Media/L6.png'
import L7 from '../../assets/Media/L7.jpg'
import L8 from '../../assets/Media/L8.jpg'
import L9 from '../../assets/Media/L9.jpg'
import L10 from '../../assets/Media/L10.jpg'
import L11 from '../../assets/Media/L11.jpg'
import B1 from '../../assets/Media/B1.png'
import B2 from '../../assets/Media/B2.jpg'
import B3 from '../../assets/Media/B3.jpg'
import B4 from '../../assets/Media/B4.jpg'
import B5 from '../../assets/Media/B5.jpg'
import T1 from '../../assets/Media/T1.png'
import T2 from '../../assets/Media/T2.png'
import T3 from '../../assets/Media/T3.png'
import T4 from '../../assets/Media/T4.jpg'
import tartus from '../../assets/Media/tartus.jpg'


const Media = () => {
  return (
    <>

      <div className="media-hero">
        <div className="media-hero-content">
          <Typography sx={{color:'white', }} variant='h4' letterSpacing={10}>Media</Typography>
          <Typography sx={{color:'white'}} variant='body2' letterSpacing={2} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quos ad    excepturi voluptatibus neque, explicabo pariatur, maxime praesentium similique voluptatem quae sunt
          </Typography>
        </div>
      </div>

      <div className="port-lattakia">
        <div>
          <Typography color="#5595D1" variant='h4' letterSpacing={4} textAlign='center'>Port Of Lattakia</Typography>
          <Typography color='#5595D1'variant='h4' textAlign='center' letterSpacing={4} >1900s - Present Day</Typography>

        </div>
        <div  className="port-lattakia-first">
          <img src={L2} alt="" />
          <img src={L3} alt="" />
        </div>
        <img src={L4} alt="" className='port-lattakia-imgfull' />
        <Typography width='80%' variant='h6' textAlign='center'>Represiting A Beacon Of Hope, The Latin Church was often Regarded bt sailors as a holy lighthouse guiding them to the port of lattakia through the harsh weather after their distant voyages</Typography>
      </div>

      <div className="gallery">
        <div className="gallery-first">
          <img src={L5} alt="" />
          <img src={L6} alt="" />
          <img src={L7} alt="" />
        </div>
        <div className="gallery-second">
          <img src={L8} alt="" />
          <img src={L9} alt="" />
          <img src={L10} alt="" />
          <img src={L11} alt="" />
        </div>
        <Typography variant='h6' textAlign='center' width='85%'  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore dicta hic temporibus nostrum corporis accusamus eligendi sed, aperiam voluptates maxime ullam id nisi vero inventore reprehenderit dolor non iste repellendus., aperiam voluptates maxime ullam id nisi vero inventore reprehenderit dolor non iste repellendus.</Typography>

      </div>

      <div className="port-tartus">
        
      </div>

      <div className="port-tartus-content">
        <div>

          <Typography color="#5595D1" variant='h4' letterSpacing={4} textAlign='center'>Port Of Tartus</Typography>
          <Typography color="#5595D1" variant='h4' letterSpacing={4} textAlign='center'>1920s - Present Day</Typography>
        </div>
        <div className="port-tartus-topimgs">
          <img src={T2} alt="" />
          <img src={T3} alt="" />
        </div>
        <Typography  variant='h6' textAlign='center' marginBottom={2}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus magni quo laborum similique tempore architecto nostrum nam voluptas, culpa recusandae neque tenetur non officia ea vero inventore cumque dolor. Maxime.

        </Typography>

        <img src={T4} alt="" className='port-tartus-fullimg'/>
        <Typography  variant='h6' textAlign='center' marginBottom={2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus magni quo laborum similique tempore architecto nostrum nam voluptas, culpa recusandae neque tenetur non officia ea vero inventore cumque dolor. Maxime.</Typography>
      </div>

      <div className="port-baniyas">

      </div>

      <div className="port-baniyas-content">
          <div>

            <Typography color="#5595D1" variant='h4' letterSpacing={4} textAlign='center' >Port of Baniyas</Typography>
            <Typography color="#5595D1" variant='h4' letterSpacing={4} textAlign='center'>1950s - Present Day</Typography>
          </div>

          <img src={B2} alt="" className='port-baniyas-fullimg' />

          <div className="port-baniyas-imgs">
            <img src={B3} alt="" />
            <img src={B4} alt="" />
          </div>

          <img src={B5} alt="" className='port-baniyas-fullimg' />

          <Typography marginBottom={9}  variant='h6'  textAlign='center'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus magni quo laborum similique tempore architecto nostrum nam voluptas, culpa recusandae neque tenetur non officia ea vero inventore cumque dolor. Maxime.
          </Typography>
      </div>
    
    </>
  )
}

export default Media