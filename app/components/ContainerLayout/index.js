import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  height: 100%;
  width: 100%;
  justify-contents: flex-start;
  flex-direction: column;
  color: ${props => props.theme.fontColor ? props.theme.fontColor : 'rgba(0, 0, 0, 0.5)' };
  ${props=> props.theme && props.theme.root ? props.theme.root : ''}
`;

export const PageContainer = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  min-height: calc(100% - 100px);
  width: 100%;
  justify-contents: flex-start;
  flex-direction: row;
  background-color: ${props => props.theme.mainBgColor ? props.theme.mainBgColor : 'rgba(0, 0, 0, 0.1)' };
`;

export const FooterContainer = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  min-height: 100px;
  width: 100%;
  justify-contents: flex-end;
  flex-direction: column;
  background-color: ${props => props.theme.footerBgColor ? props.theme.footerBgColor : 'rgba(0,0,0, 0.2)' };
`;
