import { IconHome, IconFolder, IconNotebook, IconMailFilled } from '@tabler/icons-react';
import BottomNavItem from './BottomNavItem';


const BottomNav = () => {
  return (
    <div className="rounded-[28px] bg-bg_muted border border-border_color fixed bottom-4 p-2.5 left-1/2 -translate-x-1/2 sm:max-w-none max-w-[90%]">
        <div className='flex gap-1 sm:gap-3'>
          <BottomNavItem title='Home' icon={<IconHome className='w-6 h-auto' />} href='/' />
          <BottomNavItem title='Projects' icon={<IconFolder className='w-6 h-auto' />} href='/projects'/>
          <BottomNavItem title='About' icon={<IconNotebook className='w-6 h-auto' />} href='/about'/>
          <div className='bg-border w-px mx-1.5'></div>
          <BottomNavItem title='Mail' icon={<IconMailFilled className='w-6 h-auto' />} href='/mail' isMail/>
        </div>
    </div>
  )
}



export default BottomNav

