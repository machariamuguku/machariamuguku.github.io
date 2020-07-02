import React from "react";
import styled from "styled-components";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.resetState = this.resetState.bind(this);
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // recover from error
  resetState() {
    this.setState({ hasError: false });
  }

  render() {
    const MainContainer = styled.div`
      color: #d9534f;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding-bottom: 1rem;
      @media (max-width: 48rem) {
        width: 100vw;
      }
    `;
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <MainContainer>
          <h1>Something went wrong!</h1>
          <button onClick={this.resetState}>Click here to Recover</button>
        </MainContainer>
      );
    }

    return this.props.children;
  }
}
