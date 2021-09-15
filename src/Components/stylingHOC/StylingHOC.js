const styling = (StyledContainer) => (WrappedComponent) => (props) => {
  if (props.StyledContainer) {
    StyledContainer = props.StyledContainer;
    delete props.StyledContainer;
  }

  return (
    <StyledContainer>
      <WrappedComponent {...props} />
    </StyledContainer>
  );
};

export default styling;
