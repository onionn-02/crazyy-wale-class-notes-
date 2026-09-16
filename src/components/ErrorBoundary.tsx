import { Component, type ErrorInfo, type ReactNode } from 'react'
import { AlertTriangle } from 'lucide-react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Study Hub encountered an error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
          <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
            <AlertTriangle className="h-8 w-8" aria-hidden="true" />
          </span>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            Something went wrong.
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Sorry, this resource is currently unavailable. Please try again or go back home.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Back to Study Hub
          </a>
        </div>
      )
    }

    return this.props.children
  }
}
