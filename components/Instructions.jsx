import Link from 'next/link';
function Instructions() {
  return (
    <div className='flex flex-col space-y-3'>
      <h3>Generate github personal token</h3>
      <p>
        This github token is use to authorized githuz for deleting selected repo
        by your request.
      </p>
      <a
        target='_blank'
        href='https://github.com/settings/tokens/new?scopes=delete_repo,repo&description=Githuz%20Deleter%20Token'
        rel='noopener noreferrer'
      >
        <button className='btn btn-sm btn-primary'>Generate token</button>
      </a>
      <div className='alert alert-warning'>
        <div className='flex-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            class='w-6 h-6 mx-2 stroke-current'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
            ></path>
          </svg>
          <label>
            We didn't save your github token to server app, it's just save
            locally on your browser session.
          </label>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
