import routes from './routes';
import { useEffect } from 'react';
import { auth } from './utils/firebase';
import { useAppDispatch } from './redux/hooks';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { ThemeProvider, useTheme } from '@material-tailwind/react';
import { setLoading, setUser } from './redux/features/users/userSlice';
import { Toaster } from 'react-hot-toast';

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
                base: { icon: { color: '' }, input: { color: '' }, label: { color: 'peer-placeholder-shown:text-content/70' } },
                variants: {
                    outlined: {
                        base: {
                            input: { borderColor: 'placeholder-shown:border-edge placeholder-shown:border-t-edge' },
                        },
                        colors: {
                            label: {
                                blue: {
                                    after: 'after:border-content/70 peer-focus:after:!border-primary',
                                    before: 'before:border-content/70 peer-focus:before:!border-primary',
                                    color: 'text-content/70 peer-focus:text-primary',
                                },
                            },
                            input: { blue: { borderColor: 'border-content/70', borderColorFocused: 'focus:border-primary' } },
                        },
                    },
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
        spinner: { styles: { base: { color: '' }, colors: { blue: { color: 'text-primary' }, orange: { color: 'text-secondary' } } } },
        speedDialAction: {
            styles: {
                backgroundColor: 'bg-background',
                borderColor: '',
                borderWidth: 'border',
                fontFamily: '',
            },
        },
        dialog: {
            styles: {
                base: {
                    container: {
                        bg: 'bg-background',
                        color: '',
                        fontFamily: '',
                        fontSize: '',
                        fontSmoothing: '',
                        fontWeight: '',
                        lineHeight: '',
                    },
                },
            },
        },
        drawer: { styles: { base: { drawer: { backgroundColor: 'bg-background' } } } },
        timelineIcon: {
            styles: {
                base: { padding: 'p-3.5' },
                variants: {
                    ghost: {
                        blue: {
                            background: 'bg-primary/10',
                            color: 'text-primary',
                        },
                    },
                },
            },
        },
        checkbox: {
            styles: {
                colors: {
                    brown: {
                        background: 'checked:bg-secondary/30',
                        before: 'checked:before:bg-secondary/30',
                        border: 'checked:border-secondary/30',
                    },
                },
            },
        },
    };
    console.log(useTheme());

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setLoading(true));

        onAuthStateChanged(auth, user => {
            if (user) {
                dispatch(setUser(user.email!));
                dispatch(setLoading(false));
            } else {
                dispatch(setLoading(false));
            }
        });
    }, [dispatch]);

    return (
        <ThemeProvider value={theme}>
            <RouterProvider router={routes} />
            <Toaster
                toastOptions={{
                    success: {
                        style: {
                            background: 'green',
                        },
                    },
                    error: {
                        style: {
                            background: 'red',
                        },
                    },
                }}
            />
        </ThemeProvider>
    );
}
