// React imports
import React from 'react';

// Components
import AuthForm from '@/components/AuthForm';

/**
 * Sign-up page component
 * Displays registration form for new users
 */
const SignUp = async () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;