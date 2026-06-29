import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { dropDownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';
import cls from './DropDown.module.scss';

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

    const [vertical, horizontal] = direction.split(' ');

    const menuClasses = [
        cls[vertical],
        cls[horizontal],
    ];

    return (
        <Menu as="div" className={classNames(cls.DropDown, {}, [className])}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean}) => (
                        <button
                            className={classNames(cls.item, { [cls.active]: active })}
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
