import styled from 'styled-components';


const StyledTitle = styled.h2`
  color: ${props => props.theme.colors.mcc.gold.light};
  font-weight: ${props => props.bold ? "bold" : "normal"};
  font-size: 2em;
  position : relative ;
  padding-bottom : 15px ;
  text-align : center ;
`
export default StyledTitle;


// const StyledTitle = styled(StyledH2)`
//   color: ${props => props.theme.colors.primary.main};
//   font-weight: bold;
//   text-align: center;
//   ::after {
//     border: 2px solid ${props => props.theme.colors.secondary.main};
//     bottom: 0;
//     content: "";
//     left: 0;
//     margin: auto;
//     position: absolute;
//     right: 0;
//     width: 60px;
//   }
// `
