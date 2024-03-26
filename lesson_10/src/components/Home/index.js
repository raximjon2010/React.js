function HOC(WrappedComponent) {
  return function WithColor(props) {
    const test = 'blue';
    return <WrappedComponent test={test} />;
  };
}
export default HOC
