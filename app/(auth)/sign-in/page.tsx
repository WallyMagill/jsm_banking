// React imports
import React from 'react';

// Components
import AuthForm from '@/components/AuthForm';

/**
 * Sign-in page component
 * Displays authentication form for existing users
 */
const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default SignIn;