"use client";

// pages/LovePage.js
import Head from 'next/head';

export default function LovePage() {
  return (
    <>
      <Head>
        <title>I Love You</title>
      </Head>
      <div className="flex justify-center items-center h-screen bg-pink-100">
        <div className="text-center">
          <div className="heart animate-beat inline-block text-red-500 text-9xl">
            ❤️
          </div>
          <h1 className="text-6xl font-bold mt-4">
            I Love You
          </h1>
          <h1 className="text-6xl font-bold mt-4">
Wajee          </h1>
        </div>
      </div>

      <style jsx>{`
        @keyframes beat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.2);
          }
        }

        .animate-beat {
          animation: beat 1s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
