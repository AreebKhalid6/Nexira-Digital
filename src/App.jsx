import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Portfolio = lazy(() => import('@/pages/Portfolio'));
const Contact = lazy(() => import('@/pages/Contact'));
const GetStarted = lazy(() => import('@/pages/GetStarted'));
const RequirementForm = lazy(() => import('@/pages/RequirementForm'));
const PlaceholderPage = lazy(() => import('@/pages/PlaceholderPage'));

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center" aria-busy="true" aria-label="Loading">
      <div className="w-8 h-8 border-2 border-[#3B82F6]/30 border-t-[#3B82F6] rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Navigate to="/" replace />} />
            <Route path="/GetStarted" element={<GetStarted />} />
            <Route path="/requirement-form" element={<RequirementForm />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/CaseStudy" element={<PlaceholderPage title="Case Study" />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Privacy" element={<PlaceholderPage title="Privacy Policy" />} />
            <Route path="/CookiePolicy" element={<PlaceholderPage title="Cookie Policy" />} />
            <Route path="/Terms" element={<PlaceholderPage title="Terms & Conditions" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
