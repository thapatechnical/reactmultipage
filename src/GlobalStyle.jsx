import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
 }
html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body{
   overflow-x: hidden;
}

::-webkit-scrollbar{
  width: 1.5rem;
}

::-webkit-scrollbar-track{
  background-color: rgb(24 24 29);
}

::-webkit-scrollbar-thumb {
 
    background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}


h1{
  color:${({ theme }) => theme.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}

h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
   text-align: center;
  }

  h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p {
  color: ${({ theme }) => theme.colors.text};
  opacity: .7;
  font-size: 1.65rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

    input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }


/* ===========================================
/* media queries  
======================================= */
/* px  */
/* rem  */
/* em  */
/* 1500px */
@media (max-width: 95em) {
  .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }

  .navbar-lists {
    gap: 3.4rem;
  }
}

/* for 1200px */
@media (max-width: 75em) {
  html {
    font-size: 56.25%;
  }

  .container {
    max-width: 110rem;
  }

  .grid {
    gap: 4.8rem;
  }
  .section-resume .grid-two-column {
    grid-template-columns: 1fr 2fr;
  }

  .section-resume .resume-data-subsection .grid-two-column {
    grid-template-columns: 1fr 1fr;
  }
}

/* for 980px */
@media (max-width: 980px) {
  html {
    font-size: 50%;
  }

  /* hero section  */
  .section-hero h1 {
    line-height: 1.05;
  }

  /* services section  */
  .section-services .grid {
    gap: 6rem;
  }

  .section-services .grid-three-column {
    grid-template-columns: repeat(2, 1fr);
  }

  /* resuem section  */
  .section-resume .grid-two-column {
    grid-template-columns: 1fr;
  }

  .resume-img {
    grid-row: 2;
    /* transform: translateY(-2rem); */
  }

  .section-resume .grid-two-column img {
    width: 50%;
  }

  .section-footer .grid-four-column {
    grid-template-columns: 1fr 1fr;
  }

  .img-overlay .common-heading {
    font-size: 3.2rem;
  }

  .img-overlay .common-heading::before,
  .img-overlay .common-heading::after {
    contain: "";
    width: 0;
    height: 0;
  }
}

/* below 790px  */
@media (max-width: 790px) {
  .container {
    max-width: 71rem;
  }

  .section-hero .grid-two-column {
    grid-template-columns: 1fr;

  }

   .section-hero .grid-three-column {
    grid-template-columns: 1fr;
  }


  .section-hero-data {
    align-items: center;
  }

  .hero-heading {
    text-align: center;
  }
  .hero-para {
    text-align: center;
    margin-top: 2rem;
  }
  .section-hero img {
    width: 70%;
  }

  /* bio data  */
  .section-biodata .grid-two-column {
    grid-template-columns: 1fr;
  }
  .section-biodata .bio-image {
    /* grid-row-start: 2;
    grid-row-end: 3;
    grid-row: 2/3; */
    grid-row: 2;
    margin-top: 3.2rem;
  }
  .section-biodata .bio-image img {
    width: 50%;
  }

  /* portfoilio section */
  .section-portfolio .grid-three-column {
    grid-template-columns: repeat(2, 1fr);
  }

  /* word data  */
  .section-work-data .grid-four-column {
    grid-template-columns: 1fr 1fr;
  }
}

/* below 560px  */
@media (max-width: 35em) {
  /* .container {
    max-width: 48rem;
  } */

  .header {
    padding: 0 3.2rem;
  }
  .header .logo {
    width: 50%;
  }

  /* portfolio   */
  .p-btns {
    gap: 2.8rem;
  }

  .btn {
    padding: 1rem 2rem;
  }

  .img-overlay .common-heading {
    font-size: 2.4rem;
  }

  .counter-numbers {
    font-size: 3.2rem;
  }

  /* services section  */
  .section-services .grid-three-column {
    grid-template-columns: 1fr;
  }

  /* resume section  */

  .resume-data-subsection {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3.2rem;
  }

  .resume-data-right .resume-data-button,
  .resume-data-bottom-subsection .resume-data-button {
    min-width: 30%;
  }

  .resume-data-subsection .resume-data-left .grid-two-column {
    grid-template-columns: 1fr;
  }

  .resume-data-right {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2.4rem;
  }

  .section-freelancer h2 {
    font-size: 3rem;
  }

  .contact-container {
    padding: 0 3.2rem;
  }
  .contact-container .grid-two-column {
    grid-template-columns: 1fr;
  }

  .section-contact-main input[type="submit"] {
    max-width: 40%;
  }

  /* footer section  */
  .section-footer .f-about,
  .section-footer .f-address {
    grid-column: 1/-1;
  }
}


`;
