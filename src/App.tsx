import { ThemeProvider, useTheme } from '@material-tailwind/react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';

export default function App() {
    const theme = {
        navbar: {
            styles: {
                base: {
                    mobileNav: { width: 'container mx-auto' },
                    navbar: { blurred: { borderColor: '', borderWidth: 'border-b' }, fullWidth: { px: 'px-6 py-4' } },
                },
                variants: { filled: { white: { backgroud: '', color: '' } } },
            },
        },
        button: {
            styles: {
                base: { initial: { textTransform: '', fontWeight: '' } },
                sizes: {
                    sm: { fontSize: '', borderRadius: 'rounded-full' },
                    md: { fontSize: '', borderRadius: 'rounded-full' },
                    lg: { fontSize: '', borderRadius: 'rounded-full' },
                },
                variants: { outlined: { gray: { border: 'border', color: '' } } },
            },
        },
        iconButton: {
            styles: {
                base: { initial: { textTransform: '', fontWeight: '' } },
                sizes: {
                    sm: { fontSize: '', borderRadius: 'rounded-full' },
                    md: { fontSize: '', borderRadius: 'rounded-full' },
                    lg: { fontSize: '', borderRadius: 'rounded-full' },
                },
                variants: { outlined: { gray: { border: 'border border-black', color: '' } } },
            },
        },
    };
    console.log(useTheme());

    return (
        <ThemeProvider value={theme}>
            <RouterProvider router={routes} />
        </ThemeProvider>
    );
}
