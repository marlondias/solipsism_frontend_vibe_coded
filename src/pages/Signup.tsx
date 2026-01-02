import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import logo from '@/assets/images/solipsism_logo.png';
import { SolipsismAPI } from '@/services/APIs/Solipsism/SolipsismAPI';

export default function Signup() {
    const navigate = useNavigate();
    const [step, setStep] = useState<'signup' | 'verification'>('signup');
    const [isLoading, setIsLoading] = useState(false);

    // Form State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');

    // Verification State
    const [userId, setUserId] = useState<number | null>(null);
    const [confirmationCode, setConfirmationCode] = useState('');
    const [resendCooldown, setResendCooldown] = useState(0);

    // Timer for resend cooldown
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (resendCooldown > 0) {
            interval = setInterval(() => {
                setResendCooldown((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [resendCooldown]);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const api = new SolipsismAPI();
            const response = await api.userRegistration.userRegistrationRegisterUser({
                registerUserInput: {
                    email,
                    password,
                    username,
                    name,
                    birthDate: new Date(birthDate),
                }
            });

            if (response.newId) {
                setUserId(response.newId as any);
                setStep('verification');
                toast.success('Account created! Please check your email for the confirmation code.');
                // Start with a 15s cooldown for the first resend attempt immediately after signup if desired, 
                // or leave it 0 until they need it. Requirement says "disabled by default and release only after 15 seconds".
                // So we start with 15s.
                setResendCooldown(15);
            }
        } catch (error: any) {
            console.error('Signup failed:', error);
            // Extract error messages from the response body
            let errorMessage = 'Failed to create account. Please try again.';

            if (error.response) {
                try {
                    const errorData = await error.response.json();
                    if (errorData.errors && Array.isArray(errorData.errors) && errorData.errors.length > 0) {
                        errorMessage = errorData.errors.join(', ');
                    } else if (errorData.message) {
                        errorMessage = errorData.message;
                    }
                } catch (e) {
                    // If parsing fails, use the default message
                }
            } else if (error.message) {
                errorMessage = error.message;
            }

            toast.error(errorMessage, {
                duration: 5000,
                style: {
                    background: '#ef4444',
                    color: '#fff',
                    border: '1px solid #dc2626',
                },
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerification = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userId) return;

        setIsLoading(true);
        try {
            const api = new SolipsismAPI();
            await api.userRegistration.userRegistrationConfirmEmail({
                confirmEmailInput: {
                    token: confirmationCode
                }
            });

            toast.success('Email confirmed successfully! You can now log in.');
            navigate('/login');
        } catch (error: any) {
            console.error('Verification failed:', error);
            // Extract error messages from the response body
            let errorMessage = 'Invalid code. Please try again.';

            if (error.response) {
                try {
                    const errorData = await error.response.json();
                    if (errorData.errors && Array.isArray(errorData.errors) && errorData.errors.length > 0) {
                        errorMessage = errorData.errors.join(', ');
                    } else if (errorData.message) {
                        errorMessage = errorData.message;
                    }
                } catch (e) {
                    // If parsing fails, use the default message
                }
            } else if (error.message) {
                errorMessage = error.message;
            }

            toast.error(errorMessage, {
                duration: 5000,
                style: {
                    background: '#ef4444',
                    color: '#fff',
                    border: '1px solid #dc2626',
                },
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleResendCode = async () => {
        if (!userId || resendCooldown > 0) return;

        setIsLoading(true);
        try {
            const api = new SolipsismAPI();
            await api.userRegistration.userRegistrationSendEmail({
                sendEmailConfirmationInput: {
                    userId: userId as any
                }
            });

            toast.success('Confirmation code resent!');
            setResendCooldown(15);
        } catch (error: any) {
            console.error('Resend failed:', error);
            // Extract error messages from the response body
            let errorMessage = 'Failed to resend code.';

            if (error.response) {
                try {
                    const errorData = await error.response.json();
                    if (errorData.errors && Array.isArray(errorData.errors) && errorData.errors.length > 0) {
                        errorMessage = errorData.errors.join(', ');
                    } else if (errorData.message) {
                        errorMessage = errorData.message;
                    }
                } catch (e) {
                    // If parsing fails, use the default message
                }
            } else if (error.message) {
                errorMessage = error.message;
            }

            toast.error(errorMessage, {
                duration: 5000,
                style: {
                    background: '#ef4444',
                    color: '#fff',
                    border: '1px solid #dc2626',
                },
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
            <Card className="w-full max-w-sm">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <img src={logo} alt="Solipsism Logo" className="h-20 w-auto" />
                    </div>
                    <CardTitle className="text-2xl">
                        {step === 'signup' ? 'Sign Up' : 'Confirm Email'}
                    </CardTitle>
                    <CardDescription>
                        {step === 'signup'
                            ? 'Enter your information to create an account'
                            : 'Enter the code sent to your email'}
                    </CardDescription>
                </CardHeader>

                {step === 'signup' ? (
                    <form onSubmit={handleSignup}>
                        <CardContent className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="cooluser123"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="birthDate">Date of Birth</Label>
                                <Input
                                    id="birthDate"
                                    type="date"
                                    required
                                    value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" type="submit" disabled={isLoading}>
                                {isLoading ? 'Creating account...' : 'Create account'}
                            </Button>
                        </CardFooter>
                    </form>
                ) : (
                    <form onSubmit={handleVerification}>
                        <CardContent className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="code">Confirmation Code</Label>
                                <Input
                                    id="code"
                                    type="text"
                                    placeholder="Enter 8-character code"
                                    required
                                    maxLength={8}
                                    value={confirmationCode}
                                    onChange={(e) => setConfirmationCode(e.target.value)}
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-2">
                            <Button className="w-full" type="submit" disabled={isLoading}>
                                {isLoading ? 'Verifying...' : 'Confirm'}
                            </Button>
                            <Button
                                type="button"
                                variant="ghost"
                                className="w-full text-sm"
                                onClick={handleResendCode}
                                disabled={resendCooldown > 0 || isLoading}
                            >
                                {resendCooldown > 0
                                    ? `Resend code in ${resendCooldown}s`
                                    : 'Resend confirmation code'}
                            </Button>
                        </CardFooter>
                    </form>
                )}
            </Card>
        </div>
    );
}
