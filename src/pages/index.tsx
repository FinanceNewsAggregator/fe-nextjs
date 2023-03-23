import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Navbar from '../components/Navbar'

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';
import Footer from '@/components/Footer';
import Home from '@/components/Home'
import TagsPage from '@/components/TagsPage';
//import TAG from '@/components/Navbar';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>

          <Navbar />
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>

            {/* <Home /> */}
            <TagsPage />
            <footer className='absolute bottom-2 text-gray-700'>
              <Footer />
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
