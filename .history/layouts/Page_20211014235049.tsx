import React from 'react'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import SEO, { Props as SEOProps } from '@components/Seo'
import { GoogleFonts } from 'next-google-fonts'

export interface Props {
  seo?: SEOProps;
  children: React.ReactNode;
}

const Page = (props: Props) => {
  return (
    <>
        <SEO {...props.seo} />
        <GoogleFonts 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=optional" 
        />
        <Nav />
        <div className="min-h-screen">
          {props.children || null}
        </div>
        <Footer />
    </>
  )
}

export default Page
