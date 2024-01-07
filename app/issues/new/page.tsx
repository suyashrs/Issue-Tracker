'use client'
import React from 'react'
import { Button, TextField } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import "easymde/dist/easymde.min.css";

interface IssueForm {
    title: String,
    description: String
}
const NewIssuePage = () => {
    const { register, control } = useForm<IssueForm>();
    
    return (
        <div className='max-w-xl space-y-3'>
            <TextField.Root>
                <TextField.Input placeholder='Title' {...register('title')}/>
            </TextField.Root>
            <Controller 
                name="description"
                control={control}
                render={ ({ field }) =>  <SimpleMDE placeholder='Description' {...field} /> }
            />
           
            <Button>Submit New Issue</Button>
        </div>
    )
}

export default NewIssuePage