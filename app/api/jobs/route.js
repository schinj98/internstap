import { NextResponse } from 'next/server';

// This function handles incoming GET requests
export async function GET(request) {
  // 1. Get the secret key and API URL securely from the environment
  const SECRET_KEY = process.env.JOB_API_SECRET;
  const REMOTE_API_URL = process.env.NEXT_PUBLIC_API_URL;
  
  if (!SECRET_KEY || !REMOTE_API_URL) {
    console.error("Missing environment variables in proxy handler.");
    return NextResponse.json({ error: 'Server configuration error: Missing API Keys/URL' }, { status: 500 });
  }

  // Extract page and limit parameters from the request URL
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 50;
  
  try {
    // Forward the request to your actual Job API, adding the secret header
    const response = await fetch(
      `${REMOTE_API_URL}/jobs?page=${page}&limit=${limit}`,
      {
        headers: {
          'X-API-KEY': SECRET_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    // Handle errors from the remote API and forward the status
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Remote API Error' }));
        return NextResponse.json(errorData, { status: response.status });
    }

    // Success: Get data and send it back to the client
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    console.error('Proxy Fetch Error:', error);
    return NextResponse.json({ error: 'Failed to connect to the remote job API.' }, { status: 500 });
  }
}