'use client';

import { AiOutlineMenu } from 'react-icons/ai'
import { useCallback, useState } from 'react';
import useRegisterModal from '../../hooks/useRegisterModal';
import MenuItem from './MenuItem';
import { Avatar } from './Avatar';
import { Heading } from '../Heading';
import Button from '../Button';
import useLoginModal from '@/app/hooks/useLoginModal';

const UserMenu = () => {
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = useCallback(()=> {
        setIsOpen((value)=>!value)
    },[])

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div className="">
                    <Button label='Sign In' outline onClick={loginModal.onOpen}/>
                </div>
                <div className=''>
                    <Button label='Register' onClick={registerModal.onOpen}/>
                </div>
            </div>
        </div>
    )
};
export default UserMenu;