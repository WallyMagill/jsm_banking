'use client';

// React and Next.js imports
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Form validation and handling
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// UI components
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

// Custom components and utilities
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';

interface AuthFormProps {
  type: string;
}

const AuthForm = ({ type }: AuthFormProps) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize form schema and validation
  const formSchema = authFormSchema(type);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      address1: '',
      state: '',
      postalCode: '',
      dateOfBirth: '',
      ssn: '',
    },
  });

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    try {
      // Sign up with Appwrite & create plaid token
      if (type === 'sign-up') {
        // const newUser = await signUp(data);
        // setUser(newUser);
      }

      if (type === 'sign-in') {
        // const response = await signIn(data)({
        //   email: data.email,
        //   password: data.password,
        // })
        // if(response) router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-grey-900">
            {user
              ? 'Link Account'
              : type === 'sign-in'
                ? 'Sign In'
                : 'Sign Up'
            }
            <p className="text-16 font-normal text-gray-600">
              {user
                ? 'Link your account to get started'
                : 'Please enter your details'
              }
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          {/* PlaidLink - Bank account linking functionality */}
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Sign-up specific fields */}
              {type === 'sign-up' && (
                <>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <CustomInput
                        control={form.control}
                        name="firstName"
                        label="First Name"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="flex-1">
                      <CustomInput
                        control={form.control}
                        name="lastName"
                        label="Last Name"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <CustomInput
                    control={form.control}
                    name="address1"
                    label="Address"
                    placeholder="Enter your specific address"
                  />

                  <CustomInput
                    control={form.control}
                    name="city"
                    label="City"
                    placeholder="Enter your city"
                  />

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <CustomInput
                        control={form.control}
                        name="state"
                        label="State"
                        placeholder="Example: NY"
                      />
                    </div>
                    <div className="flex-1">
                      <CustomInput
                        control={form.control}
                        name="postalCode"
                        label="Postal Code"
                        placeholder="Example: 11101"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <CustomInput
                        control={form.control}
                        name="dateOfBirth"
                        label="Date of Birth"
                        placeholder="MM/DD/YYYY"
                      />
                    </div>
                    <div className="flex-1">
                      <CustomInput
                        control={form.control}
                        name="ssn"
                        label="SSN"
                        placeholder="Example: 1234"
                        type="password"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Common authentication fields */}
              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
                type="email"
              />

              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />

              {/* Submit button */}
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                </Button>
              </div>
            </form>
          </Form>

          {/* Footer with navigation links */}
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-grey-600">
              {type === 'sign-in' ? 'Don\'t have an account?' : 'Already have an account'}
            </p>
            <Link 
              href={type === 'sign-in' ? '/sign-up' : '/sign-in'} 
              className="form-link"
            >
              {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;