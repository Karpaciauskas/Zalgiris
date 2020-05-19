function nameSurnameHOC(WrappedComponent) {
    return class X extends React.Component {
      
      render() {
        return <WrappedComponent text="Evaldas Karpačiauskas" {...this.props} />;
      }
    };
  }

  export default nameSurnameHOC