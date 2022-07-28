import React from 'react';
import { Result, Button } from 'antd';

interface IProps {}

interface IState {
  hasError: Boolean;
  info: string;
  eventId: string;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, info: '', eventId: '' };
  }

  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染可以显示降级 UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({
      info: error + ''
    });
    const userId = Math.random().toString(36).substr(2, 9);
  }

  render() {
    if (this.state.hasError) {
      // 你可以渲染任何自定义的降级 UI
      return (
        <Result
          status="500"
          title="500"
          subTitle={this.state.info}
          extra={
            <Button
              type="primary"
            >
              Report feedback
            </Button>
          }
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
