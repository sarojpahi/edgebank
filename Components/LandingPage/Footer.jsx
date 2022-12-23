import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Link,
    Image,
    HStack,
    Img,
  } from '@chakra-ui/react'


export const Footer = () => {

  return (
    <div>

    <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <AccordionIcon />
        <Box as="span" flex='1' textAlign='left'>
        Investor Relations
        </Box>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Box>
        <Link to="#">Home</Link>
        <Link to="#">Financials</Link>
        <Link to="#"> Filings & Press Releases</Link>
        <Link to="#"> News & Events</Link>
        <Link to="#">Corporate Governance</Link>
        <Link to="#">Resources</Link>
        <Link to="#">Financials</Link>
      </Box>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <AccordionIcon />
        <Box as="span" flex='1' textAlign='left'>
        More about Paytm
        </Box>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
       24X7 Help If we fall short of your expectations in any way, let us know.
       <br></br>
       100% Assurance If you face any issue, your money is immediately refunded. Sit back shop on.
       <br></br>
       Paytm Trust Your money is yours. All refunds come with no question asked guarantee.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <AccordionIcon />
        <Box as="span" flex='1' textAlign='left'>
         Company
        </Box>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box>
        <Link to="#">About Us</Link>
        <Link to="#">CRS</Link>
        <Link to="#"> Blogs</Link>
        <Link to="#"> Contact Us</Link>
        <Link to="#">Terms and Conditions</Link>
        <Link to="#">Sustainability</Link>
      
      </Box>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <AccordionIcon />
        <Box as="span" flex='1' textAlign='left'>
        Recharge & pay bills
        </Box>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <AccordionIcon />
        <Box as="span" flex='1' textAlign='left'>
          Section 2 title
        </Box>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    
</div>
  )
}