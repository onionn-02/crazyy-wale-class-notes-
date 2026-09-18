import { Component, type ErrorInfo, type ReactNode } from 'react'
import { AlertTriangle, ArrowRight } from 'lucide-react'

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
    console.error('Topper Tapri encountered an error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center sm:px-6">
          <AlertTriangle className="mb-6 h-7 w-7 text-amber-500" aria-hidden="true" />
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Something went wrong.
          </h1>
          <p className="mt-3 text-ink-muted">
            Sorry, this resource is currently unavailable. Please try again or go back home.
          </p>
          <a
            href="/"
            className="mt-10 inline-flex items-center gap-2 rounded-md border border-edge-strong px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:border-brand-400/60 hover:text-brand-400"
          >
            Back to Topper Tapri
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      )
    }

    return this.props.children
  }
}
