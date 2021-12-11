import { useState } from 'react';
import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';
import Instructions from '@/components/Instructions';

export default function Home() {
  const [isNext, setNext] = useState(false);
  const handleNext = () => {
    setNext(!isNext);
  };
  return (
    <>
      <Seo templateTitle='Home' />
      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center min-h-screen py-12 space-y-4 text-white layout'>
            <h1>Delete unused repo, without pain.</h1>
            <p className='mb-4'></p>
            <div className='flex flex-col w-2/5 space-y-4'>
              <Instructions />
              <div className='flex flex-col space-y-2'>
                <label className='mt-6 input-group input-group-vertical input-group-lg text-dark'>
                  <span className='font-bold'>Github Personal Token</span>
                  <input
                    type='text'
                    placeholder='your github personal token.'
                    className='input input-bordered input-lg'
                  />
                </label>

                <div className='flex flex-row justify-between'>
                  <button className='w-1/3 btn btn-error' onClick={handleNext}>
                    Clear
                  </button>
                  <button class='btn w-1/2'>
                    Proceed
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      class='inline-block w-6 h-6 ml-2 stroke-current'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M9 5l7 7-7 7'
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <footer className='absolute text-gray-500 bottom-2'>
              © {new Date().getFullYear()} By{' '}
              <CustomLink href='https://theodorusclarence.com?ref=nextstarter'>
                Roni Ardiyanto
              </CustomLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
