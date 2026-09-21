import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeaturesFlags } from './setGetFeatures';

interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({
    name,
    on,
    off,
}: ToggleFeaturesOptions<T>): T {
    if (getFeaturesFlags(name)) {
        return on();
    }

    return off();
}
