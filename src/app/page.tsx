import Link from 'next/link';
import { Button } from '@mui/material';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
            <header className="text-center mb-8">
                <h1 className="text-5xl font-bold text-blue-600">Simple Next JS Dashboard</h1>
                <p className="text-lg text-gray-700 mt-2">Manage your finances and track your progress.</p>
            </header>
            <main className="flex flex-col items-center gap-6">
                <div className="flex gap-4">
                    <Link href="/dashboard" passHref>
                        <Button variant="contained" color="primary" size="large">
                            Go to Dashboard
                        </Button>
                    </Link>
                    <Link href="/about" passHref>
                        <Button variant="outlined" color="secondary" size="large">
                            Learn More
                        </Button>
                    </Link>
                </div>
            </main>
            <footer className="mt-8 flex gap-6 flex-wrap items-center justify-center">
                <Link href="/contact" className="text-blue-600 hover:underline">
                    Contact Us
                </Link>
                <Link href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                </Link>
            </footer>
        </div>
    );
}
