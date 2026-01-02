import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import logo from '@/assets/images/solipsism_logo.png';
import { useAuth } from '@/contexts/AuthContext';
import { ResponseError } from '@/services/APIs/Solipsism/client/src';

export default function Login() {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        // Prevent default form submission immediately
        e.preventDefault();
        e.stopPropagation();

        try {
            await login({
                usernameOrEmail,
                password
            });
            toast.success('Successfully logged in');
            navigate('/home');
        } catch (error) {
            console.error('Login error:', error);
            let errorMessage = 'Failed to login. Please check your credentials.';

            try {
                if (error instanceof ResponseError) {
                    const errorBody = await error.response.json();
                    if (errorBody && errorBody.detail) {
                        errorMessage = errorBody.detail;
                    }
                } else if (error instanceof Error) {
                    errorMessage = error.message;
                }
            } catch (innerError) {
                console.error('Error parsing response error:', innerError);
                // Fallback to default message is already set
            }

            toast.error(errorMessage);
        }
    };

    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
            <Card className="w-full max-w-sm">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <img src={logo} alt="Solipsism Logo" className="h-20 w-auto" />
                    </div>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your username or email below to login
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Username or Email</Label>
                            <Input
                                id="email"
                                type="text"
                                placeholder="username or m@example.com"
                                required
                                value={usernameOrEmail}
                                onChange={(e) => setUsernameOrEmail(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <a href="#" className="text-sm font-medium text-primary hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember" disabled={isLoading} />
                            <Label htmlFor="remember" className="text-sm font-normal">Remember me</Label>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" type="submit" disabled={isLoading}>
                            {isLoading ? 'Signing in...' : 'Sign in'}
                        </Button>
                    </CardFooter>
                    <div className="px-6 pb-6 text-center text-sm">
                        Don't have an account?{' '}
                        <a href="/signup" className="font-medium text-primary hover:underline">
                            Sign up
                        </a>
                    </div>
                </form>
            </Card>
        </div>
    );
}
