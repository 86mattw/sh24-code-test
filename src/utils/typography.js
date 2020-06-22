import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: [
        '400',
      ],
    },
    {
      name: 'IBM Plex Sans',
      styles: [
        '300',
      ],
    },
  ],
  headerFontFamily: [
    'Playfair Display',
  ],
  bodyFontFamily: [
    'IBM Plex Sans',
  ],
});

export default typography;
