// React imports
import React from 'react';

// Form validation and control
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';

// UI form components
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Utilities
import { authFormSchema } from '@/lib/utils';

// TODO: Make formSchema dynamic based on form type
const formSchema = authFormSchema('sign-up');

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
}

/**
 * CustomInput component provides a reusable form input with validation
 * @param control - React Hook Form control object
 * @param name - Field name for form validation
 * @param label - Display label for the input
 * @param placeholder - Placeholder text for the input
 * @param type - Input type (text, password, email, etc.)
 * @param className - Additional CSS classes
 */
const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  type = 'text',
  className = 'input-class'
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className={className}
                type={type}
                {...field}
                value={field.value || ''}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;