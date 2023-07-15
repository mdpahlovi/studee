import { ThemeProvider, useTheme } from '@material-tailwind/react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';

export default function App() {
    const theme = {
        navbar: {
            styles: {
                base: {
                    navbar: {
                        blurred: { borderColor: '', borderWidth: 'border-b' },
                        fullWidth: { maxWidth: '', px: '', rounded: '', width: '' },
                        initial: { borderRadius: '', display: '', maxWidth: '', px: '', width: '' },
                    },
                },
                variants: { filled: { white: { backgroud: '', color: '' } } },
            },
        },
        collapse: { styles: { base: { width: 'container mx-auto px-6' } } },
        button: {
            styles: {
                base: { initial: { textTransform: '', fontWeight: '' } },
                sizes: {
                    sm: { fontSize: '', borderRadius: 'rounded-full' },
                    md: { fontSize: '', borderRadius: 'rounded-full' },
                    lg: { fontSize: '', borderRadius: 'rounded-full' },
                },
                variants: {
                    filled: {
                        blue: { backgroud: 'bg-primary', hover: 'hover:shadow-md hover:shadow-primary/30', shadow: '' },
                        orange: { backgroud: 'bg-secondary', hover: 'hover:shadow-md hover:shadow-secondary/30', shadow: '' },
                    },
                    outlined: {
                        blue: {
                            border: 'border border-primary',
                            color: 'text-primary',
                            focus: '',
                            hover: 'hover:bg-primary hover:text-white',
                        },
                        orange: {
                            border: 'border border-secondary',
                            color: 'text-secondary',
                            focus: '',
                            hover: 'hover:bg-secondary hover:text-white',
                        },
                    },
                },
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
        textarea: {
            styles: {
                base: { textarea: { color: '' }, label: { color: 'peer-placeholder-shown:text-content/70' } },
                variants: {
                    standard: {
                        base: { textarea: { borderColor: 'placeholder-shown:border-edge' } },
                        colors: {
                            label: {
                                blue: {
                                    after: 'after:border-primary peer-focus:after:border-primary',
                                    color: 'text-content/70 peer-focus:text-primary',
                                },
                            },
                            textarea: { blue: { borderColor: 'border-content/70', borderColorFocused: 'focus:border-primary' } },
                        },
                    },
                },
            },
        },
        card: { styles: { variants: { filled: { white: { backgroud: 'border', color: '' } } } } },
    };
    console.log(useTheme());

    return (
        <ThemeProvider value={theme}>
            <RouterProvider router={routes} />
        </ThemeProvider>
    );
}
