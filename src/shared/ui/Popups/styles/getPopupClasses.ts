import { dropDownDirection } from 'shared/types/ui';
import popupCls from './popup.module.scss';

export const getPopupClasses = (direction: dropDownDirection) => {
    const [vertical, horizontal] = direction.split(' ');

    return [
        popupCls[vertical],
        popupCls[horizontal],
    ];
};
