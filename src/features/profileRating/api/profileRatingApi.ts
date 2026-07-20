import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface GetProfileRatingParams {
    userId: string;
    profileId: string;
}

interface RateProfileParams {
    id?: string;
    userId: string;
    profileId: string;
    rate: number;
    feedback?: string;
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], GetProfileRatingParams>({
            query: ({ userId, profileId }) => ({
                url: '/profile-ratings',
                params: {
                    userId,
                    profileId,
                },
            }),
        }),
        rateProfile: build.mutation<void, RateProfileParams>({
            query: ({ id, ...body }) => ({
                url: id
                    ? `/profile-ratings/${id}`
                    : '/profile-ratings',
                method: id ? 'PATCH' : 'POST',
                body,
            }),
            invalidatesTags: ['ProfileRating'],
        }),
    }),
});

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery;
export const useRateProfile = profileRatingApi.useRateProfileMutation;
