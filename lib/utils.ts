// External library imports
import { type ClassValue, clsx } from 'clsx';
import qs from 'query-string';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

// ========================================
// Utility Functions
// ========================================

/**
 * Combines class names using clsx and tailwind-merge for optimal class handling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ========================================
// Date & Time Formatting
// ========================================

/**
 * Formats a date string into various readable formats
 * @param dateString - The date to format
 * @returns Object containing different formatted date strings
 */
export const formatDateTime = (dateString: Date) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
    month: 'short', // abbreviated month name (e.g., 'Oct')
    day: 'numeric', // numeric day of the month (e.g., '25')
    hour: 'numeric', // numeric hour (e.g., '8')
    minute: 'numeric', // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const dateDayOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
    year: 'numeric', // numeric year (e.g., '2023')
    month: '2-digit', // abbreviated month name (e.g., 'Oct')
    day: '2-digit', // numeric day of the month (e.g., '25')
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'short', // abbreviated month name (e.g., 'Oct')
    year: 'numeric', // numeric year (e.g., '2023')
    day: 'numeric', // numeric day of the month (e.g., '25')
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric', // numeric hour (e.g., '8')
    minute: 'numeric', // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const formattedDateTime: string = new Date(dateString).toLocaleString(
    'en-US',
    dateTimeOptions
  );

  const formattedDateDay: string = new Date(dateString).toLocaleString(
    'en-US',
    dateDayOptions
  );

  const formattedDate: string = new Date(dateString).toLocaleString(
    'en-US',
    dateOptions
  );

  const formattedTime: string = new Date(dateString).toLocaleString(
    'en-US',
    timeOptions
  );

  return {
    dateTime: formattedDateTime,
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};

/**
 * Formats a number as currency in USD
 * @param amount - The amount to format
 * @returns Formatted currency string
 */
export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}

/**
 * Deep clones an object by parsing and stringifying JSON
 * @param value - The value to clone
 * @returns Deep cloned object
 */
export const parseStringify = (value: unknown) => JSON.parse(JSON.stringify(value));

/**
 * Removes special characters from a string, keeping only word characters and spaces
 * @param value - The string to clean
 * @returns String with special characters removed
 */
export const removeSpecialCharacters = (value: string) => {
  return value.replace(/[^\w\s]/gi, '');
};

// ========================================
// URL & Query Utilities
// ========================================

interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

/**
 * Updates URL query parameters
 * @param params - Current URL parameters
 * @param key - Query parameter key
 * @param value - Query parameter value
 * @returns Updated URL string
 */
export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}

// ========================================
// Banking & Account Utilities
// ========================================

/**
 * Returns color scheme for different account types
 * @param type - The account type
 * @returns Object containing color classes for the account type
 */
export function getAccountTypeColors(type: AccountTypes) {
  switch (type) {
    case 'depository':
      return {
        bg: 'bg-blue-25',
        lightBg: 'bg-blue-100',
        title: 'text-blue-900',
        subText: 'text-blue-700',
      };

    case 'credit':
      return {
        bg: 'bg-success-25',
        lightBg: 'bg-success-100',
        title: 'text-success-900',
        subText: 'text-success-700',
      };

    default:
      return {
        bg: 'bg-green-25',
        lightBg: 'bg-green-100',
        title: 'text-green-900',
        subText: 'text-green-700',
      };
  }
}

/**
 * Counts and aggregates transaction categories
 * @param transactions - Array of transactions to analyze
 * @returns Sorted array of category counts
 */
export function countTransactionCategories(
  transactions: Transaction[]
): CategoryCount[] {
  const categoryCounts: { [category: string]: number } = {};
  let totalCount = 0;

  // Iterate over each transaction
  transactions?.forEach((transaction) => {
    // Extract the category from the transaction
    const category = transaction.category;

    // If the category exists in the categoryCounts object, increment its count
    if (categoryCounts.hasOwnProperty(category)) {
      categoryCounts[category]++;
    } else {
      // Otherwise, initialize the count to 1
      categoryCounts[category] = 1;
    }

    // Increment total count
    totalCount++;
  });

  // Convert the categoryCounts object to an array of objects
  const aggregatedCategories: CategoryCount[] = Object.keys(categoryCounts).map(
    (category) => ({
      name: category,
      count: categoryCounts[category],
      totalCount,
    })
  );

  // Sort the aggregatedCategories array by count in descending order
  aggregatedCategories.sort((a, b) => b.count - a.count);

  return aggregatedCategories;
}

/**
 * Extracts customer ID from a URL string
 * @param url - The URL to extract from
 * @returns Customer ID string
 */
export function extractCustomerIdFromUrl(url: string) {
  // Split the URL string by '/'
  const parts = url.split('/');

  // Extract the last part, which represents the customer ID
  const customerId = parts[parts.length - 1] ?? '';

  return customerId;
}

/**
 * Encrypts an ID using base64 encoding
 * @param id - The ID to encrypt
 * @returns Base64 encoded string
 */
export function encryptId(id: string) {
  return btoa(id);
}

/**
 * Decrypts an ID using base64 decoding
 * @param id - The base64 encoded ID to decrypt
 * @returns Decoded string
 */
export function decryptId(id: string) {
  return atob(id);
}

/**
 * Determines transaction status based on date
 * @param date - The transaction date
 * @returns 'Processing' if within 2 days, 'Success' otherwise
 */
export const getTransactionStatus = (date: Date) => {
  const today = new Date();
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);

  return date > twoDaysAgo ? 'Processing' : 'Success';
};

// ========================================
// Form Validation Schemas
// ========================================

/**
 * Creates a Zod schema for authentication forms based on type
 * @param type - The form type ('sign-in' or 'sign-up')
 * @returns Zod schema object
 */
export const authFormSchema = (type: string) => z.object({
  // Common fields for both sign-in and sign-up
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  
  // Sign-up specific fields (optional for sign-in)
  firstName: type === 'sign-in' 
    ? z.string().optional() 
    : z.string().min(2, 'First name must be at least 2 characters'),
  lastName: type === 'sign-in' 
    ? z.string().optional() 
    : z.string().min(2, 'Last name must be at least 2 characters'),
  address1: type === 'sign-in' 
    ? z.string().optional() 
    : z.string().min(5, 'Address must be at least 5 characters').max(50, 'Address can not be more than 50 characters'),
  city: type === 'sign-in' 
    ? z.string().optional() 
    : z.string().min(5, 'City must be at least 2 characters').max(50, 'City can not be more than 50 characters'),
  state: type === 'sign-in' 
    ? z.string().optional() 
    : z.string().min(2, 'State must be at least 2 characters').max(2, 'State must be 2 characters'),
  postalCode: type === 'sign-in' 
    ? z.string().optional() 
    : z.string().regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid postal code (e.g., 12345 or 12345-6789)'),
  dateOfBirth: type === 'sign-in' 
    ? z.string().optional() 
    : z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, 'Please enter date in MM/DD/YYYY format'),
  ssn: type === 'sign-in' 
    ? z.string().optional() 
    : z.string().regex(/^\d{4}$/, 'SSN must be exactly 4 digits'),
});