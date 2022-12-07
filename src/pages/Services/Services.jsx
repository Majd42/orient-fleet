import React from 'react'
import { Typography } from '@mui/material'
import './styles.css'
import FSM1 from '../../assets/Services/FSM 1.jpg'
import FSM2 from '../../assets/Services/FSM 2.jpg'
import Crew1 from '../../assets/Services/Crew 1.jpg'
import Crew2 from '../../assets/Services/Crew 2.jpg'
import Tech1 from '../../assets/Services/Technical 1.jpg'
import Tech2 from '../../assets/Services/Technical 2.jpg'
import ISM1 from '../../assets/Services/ISM 1.jpg'
import ISM2 from '../../assets/Services/ISM 2.jpg'
import Pre from '../../assets/Services/Pre Purchase Inspection.jpeg'
import Cargo from '../../assets/Services/Cargo.jpg'

const Services = () => {

  return (
    <div className='services-container'>
      <div className="services-hero">
        <div className="services-hero-content">
          <Typography sx={{color:'white', }} variant='h4' letterSpacing={10}>Our Services</Typography>
          <Typography sx={{color:'white'}} variant='body2' letterSpacing={2} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quos ad    excepturi voluptatibus neque, explicabo pariatur, maxime praesentium similique voluptatem quae sunt   possimus molestiae voluptas unde voluptates eligendi nam iste adipisci corrupti. Laudantium libero accusantium exercitationem ut? Facilis, voluptates! Nostrum!
          </Typography>
        </div>
      </div>


      {/* Services */}
      <div className="services-grid">
        
            {/* {services.map(service => (
              <div key={service} className="service">
                <Typography>{service}</Typography>
              </div>
            ))} */}

            <a href='#techSupport' style={{textDecoration: 'none'}}>
              <div className="service order1">
                <Typography sx={{color:'white', textAlign:'center'}} variant='h4'>Technical and operational support services</Typography>
              </div>
            </a>

            <a href='#shipManagement' style={{textDecoration:'none'}}>

              <div className="service order2">
                <Typography sx={{color:'white', textAlign:'center'}} variant='h4'>Full Ship Management</Typography>
              </div>
            </a>

            <a href='#crewManagement' style={{textDecoration:'none'}}>

              <div className="service order3">
                <Typography sx={{color:'white', textAlign:'center'}} variant='h4'>Crew Management</Typography>
              </div>
            </a>

            <a href='#auditing' style={{textDecoration:'none'}}>

              <div className="service order4">
                <Typography sx={{color:'white', textAlign:'center'}} variant='h4'>ISM/ISPS/MLC auditing</Typography>
              </div>
            </a>
            
            <a href='#inspection' style={{textDecoration:'none'}}>

              <div className="service order5">
                <Typography sx={{color:'white', textAlign:'center'}} variant='h4'>Pre-Purchase Inspection</Typography>
              </div>
            </a>

            <a href='#' style={{textDecoration:'none'}}>

              <div className="service order6">
                <Typography sx={{color:'white', textAlign:'center'}} variant='h4'>Cargo Routine Inspection and Surveys</Typography>
              </div>
            </a>
          
       
      </div>

      {/* ship Management */}

      <div id='shipManagement' className="ship-management">
        <Typography textAlign='center' letterSpacing={15} color='#5595D1' variant='h4'>Full Ship Management</Typography>
        <div className="management-one">
            <img src={FSM1} alt="alt" className='fsm-img' />
            <ul>
              <li>
                <Typography fontWeight={600} variant='body2'>
                  We manage all technical aspects by the fleet team with high efficiency to include our management.
                </Typography>
              </li>
              <li>
                <Typography fontWeight={600} variant='body2'>
                  Monitoring of the vessels through an online tracking system of our management Shipping Services.
                </Typography>
              </li>
              <li>
                <Typography fontWeight={600} variant='body2'>
                  Ship's certificate.
                </Typography>
              </li>
              <li>
                <Typography fontWeight={600} variant='body2'>
                  Ship inspection.
                </Typography>
              </li>
              <li>
                <Typography fontWeight={600} variant='body2'>
                  Develop security plans in line with international regulations and standards (ISPS).
                </Typography>
              </li>
            </ul>
        </div>
        <div className="management-two">
            <ul>
              <li>
                <Typography fontWeight={600} variant='body2'>
                  We manage all technical aspects by the fleet team with high efficiency to include our management.
                </Typography>
              </li>
              <li>
                <Typography fontWeight={600} variant='body2'>
                  Monitoring of the vessels through an online tracking system of our management Shipping Services.
                </Typography>
              </li>
            </ul>
            <img src={FSM2} alt="alt" className='fsm-img' />
        </div>
      </div>


      {/* crew Management */}
      <div id='crewManagement' className="crew-management">
        <Typography padding={4} letterSpacing={15} variant='h4' >Crew Management</Typography>
        <div className="crew-management-container">
          <img src={Crew1} alt="alt" className='crew1-img' />
          <div className="crew-management-content">
            <Typography letterSpacing={2} color='white' >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat impedit culpa dolores, suscipit quia vitae dicta ipsam veritatis porro accusamus eveniet cupiditate eaque dolorem harum repellendus. Est atque quam a?
            </Typography  >
            <ul>
              <li>
                <Typography letterSpacing={2} color='white' >Assign the appropriate crew to meet the ship's need</Typography>
              </li>
              <li>
                <Typography letterSpacing={2} color='white' >Follow up on regular training on safety procedures according to international standards on board</Typography>
              </li>
              <li>
                <Typography letterSpacing={2} color='white' >
                  Travel logistics
                </Typography>
              </li>
              <li>
                <Typography letterSpacing={2} color='white' >continue the issuance of certificates of conformity for the ship's crew in proportion to the flag it represents</Typography>
              </li>
              <li>
                <Typography letterSpacing={2} color='white' >We are keen to abide by the times of rest and work, and to secure the full equipment of  the crew root and the ship's resturant</Typography>
              </li>
              <li>
                <Typography letterSpacing={2} color='white' >Comliance with all MLC regulations</Typography>
              </li>
              
            </ul>
            <img src={Crew2} alt="alt" className='crew-li-img' />
          </div>
        </div>
      </div>



      {/* tech and operational support */}

      <div id='techSupport' className="tech-support">
        <Typography letterSpacing={9} variant='h4' textAlign='center' color='#5595D1' padding={4} >Technical and operational suppport </Typography>
        <div className="tech-support-container">
          <img src={Tech1} className='tech1-img' alt="alt" />
          <div className="tech-support-content">
            <div className="tech-support-content-left">
              <Typography letterSpacing={2} >We provide a wide range of technical services to ship owners:</Typography>
              <ul>
                <li>
                  <Typography letterSpacing={2} >Dealing with shipyards, evaluating specifications, obtaining approvals and conceptual design</Typography>
                </li>
                <li>
                  <Typography letterSpacing={2} >
                    Environmental sustainability solutions
                  </Typography>
                </li>
                <li>
                  <Typography letterSpacing={2} >
                    Dry docking support
                  </Typography>
                </li>
                <li>
                  <Typography  >
                    Risk management
                  </Typography>
                </li>
                <li>
                  <Typography letterSpacing={2} >
                    Ship structural assessments
                  </Typography>
                </li>
                <li>
                  <Typography letterSpacing={2} > 
                    Life extention program
                  </Typography>
                </li>
              </ul>
            </div>
            <img src={Tech2} alt="alt" className='tech2-img' /> 
            
          </div>

        </div>
      </div>



      {/* ISM/ISPS/MLC Auditing */}

      <div id='auditing' className="auditing">
        <Typography padding={4} color='white' variant='h4' letterSpacing={9} textAlign='center'>ISM/ISPS/MLC Auditing</Typography>
        <div className="auditing-container">
          <div className="auditing-content">
              <img src={ISM2} alt="" className='ism1-img' />
              <Typography letterSpacing={2} color='white'>We provide a well-trained, fully prepared and vastly experienced DPA to ensure the implementation of a Safety Management System and verify and monitor all safety and pollution prevention activities. We guarantee each ship to be manned, equipped and maintained, tasks to be delegated and that adequate resources are available </Typography>
          </div>
          <img src={ISM1} alt="" className='ism2-img' />
        </div>
      </div>

      {/* pre purchase inspection */}
      <div id='inspection' className="pre-purchase">
        <Typography variant='h4' letterSpacing={9} textAlign='center' padding={4}>Pre-Purchase Inspspection</Typography>
        <div className="pre-purchase-container">
            <img src={Pre} alt="" className='pre-img' />
            <div className="pre-purchase-content">
                <Typography letterSpacing={2}>
                  orem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quia maiores nostrum qui, quam nihil molestiae nisi sunt eligendi nobis asperiores eius quibusdam fugiat laborum, molestias voluptates reiciendis neque distinctio repudiandae. Sint architecto molestias fugit aspernatur cumque temporibus nobis impedit deleniti ex inventore, omnis illum eveniet corporis eos iusto aliquid.

                </Typography>
                <Typography letterSpacing={2}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eveniet cumque consequuntur, corporis vel expedita nisi quam ad, dicta impedit id minus perspiciatis adipisci voluptate. Neque quis officiis quae qui quia suscipit fugit mollitia error magni cum! Quibusdam natus aliquam dolore expedita, impedit dolores tempora consequuntur, optio quo aperiam ut!
                  </Typography>
            </div>
        </div>
      </div>


      {/* Cargo Routine Inspection */}
      <div className="cargo-routine">
        <Typography color='#5595D1' variant='h4' textAlign='center' padding={4} letterSpacing={9}>Cargo Routine Inspection</Typography>
        <div className="cargo-routine-content">
          <img src={Cargo} alt="" />
          <Typography variant='body1' letterSpacing={2}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi excepturi, possimus quasi nesciunt deleniti aut nam ullam aliquid numquam inventore mollitia harum error minus eos ab accusantium sequi sunt voluptatum!
            
          </Typography>
          <Typography letterSpacing={2} variant='body1'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et sunt tenetur harum dolore culpa error incidunt! Amet modi obcaecati voluptatibus.

          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Services