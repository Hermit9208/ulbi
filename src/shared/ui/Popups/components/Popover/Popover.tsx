import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { dropDownDirection } from '@/shared/types/ui';
import { getPopupClasses } from '../../styles/getPopupClasses';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: dropDownDirection;
    children?: ReactNode;
}

export const Popover = (props: PopoverProps) => {
    const {
        className, trigger, direction = 'bottom left', children,
    } = props;
    const menuClasses = getPopupClasses(direction);

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
