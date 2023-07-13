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
                variants: { filled: { blue: { backgroud: 'bg-primary', hover: 'hover:shadow-md hover:shadow-primary/30', shadow: '' } } },
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
                variants: { filled: { blue: { backgroud: 'bg-primary', hover: 'hover:shadow-md hover:shadow-primary/30', shadow: '' } } },
            },
        },
        input: {
            defaultProps: { size: 'lg' },
            styles: {
                base: { input: { color: '' }, label: { color: 'peer-placeholder-shown:text-content/70' } },
                variants: {
                    standard: {
                        base: { input: { borderColor: 'placeholder-shown:border-edge' } },
                        colors: {
                            label: {
                                blue: {
                                    after: 'after:border-primary peer-focus:after:border-primary',
                                    color: 'text-content/70 peer-focus:text-primary',
                                },
                            },
                            input: { blue: { borderColor: 'border-content/70', borderColorFocused: 'focus:border-primary' } },
                        },
                    },
                },
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
