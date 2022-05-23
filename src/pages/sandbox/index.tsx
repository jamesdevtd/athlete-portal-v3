import dynamic from 'next/dynamic';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import EventsList from '@/components/events/EventsList';
import DatePicker from '@/components/forms/fields/DatePicker';
import DropzoneInput from '@/components/forms/fields/DropzoneInput';
import Input from '@/components/forms/fields/Input';
import SelectInput from '@/components/forms/fields/SelectInput';
import TextArea from '@/components/forms/fields/TextArea';
import ContentWrap from '@/components/layout/ContentWrap';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function RHFSandbox() {
  //#region  //*=========== Form ===========
  const methods = useForm({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========
  const onSubmit = (data: unknown) => {
    // eslint-disable-next-line no-console
    console.log(data);
    return;
  };
  //#endregion  //*======== Form Submit ===========


  return (
    <Layout>

      <ContentWrap>
        <EventsList />
      </ContentWrap>
      <ContentWrap>
        <div className="ml-5 mb-1 overflow-visible rounded-lg bg-blue-gradient pb-1">
          <nav className='flex flex-row gap-3 text-white font-semibold p-3'>
            <div>Type</div>
            <div>Name</div>
            <div>Name</div>
            <div>League</div>
          </nav>
          <div className="rounded-md shadow-[0px_0px_10px_2px_rgba(0,0,0,0.16)] -left-4  bg-white w-full h-20 relative"
            style={{ width: 'calc(100% + 12px)' }}
          ></div>
        </div>
      </ContentWrap>

      <ContentWrap>
        <section className='rhf-demo'>
          <div className='layout min-h-screen py-20'>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='max-w-sm space-y-3'
              >
                <Input
                  id='name'
                  label='Name'
                  validation={{ required: 'Name must be filled' }}
                />
                <SelectInput
                  id='gender'
                  label='Gender'
                  validation={{ required: 'Gender must be filled' }}
                  placeholder='Choose gender'
                >
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='none'>Prefer not to say</option>
                </SelectInput>
                <DropzoneInput
                  id='photo'
                  label='Activity Photo'
                  validation={{ required: 'Photo must be filled' }}
                  accept='image/png, image/jpg, image/jpeg'
                  helperText='You can upload file with .png, .jpg, atau .jpeg extension.'
                />
                <DatePicker
                  id='date'
                  label='Date'
                  validation={{ required: 'Date must be filled' }}
                  // you can customize the default with `dateFormat`
                  placeholder='dd/mm/yyyy'
                />
                <TextArea
                  id='address'
                  label='Address'
                  validation={{ required: 'Address must be filled' }}
                />
                <div className='flex flex-wrap gap-4'>
                  {/* other button must have type='button' so it won't trigger validation */}
                  <Button type='button' variant='outline'>
                    Not Submit
                  </Button>
                  <Button>Submit</Button>
                </div>
                <p className='text-sm text-gray-800'>
                  Check console after submit
                </p>
              </form>
            </FormProvider>
          </div>
        </section>
      </ContentWrap>




    </Layout>
  );
}
