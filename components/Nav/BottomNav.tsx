import { IconHome, IconFolder, IconNotebook, IconMailFilled } from '@tabler/icons-react';
import BottomNavItem from './BottomNavItem';


const BottomNav = () => {
  return (
    <div className="rounded-[28px] bg-[#f7f7f7] border border-border fixed bottom-4 p-2.5 left-1/2 -translate-x-1/2 ">
        <div className='flex gap-3'>
          <BottomNavItem icon={<IconHome className='w-6 h-6' />} href='/' />
          <BottomNavItem icon={<IconFolder className='w-6 h-auto' />} href='/projects'/>
          <BottomNavItem icon={<IconNotebook className='w-6 h-auto' />} href='/about'/>
          <div className='bg-border w-px mx-1.5'></div>
          <BottomNavItem icon={<IconMailFilled className='w-6 h-auto' />} href='/mail' isMail/>
        </div>
    </div>
  )
}



export default BottomNav

