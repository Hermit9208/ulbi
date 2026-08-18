import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { decrement, increment, add } = useCounterActions();

    const handleIncrement = () => {
        increment();
    };

    const handelDecrement = () => {
        decrement();
    };

    const handelAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={handleIncrement}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={handelDecrement}
            >
                {t('decrement')}
            </Button>
            <Button
                data-testid="increment-btn"
                onClick={handelAddFive}
            >
                {t('add five')}
            </Button>
        </div>
    );
};
