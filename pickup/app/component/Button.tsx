'use client'

import { IconType } from "react-icons";

interface ButtonProps {
    label: string
    onClick?: (e: React.MouseEvent<HTMLBodyElement>) => void
    disabled?: boolean
    outline?: boolean
    small?: boolean
    icon?: IconType
}

const Button: React.FC<ButtonProps> = (
    {
        label,
        onClick,
        disabled,
        outline,
        small,
        icon: Icon
    }
) => {
    return (
        <button 
            disabled={disabled}
            onClick={onClick}
            className={`
                relative
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-lg
                hover:brightness-125
                transition
                w-full
                p-4
                ${outline ? 'bg-white' : 'bg-[#ee7b42]'}
                ${outline ? 'border-[#ee7b42]' : 'border-[#ee7b42]'}
                ${outline ? 'text-[#ee7b42]' : 'text-white'}
                ${small ? 'py-1' : 'py-3'}
                ${small ? 'text-sm' : 'text-md'}
                ${small ? 'font-light' : 'font-semibold'}
                ${small ? 'border-[1px]' : 'border-2'}
            `}
                
            >
                {Icon && (
                    <Icon
                    size={24}
                    className="
                    absolute
                    left-4
                    top-3"
                    />
                )}
                {label}
        </button>

    )
};

export default Button;