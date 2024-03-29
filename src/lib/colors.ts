export interface Color {
  background: string;
  border: string;
  button: {
    background: string;
    text: string;
  };
  text: string;
  brickBorder: string;
}

const light: Color = {
  background: 'whitesmoke',
  border: '#2c3e50',
  button: {
    background: '#476481',
    text: 'white',
  },
  text: '#2c3e50',
  brickBorder: 'whitesmoke',
};

const dark: Color = {
  background: '#2c3e50',
  border: 'whitesmoke',
  button: {
    background: '#476481',
    text: 'whites',
  },
  text: 'whitesmoke',
  brickBorder: '#2c3e50',
};

export default {
  light,
  dark,
};
