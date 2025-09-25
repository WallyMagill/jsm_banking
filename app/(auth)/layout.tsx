// Next.js imports
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}

/**
 * Authentication layout component
 * Provides layout structure for sign-in and sign-up pages
 * @param children - Child components to render
 */
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/auth-image.svg"
            alt="Auth image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
