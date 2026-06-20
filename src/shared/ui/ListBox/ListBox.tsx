import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { dropDownDirection } from 'shared/types/ui';
import { HStack } from '../Stack';
import cls from './ListBox.module.scss';
import { Button } from '../Button/Button';

export interface ListBoxItems {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItems[]
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    label?: string;
    direction?: dropDownDirection;
}

export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        label,
        direction = 'bottom right',
    } = props;

    const [vertical, horizontal] = direction.split(' ');

    const optionsClasses = [
        cls[vertical],
        cls[horizontal],
    ];

    return (
        <HStack gap="4" className={classNames('', { [cls.disabled]: readonly }, [])}>
            {label && (
                <span>
                    {`${label}>`}
                </span>
            )}
            <HListBox
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                disabled={readonly}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button
                    className={cls.trigger}
                    disabled={readonly}
                >
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(
                                    cls.item,
                                    {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                    },
                                )}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
