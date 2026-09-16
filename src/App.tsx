import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import SubjectsPage from './pages/SubjectsPage'
import SubjectPage from './pages/SubjectPage'
import CategoryPage from './pages/CategoryPage'
import SearchPage from './pages/SearchPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <main className="flex-1">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subjects" element={<SubjectsPage />} />
            <Route path="/subject/:subjectId" element={<SubjectPage />} />
            <Route path="/subject/:subjectId/:categoryId" element={<CategoryPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}
