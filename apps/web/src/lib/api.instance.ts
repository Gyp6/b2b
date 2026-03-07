import { API_PAGES } from '@/constants/pages.constant';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: API_PAGES.BASE_URL,
});

export const fetcher = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const fullUrl = `${API_PAGES.BASE_URL}${url}`;

  const res = await fetch(fullUrl, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'x-api-secret': process.env.INTERNAL_API_KEY as string,
      ...options?.headers,
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Server error');
  }

  return res.json();
};
