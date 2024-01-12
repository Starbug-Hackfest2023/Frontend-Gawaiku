import { createTheme } from '@mui/material/styles';
import Link from 'next/link';
import { forwardRef } from 'react';

const LinkBehaviour = forwardRef((props, ref) => <Link ref={ref} {...props} role={undefined} />);
const font = 'League Spartan, sans-serif';
export const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehaviour,
      },
    },
  },
  typography: {
    fontFamily: font,
  },
});
