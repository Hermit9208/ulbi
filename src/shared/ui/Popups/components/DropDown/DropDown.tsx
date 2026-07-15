import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { dropDownDirection } from '@/shared/types/ui';
import { getPopupClasses } from '../../styles/getPopupClasses';
import { AppLink } from '../../../AppLink/AppLink';
import cls from './DropDown.module.scss';
import popupCls from '../../styles/popup.module.scss';

export interface DropDownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropDownProps {
    className?: string;
    items: DropDownItem[];
    trigger: ReactNode;
    direction?: dropDownDirection;
}

export function DropDown(props: DropDownProps) {
    const {
        className, items, trigger, direction = 'bottom left',
    } = props;

    const menuClasses = getPopupClasses(direction);

    return (
        <Menu as="div" className={classNames(cls.DropDown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean}) => (
                        <button
                            className={classNames(cls.item, { [popupCls.active]: active })}
                            type="button"
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                key={index}
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            key={index}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
