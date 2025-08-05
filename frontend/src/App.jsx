
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-4 py-10">
          <Suspense fallback={<div className='text-center'>Loading page...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
