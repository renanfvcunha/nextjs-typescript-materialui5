import { styled } from '@mui/material';

export const Container = styled('div')({
  padding: '0 2rem',
});

export const Main = styled('main')({
  minHeight: '100vh',
  padding: '4rem 0',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Title = styled('h1')({
  margin: 0,
  lineHeight: 1.15,
  fontSize: '4rem',
  textAlign: 'center',
  '& a': {
    color: '#0070f3',
    textDecoration: 'none',
    '&:hover, &:focus, &:active': {
      textDecoration: 'underline',
    },
  },
});

export const Description = styled('p')({
  margin: '4rem 0',
  lineHeight: 1.5,
  fontSize: '1.5rem',
  textAlign: 'center',
});

export const Code = styled('code')({
  background: '#fafafa',
  borderRadius: 5,
  padding: '0.75rem',
  fontSize: '1.1rem',
  fontFamily:
    'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
});

export const Grid = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: 800,
  '@media (max-width: 600px)': {
    width: '100%',
    flexDirection: 'column',
  },
});

export const Card = styled('a')({
  margin: '1rem',
  padding: '1.5rem',
  textAlign: 'left',
  color: 'inherit',
  textDecoration: 'none',
  border: '1px solid #eaeaea',
  borderRadius: 10,
  transition: 'color 0.15s ease, border-color 0.15s ease',
  maxWidth: 300,
  '& h2': {
    margin: '0 0 1rem 0',
    fontSize: '1.5rem',
  },
  '& p': {
    margin: 0,
    fontSize: '1.25rem',
    lineHeight: 1.5,
  },
  '&:hover, &:focus, &:active': {
    color: '#0070f3',
    borderColor: '#0070f3',
  },
});

export const Footer = styled('footer')({
  display: 'flex',
  flex: 1,
  padding: '2rem 0',
  borderTop: '1px solid #eaeaea',
  justifyContent: 'center',
  alignItems: 'center',
  '& a': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
});

export const Logo = styled('span')({
  height: '1em',
  marginLeft: '0.5rem',
});
