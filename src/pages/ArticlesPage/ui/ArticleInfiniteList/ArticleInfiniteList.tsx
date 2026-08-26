import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/ArticlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const error = useSelector(getArticlesPageError);
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    if (error) {
        return (
            <Text text={t('An error occurred when downloading articles')} />
        );
    }

    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
            />
        </div>
    );
});
