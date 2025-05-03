
import { Control, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface SelectedFieldProps
{
    name: string;
    control: Control<any>;
    defaultValue?: string;
    rules?: any;
    options: { value: string; label: string }[];
    label?: string;
    firstOption?: string;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    showLabel: boolean;
};


export interface TextAreaFieldProps 
{
    name: string;
    control: any;
    defaultValue?: string;
    rules?: any;
    label: string;
    error?: any;
}

