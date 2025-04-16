import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> 
{
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, ...props }, ref) => {
    return (
      <div>
        <label className="form-control w-full p-2 gap-2">
          {label}
        </label>
        <input
            ref={ref}
            // placeholder={placeholder || 'Default placeholder'}
            className="input input-bordered w-full border border-gray-300 bg-transparent text-black dark:bg-neutral-600"
            { ...props }
        />
        {error && <span className="error-message">{error}</span>}
      </div>
    );
  }
);

export default Input;
