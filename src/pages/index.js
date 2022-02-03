import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import BlogSection from '../sections/blog-section';
import Subscribe from '../sections/subscribe';

import PreviousDonations from '../sections/previous-donations';
import PrevDonations from '../sections/prev-donations';
import PoolTarget from '../sections/pool-target';
import PoolTrending from '../sections/pool-trending';

import WhitePaper from '../sections/white-paper';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Giving Token" />
          {/* <Banner />  */}
          <PoolTarget />
          <PoolTrending />
          {/* <PreviousDonations /> */}
          <PrevDonations />
          
          {/* <KeyFeature />
          <ServiceSection />
          <Feature />
          <CoreFeature />
          <WorkFlow />
          <Package />
          <TeamSection />
          <TestimonialCard />
          <BlogSection />
          <Subscribe /> */}
          {/* <WhitePaper /> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
