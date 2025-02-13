// ErrorBoundary.js
import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Blog Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-8">
          <h2 className="text-xl font-bold text-red-600 mb-2">Something went wrong</h2>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="text-blue-600 hover:underline"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}