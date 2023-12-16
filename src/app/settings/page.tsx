
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import SettingsListItems from '@/components/SettingsListItems';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Settings() {
  return(
    <MaxWidthWrapper>
    <div className='flex
    flex-col
    relative
    text-center
    text-neutral-900
    '>
      <h1 className='text-2xl pb-5 pt-5'>Settings</h1>

      <div className='w-full px-5'>
        <SettingsListItems
      name="Account"
      href='/account' />
      <SettingsListItems
      name="Report History"
      href='/report-history' />
      <SettingsListItems
      name="Notification"
      href='/notification' /></div>
      
    </div>
    </MaxWidthWrapper>
  )
}
